package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.button.*;
import com.vaadin.flow.component.checkbox.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

/**
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Route(value = DATA_VALIDATE_STOCKS_VIEW, layout = MainLayout.class)
@PageTitle(TITLE_TAB_DATA_VALIDATE + ": " + TITLE_DATA_STOCKS)
@org.springframework.stereotype.Component
@PermitAll
//@CssImport("./styles/validateStocks.css")
//@CssImport(value = "./styles/dataValidateStocks-grid.css",
//           id = "validate-stocks-grid", themeFor = "vaadin-grid")
public class DataValidateStocksViewer
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
    @Autowired private DataValidateStocksModel stocksModel;

    @Getter private VerticalLayout titleVL;
    private Label title;

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

    public DataValidateStocksViewer() {
        this.setClassName("stocksValidateContent");
        //this.setSizeFull();
    }

    @PostConstruct
    private void construct() {
    }

    public void doTitle() {
        this.title = new Label(
            "Validate Stock Transactions");
        this.title.getElement().getStyle().set("font-size", "14px");
        this.title.getElement().getStyle().set("font-family", "Arial");
        this.title.getElement().getStyle().set("color", "#169FF3");
        this.title.getElement().getStyle().set("line-height", "1em");

        this.titleVL = new VerticalLayout(this.title);
        this.titleVL.setClassName("stocksValidateTitle");

        this.add(this.titleVL);
    }

    public void doControls() {
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

    public void doGrid() {
        this.grid = new Grid<>();

        this.grid.addClassName("validate-stocks-grid");
        this.grid.setId("validate-stocks-grid");
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

        this.grid.addComponentColumn(vstm -> {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(vstm.getBSkip());
            checkBox.addValueChangeListener(event -> {
                //make the change
                vstm.setBSkip(event.getValue());
                //inform listeners
                stocksModel.getGridDataProvider().refreshItem(vstm);
            });

            return checkBox;
        })
            .setHeader("Skip")
            .setAutoWidth(true)
            .setTextAlign(ColumnTextAlign.CENTER);

        this.grid.addComponentColumn(vstm -> {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(vstm.getBValidated());
            checkBox.addValueChangeListener(event -> {
                //make the change
                vstm.setBValidated(event.getValue());
                //inform listeners
                stocksModel.getGridDataProvider().refreshItem(vstm);
            });

            return checkBox;
        })
            .setHeader("Valid")
            .setAutoWidth(true)
            .setTextAlign(ColumnTextAlign.CENTER);

        //disallow client changes
        this.grid.addComponentColumn(votm -> {
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

    @PreDestroy
    private void destruct() {
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        int i = 0;
    }

    public void setupViewer() {
        this.removeAll();
        this.doTitle();

        this.doControls();

        this.doGrid();

        this.comboAccounts.setItems(this.stocksModel.getAccountModels());

        this.comboTickers.setItems(this.stocksModel.getTickerModels());

        //set check boxes
        this.stocksModel.setSelectedSkip(this.stocksModel.getSelectedSkip());
        this.stocksModel.setSelectedValidated(this.stocksModel
            .getSelectedValidated());
        this.checkboxSkip.setValue(this.stocksModel.getSelectedSkip());
        this.checkboxValidated.setValue(this.stocksModel.getSelectedValidated());

        //set buttons
        this.buttonSave.setEnabled(false);
        this.buttonCancel.setEnabled(false);

        //filter as appropriate
        this.stocksModel.filters(
            this.stocksModel.getSelectedSkip(),
            this.stocksModel.getSelectedValidated());

        //refresh the grid
        this.grid.getDataProvider().refreshAll();
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event) {
        this.stocksModel.writePrefs(
            this.checkboxSkip.getValue() ? "Yes" : "No",
            this.checkboxValidated.getValue() ? "Yes" : "No");
    }
}
