package com.hpi.tpc.ui.views.coaching.gains;

import com.hpi.tpc.ui.views.baseClass.MVCView2WideBase;
import com.github.appreciated.apexcharts.*;
import com.hpi.tpc.charts.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import static com.hpi.tpc.ui.views.coaching.CoachingConst.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.dependency.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.text.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.stereotype.*;

@NoArgsConstructor
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_COACHING_GAINS, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_COACHING + ": " + TITLE_COACHING_GAINS)
@Component
@CssImport("./styles/coachingGains.css")
@PermitAll
public class GainsView
    extends MVCView2WideBase
    implements BeforeEnterObserver, BeforeLeaveObserver,
    MVCView2WideInterface
{

    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private JdbcTemplate jdbcTemplate;
    @Autowired private PrefsController prefsController;
    @Autowired private GainsModel gainsMVCModel;
    @Autowired private GainsPositionGrid coachingPositionGrid;
    @Autowired private GainsControlsHL1 gainsControlsHL1;
    @Autowired private GainsControlsHL2 gainsControlsHL2;

    private VerticalLayout chartVL;

    @PostConstruct
    @Override
    protected void construct()
    {
        //hit
        super.construct();
        this.addClassName("gainsView");
        this.setId("gainsContent");

        this.rightVL.setWidth("850px");
        this.leftVL.setWidth("550px");

        this.gainsMVCModel.getPrefs();

        this.doInitSelections();

        this.setupLeftVL("Gains");
        this.setupRightVL("Positions");

        this.doSelectionListenersAdd();
    }

    @Override
    protected void destruct()
    {
        //hit
        super.destruct();
    }

    private void doInitSelections()
    {
        this.gainsMVCModel.setSelectedPositionModel(PositionModel.builder()
            .ticker("--All--")
            .build());
        this.gainsMVCModel.setSelectedTradeTacticModel(TradeTacticModel.builder()
            .tacticId(-1)
            .tacticName("--All--")
            .build());
        this.gainsMVCModel.setSelectedTimeframeModel(TimeframeModel.builder()
            .timeframe(TimeframeModel.YTD)
            .build());
        this.gainsMVCModel.setSqlTimeframe(PositionModel.SQL_YTD);
        this.gainsMVCModel.setSelectedEquityTypeModel(EquityTypeModel.builder()
            .equityType("--All--")
            .build());
        this.gainsMVCModel.setSelectedChartType("$");
    }

    private void doSelectionListenersAdd()
    {
        //positions
        this.listeners.add(this.gainsControlsHL1.getCbPositions().addValueChangeListener(position ->
        {
            //eliminate recursion
            if (this.gainsMVCModel.getBInSelections())
            {
                return;
            }

            //reset the selectedTicker
            this.gainsMVCModel.setSelectedPositionModel(position.getValue());

            //reset the selections
            this.doResetOnSelections(position.getValue(), null, null, null, null);
        }));

        //tactics
        this.listeners.add(this.gainsControlsHL1.getCbTactics().addValueChangeListener(event ->
        {
            //eliminate recursion
            if (this.gainsMVCModel.getBInSelections())
            {
                return;
            }

            //reset the selectedTradeTactic
            this.gainsMVCModel.setSelectedTradeTacticModel(event.getValue());

            //reset the selections
            this.doResetOnSelections(null, event.getValue().getTacticId(), null, null, null);
        }));

        //timeframe
        this.listeners.add(this.gainsControlsHL1.getCbTimeframe().addValueChangeListener(event ->
        {
            //eliminate recursion
            if (this.gainsMVCModel.getBInSelections())
            {
                return;
            }

            //reset selectedTimeframe
            this.gainsMVCModel.setSelectedTimeframeModel(event.getValue());

            //reset the selections
            this.doResetOnSelections(null, null,
                this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe(), null, null);
        }));

        //equityType
        this.listeners.add(this.gainsControlsHL2.getCbEquityType().addValueChangeListener(event ->
        {
            //eliminate recursion
            if (this.gainsMVCModel.getBInSelections())
            {
                return;
            }

            //reset selectedEquityType
            this.gainsMVCModel.setSelectedEquityTypeModel(event.getValue());

            //reset the selections
            this.doResetOnSelections(null, null, null, event.getValue(), null);
        }));

        //radio buttons
        this.listeners.add(this.gainsControlsHL2.getRadioButtonGroup().addValueChangeListener(event ->
        {
            if (event.getValue() == null)
            {
                //should never happen
                int i = 0;
            } else
            {
                this.gainsMVCModel.setSelectedChartType(event.getValue());

                //reset the selections
                this.doResetOnSelections(null, null, null, null, event.getValue());
            }
        }));
    }

    @Override
    public void setupLeftVL(String leftVLTitle)
    {
        ApexCharts chart;

        this.leftVL.setMinWidth("360px");
        this.leftVL.setWidth("550px");
        this.leftVL.setHeight("100%");

        this.leftVL.add(this.titleFormat(leftVLTitle));

        this.gainsControlsHL1.doLayout();
        this.gainsControlsHL2.doLayout();

        this.leftVL.add(this.gainsControlsHL1, this.gainsControlsHL2);

        this.chartVL = new VerticalLayout();
        this.chartVL.addClassName("coachingGainsChartVL");
        this.chartVL.setMinWidth("360px");
        this.chartVL.setWidth("545px");

        this.chartVL.setHeight("100%");
        this.leftVL.add(chartVL);

        chart = this.addChart("PositionsClosed");

        if (chart != null)
        {
            this.chartVL.add(chart);
        }
    }

    @Override
    public void setupRightVL(String rightVLTitle)
    {
        this.rightVL.add(this.titleFormat(rightVLTitle));

        this.rightVL.add(this.coachingPositionGrid);

        this.coachingPositionGrid.getData();

        //reset the data grid 
        this.coachingPositionGrid
            .filterPositions(this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe(),
                this.gainsMVCModel.getSelectedEquityTypeModel().getEquityType());
    }

    /**
     * triggered on change to any selection; only one change processed at a time
     * all others will be null
     */
    private void doResetOnSelections(PositionModel positionModel, Integer tactic,
        String timeframe, EquityTypeModel equityType, String aChartType)
    {
        String dataTable;
        ApexCharts aCharts;

        //avoid recursive issues with listeners
        this.gainsMVCModel.setBInSelections(true);

        //different data table for open v closed
        if (this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe().equalsIgnoreCase("open"))
        {
            //use positionsOpen data table
            dataTable = "PositionsOpen";
        } else
        {
            //use positionsClosed data table
            dataTable = "PositionsClosed";
        }

        if (aChartType != null)
        {
            //chart type change
            //do nothing extra
//            this.setChartType(dataTable, false);
        }

        if (positionModel != null)
        {
            //doing a position change
            this.gainsControlsHL1.setPositions(dataTable, false);

            //adjust the tactics list to match selected position
            this.gainsControlsHL1.setTactics(dataTable, false);

            //adjust timeFrame
            this.gainsControlsHL1.setTimeframe(false);

            //adjust equityTypes
            this.gainsControlsHL2.setEquityTypes(dataTable, false);
        }

        if (tactic != null)
        {
            //doing a tactic change
            this.gainsControlsHL1.setTactics(dataTable, false);

            //adjust positions
            this.gainsControlsHL1.setPositions(dataTable, false);

            //adjust timeFrame
            this.gainsControlsHL1.setTimeframe(false);

            //adjust equityTypes
            this.gainsControlsHL2.setEquityTypes(dataTable, false);
        }

        if (timeframe != null)
        {
            //doing a timeframe change
            this.gainsControlsHL1.setTimeframe(false);

            //adjust positions
            this.gainsControlsHL1.setPositions(dataTable, false);

            //adjust the tactics list to match selected position
            this.gainsControlsHL1.setTactics(dataTable, false);

            //adjust equityTypes
            this.gainsControlsHL2.setEquityTypes(dataTable, false);
        }

        if (equityType != null)
        {
            //doing an equityType change
            this.gainsControlsHL2.setEquityTypes(dataTable, false);

            //adjust positions
            this.gainsControlsHL1.setPositions(dataTable,  false);

            //adjust the tactics list to match selected position
            this.gainsControlsHL1.setTactics(dataTable, false);

            //adjust timeFrame
            this.gainsControlsHL1.setTimeframe(false);
        }

        if ((aCharts = this.addChart(dataTable)) != null)
        {
            this.chartVL.add(aCharts);
        }

        //reset the data selections
        this.coachingPositionGrid
            .filterPositions(
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe(),
                this.gainsMVCModel.getSelectedEquityTypeModel().getEquityType());

        //reset recursion control
        this.gainsMVCModel.setBInSelections(false);
    }

    private ApexCharts addChart(String dataTable)
    {
        this.gainsMVCModel.getChartData(dataTable);

        ApexChartsBuilder builder;

        this.gainsControlsHL2.getTotal().setText("Total: "
            + NumberFormat.getCurrencyInstance().format(gainsMVCModel.getGainsTotal()));

        if (!this.gainsMVCModel.getGainsModels().isEmpty())
        {
            if (gainsMVCModel.getSelectedChartType().equalsIgnoreCase("%"))
            {
                builder = new TornadoChart(this.gainsMVCModel.getChartPctMin(),
                    this.gainsMVCModel.getChartPctMax(),
                    GainModel.getCoordSeries(this.gainsMVCModel.getGainsModels(),
                        this.gainsMVCModel.getSelectedChartType()));

            } else
            {
                builder = new TornadoChart(this.gainsMVCModel.getChartMin(), this.gainsMVCModel.getChartMax(),
                    GainModel.getCoordSeries(this.gainsMVCModel.getGainsModels(),
                        this.gainsMVCModel.getSelectedChartType()));
            }

            this.gainsMVCModel.setChart(builder.build());
            this.gainsMVCModel.getChart().addClassName("coachingGainsChart");
            this.gainsMVCModel.getChart().setHeight("100%");

            //remove the old chart
            this.chartVL.removeAll();

            return this.gainsMVCModel.getChart();
        } else
        {
            //remove the old chart
            this.chartVL.removeAll();

            this.chartVL.add(new Label("*** No Data Available ***"));

            return null;
        }
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        this.serviceTPC.AppTracking("TPC:Portfolio:Tracking");

        if (this.prefsController.getPref("TPCDrawerClose").
            equalsIgnoreCase("yes"))
        {
            this.mainLayout.setDrawerOpened(false);
        }
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event)
    {
        this.gainsMVCModel.writePrefs();
    }
}
