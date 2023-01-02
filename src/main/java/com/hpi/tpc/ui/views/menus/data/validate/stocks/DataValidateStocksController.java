package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.services.TPCDAOImpl;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;

/**
 * translates user requests to actions, selects the appropriate view
 * minimal as possible; just translate requests in to Model actions and
 * selecting View
 */
@UIScope
@VaadinSessionScope
@Route(value = DATA_VALIDATE_STOCKS_CONTROLLER, layout = MainLayout.class)
@PageTitle(TITLE_TAB_DATA_VALIDATE + ": " + TITLE_DATA_STOCKS)
@org.springframework.stereotype.Component
@PermitAll
//@CssImport("./styles/validateStocks.css")
//@CssImport(value = "./styles/dataValidateStocks-grid.css",
//           id = "validate-stocks-grid", themeFor = "vaadin-grid")
public class DataValidateStocksController
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
    @Autowired private DataValidateStocksModel dataValidateStocksModel;
    @Autowired private DataValidateStocksViewer dataValidateStocksViewer;
    @Autowired private TPCDAOImpl serviceTPC;

    private final ArrayList<Registration> listeners;

    private Registration dataProviderListener;
//    private Registration checkboxSkipListener;
//    private Registration checkboxValidateListener;
//
//    private Registration comboboxAccountsListener;
//    private Registration comboboxTickersListener;
//
//    private Registration buttonCancelListener;
//    private Registration buttonSaveListener;

    public DataValidateStocksController() {
        this.listeners = new ArrayList<>();
        this.dataProviderListener = null;

//        this.comboboxAccountsListener = null;
//        this.comboboxTickersListener = null;
//
//        this.checkboxSkipListener = null;
//        this.checkboxValidateListener = null;
    }

    @PostConstruct
    private void construct() {

    }

    @PreDestroy
    private void destruct() {
        //do not know why but this is hit on re-entry
        this.removeListeners();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        this.serviceTPC.AppTracking("WTPC:Data:Validate:Stocks");

        this.dataValidateStocksModel.getPrefs();

        //ensure page is clear
//        this.removeAll();
        //ensure listeners removed
        this.removeListeners();

        //data
        this.dataValidateStocksModel.doAccountModels();

        //todo: use prefs to return to the last settings
        //  for now, first account, first ticker
        this.dataValidateStocksModel.setSelectedAccountModel(this.dataValidateStocksModel
            .getAccountModels().get(0));

        this.dataValidateStocksModel.doTickerModels();

        //todo: use prefs to return to the last settings
        //  for now, first account, first ticker
        this.dataValidateStocksModel.setSelectedTickerModel(this.dataValidateStocksModel
            .getTickerModels().get(0));

        this.dataValidateStocksViewer.setupViewer();

        //todo: user preferences 
        this.dataValidateStocksViewer.getComboAccounts()
            .setValue(this.dataValidateStocksModel.getSelectedAccountModel());

        //todo: user preferences
        this.dataValidateStocksViewer.getComboTickers()
            .setValue(this.dataValidateStocksModel.getSelectedTickerModel());

        this.dataValidateStocksModel.doGridData();

        this.setListeners();

        //transfer to viewer
        event.forwardTo(DataValidateStocksViewer.class);
    }

    private void removeListeners() {
        //general
        for (Registration r : this.listeners) {
            if (r != null) {
                r.remove();
            }

            this.listeners.clear();
        }

        //special
        if (this.dataProviderListener != null) {
            this.dataProviderListener.remove();
        }
    }

    private void doGridData() {
        Iterator<ValidateStockTransactionModel> iterator;
        ValidateStockTransactionModel tmpModel;
        Double unitsTotal;

        unitsTotal = 0.0;

        if (this.dataProviderListener != null) {
            this.dataProviderListener.remove();
        }

        this.dataValidateStocksModel.doGridData();
        this.dataValidateStocksViewer.getGrid().setDataProvider(
            this.dataValidateStocksModel.getGridDataProvider());
        this.setDataProviderListener();

        //set the totals
        iterator = this.dataValidateStocksModel.getGridDataProvider().getItems().iterator();

        //exclude skips from the total
        //todo: need to change to account for filtering
        while (iterator.hasNext()) {
            tmpModel = iterator.next();
            if (!tmpModel.getBSkip()) {
                unitsTotal += tmpModel.getUnits();
            }
        }

        Grid.Column aColumn = this.dataValidateStocksViewer.getGrid().getColumnByKey(
            "units");

        this.dataValidateStocksViewer.getFooter().getCell(aColumn).setText(
            unitsTotal.toString());
    }

    private void setListeners() {
        this.listeners.add(this.dataValidateStocksViewer.getComboAccounts().addValueChangeListener(
            vcEvent -> {
            this.dataValidateStocksModel.setSelectedAccountModel((vcEvent.getValue()));

            this.doGridData();
        }));

        this.listeners.add(this.dataValidateStocksViewer.getComboTickers().addValueChangeListener(
            vcEvent -> {
            this.dataValidateStocksModel.setSelectedTickerModel(vcEvent.getValue());

            this.doGridData();
        }));

        this.listeners.add(this.dataValidateStocksViewer.getCheckboxSkip().addValueChangeListener(
            vcEvent -> {
            this.dataValidateStocksModel.filters(vcEvent.getValue(), null);
        }));

        this.listeners.add(this.dataValidateStocksViewer.getCheckboxValidated().addValueChangeListener(
            vcEvent -> {
            this.dataValidateStocksModel.filters(null, vcEvent.getValue());
        }));

        this.listeners.add(this.dataValidateStocksViewer.getButtonSave().addClickListener(
            vcEvent -> this.doSave()));

        this.listeners.add(this.dataValidateStocksViewer.getButtonCancel().
            addClickListener(
                vcEvent -> this.doCancel()));

        //set listener on the dataProvider
        //not required, do when create and set
//        this.dataProviderListener = this.dataValidateStocksModel
//            .getGridDataProvider().addDataProviderListener(
//                dataEvent -> {
//                this.dataValidateStocksViewer.getButtonSave().setEnabled(true);
////                this.stocksViewer.getButtonCancel().setEnabled(true);
//            });
    }

    private void setDataProviderListener() {
        if (this.dataProviderListener != null) {
            this.dataProviderListener.remove();
        }

        this.dataProviderListener = this.dataValidateStocksModel
            .getGridDataProvider().addDataProviderListener(
                dataEvent -> {
                this.dataValidateStocksViewer.getButtonSave().setEnabled(true);
//                this.stocksViewer.getButtonCancel().setEnabled(true);
            });
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event) {
        //we forward to the viewer so this gets hit on the way there ...
        //  caution on what can be done here: likley nothing
    }

    private void doCancel() {
        int i = 0;
    }

    private void doSave() {
        this.dataValidateStocksModel.doSave();
        this.dataValidateStocksViewer.getButtonSave().setEnabled(false);
        this.dataValidateStocksViewer.getButtonCancel().setEnabled(false);

        this.doGridData();
    }
}
