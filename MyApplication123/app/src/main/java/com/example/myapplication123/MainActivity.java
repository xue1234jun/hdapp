package com.example.myapplication123;

import org.apache.cordova.*;
import android.os.Bundle;

public class MainActivity extends DroidGap  {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl("file:///android_asset/www/layout/xzbcx.html");
        //super.loadUrl("file:///android_asset/www/index.html")
    }
}
