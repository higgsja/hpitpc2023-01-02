package com.hpi.tpc.ui.views.baseClass;

import lombok.*;


@Getter @Setter
public class TitleBaseVL
    extends ViewBaseVL
{
    private String title = "";

    public TitleBaseVL()
    {
        this.addClassName("titleBaseVL");
       
        this.setHeight("14px");
        
        this.getElement().getStyle().set("padding", "0");
    }
    
    public final void setTitle(String title){
        this.add(this.titleFormat(title));        
    }
}
