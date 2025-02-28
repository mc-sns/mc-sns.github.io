package com.kckarnige.ignitedsns;

import com.kckarnige.ignitedsns.items.ModItems;
import net.fabricmc.api.ModInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ignitedsns implements ModInitializer {
    public static final String MOD_ID = "ignitedsns";
    public static final Logger LOGGER = LoggerFactory.getLogger("Ignited: Modpack Guide");

    @Override
    public void onInitialize() {
        ModItems.registerModItems();
    }
}
