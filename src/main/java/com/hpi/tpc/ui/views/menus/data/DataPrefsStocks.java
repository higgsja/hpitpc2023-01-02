package com.hpi.tpc.ui.views.menus.data;

import com.hpi.tpc.ui.views.menus.data.equities.stocks.DataEquitiesStocksModel;
import com.hpi.tpc.ui.views.menus.data.equities.stocks.DataEquitiesStocksViewFL;
import com.flowingcode.vaadin.addons.twincolgrid.*;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.main.*;
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
@Route(value = ROUTE_DATA_PREFERENCES, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA + ": " + TITLE_COACHING_GAINS)
@Component
@PermitAll
public class DataPrefsStocks
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver
{

    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private PrefsController prefsController;
    @Autowired private DataEquitiesStocksModel dataStocksMVCModel;
    @Autowired private DataEquitiesStocksViewFL dataStocksMVCView;

    private TwinColGrid<Attribute> twinColGrid;

    @PostConstruct
    protected void constuct()
    {
        this.addClassName("dataPrefsStock");

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
        this.serviceTPC.AppTracking("TPC:Data:Equities:Stocks");

        if (this.prefsController.getPref("TPCDrawerClose").
            equalsIgnoreCase("yes"))
        {
            this.mainLayout.setDrawerOpened(false);
        }
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event)
    {
        //write the changes
        this.dataStocksMVCModel.writePrefs(this.twinColGrid);

        //read them back to ensure model represents current state
//        this.dataStocksMVCModel.getPrefs();
        //refresh the layout
        //reset the grid based on preference columns
        this.dataStocksMVCView.gridSetup();

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
        this.dataStocksMVCModel.initData();

//        this.twinColGrid = new TwinColGrid<>(
//            this.dataStocksMVCModel.getAvailAttributes(), "")
//            .addColumn(Attribute::getAttribute, "Attributes");
        this.twinColGrid.getAvailableGrid().setItems(this.dataStocksMVCModel.getAvailAttributes());
//        this.twinColGrid.getAvailableGrid().getDataProvider().refreshAll();

        this.twinColGrid.getSelectionGrid().setItems(this.dataStocksMVCModel.getSelectedAttributes());
//        this.twinColGrid.getSelectionGrid().getDataProvider().refreshAll();

//        this.twinColGrid.setValue(this.dataStocksMVCModel.getSelectedAttributes());
        //after refresh prefs, remove the old and add this one
        this.removeAll();
        this.add(twinColGrid);
    }
}
