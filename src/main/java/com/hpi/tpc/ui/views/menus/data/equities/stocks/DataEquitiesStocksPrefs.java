package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import com.flowingcode.vaadin.addons.twincolgrid.*;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.data.Attribute;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@NoArgsConstructor
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_DATA_EQUITIES_STOCKS_PREFERENCES, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA + ": " + TITLE_COACHING_GAINS)
@Component
@PermitAll
public class DataEquitiesStocksPrefs
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver
{

    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private PrefsController prefsController;
    @Autowired private DataEquitiesStocksModel dataEquitiesStocksModel;
    @Autowired private DataEquitiesStocksControllerFL dataEquitiesStocksControllerFL;

    private TwinColGrid<Attribute> twinColGrid;

    @PostConstruct
    protected void constuct()
    {
        this.addClassName("dataEquitiesStocksPrefs");

        this.twinColGrid = new TwinColGrid<Attribute>()
            .withAvailableGridCaption("Available")
            .withSelectionGridCaption("Selected")
            .withSelectionGridReordering()
            .withSizeFull()
            .withDragAndDropSupport()
            .selectRowOnClick()
            .addColumn(Attribute::getAttribute, "Attributes");

        this.setupLeftVL("Stock Data Attributes");
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        this.serviceTPC.AppTracking("TPC:Data:Equities:Stocks:Preferences");

        if (this.prefsController.getPref("TPCDrawerClose").
            equalsIgnoreCase("yes"))
        {
            this.mainLayout.setDrawerOpened(false);
        }
        
        //update the data
        this.dataEquitiesStocksModel.initAttributeData();
        
        //update the gear
        this.mainLayout.updatePagePrefsHL(null);
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event)
    {
        //write the changes
        this.dataEquitiesStocksModel.writePrefs(this.twinColGrid);

        //read them back to ensure model represents current state
//        this.dataStocksMVCModel.getPrefs();
        //refresh the layout
        //reset the grid based on preference columns
        //not necessary as we re-read when enter dataEquitiesStocks
//        this.dataEquitiesStocksControllerFL.getDataEquitiesStocksGridVL()
//            .doLayout(this.dataEquitiesStocksModel.getStringColumns());

//        this.doTwinColLayout();
    }

    public void setupLeftVL(String leftVLTitle)
    {
        this.setMinWidth("360px");
        this.setWidth("400px");
        this.setHeight("100%");

//        this.add(this.titleFormat(leftVLTitle));

        this.doTwinColLayout();
//        this.add(this.twinColVL);
    }

    private void doTwinColLayout()
    {
//        this.dataEquitiesStocksModel.initAttributeData();

//        this.twinColGrid = new TwinColGrid<>(
//            this.dataStocksMVCModel.getAvailAttributes(), "")
//            .addColumn(Attribute::getAttribute, "Attributes");
        this.twinColGrid.getAvailableGrid().setItems(this.dataEquitiesStocksModel.getAvailAttributes());
//        this.twinColGrid.getAvailableGrid().getDataProvider().refreshAll();

        this.twinColGrid.getSelectionGrid().setItems(this.dataEquitiesStocksModel.getSelectedAttributes());
//        this.twinColGrid.getSelectionGrid().getDataProvider().refreshAll();

//        this.twinColGrid.setValue(this.dataStocksMVCModel.getSelectedAttributes());
        //after refresh prefs, remove the old and add this one
        this.removeAll();
        this.add(twinColGrid);
    }
}