package com.hpi.tpc.ui.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.NpmPackage;

@Tag("offline-banner")
//@JsModule("./src/components/offline-banner.js")
@NpmPackage(value = "@polymer/iron-ajax", version = "3.0.1")
public class OfflineBanner extends Component {

  /**
   *
   */
  private static final long serialVersionUID = 6446531680854580355L;
}
