package com.hpi.tpc.ui.views.baseClass;

import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.spring.annotation.*;
import lombok.*;
import org.springframework.stereotype.*;

@UIScope
@VaadinSessionScope
@Component
@Getter
public abstract class ViewBase
    extends VerticalLayout
{
    public ViewBase()
    {
        this.setClassName("viewBase");
        
        this.setMinWidth("320px");
        this.setWidth("550px");
        this.setHeight("100%");
    }

    public Label titleFormat(String title)
    {
        Label label = new Label(title);
        label.getElement().getStyle().set("font-size", "14px");
        label.getElement().getStyle().set("font-family", "Arial");
//        label.getElement().getStyle().set("color", "#169FF3");
        label.getElement().getStyle().set("margin-top", "0px");
        label.getElement().getStyle().set("margin-bottom", "0px");
        label.getElement().getStyle().set("margin-block-start", "0px");
        label.getElement().getStyle().set("margin-block-end", "0px");
        label.getElement().getStyle().set("line-height", "1em");

        return label;
    }
}
