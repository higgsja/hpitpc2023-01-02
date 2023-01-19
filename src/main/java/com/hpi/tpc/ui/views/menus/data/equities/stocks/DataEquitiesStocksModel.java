package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import com.hpi.tpc.ui.views.menus.data.Attribute;
import com.flowingcode.vaadin.addons.twincolgrid.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.vaadin.flow.data.provider.*;
import java.util.*;
import javax.annotation.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.support.rowset.*;
import org.springframework.stereotype.*;

/**
 * handles state of application
 * contains objects representing the data
 * provides ways to query and change the data
 * responds to requests from View and instructions from Controller
 */
@Component
public class DataEquitiesStocksModel
{

    @Autowired private JdbcTemplate jdbcTemplate;
//    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private FinVizEquityInfoModelService equityInfoService;
    @Autowired private PrefsController prefsController;

    @Getter private String stringColumns;
    @Getter private List<Attribute> availableAttributes;
    @Getter private HashSet<Attribute> selectedAttributes;
    @Getter private FilterFinVizInfo gridFilter;
    @Getter private ConfigurableFilterDataProvider<FinVizEquityInfoModel, 
        Void, FilterFinVizInfo> dataProvider;

    public DataEquitiesStocksModel()
    {
    }

    @PostConstruct
    private void construct()
    {
        this.availableAttributes = new ArrayList<>();

        this.selectedAttributes = new LinkedHashSet<>();
        
        this.dataProvider = null;
    }

    public void getPrefs(String prefs)
    {
        this.prefsController.readPrefsByPrefix(prefs);
        this.stringColumns = this.prefsController.getPref("DataEquitiesStocksColumns");
    }

    public void writePrefs(TwinColGrid<Attribute> twinColGrid)
    {
        this.stringColumns = "";

        twinColGrid.getSelectionGrid().getListDataView().getItems().forEachOrdered(
            attribute ->
        {
            this.stringColumns += attribute + ", ";
        }
        );

        this.stringColumns = this.stringColumns.substring(0, this.stringColumns.length() - 2);

        this.prefsController.setPref("DataStockInfoColumns", this.stringColumns);

        this.prefsController.writePrefsByPrefix("DataStockInfo");
    }

    public void initAttributeData()
    {
        SqlRowSet rs;
        String columnsCSV;
        StringTokenizer tokenizer;
        Attribute tempAttribute;

        columnsCSV = null;
        this.selectedAttributes.clear();
        this.availableAttributes.clear();

        //populate selected
        tokenizer = new StringTokenizer(this.stringColumns, ",");
        while (tokenizer.hasMoreElements())
        {
            this.selectedAttributes.add(new Attribute(tokenizer.nextToken().trim()));
        }
        
        //get full list of attributes without selected
        String sql = "select KeyValue from hlhtxc5_dmOfx.TPCPreferences where JoomlaId = 0 and KeyId = 'DataEquitiesStocksColumns';";
        rs = jdbcTemplate.queryForRowSet(sql);

        while (rs.next())
        {
            //only one row
            columnsCSV = rs.getString("KeyValue");
        }

        tokenizer = new StringTokenizer(columnsCSV, ",");
        
        //add to available only if not already in selected
        while (tokenizer.hasMoreElements())
        {
            tempAttribute = new Attribute(tokenizer.nextToken().trim());

            if (!this.selectedAttributes.contains(tempAttribute))
            {
                this.availableAttributes.add(tempAttribute);
            }
        }
        
        //sort available
        this.availableAttributes.sort(Comparator.comparing(Attribute::getAttribute));
    }
    
    public void finVizEquityInfoModelGridDataProviderSetup()
    {
        //todo: likely does not take a ConfigurableFilterDataProvider
        //we are actually filtering in the query
        //this means get a new empty filter
        this.gridFilter = new FilterFinVizInfo();
        
        DataProvider<FinVizEquityInfoModel, FilterFinVizInfo> dp = DataProvider.fromFilteringCallbacks(
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

        this.dataProvider = dp.withConfigurableFilter();
            
        this.dataProvider.setFilter(gridFilter);
        
//        this.dataProvider = dp;

//        this.equityInfoGrid.setItems(dp);
    }
    
     /**
     * retrieves data for the grid
     */
//    public void updateGridData()
//    {
//        List<ValidateStockTransactionModel> aList;
//        ValidateStockTransactionModel tmpVstm;
//
//        this.dbList.clear();
//
//        //refresh grid data
//        aList = serviceTPC.getEquitiesStockTransactionModels(
//            this.selectedAccountModel, this.selectedTickerModel);
//        for (ValidateStockTransactionModel model : aList)
//        {
//            tmpVstm = ValidateStockTransactionModel.builder()
//                .joomlaId(model.getJoomlaId())
//                .dbAcctId(model.getDbAcctId())
//                .equityId(model.getEquityId())
//                .ticker(model.getTicker())
//                .secName(model.getSecName())
//                .lastPrice(model.getLastPrice())
//                .dtAsOf(model.getDtAsOf())
//                .units(model.getUnits())
//                .tradePrice(model.getTradePrice())
//                .markUpDn(model.getMarkUpDn())
//                .commission(model.getCommission())
//                .taxes(model.getTaxes())
//                .fees(model.getFees())
//                .total(model.getTotal())
//                .brokerId(model.getBrokerId())
//                .dtTrade(model.getDtTrade())
//                .fiTId(model.getFiTId())
//                .transactionType(model.getTransactionType())
//                .skip(model.getSkip())
//                .bSkip(model.getBSkip())
//                .validated(model.getValidated())
//                .bValidated(model.getBValidated())
//                .complete(model.getComplete())
//                .bComplete(model.getBComplete())
//                .build();
//            this.dbList.add(tmpVstm);
//        }
//
//        this.gridDataProvider = new ListDataProvider<>(aList);
//        this.gridDataProvider.refreshAll();
//    }
}
