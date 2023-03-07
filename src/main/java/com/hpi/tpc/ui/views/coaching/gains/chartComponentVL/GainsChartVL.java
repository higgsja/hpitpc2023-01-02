package com.hpi.tpc.ui.views.coaching.gains.chartComponentVL;

import com.github.appreciated.apexcharts.*;
import com.hpi.tpc.charts.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.coaching.gains.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.spring.annotation.*;
import java.text.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@UIScope
@VaadinSessionScope
@Component
public class GainsChartVL
    extends ViewBaseVL
{
    @Autowired private GainsVLModel gainsVLModel;
    @Autowired private GainsControlsHL1 gainsControlsHL1;   //get rid of
    @Autowired private GainsControlsHL2 gainsControlsHL2;   //get rid of
    

    public GainsChartVL()
    {
        this.addClassName("coachingGainsChartVL");
    }
    
     private ApexCharts addChart(String dataTable)
    {
                ApexChartsBuilder builder;
                
        this.gainsVLModel.getChartData(dataTable);

        this.gainsControlsHL2.getTotal().setText("Total: "
            + NumberFormat.getCurrencyInstance().format(gainsVLModel.getGainsTotal()));

        if (!this.gainsVLModel.getGainsModels().isEmpty())
        {
            if (gainsVLModel.getSelectedChartType().equalsIgnoreCase("%"))
            {
                builder = new TornadoChart(this.gainsVLModel.getChartPctMin(),
                    this.gainsVLModel.getChartPctMax(),
                    GainModel.getCoordSeries(this.gainsVLModel.getGainsModels(),
                        this.gainsVLModel.getSelectedChartType()));

            } else
            {
                builder = new TornadoChart(this.gainsVLModel.getChartMin(), this.gainsVLModel.getChartMax(),
                    GainModel.getCoordSeries(this.gainsVLModel.getGainsModels(),
                        this.gainsVLModel.getSelectedChartType()));
            }

            this.gainsVLModel.setChart(builder.build());
            this.gainsVLModel.getChart().addClassName("coachingGainsChart");
            this.gainsVLModel.getChart().setHeight("100%");

            //remove the old chart
            this.removeAll();

            return this.gainsVLModel.getChart();
        } else
        {
            //remove the old chart
            this.removeAll();

            this.add(new Label("*** No Data Available ***"));

            return null;
        }
    }
}
