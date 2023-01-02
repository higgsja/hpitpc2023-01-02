package com.hpi.tpc.ui.views.coaching;

import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.contextmenu.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

@UIScope
@VaadinSessionScope
@Route(value = ROUTE_COACHING, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_COACHING)
@org.springframework.stereotype.Component
@NoArgsConstructor
@PermitAll
public class CoachingController
    extends ViewControllerBase
    implements BeforeEnterObserver, BeforeLeaveObserver
{
    @Autowired private CoachingModel coachingModel;

    @PostConstruct
    private void construct()
    {
        this.setClassName("coachingMenu");
        this.menuBar.setId("coachingMenuId");

        //get any preferences
        this.coachingModel.getPrefs();

        this.createMenuTabs();
    }
    
    /*
     * create the tabs and listeners; add to the menuBar
     */
    @Override
    public void createMenuTabs()
    {
        MenuItem benchmarkItem = this.menuBar.addItem(ROUTE_COACHING_PERFORMANCE_BENCHMARK);

        benchmarkItem.addClickListener(
            (ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(ROUTE_COACHING_PERFORMANCE_BENCHMARK);
        });

        MenuItem gainsItem = this.menuBar.addItem(ROUTE_COACHING_PERFORMANCE_GAINS);

        gainsItem.addClickListener(
            (ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(ROUTE_COACHING_PERFORMANCE_GAINS);
        });
        
//        MenuItem tacticsItem = this.menuBar.addItem(MENU_COACHING_PERFORMANCE_TACTICS);
//
//        this.listeners.add(tacticsItem.addClickListener(
//            (ClickEvent<MenuItem> event) ->
//        {
//            UI.getCurrent().navigate(MENU_COACHING_PERFORMANCE_TACTICS);
//        }));
    }


    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
//        if (this.getPrefsController().getPref("TPCDrawerClose").equalsIgnoreCase("yes"))
//        {
//            this.getMainLayout().setDrawerOpened(false);
//        }
        super.beforeEnter(bee);
        //set navBar for this menu
        super.doNavBar(ROUTE_COACHING_PREFERENCES);

        //send to default view

        bee.forwardTo(CoachingView.class);
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent ble)
    {
    }
}
