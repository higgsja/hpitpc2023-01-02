package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import com.hpi.tpc.ui.views.main.MainLayout;
import com.hpi.tpc.ui.views.baseClass.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

/**
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Component
@Route(value = ROUTE_DATA_EQUITIES_STOCKS_PREFERENCES, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA_EQUITIES_STOCKS_PREFERENCES)
@PermitAll
public class DataEquitiesStocksPrefsVL
    extends PagePrefsBase
    implements BeforeEnterObserver
{
    @Autowired MainLayout mainLayout;
    public DataEquitiesStocksPrefsVL(){
        this.addClassName("dataValidateStocksPrefsVL");
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        //initialize the help display
        this.init("DataValidateStocksPrefsHelp");
        
        //update the preferences gear (remove)
        this.mainLayout.updatePagePrefsHL(new HorizontalLayout());
    }
}
