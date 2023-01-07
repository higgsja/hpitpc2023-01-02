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

    //todo: should not have this here?
    @Autowired private DataValidateStocksModel dataValidateStocksModel;

    @Getter private VerticalLayout titleVL;

    private HorizontalLayout controlsHL;
    private HorizontalLayout comboBoxesHL;
    @Getter private ComboBox<EditAccountModel> comboAccounts;
    @Getter private ComboBox<TickerModel> comboTickers;
    private HorizontalLayout checkBoxesHL;
    @Getter private Checkbox checkboxSkip;
    @Getter private Checkbox checkboxValidated;
    private HorizontalLayout buttonsHL;
    @Getter private Button buttonSave;
    @Getter private Button buttonCancel;

    private VerticalLayout gridVL;
    @Getter private Grid<ValidateStockTransactionModel> grid;
    @Getter private FooterRow footer;

    @PostConstruct
    public void construct()
    {
        this.addClassName("dataValidateStocksView");

        this.add(this.titleFormat("Validate Stock Transactions"));
        
        this.setMinWidth("320px");
        this.setSizeFull();
//        this.setWidth("550px");
//        this.setHeight("100%");

//        this.setupViewer();
    }

    public void doControls()
    {
        this.comboAccounts = new ComboBox<>();
        this.comboTickers = new ComboBox<>();

        this.checkboxSkip = new Checkbox("Skip");
        this.checkboxValidated = new Checkbox("Validated");

        this.buttonSave = new Button("Save");
        this.buttonCancel = new Button("Cancel");

        this.comboBoxesHL = new HorizontalLayout(
            this.comboAccounts, this.comboTickers);
        this.comboBoxesHL.setClassName("stocksValidateControlsComboboxes");

        this.checkBoxesHL = new HorizontalLayout(
            this.checkboxSkip, this.checkboxValidated);
        this.checkBoxesHL.setClassName("stocksValidateControlsCheckboxes");

        this.buttonsHL = new HorizontalLayout(
            this.buttonSave, this.buttonCancel);
        this.buttonsHL.setClassName("stocksValidateControlsButtons");

        this.controlsHL = new HorizontalLayout(
            this.comboBoxesHL, this.checkBoxesHL, this.buttonsHL);
        this.controlsHL.setClassName("stocksValidateControls");

        this.add(this.controlsHL);
    }

    public void doGrid()
    {
        this.grid = new Grid<>();

        this.grid.addClassName("validateStocksGrid");
        this.grid.setThemeName("dense");

        this.grid.addThemeVariants(GridVariant.LUMO_NO_BORDER);
        this.grid.addThemeVariants(GridVariant.LUMO_COMPACT);
        this.grid.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
//        this.grid.setHeightFull();
        this.grid.setSelectionMode(Grid.SelectionMode.SINGLE);
        this.grid.setHeightByRows(true);

        this.footer = this.grid.appendFooterRow();

        this.grid
            .addColumn(ValidateStockTransactionModel::getEquityId)
            .setHeader("EquityId")
            .setTextAlign(ColumnTextAlign.CENTER)
            .setAutoWidth(true)
            .setFrozen(true)
            .setSortProperty("equityId");

        this.grid
            .addColumn(ValidateStockTransactionModel::getDtTrade)
            .setHeader("Trade Date")
            .setTextAlign(ColumnTextAlign.CENTER)
            .setAutoWidth(true)
            .setSortProperty("tradeDate");

        this.grid
            .addColumn(ValidateStockTransactionModel::getUnits)
            .setHeader("Units")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("units")
            .setKey("units");

        this.grid
            .addColumn(ValidateStockTransactionModel::getTradePrice)
            .setHeader("Trade Price")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("tradePrice");

        this.grid
            .addColumn(ValidateStockTransactionModel::getLastPrice)
            .setHeader("Last Price")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("lastPrice");

        this.grid
            .addColumn(ValidateStockTransactionModel::getFiTId)
            .setHeader("FiTId")
            .setTextAlign(ColumnTextAlign.END)
            .setAutoWidth(true)
            .setSortProperty("fiTId");

        this.grid
            .addColumn(ValidateStockTransactionModel::getTransactionType)
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
                dataValidateStocksModel.getGridDataProvider().refreshItem(vstm);
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

        this.gridVL = new VerticalLayout(grid);
        this.gridVL.setClassName("stocksValidateGrid");

        this.add(gridVL);
    }
    
    public void setupViewer()
    {
        this.doControls();

        this.doGrid();

//        this.comboAccounts.setItems(this.dataValidateStocksModel.getAccountModels());
//
//        this.comboTickers.setItems(this.dataValidateStocksModel.getTickerModels());

        //set check boxes
        this.dataValidateStocksModel.setSelectedSkip(this.dataValidateStocksModel.getSelectedSkip());
                this.checkboxSkip.setValue(this.dataValidateStocksModel.getSelectedSkip());
        this.dataValidateStocksModel.setSelectedValidated(this.dataValidateStocksModel
            .getSelectedValidated());
        this.checkboxValidated.setValue(this.dataValidateStocksModel.getSelectedValidated());

        //set buttons
        this.buttonSave.setEnabled(false);
        this.buttonCancel.setEnabled(false);

        //filter as appropriate
//        this.dataValidateStocksModel.filters(
//            this.dataValidateStocksModel.getSelectedSkip(),
//            this.dataValidateStocksModel.getSelectedValidated());
//
//        //refresh the grid
//        this.grid.getDataProvider().refreshAll();
    }
}
