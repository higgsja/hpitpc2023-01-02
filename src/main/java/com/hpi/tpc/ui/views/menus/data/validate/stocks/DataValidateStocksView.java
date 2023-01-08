package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.button.*;
import com.vaadin.flow.component.checkbox.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

/**
 * Provides view
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_DATA_VALIDATE_STOCKS, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA + ":" + TITLE_PAGE_DATA_VALIDATE + ":" + TITLE_PAGE_DATA_EQUITIES_STOCKS)
@org.springframework.stereotype.Component
@PermitAll
@NoArgsConstructor
public class DataValidateStocksView
    extends ViewBase
{

    private DataValidateStocksControlsHL controlsHL;

    @Getter private VerticalLayout titleVL;
    private DataValidateStocksGrid grid;

    @PostConstruct
    public void construct()
    {
        this.addClassName("dataValidateStocksView");
        this.setMinWidth("320px");
        this.setSizeFull();

        this.add(this.titleFormat("Validate Stock Transactions"));

        this.controlsHL = new DataValidateStocksControlsHL();
        this.add(this.controlsHL);

        this.grid = new DataValidateStocksGrid();
        this.add(this.grid.getGridVL());
    }

    public ComboBox<EditAccountModel> getComboAccounts()
    {
        return this.controlsHL.getComboAccounts();
    }

    public ComboBox<TickerModel> getComboTickers()
    {
        return this.controlsHL.getComboTickers();
    }

    public Checkbox getCheckboxSkip()
    {
        return this.controlsHL.getCheckboxSkip();
    }

    public void setCheckboxSkipValue(Boolean skip)
    {
        this.controlsHL.getCheckboxSkip().setValue(skip);
    }

    public Boolean getCheckboxSkipValue()
    {
        return this.controlsHL.getCheckboxSkip().getValue();
    }

    public Checkbox getCheckboxValidated()
    {
        return this.controlsHL.getCheckboxValidated();
    }

    public void setCheckboxValidatedValue(Boolean skip)
    {
        this.controlsHL.getCheckboxValidated().setValue(skip);
    }

    public Boolean getCheckboxValidatedValue()
    {
        return this.controlsHL.getCheckboxValidated().getValue();
    }

    public Button getButtonSave()
    {
        return this.controlsHL.getButtonSave();
    }

    public void setButtonSaveEnabled(Boolean enabled)
    {
        this.controlsHL.getButtonSave().setEnabled(enabled);
    }

    public Button getButtonCancel()
    {
        return this.controlsHL.getButtonCancel();
    }

    public void setButtonCancelEnabled(Boolean enabled)
    {
        this.controlsHL.getButtonCancel().setEnabled(enabled);
    }
    
    public Grid<ValidateStockTransactionModel> getGrid(){
        return this.grid.getGrid();
    }
    
    public FooterRow getFooterRow(){
        return this.grid.getFooterRow();
    }
}
