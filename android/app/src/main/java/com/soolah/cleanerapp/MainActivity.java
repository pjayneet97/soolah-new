package com.soolah.cleanerapp;

import com.getcapacitor.BridgeActivity;

import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import android.os.Bundle;

public class MainActivity extends BridgeActivity {
     @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(GoogleAuth.class);
    }});
  }
}
