package com.hpi.tpc.ui.views.menus.data;

import com.hpi.tpc.ui.views.menus.data.equities.stocks.DataStocksView;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.ViewControllerBase;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.contextmenu.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

/*
 * Controller: Interface between Model and View to process business logic and incoming
 * requests:
 * manipulate data using the Model
 * interact with the Views to render output
 * respond to user input and performance actions on data model objects.
 * receives input, optionally validates it and passes it to the model
 * Target for navigation from appDrawer
 */
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_DATA, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA)
@org.springframework.stereotype.Component
@NoArgsConstructor
@PermitAll
public class DataController
    extends ViewControllerBase
    implements BeforeEnterObserver
{

    @Autowired private DataModel dataModel;

    @PostConstruct
    private void construct()
    {
        this.setClassName("dataController");

        //get any preferences
        this.dataModel.getPrefs();

        this.createMenuTabs();
    }
    
    /*
     * create top menuBar tabs and listeners
     */
    @Override
    public void createMenuTabs()
    {
        //Validate
        MenuItem validateItem = this.menuBar.addItem(TITLE_TAB_DATA_VALIDATE);
        SubMenu validateSubMenu = validateItem.getSubMenu();

        //validate options
        MenuItem validateOptions = validateSubMenu.addItem(TITLE_DATA_OPTIONS);
        validateOptions.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(DATA_VALIDATE_OPTIONS_CONTROLLER);
        });

        //validate stocks
        MenuItem validateStocks = validateSubMenu.addItem(TITLE_DATA_STOCKS);
        validateStocks.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(DATA_VALIDATE_STOCKS_CONTROLLER);
        });

        MenuItem equitiesItem = this.menuBar.addItem(TITLE_TAB_DATA_EQUITIES);
        SubMenu equitiesSubMenu = equitiesItem.getSubMenu();

        //show options
        MenuItem showOptions = equitiesSubMenu.addItem(TITLE_DATA_EQUITIES_OPTIONS);
        showOptions.setEnabled(false);
        showOptions.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(DATA_EQUITIES_OPTIONS_VIEW);
        });

        //show stocks
        MenuItem showStocks = equitiesSubMenu.addItem(TITLE_DATA_EQUITIES_STOCKS);
        showStocks.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(DATA_EQUITIES_STOCKS_VIEW);
        });
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);
        
        //set navBar for this menu
        super.doNavBar(ROUTE_DATA_PREFERENCES);

        //send to default view
        bee.forwardTo(DataStocksView.class);
    }
}
