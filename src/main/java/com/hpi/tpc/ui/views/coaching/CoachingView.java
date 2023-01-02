package com.hpi.tpc.ui.views.coaching;

import com.hpi.tpc.services.TPCDAOImpl;
import com.github.appreciated.apexcharts.*;
import static com.hpi.tpc.AppConst.ROUTE_COACHING_PERFORMANCE_BENCHMARK;
import com.hpi.tpc.app.security.*;
import com.hpi.tpc.charts.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

@UIScope
@VaadinSessionScope
@Route(value = ROUTE_COACHING_PERFORMANCE_BENCHMARK, layout = MainLayout.class)
@org.springframework.stereotype.Component
@NoArgsConstructor
@PermitAll
//@CssImport("./styles/coachingBenchmark.css")
public class CoachingView
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
    @Autowired private MainLayout mainLayout;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private PrefsController prefsController;

    @PostConstruct
    private void construct() {
        this.doTopRow();
    }

    @PreDestroy
    private void destruct() {

    }

    private void doTopRow() {
        this.setClassName("benchmark-toprow-content-FL");
        this.setMinWidth("300px");
        this.setWidth("600px");
        this.setMaxWidth("600px");
        this.setMinHeight("300px");
        this.setMaxHeight("600px");
        this.setHeight("600px");
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee) {
        serviceTPC.AppTracking("TPC:Coaching:Benchmark");

        if (prefsController.getPref("TPCDrawerClose").
            equalsIgnoreCase("yes")) {
            mainLayout.setDrawerOpened(false);
        }

        this.addChartSetup();
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event) {
        this.removeAll();
    }

    private void addChartSetup() {
//        List<TimeseriesModel> timeseriesModelsAcctTotals;
        String userId;
        List<TimeseriesModel> timeseriesModelsSpy;
        List<TimeseriesModel> timeseriesModelsIWM;
        List<TimeseriesModel> timeseriesModelsDIA;
        List<TimeseriesModel> timeseriesModelsQQQ;
        List<String> colorList;
        ApexChartsBuilder builder;
        ApexCharts chart;

        colorList = new ArrayList<>();
        colorList.add("#16A65E");

        String[] colorStrings = {"#00FF00", "#FF0000", "#0000FF", "#FC00FF", "#E8FF00"};

        userId = SecurityUtils.getUserId().toString();

//        timeseriesModelsAcctTotals = serviceTPC.getTimeseriesModels(
//            String.format(TimeseriesModel.SQL_ACCT_TOTALS, userId, userId,
//                userId, userId, userId));

        timeseriesModelsSpy = serviceTPC.getTimeseriesModels(
            String.format(TimeseriesModel.SQL_GAINPCT, "SPY", "SPY", "SPY",
                "SPY", "SPY", "SPY"));

        timeseriesModelsIWM = serviceTPC.getTimeseriesModels(
            String.format(TimeseriesModel.SQL_GAINPCT, "IWM", "IWM", "IWM",
                "IWM", "IWM", "IWM"));

        timeseriesModelsDIA = serviceTPC.getTimeseriesModels(
            String.format(TimeseriesModel.SQL_GAINPCT, "DIA", "DIA", "DIA",
                "DIA", "DIA", "DIA"));

        timeseriesModelsQQQ = serviceTPC.getTimeseriesModels(
            String.format(TimeseriesModel.SQL_GAINPCT, "QQQ", "QQQ", "QQQ",
                "QQQ", "QQQ", "QQQ"));

        builder = new LinesChart(colorStrings, colorList,
//            TimeseriesModel.getCoordSeries("Portfolio", timeseriesModelsAcctTotals),
            TimeseriesModel.getCoordSeries("S&P", timeseriesModelsSpy),
            TimeseriesModel.getCoordSeries("IWM", timeseriesModelsIWM),
            TimeseriesModel.getCoordSeries("DIA", timeseriesModelsDIA),
            TimeseriesModel.getCoordSeries("QQQ", timeseriesModelsQQQ));

        chart = builder.build();
        chart.setClassName("benchmarkChart-VL");

        this.add(chart);
        chart.setHeight("100%");
        chart.setWidth("100%");
    }
}
