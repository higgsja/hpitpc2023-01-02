package com.hpi.tpc.ui.views.menus.data.validate.options;

import com.hpi.tpc.services.TPCDAOImpl;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
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
@Route(value = ROUTE_DATA_VALIDATE_OPTIONS_CONTROLLER, layout = MainLayout.class)
//@PageTitle(TITLE_PAGE_DATA + ":" + TITLE_PAGE_DATA_EQUITIES_OPTIONS)
@org.springframework.stereotype.Component
@PermitAll
//@CssImport("./styles/validateOptions.css")
public class DataValidateOptionsMVCController
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
    @Autowired private DataValidateOptionsModel optionsModel;
    @Autowired private DataValidateOptionsViewer optionsViewer;
    @Autowired private TPCDAOImpl serviceTPC;

    private final ArrayList<Registration> listeners;

    private Registration dataProviderListener;

    public DataValidateOptionsMVCController() {
        this.listeners = new ArrayList<>();
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
        this.serviceTPC.AppTracking("TPC:Data:Validate:Options");

        this.optionsModel.getPrefs();

        //ensure page is clear
        this.removeAll();

        //ensure listeners removed
        this.removeListeners();

        //data
        this.optionsModel.doAccountModels();

        //todo: use prefs to return to the last settings
        //  for now, first account, first ticker
        this.optionsModel.setSelectedAccountModel(this.optionsModel
            .getAccountModels().get(0));

        this.optionsModel.doTickerModels();

        //todo: use prefs to return to the last settings
        //  for now, first account, first ticker
        this.optionsModel.setSelectedTickerModel(this.optionsModel.getTickerModels().get(0));

        if (this.dataProviderListener != null) {
            this.dataProviderListener.remove();
        }

        this.optionsViewer.setupViewer();

        //todo: use preferences so come in to where left off
        this.optionsViewer.getComboAccounts()
            .setValue(this.optionsModel.getSelectedAccountModel());

        //todo: use preferences so come in to where left off
        this.optionsViewer.getComboTickers()
            .setValue(this.optionsModel.getSelectedTickerModel());

        this.doGridData();

        this.setListeners();

        //transfer to viewer
        event.forwardTo(DataValidateOptionsViewer.class);
    }

    public void removeListeners() {
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
        Iterator<ValidateOptionTransactionModel> iterator;
        ValidateOptionTransactionModel tmpModel;
        Double unitsTotal;

        unitsTotal = 0.0;

        if (this.dataProviderListener != null) {
            this.dataProviderListener.remove();
        }

        this.optionsModel.doGridData();
        this.optionsViewer.getGrid().setDataProvider(
            this.optionsModel.getGridDataProvider());
        this.setDataProviderListener();

        //set the totals
        iterator = this.optionsModel.getGridDataProvider()
            .getItems().iterator();

        //todo: need to change this to account for filtering
        while (iterator.hasNext()) {
            tmpModel = iterator.next();
            if (!tmpModel.getBSkip()) {
                unitsTotal += tmpModel.getUnits();
            }
        }

        Grid.Column aColumn = this.optionsViewer.getGrid().getColumnByKey(
            "units");

        this.optionsViewer.getFooter().getCell(aColumn)
            .setText(unitsTotal.toString());
    }

    public void setListeners() {
        this.removeListeners();

        this.listeners.add(this.optionsViewer.getComboAccounts().addValueChangeListener(
            vcEvent -> {
            this.optionsModel.setSelectedAccountModel(vcEvent.getValue());

            this.doGridData();
        }));

        this.listeners.add(this.optionsViewer.getComboTickers().addValueChangeListener(
            vcEvent -> {
            this.optionsModel.setSelectedTickerModel(vcEvent.getValue());

            this.doGridData();
        }));

        this.listeners.add(this.optionsViewer.getCheckboxSkip().addValueChangeListener(
            vcEvent -> {
            this.optionsModel.filters(vcEvent.getValue(), null);
        }));

        this.listeners.add(this.optionsViewer.getCheckboxValidated().addValueChangeListener(
            vcEvent -> {
            this.optionsModel.filters(null, vcEvent.getValue());
        }));

        this.listeners.add(this.optionsViewer.getButtonSave().addClickListener(
            vcEvent -> this.doSave()));

        this.listeners.add(this.optionsViewer.getButtonCancel().
            addClickListener(
                vcEvent -> this.doCancel()));
    }

    private void setDataProviderListener() {
        if (this.dataProviderListener != null) {
            this.dataProviderListener.remove();
        }

        this.dataProviderListener = this.optionsModel.getGridDataProvider().addDataProviderListener(
            dataEvent -> {
            this.optionsViewer.getButtonSave().setEnabled(true);
//                this.optionsViewer.getButtonCancel().setEnabled(true);
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

        this.optionsModel.doSave();
        this.optionsViewer.getButtonSave().setEnabled(false);
        this.optionsViewer.getButtonCancel().setEnabled(false);

        this.doGridData();
    }
}
