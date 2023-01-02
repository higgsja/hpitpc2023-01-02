package com.hpi.tpc.ui.views.coaching.gains;

import com.hpi.tpc.app.security.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.stereotype.*;

@UIScope
@VaadinSessionScope
@Component
@NoArgsConstructor
public class GainsControlsHL1
    extends ControlsHLBase
    implements ControlsHLInterface
{

    @Autowired public GainsModel gainsMVCModel;
    @Autowired public JdbcTemplate jdbcTemplate;

    //private GainsMVCView gainsMVCView = null;
    @Getter private final ComboBox<PositionModel> cbPositions = new ComboBox();
    @Getter private final ComboBox<TradeTacticModel> cbTactics = new ComboBox();
    @Getter private final ComboBox<TimeframeModel> cbTimeframe = new ComboBox();

    @PostConstruct
    public void construct_a()
    {
        //docs indicate abstract postConstruct will not be hit but it is
        this.addClassName("gainsControlsHL1");
    }

    @Override
    public void doLayout()
    {
        this.setupTimeframe();
        this.setupPositions();
        this.setupTactics();

        this.add(this.cbPositions, this.cbTactics, this.cbTimeframe);
    }

    /**
     * setup methods are used on initialization of the page only
     */
    private void setupPositions()
    {
        this.cbPositions.setWidth("115px");

        //initial state: All positions, All tactics, YTD timeframe, All equityType
        this.setPositions((this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe().equalsIgnoreCase("Open")
            ? "PositionsOpen" : "PositionsClosed"), true);
    }

    /**
     * Come here because of a change in the position selection
     * just change to that selection
     * Come here because of a change elsewhere that causes a change in the position list
     * have to re-query for the right list that fits the criterion
     *
     * @param dataTable
     * @param bInit
     */
    protected void setPositions(String dataTable, Boolean bInit)
    {
        List<PositionModel> positions;
        List<PositionModel> tempPositionModels;

        positions = new ArrayList<>();

        positions.add(PositionModel.builder()
            .ticker("--All--")
            .build());

        //!! this is not using timeFrame
        //first time through gets zero records
        tempPositionModels = jdbcTemplate.query(String
            .format(PositionModel.POSITION_TACTIC_TIMEFRAME_EQUITYTYPE,
                dataTable, //table
                this.gainsMVCModel.getSelectedPositionModel().getTicker(), //ticker
                this.gainsMVCModel.getSelectedPositionModel().getTicker(), //ticker
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(), //tacticId
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(), //tacticId
                this.gainsMVCModel.getSqlTimeframe(), //timeframe
                this.gainsMVCModel.getSelectedEquityTypeModel().getEquityType(), //equityType
                this.gainsMVCModel.getSelectedEquityTypeModel().getEquityType(), //equityType
                SecurityUtils.getUserId()),
            new PositionMapper2());

        //put the rest of equityTypes into the array
        for (PositionModel pm : tempPositionModels)
        {
            positions.add(pm);
        }

        if (bInit)
        {
            this.gainsMVCModel.setPositionModels(positions);

            //set the combobox content
            this.cbPositions.setItems(this.gainsMVCModel.getPositionModels());

            this.cbPositions.setValue(this.gainsMVCModel.getPositionModels().get(0));
            this.gainsMVCModel.setSelectedPositionModel(this.gainsMVCModel.getPositionModels().get(0));
        } else
        {
            //odd behavior in combobox if we switch to a new list that is the same as the old list
            //  do not do that
            PositionModel[] array1 = positions.toArray(new PositionModel[0]);
            PositionModel[] array2 = this.gainsMVCModel.getPositionModels().toArray(new PositionModel[0]);
            if (!Arrays.equals(array1, array2))
            {
                this.gainsMVCModel.setPositionModels(positions);
                //change pick list
                this.cbPositions.setItems(this.gainsMVCModel.getPositionModels());
                this.cbPositions.setValue(this.gainsMVCModel.getSelectedPositionModel());
            }
        }
    }

    /**
     * reset the combobox to tactics that exist given initial selections
     * set the cursor on the first tactic
     */
    private void setupTactics()
    {
        this.cbTactics.setWidth("115px");

        this.setTactics((this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe().equalsIgnoreCase("Open")
            ? "PositionsOpen" : "PositionsClosed"), true);
    }

    /**
     * actions on selecting a different tactic
     * reset ticker list to those with this tactic plus other current selections
     * reset tactics list to this tactic
     * set tactics selection to this one
     *
     * @param dataTable
     * @param bInit
     */
    protected void setTactics(String dataTable, Boolean bInit)
    {
        List<TradeTacticModel> tactics;
        List<TradeTacticModel> tempTactics;

        tactics = new ArrayList<>();

        //add the All choice
        tactics.add(TradeTacticModel.builder()
            .tacticId(-1)
            .tacticName("--All--")
            .build());

        //not using timeframe
        tempTactics = jdbcTemplate.query(
            String.format(TradeTacticModel.TACTICS,
                dataTable,
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSqlTimeframe(), //timeframe
                this.gainsMVCModel.getSelectedEquityTypeModel().getEquityType(), //equityType
                this.gainsMVCModel.getSelectedEquityTypeModel().getEquityType(), //equityType
                SecurityUtils.getUserId()),
            new TradeTacticMapper());

        //add tradeTactics to the array
        for (TradeTacticModel ttm : tempTactics)
        {
            tactics.add(ttm);
        }

        if (bInit)
        {
            //set array content
            this.gainsMVCModel.setTradeTacticModels(tactics);

            // set combobox content        
            this.cbTactics.setItems(tactics);

            this.cbTactics.setValue(this.gainsMVCModel.getTradeTacticModels().get(0));
            this.gainsMVCModel.setSelectedTradeTacticModel(this.gainsMVCModel.getTradeTacticModels().get(0));
        } else
        {
            //odd behavior in combobox if we switch to a new list that is the same as the old list
            //  do not do that
            TradeTacticModel[] array1 = tactics.toArray(new TradeTacticModel[0]);
            TradeTacticModel[] array2 = this.gainsMVCModel.getTradeTacticModels().toArray(new TradeTacticModel[0]);
            if (!Arrays.equals(array1, array2))
            {
                this.gainsMVCModel.setTradeTacticModels(tactics);
                //change pick list
                this.cbTactics.setItems(this.gainsMVCModel.getTradeTacticModels());
                this.cbTactics.setValue(this.gainsMVCModel.getSelectedTradeTacticModel());
            }
        }
    }

    private void setupTimeframe()
    {
        this.cbTimeframe.setWidth("148px");

        //open uses positinsOpen; all others use positionsClosed
        this.setTimeframe(true);
    }

    /**
     * Establish the list of available timeframes for the selection combo box
     *
     * @param bInit
     */
    protected void setTimeframe(Boolean bInit)
    {
        List<PositionModel> tmpPositions;
        ArrayList<TimeframeModel> tmpTimeframes;

        tmpTimeframes = new ArrayList<>();

        //add timeframes where data exists: multiple queries to see what
        //  transactions are available
        //todo: optimize to reduce queries: 
        //open
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsOpen",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_OPEN, //timeframe
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.OPEN)
                .build());
        }

        //year
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_YTD,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.YTD)
                .build());
        }

        //quarter
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_QUARTER,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.QUARTER)
                .build());
        }

        //month
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_MONTH,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.MONTH)
                .build());
        }

        //week
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_WEEK,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.WEEK)
                .build());
        }

        //last year
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_LAST_YEAR,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.LAST_YEAR)
                .build());
        }

        //last quarter
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_LAST_QUARTER,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.LAST_QUARTER)
                .build());
        }

        //last month
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_LAST_MONTH,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.LAST_MONTH)
                .build());
        }

        //last week
        tmpPositions = jdbcTemplate.query(
            String.format(TimeframeModel.SQL_TIMEFRAMES,
                "PositionsClosed",
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                PositionModel.SQL_LAST_WEEK,
                SecurityUtils.getUserId()), //all equityType
            new PositionMapper2());

        if (tmpPositions.size() > 0)
        {
            tmpTimeframes.add(TimeframeModel.builder()
                .timeframe(TimeframeModel.LAST_WEEK)
                .build());
        }

        if (bInit)
        {
            this.gainsMVCModel.setTimeframes(tmpTimeframes);

            this.cbTimeframe.setItems(this.gainsMVCModel.getTimeframes());
            this.cbTimeframe.setValue(this.gainsMVCModel.getSelectedTimeframeModel());
        } else
        {
            //odd behavior in combobox if we switch to a new list that is the same as the old list
            //  do not do that
            TimeframeModel[] array1 = tmpTimeframes.toArray(new TimeframeModel[0]);
            TimeframeModel[] array2 = this.gainsMVCModel.getTimeframes().toArray(new TimeframeModel[0]);
            if (!Arrays.equals(array1, array2))
            {
                this.gainsMVCModel.setTimeframes(tmpTimeframes);
                //change pick list
                this.cbTimeframe.setItems(this.gainsMVCModel.getTimeframes());
                this.cbTimeframe.setValue(this.gainsMVCModel.getSelectedTimeframeModel());
            }
        }
    }
}
