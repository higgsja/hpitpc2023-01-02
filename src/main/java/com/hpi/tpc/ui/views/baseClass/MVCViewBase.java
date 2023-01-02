package com.hpi.tpc.ui.views.baseClass;

import com.vaadin.flow.component.dependency.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import lombok.*;
import org.springframework.stereotype.*;

@UIScope
@VaadinSessionScope
@Component
@CssImport("./styles/baseMVCView1Wide.css")
@Getter
public abstract class MVCViewBase
    extends VerticalLayout
{
    protected final ArrayList<Registration> listeners;

    public MVCViewBase()
    {
        this.listeners = new ArrayList<>();
        this.setClassName("baseMVCViewError");
        
        this.setMinWidth("320px");
        this.setWidth("550px");
        this.setHeight("100%");
    }

    @PostConstruct
    protected void construct()
    {
        int i = 0;
    }

    @PreDestroy
    protected void destruct()
    {
        this.removeListeners();
    }

    public void removeListeners()
    {
        for (Registration r : this.listeners)
        {
            if (r != null)
            {
                r.remove();
            }
        }
    }

    protected Label titleFormat(String title)
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
