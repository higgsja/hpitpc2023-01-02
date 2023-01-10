package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.button.*;
import com.vaadin.flow.component.checkbox.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.security.*;
import org.springframework.stereotype.*;

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
@Component
@PermitAll
public class DataValidateStocksViewFL
    extends ViewBaseFL
{
    private final DataValidateStocksViewVL dataValidateStocksViewVL;
    private final DataValidateStocksTitleVL dataValidateStocksTitleVL;
    private final DataValidateStocksControlsHL dataValidateStocksControlsHL;
    private final DataValidateStocksGridVL dataValidateStocksGridVL;

    public DataValidateStocksViewFL()
    {
        this.addClassName("dataValidateStocksViewFL");
        this.dataValidateStocksViewVL = new DataValidateStocksViewVL();
        this.add(this.dataValidateStocksViewVL);
        
        this.dataValidateStocksTitleVL = new DataValidateStocksTitleVL();
        this.dataValidateStocksViewVL.add(this.dataValidateStocksTitleVL);
        
        this.dataValidateStocksControlsHL = new DataValidateStocksControlsHL();
        this.dataValidateStocksViewVL.add(this.dataValidateStocksControlsHL);
        
        this.dataValidateStocksGridVL = new DataValidateStocksGridVL();
        this.dataValidateStocksViewVL.add(this.dataValidateStocksGridVL);
    }

    public ComboBox<EditAccountModel> getComboAccounts()
    {
        return this.dataValidateStocksControlsHL.getComboAccounts();
    }

    public ComboBox<TickerModel> getComboTickers()
    {
        return this.dataValidateStocksControlsHL.getComboTickers();
    }

    public Checkbox getCheckboxSkip()
    {
        return this.dataValidateStocksControlsHL.getCheckboxSkip();
    }

    public void setCheckboxSkipValue(Boolean skip)
    {
        this.dataValidateStocksControlsHL.getCheckboxSkip().setValue(skip);
    }

    public Boolean getCheckboxSkipValue()
    {
        return this.dataValidateStocksControlsHL.getCheckboxSkip().getValue();
    }

    public Checkbox getCheckboxValidated()
    {
        return this.dataValidateStocksControlsHL.getCheckboxValidated();
    }

    public void setCheckboxValidatedValue(Boolean skip)
    {
        this.dataValidateStocksControlsHL.getCheckboxValidated().setValue(skip);
    }

    public Boolean getCheckboxValidatedValue()
    {
        return this.dataValidateStocksControlsHL.getCheckboxValidated().getValue();
    }

    public Button getButtonSave()
    {
        return this.dataValidateStocksControlsHL.getButtonSave();
    }

    public void setButtonSaveEnabled(Boolean enabled)
    {
        this.dataValidateStocksControlsHL.getButtonSave().setEnabled(enabled);
    }

    public Button getButtonCancel()
    {
        return this.dataValidateStocksControlsHL.getButtonCancel();
    }

    public void setButtonCancelEnabled(Boolean enabled)
    {
        this.dataValidateStocksControlsHL.getButtonCancel().setEnabled(enabled);
    }

    public Grid<ValidateStockTransactionModel> getGrid()
    {
        return this.dataValidateStocksGridVL.getGrid();
    }

    public FooterRow getFooterRow()
    {
        return this.dataValidateStocksGridVL.getFooterRow();
    }
}
