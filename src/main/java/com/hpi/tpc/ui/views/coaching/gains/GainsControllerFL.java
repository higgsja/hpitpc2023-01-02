package com.hpi.tpc.ui.views.coaching.gains;

import com.hpi.tpc.ui.views.coaching.gains.chartComponentVL.GainsControllerVL;
import com.hpi.tpc.ui.views.coaching.gains.positions.GainsPositionGrid;
import com.hpi.tpc.ui.views.coaching.gains.positions.GainsPositionsVL;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import static com.hpi.tpc.ui.views.coaching.CoachingConst.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.dependency.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@UIScope
@VaadinSessionScope
@Route(value = ROUTE_COACHING_GAINS_CONTROLLER, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_COACHING + ": " + TITLE_COACHING_GAINS)
@Component
@CssImport("./styles/coachingGains.css")
@PermitAll
public class GainsControllerFL
    extends ViewControllerBaseFL
    implements BeforeEnterObserver
{

    @Autowired private GainsVLModel gainsVLModel;
    @Autowired private GainsControllerVL gainsControllerVL;
    @Autowired private GainsPositionsVL gainsPositionsVL;

//    private GainsHL gainsHL;
//    private VerticalLayout chartVL;

    public GainsControllerFL()
    {
        this.addClassName("gainsControllerFL");
    }

    @PostConstruct
    protected void construct()
    {
        this.gainsVLModel.getPrefs("Gains");
        
//        //this is 2 panels, need an HL
//        this.gainsHL = new GainsHL();
//        this.gainsHL.setSizeFull();
//        this.add(gainsHL);

        this.gainsControllerVL.setWidth("550px");
//        this.gainsHL.add(this.gainsControllerVL);
        this.add(this.gainsControllerVL);

        //positions
        this.gainsPositionsVL = new GainsPositionsVL();
        this.gainsPositionsVL.setWidth("850px");
        this.add(this.gainsPositionsVL);
        
//        this.doInitSelections();


//        this.setupGainsVL("Gains");
//        this.setupPositionsVL("Positions");
//        this.doSelectionListenersAdd();
    }
    
//    /**
//     * establish data elements for controls
//     */
//    private void doInitSelections()
//    {
//        this.gainsVLModel.setSelectedPositionModel(PositionModel.builder()
//            .ticker("--All--")
//            .build());
//        this.gainsVLModel.setSelectedTradeTacticModel(TradeTacticModel.builder()
//            .tacticId(-1)
//            .tacticName("--All--")
//            .build());
//        this.gainsVLModel.setSelectedTimeframeModel(TimeframeModel.builder()
//            .timeframe(TimeframeModel.YTD)
//            .build());
//        this.gainsVLModel.setSqlTimeframe(PositionModel.SQL_YTD);
//        this.gainsVLModel.setSelectedEquityTypeModel(EquityTypeModel.builder()
//            .equityType("--All--")
//            .build());
//        this.gainsVLModel.setSelectedChartType("$");
//    }

    

//    public void setupGainsVL(String gainsVLTitle)
//    {
//        ApexCharts chart;
//
////        this.leftVL.setMinWidth("360px");
////        this.leftVL.setWidth("550px");
////        this.leftVL.setHeight("100%");
////
////        this.leftVL.add(this.titleFormat(gainsVLTitle));
////        this.gainsControlsHL1.doLayout();
////        this.gainsControlsHL2.doLayout();
////        this.leftVL.add(this.gainsControlsHL1, this.gainsControlsHL2);
////        this.chartVL = new VerticalLayout();
////        this.chartVL.addClassName("coachingGainsChartVL");
////        this.chartVL.setMinWidth("360px");
////        this.chartVL.setWidth("545px");
////        this.chartVL.setHeight("100%");
////        this.leftVL.add(chartVL);
//        chart = this.addChart("PositionsClosed");
//
//        if (chart != null)
//        {
//            this.chartVL.add(chart);
//        }
//    }
//    public void setupPositionsVL(String rightVLTitle)
//    {
//        this.rightVL.add(this.titleFormat(rightVLTitle));
//
//        this.rightVL.add(this.coachingPositionGrid);
//
//        this.coachingPositionGrid.getData();
//
//        //reset the data grid 
//        this.coachingPositionGrid
//            .filterPositions(this.gainsModel.getSelectedPositionModel().getTicker(),
//                this.gainsModel.getSelectedTradeTacticModel().getTacticId(),
//                this.gainsModel.getSelectedTimeframeModel().getTimeframe(),
//                this.gainsModel.getSelectedEquityTypeModel().getEquityType());
//    }
    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        super.beforeEnter(event);

        this.gainsVLModel.serviceTPC.AppTracking("TPC:Coaching:Gains");

        //change the preferences route
        super.updateNavBarGear(null);

//        event.forwardTo(GainsControllerVL.class);
    }

    @Override
    public void addMenuBarTabs()
    {
        //none
    }
}
