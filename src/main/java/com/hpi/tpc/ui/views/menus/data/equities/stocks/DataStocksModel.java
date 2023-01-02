package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import com.hpi.tpc.ui.views.menus.data.Attribute;
import com.flowingcode.vaadin.addons.twincolgrid.*;
import com.hpi.tpc.prefs.*;
import com.vaadin.flow.spring.annotation.*;
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
@UIScope
@VaadinSessionScope
@Component
@NoArgsConstructor
public class DataStocksModel
{

    @Autowired private JdbcTemplate jdbcTemplate;
    @Autowired private PrefsController prefsController;

    @Getter private String stringColumns;
    @Getter private List<Attribute> availAttributes;
    @Getter private LinkedHashSet<Attribute> selectedAttributes;

    @PostConstruct
    private void construct()
    {
        this.availAttributes = new ArrayList<>();
        //this.selectedAttributes = new HashSet<>();
        this.selectedAttributes = new LinkedHashSet<>();
    }

    public void getPrefs()
    {
        this.prefsController.readPrefsByPrefix("DataStockInfo");
        this.stringColumns = this.prefsController.getPref("DataStockInfoColumns");
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

    public void initData()
    {
        SqlRowSet rs;
        String columnsCSV;
        StringTokenizer tokenizer;
        Attribute tempAttribute;
        Boolean bFound;
        String tokenAdd;

        columnsCSV = null;
        this.selectedAttributes.clear();
        this.availAttributes.clear();

        //populate selected
        this.getPrefs();

        tokenizer = new StringTokenizer(this.stringColumns, ",");
        while (tokenizer.hasMoreElements())
        {
            this.selectedAttributes.add(new Attribute(tokenizer.nextToken().trim()));
        }

        //get full list of attributes without selected
        String sql = "select KeyValue from hlhtxc5_dmOfx.TPCPreferences where JoomlaId = 0 and KeyId = 'DataStockInfoColumns';";
        rs = jdbcTemplate.queryForRowSet(sql);

        while (rs.next())
        {
            //only one row
            columnsCSV = rs.getString("KeyValue");
        }

        tokenizer = new StringTokenizer(columnsCSV, ",");

        //add to available only if not already selected
        while (tokenizer.hasMoreElements())
        {
            tempAttribute = new Attribute(tokenizer.nextToken().trim());

            if (!this.selectedAttributes.contains(tempAttribute))
            {
                this.availAttributes.add(tempAttribute);
            }
        }
        this.availAttributes.sort(Comparator.comparing(Attribute::getAttribute));
    }
}
