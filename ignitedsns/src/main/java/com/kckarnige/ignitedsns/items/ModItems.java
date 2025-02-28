package com.kckarnige.ignitedsns.items;

import com.kckarnige.ignitedsns.ignitedsns;

import io.wispforest.lavender.book.LavenderBookItem;
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroupEntries;
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroups;
import net.minecraft.util.Identifier;
import net.minecraft.util.Rarity;

public class ModItems {

    public static final Item GuideBook = LavenderBookItem.registerForBook(Identifier.of(ignitedsns.MOD_ID,"getting_started"), new Item.Settings().rarity(Rarity.UNCOMMON).maxCount(1));

    private static void addItemToItemGroup(FabricItemGroupEntries entries) {
        entries.add(GuideBook);
    }

    public static void registerModItems () {
        ignitedsns.LOGGER.info("Striking the stones..");

        ItemGroupEvents.modifyEntriesEvent(ItemGroups.TOOLS).register(ModItems::addItemToItemGroup);
    }
}