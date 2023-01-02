package com.hpi.tpc.charts;

import com.github.appreciated.apexcharts.ApexChartsBuilder;
import com.github.appreciated.apexcharts.config.builder.*;
import com.github.appreciated.apexcharts.config.chart.Type;
import com.github.appreciated.apexcharts.config.chart.builder.*;
import com.github.appreciated.apexcharts.config.chart.zoom.*;
import com.github.appreciated.apexcharts.config.legend.*;
import com.github.appreciated.apexcharts.config.responsive.builder.*;
import com.github.appreciated.apexcharts.config.stroke.*;
import com.github.appreciated.apexcharts.config.xaxis.XAxisType;
import com.github.appreciated.apexcharts.helper.Coordinate;
import com.github.appreciated.apexcharts.helper.Series;
import java.util.*;

public class LinesChart extends ApexChartsBuilder
{

    public LinesChart(String[] colorStrings,
        List<String> colorList,
        //        Series<Coordinate> seriesPortfolio,
        Series<Coordinate> seriesSPY,
        Series<Coordinate> seriesIWM,
        Series<Coordinate> seriesDIA,
        Series<Coordinate> seriesQQQ)
    {
        withChart(ChartBuilder.get()
            .withType(Type.LINE)
            .withZoom(ZoomBuilder.get()
                .withEnabled(true)
                .withType(ZoomType.X)
                .build())
            .build())
            //            .withSeries(seriesPortfolio, seriesSPY, seriesIWM, seriesDIA,
            .withSeries(seriesSPY, seriesIWM, seriesDIA, seriesQQQ)
            .withColors(colorStrings)
            .withXaxis(XAxisBuilder.get()
                .withType(XAxisType.DATETIME)
                .build())
            .withStroke(StrokeBuilder.get()
                .withCurve(Curve.SMOOTH)
//                .withColors(colorStrings)
                .withWidth(2.0)
                .build())
            .withLegend(LegendBuilder.get()
                .withPosition(Position.BOTTOM)
                .build())
            .withResponsive(ResponsiveBuilder.get()
                .withBreakpoint(600.0)
                .withOptions(OptionsBuilder.get()
//                    .withColors(colorStrings)
                    .withStroke(StrokeBuilder.get()
                        .withCurve(Curve.SMOOTH)
                        .withColors(colorStrings)
                        .withWidth(1.0)
                        .build())
                    .withLegend(LegendBuilder.get()
                        .withPosition(Position.BOTTOM)
                        .build())
                    .build())
                .build());
    }
}
