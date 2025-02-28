package com.kckarnige.ignitedsns.client;

import com.kckarnige.ignitedsns.ignitedsns;
import net.fabricmc.api.ClientModInitializer;

public class ignitedsnsClient implements ClientModInitializer {

    @Override
    public void onInitializeClient() {
        ignitedsns.LOGGER.info("We have fire!");
    }
}
