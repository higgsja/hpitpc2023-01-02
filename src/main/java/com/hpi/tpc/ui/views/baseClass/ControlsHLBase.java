package com.hpi.tpc.ui.views.baseClass;

import com.vaadin.flow.component.dependency.*;
import com.vaadin.flow.component.orderedlayout.*;

@CssImport("./styles/baseMVCViewControlHL.css")
/**
 * Base class for horizontal layout controls
 */
public abstract class ControlsHLBase
    extends HorizontalLayout
{

    public ControlsHLBase()
    {
        this.setClassName("baseMVCViewControlHL");
        this.setHeight("55px");
    }

    /**
     * Layout elements
     */
    public abstract void doLayout();
}
