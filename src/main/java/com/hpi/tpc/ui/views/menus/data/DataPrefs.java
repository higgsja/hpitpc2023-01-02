package com.hpi.tpc.ui.views.menus.data;

import com.hpi.tpc.ui.views.menus.data.equities.stocks.DataStocksModel;
import com.hpi.tpc.ui.views.menus.data.equities.stocks.DataStocksView;
import com.flowingcode.vaadin.addons.twincolgrid.*;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.support.rowset.*;
import org.springframework.stereotype.*;

@NoArgsConstructor
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_DATA_PREFERENCES, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA + ": " + TITLE_COACHING_GAINS)
@Component
@PermitAll
public class DataPrefs
    extends MVCView2WideBase
    implements BeforeEnterObserver, BeforeLeaveObserver,
    MVCView2WideInterface
{

    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private JdbcTemplate jdbcTemplate;
    @Autowired private PrefsController prefsController;
    @Autowired private DataStocksModel dataStocksMVCModel;
    @Autowired private DataStocksView dataStocksMVCView;

    private VerticalLayout twinColVL;
    private TwinColGrid<Attribute> twinColGrid;

    @PostConstruct
    protected void constuct()
    {
        super.construct();
        this.addClassName("dataPrefsStock");

        this.twinColVL = new VerticalLayout();
        this.twinColGrid = new TwinColGrid<Attribute>()
            .withAvailableGridCaption("Available")
            .withSelectionGridCaption("Selected")
            .withSelectionGridReordering()
            .withSizeFull()
            .withDragAndDropSupport()
            .selectRowOnClick()
            .addColumn(Attribute::getAttribute, "Attributes");


        this.setupLeftVL("Stock Data Attributes");
        this.setupRightVL("");
    }

    @Override
    protected void destruct()
    {
        super.destruct();
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

    @Override
    public void setupLeftVL(String leftVLTitle)
    {
        this.leftVL.setMinWidth("360px");
        this.leftVL.setWidth("400px");
        this.leftVL.setHeight("100%");

        this.leftVL.add(this.titleFormat(leftVLTitle));

        this.doTwinColLayout();
        this.leftVL.add(this.twinColVL);

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
        this.leftVL.removeAll();
        this.leftVL.add(twinColGrid);
    }

    @Override
    public void setupRightVL(String rightVLTitle)
    {
        Span aSpan;
        String sql;
        String keyValue;

        keyValue = "";

        sql = "select KeyValue from TPCHelp where KeyId = 'ConfigDataHelp';";
        SqlRowSet rowSet = this.jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next())
        {
            //will only be one
            keyValue = rowSet.getString("KeyValue");
        }
        aSpan = new Span();
        aSpan.getElement().setProperty("innerHTML", keyValue);

        this.rightVL.add(aSpan);
    }
}
