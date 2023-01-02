package com.hpi.tpc.ui.views.baseClass;

import com.vaadin.flow.component.dependency.*;
import com.vaadin.flow.component.orderedlayout.*;
import javax.annotation.*;

//@UIScope
//@VaadinSessionScope
//@Component
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
     * 
     */
    @PostConstruct
    public void construct(){
        //hit from subclass, counter to documentation
        int i = 1;
    }
    
    /**
     * Call from subclasses to ensure handling of super class destruction requirements
     */
    @PreDestroy
    public void destruct(){
        //
        int i = 1;
    }
}
