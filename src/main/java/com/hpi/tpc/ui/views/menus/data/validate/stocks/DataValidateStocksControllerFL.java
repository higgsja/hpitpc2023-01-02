package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.services.TPCDAOImpl;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.button.*;
import com.vaadin.flow.component.checkbox.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

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
@Route(value = ROUTE_DATA_VALIDATE_STOCKS_CONTROLLER, layout = MainLayout.class)
@PermitAll
@Component
public class DataValidateStocksControllerFL
    extends ViewControllerBaseFL //flexLayout
    implements BeforeEnterObserver
{

    @Autowired private MainLayout mainLayout; 
    @Autowired private DataValidateStocksModel dataValidateStocksModel;
    @Autowired private TPCDAOImpl serviceTPC;

    private final DataValidateStocksVL dataValidateStocksViewVL;
    private final DataValidateStocksTitleVL dataValidateStocksViewTitleVL;
    private final DataValidateStocksControlsHL dataValidateStocksViewControlsHL;
    private final DataValidateStocksGridVL dataValidateStocksViewGridVL;

    private Registration dataProviderListener = null;

    public DataValidateStocksControllerFL()
    {
        this.addClassName("dataValidateStocksController");
        
        this.dataValidateStocksViewVL = new DataValidateStocksVL();
        this.add(this.dataValidateStocksViewVL);
        
        this.dataValidateStocksViewTitleVL = new DataValidateStocksTitleVL();
        this.dataValidateStocksViewVL.add(this.dataValidateStocksViewTitleVL);

        this.dataValidateStocksViewControlsHL = new DataValidateStocksControlsHL();
        this.dataValidateStocksViewVL.add(this.dataValidateStocksViewControlsHL);

        this.dataValidateStocksViewGridVL = new DataValidateStocksGridVL();
        this.dataValidateStocksViewVL.add(this.dataValidateStocksViewGridVL);
    }

    @PostConstruct
    public void construct()
    {
        this.prefsPageHL = this.createPreferencesTabHL(ROUTE_DATA_VALIDATE_STOCKS_PREFERENCES);

        this.dataValidateStocksModel.getPrefs("DataValidateStocks");

        this.setCheckboxSkipValue(this.dataValidateStocksModel.getSelectedSkip());

        this.setCheckboxValidatedValue(this.dataValidateStocksModel.getSelectedValidated());

        this.setButtonSaveEnabled(false);
        this.setButtonCancelEnabled(false);

        this.setListeners();
    }

    private ComboBox<EditAccountModel> getComboAccounts()
    {
        return this.dataValidateStocksViewControlsHL.getValidateStocksComboAccounts();
    }

    private ComboBox<TickerModel> getComboTickers()
    {
        return this.dataValidateStocksViewControlsHL.getValidateStocksComboTickers();
    }

    private Checkbox getCheckboxSkip()
    {
        return this.dataValidateStocksViewControlsHL.getValidateStocksCheckboxSkip();
    }

    private void setCheckboxSkipValue(Boolean skip)
    {
        this.getCheckboxSkip().setValue(skip);
    }

    private Boolean getCheckboxSkipValue()
    {
        return this.getCheckboxSkip().getValue();
    }

    private Checkbox getCheckboxValidated()
    {
        return this.dataValidateStocksViewControlsHL.getValidateStocksCheckboxValidated();
    }

    private void setCheckboxValidatedValue(Boolean skip)
    {
        this.getCheckboxValidated().setValue(skip);
    }

    private Boolean getCheckboxValidatedValue()
    {
        return this.getCheckboxValidated().getValue();
    }

    private Button getButtonSave()
    {
        return this.dataValidateStocksViewControlsHL.getValidateStocksButtonSave();
    }

    private void setButtonSaveEnabled(Boolean enabled)
    {
        this.getButtonSave().setEnabled(enabled);
    }

    private Button getButtonCancel()
    {
        return this.dataValidateStocksViewControlsHL.getValidateStocksButtonCancel();
    }

    private void setButtonCancelEnabled(Boolean enabled)
    {
        this.getButtonCancel().setEnabled(enabled);
    }

    public Grid<ValidateStockTransactionModel> getGrid()
    {
        return this.dataValidateStocksViewGridVL.getValidateStocksGrid();
    }

    public FooterRow getFooterRow()
    {
        return this.dataValidateStocksViewGridVL.getValidateStocksGridFooterRow();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        super.beforeEnter(event);

        //log feature use
        this.serviceTPC.AppTracking("WTPC:Data:Validate:Stocks");

        //refresh data on every entry
        this.updateDataOnEnter();
        
        //change the preferences route
        this.updatePrefsIcon();
//        this.doNavBar(ROUTE_DATA_VALIDATE_STOCKS_PREFERENCES);
    }

    private void updateDataOnEnter()
    {
        /**
         * update data on every enter as data may have changed
         */
        this.updateDataOnEnterAccounts();
        this.updateDataOnEnterTickers();
    }

    private void updateDataOnEnterAccounts()
    {
        /**
         * update accounts data from database into the view
         */
        //update data
        this.dataValidateStocksModel.updateAccountModels();
        //update view
        this.getComboAccounts().setItems(this.dataValidateStocksModel.getAccountModels());
        this.getComboAccounts().setValue(this.dataValidateStocksModel.getAccountModels().get(0));
        //update the data model
        this.dataValidateStocksModel.setSelectedAccountModel(this.getComboAccounts().getValue());
    }

    private void updateDataOnEnterTickers()
    {
        /**
         * update tickers from database into the view
         */
        //update data
        this.dataValidateStocksModel.updateTickerModels();
        //update view
        this.getComboTickers().setItems(this.dataValidateStocksModel.getTickerModels());
        this.getComboTickers().setValue(this.dataValidateStocksModel
            .getTickerModels().get(0));
        //update the data model
        this.dataValidateStocksModel.setSelectedTickerModel(this.getComboTickers().getValue());
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

        this.getGrid().setDataProvider(
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

        Grid.Column aColumn = this.getGrid().getColumnByKey("units");

        this.getFooterRow().getCell(aColumn).setText(unitsTotal.toString());
    }

    private void setListeners()
    {
        this.getComboAccounts().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.setSelectedAccountModel((vcEvent.getValue()));

            this.updateGridOnChange();
        });

        this.getComboTickers().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.setSelectedTickerModel(vcEvent.getValue());

            this.updateGridOnChange();
        });

        this.getCheckboxSkip().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.filterChange(vcEvent.getValue(), null);
        });

        this.getCheckboxValidated().addValueChangeListener(
            vcEvent ->
        {
            this.dataValidateStocksModel.filterChange(null, vcEvent.getValue());
        });

        this.getButtonSave().addClickListener(
            vcEvent -> this.doSave());

        this.getButtonCancel().
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
                //only enable if not a simple filter change in data provider
                if (!this.dataValidateStocksModel.getBInFilterChange())
                {
                    this.getButtonSave().setEnabled(true);
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
        this.getButtonSave().setEnabled(false);
        this.getButtonCancel().setEnabled(false);

        /**
         * after save, pull from database and reset grid to be sure have the right data
         */
        this.updateGridOnChange();
    }

    @Override
    public void addMenuBarTabs()
    {
        //none; not changing top tabs
        //todo: change top menu prefs icon route
    }
}