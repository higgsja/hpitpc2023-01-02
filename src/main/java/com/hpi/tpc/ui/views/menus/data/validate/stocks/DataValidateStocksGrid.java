package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.data.entities.*;
import com.vaadin.flow.component.checkbox.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.component.orderedlayout.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Component
public class DataValidateStocksGrid
{

    @Autowired private DataValidateStocksModel dataValidateStocksModel;

    @Getter private final VerticalLayout gridVL;
    @Getter private final Grid<ValidateStockTransactionModel> grid;
    @Getter private final FooterRow footerRow;

    public DataValidateStocksGrid()
    {
        this.grid = new Grid<>();
        this.footerRow = this.grid.appendFooterRow();
        this.gridVL = new VerticalLayout(grid);
        this.doLayout();
    }

    private void doLayout()
    {
        this.grid.addClassName("validateStocksGrid");
        this.grid.setThemeName("dense");

        this.grid.addThemeVariants(GridVariant.LUMO_NO_BORDER);
        this.grid.addThemeVariants(GridVariant.LUMO_COMPACT);
        this.grid.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);

        this.grid.setSelectionMode(Grid.SelectionMode.SINGLE);
        this.grid.setHeightByRows(true);

        this.grid.addColumn(ValidateStockTransactionModel::getEquityId)
            .setHeader("EquityId")
            .setTextAlign(ColumnTextAlign.CENTER)
            .setAutoWidth(true)
            .setFrozen(true)
            .setSortProperty("equityId");

        this.grid.addColumn(ValidateStockTransactionModel::getDtTrade)
            .setHeader("Trade Date")
            .setTextAlign(ColumnTextAlign.CENTER)
            .setAutoWidth(true)
            .setSortProperty("tradeDate");

        this.grid.addColumn(ValidateStockTransactionModel::getUnits)
            .setHeader("Units")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("units")
            .setKey("units");

        this.grid.addColumn(ValidateStockTransactionModel::getTradePrice)
            .setHeader("Trade Price")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("tradePrice");

        this.grid.addColumn(ValidateStockTransactionModel::getLastPrice)
            .setHeader("Last Price")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("lastPrice");

        this.grid.addColumn(ValidateStockTransactionModel::getFiTId)
            .setHeader("FiTId")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("fiTId");

        this.grid.addColumn(ValidateStockTransactionModel::getTransactionType)
            .setHeader("TransType")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("transType");

        this.grid.addComponentColumn(vstm ->
        {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(vstm.getBSkip());
            checkBox.addValueChangeListener(event ->
            {
                //make the change
                vstm.setBSkip(event.getValue());
                //inform listeners
                this.dataValidateStocksModel.getGridDataProvider().refreshItem(vstm);
            });

            return checkBox;
        })
            .setHeader("Skip")
            .setAutoWidth(true)
            .setTextAlign(ColumnTextAlign.CENTER);

        this.grid.addComponentColumn(vstm ->
        {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(vstm.getBValidated());
            checkBox.addValueChangeListener(event ->
            {
                //make the change
                vstm.setBValidated(event.getValue());
                //inform listeners
                dataValidateStocksModel.getGridDataProvider().refreshItem(vstm);
            });

            return checkBox;
        })
            .setHeader("Valid")
            .setAutoWidth(true)
            .setTextAlign(ColumnTextAlign.CENTER);

        //disallow client changes
        this.grid.addComponentColumn(votm ->
        {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(votm.getBComplete());

            checkBox.setEnabled(false);

            return checkBox;
        })
            .setHeader("Complete")
            .setAutoWidth(true)
            .setTextAlign(ColumnTextAlign.CENTER);

        this.grid.setColumnReorderingAllowed(true);
        this.grid.recalculateColumnWidths();

//        this.gridVL = new VerticalLayout(grid);
        this.gridVL.setClassName("stocksValidateGrid");
    }
}
