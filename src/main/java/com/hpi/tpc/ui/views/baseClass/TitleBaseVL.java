package com.hpi.tpc.ui.views.baseClass;

import lombok.*;


@Getter @Setter
public class TitleBaseVL
    extends ViewBaseHL
{
    private String title = "";

    public TitleBaseVL()
    {
        this.addClassName("titleBaseVL");
       
        this.setHeight("14px");
        
        this.getElement().getStyle().set("padding", "0");
    }
    
    public TitleBaseVL(String title){
        this();
        this.setTitle(title);
    }
    
    public final void setTitle(String title){
        this.add(this.titleFormat(title));        
    }
}
