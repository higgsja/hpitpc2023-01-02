package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.services.TPCDAOImpl;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.*;
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
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

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
@NoArgsConstructor
@PermitAll
@Component
public class DataValidateStocksController
    extends ViewControllerBase  //flexLayout
    implements BeforeEnterObserver
{

    @Autowired private DataValidateStocksModel dataValidateStocksModel;
    @Autowired private DataValidateStocksViewFL dataValidateStocksView;
    @Autowired private TPCDAOImpl serviceTPC;

    private Registration dataProviderListener = null;

    @PostConstruct
    private void construct()
    {
//        this.addClassName("dataValidateStocksController");

        this.dataValidateStocksModel.getPrefs("StockValidate");

        this.setCheckboxSkipValue(this.dataValidateStocksModel.getSelectedSkip());

        this.setCheckboxValidatedValue(this.dataValidateStocksModel.getSelectedValidated());

        this.setButtonSaveEnabled(false);
        this.setButtonCancelEnabled(false);

        this.setListeners();
    }
    
    private ComboBox<EditAccountModel> getComboAccounts(){
        return this.dataValidateStocksView.getComboAccounts();
    }
    
    private ComboBox<TickerModel> getComboTickers(){
        return this.dataValidateStocksView.getComboTickers();
    }

    private Checkbox getCheckboxSkip(){
        return this.dataValidateStocksView.getCheckboxSkip();
    }
    
    private void setCheckboxSkipValue(Boolean skip)
    {
        this.dataValidateStocksView.setCheckboxSkipValue(skip);
    }

    private Boolean getCheckboxSkipValue()
    {
        return this.dataValidateStocksView.getCheckboxSkipValue();
    }

    private Checkbox getCheckboxValidated(){
        return this.dataValidateStocksView.getCheckboxValidated();
    }
    
    private void setCheckboxValidatedValue(Boolean skip)
    {
        this.dataValidateStocksView.setCheckboxValidatedValue(skip);
    }

    private Boolean getCheckboxValidatedValue()
    {
        return this.dataValidateStocksView.getCheckboxValidatedValue();
    }

    private Button getButtonSave(){
        return this.dataValidateStocksView.getButtonSave();
    }
    
    private void setButtonSaveEnabled(Boolean enabled)
    {
        this.dataValidateStocksView.setButtonSaveEnabled(enabled);
    }
    
    private Button getButtonCancel(){
        return this.dataValidateStocksView.getButtonCancel();
    }

    private void setButtonCancelEnabled(Boolean enabled)
    {
        this.dataValidateStocksView.setButtonCancelEnabled(enabled);
    }

    public Grid<ValidateStockTransactionModel> getGrid(){
        return this.dataValidateStocksView.getGrid();
    }
    
    public FooterRow getFooterRow(){
        return this.dataValidateStocksView.getFooterRow();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        this.serviceTPC.AppTracking("WTPC:Data:Validate:Stocks");

        this.updateViewOnEnter();

        //transfer to viewer
        event.forwardTo(DataValidateStocksViewFL.class);
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
        this.getComboAccounts().setItems(this.dataValidateStocksModel.getAccountModels());
        this.getComboAccounts().setValue(this.dataValidateStocksModel.getAccountModels().get(0));
        //update the data model
        this.dataValidateStocksModel.setSelectedAccountModel(this.getComboAccounts().getValue());
    }

    private void updateViewOnEnterTickers()
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
                //do not want enabled on simple filter change in data provider
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

//    @Override
//    public void createMenuTabs()
//    {
//        //none; not changing top tabs
//        //todo: change top menu prefs icon route
//    }

    @Override
    public void createMenuTabs()
    {
        //none; not changing top tabs
        //todo: change top menu prefs icon route
    }
}
