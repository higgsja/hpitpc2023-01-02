package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import static com.helger.commons.string.StringHelper.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.menus.data.DataConst.*;
import com.vaadin.flow.component.grid.*;
import com.vaadin.flow.component.textfield.*;
import com.vaadin.flow.data.provider.*;
import com.vaadin.flow.data.value.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

/**
 * Provides view
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Component
@Route(value = ROUTE_DATA_EQUITIES_STOCKS, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_DATA + ":" + TITLE_PAGE_DATA_EQUITIES_STOCKS)
@NoArgsConstructor
@PermitAll
public class DataStocksView
    extends ViewBaseFL
    implements BeforeEnterObserver
{

    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl tpcService;
    @Autowired private DataStocksModel dataStocksModel;
    @Autowired private PrefsController prefsController;
    @Autowired private FinVizEquityInfoModelService equityInfoService;

    private Grid<FinVizEquityInfoModel> equityInfoGrid;

    private HeaderRow gridHeaderRow1;
    private HeaderRow gridHeaderRow2;
    private TextField filterTicker;
    private TextField filterSector;
    private TextField filterIndustry;

    FilterFinVizInfo gridFilter;

    @PostConstruct
    public void construct()
    {
        this.setSizeFull();
        this.addClassName("dataStocksView");

        this.dataStocksModel.getPrefs();

        this.add(this.titleFormat("Stocks"));

        this.gridSetup();
    }

    public final void gridSetup()
    {
        this.equityInfoGrid = new Grid<>();
        List<String> columns = new ArrayList<>();

        StringTokenizer tokenizer = new StringTokenizer(this.dataStocksModel.getStringColumns(), ",");
        while (tokenizer.hasMoreElements())
        {
            columns.add(tokenizer.nextToken());
        }

        this.equityInfoGrid.setPageSize(50);
        this.equityInfoGrid.setSizeFull();
        this.equityInfoGrid.addClassName("equity-grid");
        this.equityInfoGrid.setId("equity-grid");
        this.equityInfoGrid.setThemeName("dense");

        this.equityInfoGrid.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
        this.equityInfoGrid.setSelectionMode(Grid.SelectionMode.SINGLE);
        this.equityInfoGrid.setMultiSort(true);

        for (String column : columns)
        {
            switch (trim(column.toLowerCase()))
            {
                case "ticker":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getTicker)
                        .setHeader("Ticker")
                        .setWidth("85px")
                        .setFrozen(true)
                        .setKey("ticker")
                        .setSortProperty("ticker");
                    break;

                case "company":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getCompany)
                        .setHeader("Company")
                        .setWidth("130px")
                        .setResizable(true)
                        .setSortProperty("company");
                    break;

                case "sector":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getSector)
                        .setHeader("Sector")
                        .setWidth("130px")
                        .setKey("sector")
                        .setResizable(true)
                        .setSortProperty("sector");
                    break;

                case "industry":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getIndustry)
                        .setHeader("Industry")
                        .setWidth("130px")
                        .setKey("industry")
                        .setResizable(true)
                        .setSortProperty("industry");
                    break;

                case "country":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getCountry)
                        .setHeader("Country")
                        .setWidth("100px")
                        .setResizable(true)
                        .setSortProperty("country");
                    break;

                case "mktcap(b)":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getMktCap)
                        .setHeader("Cap(B)")
                        .setWidth("80px")
                        .setKey("mktcap")
                        .setSortProperty("mktcap")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "pe":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getPE)
                        .setHeader("PE")
                        .setWidth("70px")
                        .setSortProperty("pe")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "fwdpe":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getFwdPE)
                        .setHeader("PE")
                        .setWidth("70px")
                        .setKey("fwdpe")
                        .setSortProperty("fwdpe")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "peg":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getPEG)
                        .setHeader("PEG")
                        .setWidth("70px")
                        .setSortProperty("peg")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "div":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getDiv)
                        .setHeader("Div")
                        .setWidth("70px")
                        .setSortProperty("div")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "payoutratio":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getPayoutRatio)
                        .setHeader("Out")
                        .setWidth("70px")
                        .setKey("payout")
                        .setSortProperty("payout")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "eps":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getEPS)
                        .setHeader("EPS")
                        .setWidth("70px")
                        .setSortProperty("eps")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "eps/cy":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getEPSCY)
                        .setHeader("CY")
                        .setKey("epscy")
                        .setWidth("70px")
                        .setSortProperty("epscy")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "eps/ny":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getEPSNY)
                        .setHeader("NY")
                        .setKey("epsny")
                        .setWidth("70px")
                        .setSortProperty("epsny")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "eps/p5y":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getEPSP5Y)
                        .setHeader("P5Y")
                        .setKey("epsp5y")
                        .setWidth("70px")
                        .setSortProperty("epsp5y")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "eps/n5y":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getEPSN5Y)
                        .setHeader("N5Y")
                        .setKey("epsn5y")
                        .setWidth("70px")
                        .setSortProperty("epsn5y")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "beta":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getBeta)
                        .setHeader("Beta")
                        .setKey("beta")
                        .setWidth("70px")
                        .setSortProperty("beta")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "atr":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getATR)
                        .setHeader("ATR")
                        .setKey("atr")
                        .setWidth("70px")
                        .setSortProperty("atr")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "sma20":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getSMA20)
                        .setHeader("20D")
                        .setWidth("70px")
                        .setKey("sma20")
                        .setSortProperty("sma20")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "sma50":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getSMA50)
                        .setHeader("50D")
                        .setWidth("70px")
                        .setKey("sma50")
                        .setSortProperty("sma50")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "sma200":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getSMA200)
                        .setHeader("200D")
                        .setWidth("70px")
                        .setKey("sma200")
                        .setSortProperty("sma200")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "50dhi":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getHi50d)
                        .setHeader("HI50d")
                        .setKey("hi50d")
                        .setWidth("80px")
                        .setSortProperty("hi50d")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "50dlo":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getLo50d)
                        .setHeader("Lo50d")
                        .setKey("lo50d")
                        .setWidth("80px")
                        .setSortProperty("lo50d")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "52whi":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getHi52w)
                        .setHeader("Hi52w")
                        .setKey("hi52w")
                        .setWidth("78px")
                        .setSortProperty("hi52w")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "52wlo":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getLo52w)
                        .setHeader("Lo52w")
                        .setKey("lo52w")
                        .setWidth("78px")
                        .setSortProperty("lo52w")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "rsi":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getRSI)
                        .setHeader("RSI")
                        .setKey("rsi")
                        .setWidth("60px")
                        .setSortProperty("rsi")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "anrec":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getAnRec)
                        .setHeader("Rec")
                        .setWidth("70px")
                        .setKey("anrec")
                        .setSortProperty("anrec")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "price":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getPrice)
                        .setHeader("Price")
                        .setKey("price")
                        .setWidth("80px")
                        .setSortProperty("price")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "tgtprice":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getTgtPrice)
                        .setHeader("Price")
                        .setKey("tgtPrice")
                        .setWidth("80px")
                        .setSortProperty("tgtPrice")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "volume":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getVolume)
                        .setHeader("Volume")
                        .setKey("volume")
                        .setWidth("85px")
                        .setSortProperty("volume")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                case "earndate":
                    this.equityInfoGrid.addColumn(FinVizEquityInfoModel::getEarnDate)
                        .setHeader("Date")
                        .setWidth("150px")
                        .setKey("earndate")
                        .setSortProperty("earndate")
                        .setTextAlign(ColumnTextAlign.END);
                    break;

                default:
                    int i = 0;
            }
        }

        this.equityInfoGrid.setColumnReorderingAllowed(true);
        this.equityInfoGrid.recalculateColumnWidths();

        this.setHeaderRow2();
        this.setColumnFilters();

        this.dataProviderSetup();
        this.add(this.equityInfoGrid);
    }

    private void setHeaderRow2()
    {
        this.gridHeaderRow2 = this.equityInfoGrid.prependHeaderRow();
        //todo: if these columns are excluded, they would be null and break here
        if (this.equityInfoGrid.getColumnByKey("mktcap") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("mktcap")).setText("Mkt");
        }

        if (this.equityInfoGrid.getColumnByKey("mktcap") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("mktcap")).setText("Mkt");
        }

        if (this.equityInfoGrid.getColumnByKey("fwdpe") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("fwdpe")).setText("Fwd");
        }

        if (this.equityInfoGrid.getColumnByKey("payout") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("payout")).setText("Pay");
        }

        if (this.equityInfoGrid.getColumnByKey("sma20") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("sma20")).setText("SMA");
        }

        if (this.equityInfoGrid.getColumnByKey("sma50") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("sma50")).setText("SMA");
        }

        if (this.equityInfoGrid.getColumnByKey("sma200") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("sma200")).setText("SMA");
        }

        if (this.equityInfoGrid.getColumnByKey("tgtPrice") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("tgtPrice")).setText("Target");
        }

        if (this.equityInfoGrid.getColumnByKey("anrec") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("anrec")).setText("Anlst");
        }

        if (this.equityInfoGrid.getColumnByKey("earndate") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("earndate")).setText("Earnings");
        }

        if (this.equityInfoGrid.getColumnByKey("epscy") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("epscy")).setText("EPS");
        }

        if (this.equityInfoGrid.getColumnByKey("epsny") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("epsny")).setText("EPS");
        }

        if (this.equityInfoGrid.getColumnByKey("epsp5y") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("epsp5y")).setText("EPS");
        }

        if (this.equityInfoGrid.getColumnByKey("epsn5y") != null)
        {
            this.gridHeaderRow2.getCell(this.equityInfoGrid.getColumnByKey("epsn5y")).setText("EPS");
        }
    }

    private void dataProviderSetup()
    {
        this.gridFilter = new FilterFinVizInfo();

        DataProvider<FinVizEquityInfoModel, FilterFinVizInfo> dataProvider
            = DataProvider.fromFilteringCallbacks(
                query ->
            {
                return this.equityInfoService.findAll(query.getOffset(),
                    query.getLimit(), query.getFilter());
            },
                query ->
            {
                return this.equityInfoService.findAllCount(query.getOffset(),
                    query.getLimit(), query.getFilter());
            });

        var dp = dataProvider.withConfigurableFilter();

        dp.setFilter(gridFilter);

        this.equityInfoGrid.setItems(dp);
    }

    private void setColumnFilters()
    {
        //header row        
        this.gridHeaderRow1 = this.equityInfoGrid.appendHeaderRow();

        //ticker column filter
        this.filterTicker = new TextField();
        this.filterTicker.setWidth("95px");
        this.filterTicker.setWidthFull();
        this.filterTicker.setPlaceholder("Filter...");
        this.filterTicker.setClearButtonVisible(true);
        this.filterTicker.setValueChangeMode(ValueChangeMode.TIMEOUT);
        //add filter to header row
        this.gridHeaderRow1.getCell(this.equityInfoGrid.getColumnByKey("ticker")).setComponent(this.filterTicker);
        //add listener
        this.filterTicker.addValueChangeListener(event ->
        {
            this.gridFilter.setFilterTicker(event.getValue());
            this.equityInfoGrid.getDataProvider().refreshAll();
        });

        //sector column filter
        this.filterSector = new TextField();
        this.filterSector.setWidth("130px");
        this.filterSector.setWidthFull();
        this.filterSector.setPlaceholder("Filter...");
        this.filterSector.setClearButtonVisible(true);
        this.filterSector.setValueChangeMode(ValueChangeMode.TIMEOUT);
        //add filter to header row
        this.gridHeaderRow1.getCell(this.equityInfoGrid.getColumnByKey("sector")).setComponent(this.filterSector);
        //add listener
        this.filterSector.addValueChangeListener(event ->
        {
            this.gridFilter.setFilterSector(event.getValue());
            this.equityInfoGrid.getDataProvider().refreshAll();
        });

        //industry column filter
        this.filterIndustry = new TextField();
        this.filterIndustry.setWidth("130px");
        this.filterIndustry.setWidthFull();
        this.filterIndustry.setPlaceholder("Filter...");
        this.filterIndustry.setClearButtonVisible(true);
        this.filterIndustry.setValueChangeMode(ValueChangeMode.TIMEOUT);
        //add filter to header row
        this.gridHeaderRow1.getCell(this.equityInfoGrid.getColumnByKey("industry"))
            .setComponent(this.filterIndustry);
        //add listener
        this.filterIndustry.addValueChangeListener(event ->
        {
            this.gridFilter.setFilterIndustry(event.getValue());
            this.equityInfoGrid.getDataProvider().refreshAll();
        });
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        this.tpcService.AppTracking("TPC:Data:Equities:Stocks");

        if (prefsController.getPref("TPCDrawerClose").
            equalsIgnoreCase("yes"))
        {
            this.mainLayout.setDrawerOpened(false);
        }
    }
}
