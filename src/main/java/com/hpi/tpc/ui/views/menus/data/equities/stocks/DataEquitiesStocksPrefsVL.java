package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import com.flowingcode.vaadin.addons.twincolgrid.*;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.data.Attribute;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

@UIScope
@VaadinSessionScope
@Route(value = ROUTE_DATA_EQUITIES_STOCKS_PREFERENCES, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA + ": " + TITLE_COACHING_GAINS)
@Component
@PermitAll
public class DataEquitiesStocksPrefsVL
    extends ViewBaseVL
    implements BeforeEnterObserver
{

    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private PrefsController prefsController;
    @Autowired private DataEquitiesStocksModel dataEquitiesStocksModel;

    private DataEquitiesStocksPrefsTitleVL title;
    private TwinColGrid<Attribute> twinColGrid;
    private DataEquitiesStocksPrefsControlsHL controls;

    private Registration selectedListener;
    private Registration dataProviderListener;

    public DataEquitiesStocksPrefsVL()
    {
        this.addClassName("dataEquitiesStocksPrefs");
        this.setMinWidth("360px");
        this.setWidth("400px");
        this.setHeight("100%");

    }

    @PostConstruct
    protected void constuct()
    {
        this.title = new DataEquitiesStocksPrefsTitleVL();

        this.twinColGrid = new TwinColGrid<Attribute>()
            .withAvailableGridCaption("Available")
            .withSelectionGridCaption("Selected")
            .withSelectionGridReordering()
            .withSizeFull()
            .withDragAndDropSupport()
            .selectRowOnClick()
            .addSortableColumn(Attribute::getAttribute,
                Comparator.comparing(Attribute::getAttribute), "Attributes");

        this.controls = new DataEquitiesStocksPrefsControlsHL();

        this.doButtonListeners();

        this.add(title);
        this.add(this.twinColGrid);
        this.add(this.controls);
    }

    private void doButtonListeners()
    {
        this.controls.getEquitiesStocksPrefsSave().addClickListener(vcEvent -> this.doSave());
        this.controls.getEquitiesStocksPrefsCancel().addClickListener(vcEvent -> this.doCancel());
    }

    private void doDataListeners()
    {
        this.selectedListener = this.twinColGrid.getSelectionGrid().getDataProvider()
            .addDataProviderListener(e ->
            {
                this.doSelectionChanged();
            });
    }

    private void removeDataListeners()
    {
        if (this.selectedListener != null)
        {
            this.selectedListener.remove();
        }

        if (this.dataProviderListener != null)
        {
            this.dataProviderListener.remove();
        }
    }

    private void doCancel()
    {
        UI.getCurrent().navigate(DataEquitiesStocksControllerFL.class);
    }

    private void doSave()
    {
        //write the changes
        this.dataEquitiesStocksModel.writePrefs(this.twinColGrid);
        
        this.controls.getEquitiesStocksPrefsSave().setEnabled(false);
    }

    private void doSelectionChanged()
    {
        this.controls.getEquitiesStocksPrefsSave().setEnabled(true);
        this.controls.getEquitiesStocksPrefsCancel().setEnabled(true);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        this.serviceTPC.AppTracking("TPC:Data:Equities:Stocks:Preferences");

        if (this.prefsController.getPref("TPCDrawerClose").equalsIgnoreCase("yes"))
        {
            this.mainLayout.setDrawerOpened(false);
        }
        //update the data
        this.updateData();
        
        //update buttons
        this.controls.getEquitiesStocksPrefsSave().setEnabled(false);
        this.controls.getEquitiesStocksPrefsCancel().setEnabled(true);

        //update the gear
        this.mainLayout.updatePagePrefsHL(null);
    }

    private void updateData()
    {
        this.removeDataListeners();
        this.dataEquitiesStocksModel.initAttributeData();

        this.twinColGrid.getAvailableGrid().setItems(this.dataEquitiesStocksModel.getAvailableAttributes());
        this.twinColGrid.getSelectionGrid().setItems(this.dataEquitiesStocksModel.getSelectedAttributes());

        this.doDataListeners();
    }
}
