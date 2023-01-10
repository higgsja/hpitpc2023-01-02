package com.hpi.tpc.ui.views.baseClass;

import com.vaadin.flow.component.orderedlayout.*;

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
        this.setWidth("100%");
    }

    /**
     * Layout elements
     */
    public abstract void doLayout();
}
