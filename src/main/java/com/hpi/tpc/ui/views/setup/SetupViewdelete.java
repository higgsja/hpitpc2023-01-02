package com.hpi.tpc.ui.views.setup;

import static com.hpi.tpc.AppConst.ROUTE_SETUP_VIEW;
import static com.hpi.tpc.AppConst.TITLE_PAGE_SETUP;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;

/**
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component

@Route(value = ROUTE_SETUP_VIEW, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_SETUP)
@PermitAll
public class SetupViewdelete
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
//    @Autowired private SetupModel setupModel;

    private Label title;

    @PostConstruct
    private void construct() {
        this.setClassName("setupView");
//        this.setSizeFull();
        
        this.doView();
    }

    @PreDestroy
    private void destruct() {

    }

    private void doView() {
        this.doTitle();
    }

    public void doTitle() {
        this.title = new Label(
            "Setup TBD");
        this.title.getElement().getStyle().set("font-size", "14px");
        this.title.getElement().getStyle().set("font-family", "Arial");
        this.title.getElement().getStyle().set("color", "#169FF3");
        this.title.getElement().getStyle().set("margin-top", "0px");
        this.title.getElement().getStyle().set("margin-bottom", "0px");
        this.title.getElement().getStyle().set("margin-block-start", "0px");
        this.title.getElement().getStyle().set("margin-block-end", "0px");
        this.title.getElement().getStyle().set("line-height", "1em");
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        this.add(this.title);
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event) {
        
    }
}
