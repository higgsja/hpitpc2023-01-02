package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.services.TPCDAOImpl;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
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
@org.springframework.stereotype.Component
@Route(value = ROUTE_DATA_VALIDATE_STOCKS_CONTROLLER, layout = MainLayout.class)
@PermitAll
public class DataValidateStocksController
    extends ViewControllerBase
    implements BeforeEnterObserver
{

    @Autowired private DataValidateStocksModel dataValidateStocksModel;
    @Autowired private DataValidateStocksView dataValidateStocksView;
    @Autowired private TPCDAOImpl serviceTPC;

    private Registration dataProviderListener = null;

    public DataValidateStocksController()
    {
        this.addClassName("dataValidateStocksController");
    }

    @PostConstruct
    private void construct()
    {
        this.dataValidateStocksModel.getPrefs("StockValidate");

        this.dataValidateStocksView.setupViewer();

        this.setListeners();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        this.serviceTPC.AppTracking("WTPC:Data:Validate:Stocks");

        this.updateViewOnEnter();

        //transfer to viewer
        event.forwardTo(DataValidateStocksView.class);
    }

    private void updateViewOnEnter()
    {
        /**
         * update data on every enter as data may have changed
         */
        this.updateViewOnEnterAccounts();
        this.updateViewOnEnterTickers();
    }

    private void updateViewOnEnterAccounts()
    {
        /**
         * update accounts data from database into the view
         */
        //update data
        this.dataValidateStocksModel.updateAccountModels();
        //update view
        this.dataValidateStocksView.getComboAccounts().setItems(this.dataValidateStocksModel.getAccountModels());
        this.dataValidateStocksView.getComboAccounts().setValue(this.dataValidateStocksModel
            .getAccountModels().get(0));
        //update the data model
        this.dataValidateStocksModel.setSelectedAccountModel(this.dataValidateStocksView
            .getComboAccounts().getValue());
    }

    private void updateViewOnEnterTickers()
    {
        /**
         * update tickers from database into the view
         */
        //update data
        this.dataValidateStocksModel.updateTickerModels();
        //update view
        this.dataValidateStocksView.getComboTickers().setItems(this.dataValidateStocksModel.getTickerModels());
        this.dataValidateStocksView.getComboTickers().setValue(this.dataValidateStocksModel
            .getTickerModels().get(0));
        //update the data model
        this.dataValidateStocksModel.setSelectedTickerModel(this.dataValidateStocksView
            .getComboTickers().getValue());
    }

    private void updateGridOnChange()
    {
        /**
         * any change to accounts or tickers pull new data set
         */
        Iterator<ValidateStockTransactionModel> iterator;
        ValidateStockTransactionModel tmpModel;
        Double unitsTotal;

        unitsTotal = 0.0;

        if (this.dataValidateStocksModel.getSelectedAccountModel() == null
            || this.dataValidateStocksModel.getSelectedTickerModel() == null)
        {
            //no update until both lists are complete with a selection
            //this is an issue on entering as each is populated independently and fires the onChange
            return;
        }

        if (this.dataProviderListener != null)
        {
            this.dataProviderListener.remove();
        }

        this.dataValidateStocksModel.updateGridData();

        this.dataValidateStocksView.getGrid().setDataProvider(
            this.dataValidateStocksModel.getGridDataProvider());
        this.setGridDataProviderListener();

        //set the totals
        iterator = this.dataValidateStocksModel.getGridDataProvider().getItems().iterator();

        //exclude skips from the total
        //todo: need to change to account for filtering
        while (iterator.hasNext())
        {
            tmpModel = iterator.next();
            if (!tmpModel.getBSkip())
            {
                unitsTotal += tmpModel.getUnits();
            }
        }

        Grid.Column aColumn = this.dataValidateStocksView.getGrid().getColumnByKey("units");

        this.dataValidateStocksView.getFooter().getCell(aColumn).setText(unitsTotal.toString());

    }

    private void setListeners()
    {
        this.dataValidateStocksView.getComboAccounts().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.setSelectedAccountModel((vcEvent.getValue()));

            this.updateGridOnChange();
        });

        this.dataValidateStocksView.getComboTickers().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.setSelectedTickerModel(vcEvent.getValue());

            this.updateGridOnChange();
        });

        this.dataValidateStocksView.getCheckboxSkip().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.filterChange(vcEvent.getValue(), null);
        });

        this.dataValidateStocksView.getCheckboxValidated().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.filterChange(null, vcEvent.getValue());
        });

        this.dataValidateStocksView.getButtonSave().addClickListener(
            vcEvent -> this.doSave());

        this.dataValidateStocksView.getButtonCancel().
            addClickListener(
                vcEvent -> this.doCancel());
    }

    private void setGridDataProviderListener()
    {
        if (this.dataProviderListener != null)
        {
            this.dataProviderListener.remove();
        }

        this.dataProviderListener = this.dataValidateStocksModel
            .getGridDataProvider().addDataProviderListener(dataEvent ->
            {
                //do not want enabled on simple filter change in data provider
                if (!this.dataValidateStocksModel.getBInFilterChange())
                {
                    this.dataValidateStocksView.getButtonSave().setEnabled(true);
                }
            });
    }

    private void doCancel()
    {
        int i = 0;
    }

    private void doSave()
    {
        //write to database
        this.dataValidateStocksModel.doSave();
        //fix buttons
        this.dataValidateStocksView.getButtonSave().setEnabled(false);
        this.dataValidateStocksView.getButtonCancel().setEnabled(false);

        /**
         * after save, pull from database and reset grid to be sure have the right data
         */
        this.updateGridOnChange();
    }

    @Override
    public void createMenuTabs()
    {
        //none; not changing top tabs
        //todo: change top menu prefs icon route
    }
}
