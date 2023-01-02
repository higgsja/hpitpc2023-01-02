package com.hpi.tpc.ui.views.notes.notes;

import com.hpi.tpc.ui.views.main.MainLayout;
import com.github.appreciated.apexcharts.config.*;
import com.github.appreciated.apexcharts.config.annotations.*;
import com.hpi.tpc.services.TPCDAOImpl;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
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
 * Edit a note.
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Route(value = NOTES_EDIT_VIEW, layout = MainLayout.class)
@PermitAll
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_EDIT)
//@CssImport("./styles/notesAddEdit.css")
@Component
public class NotesEditView
    extends HorizontalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {

    @Autowired private MainLayout appController;
    @Autowired private TPCDAOImpl noteService;
    @Autowired private PrefsController prefsController;

    private FlexLayout topRow;
    private FlexLayout topLeft;
    private FlexLayout topRight;

    //must be the same as the data model fields
    @Getter private final TextField ticker;
    @Getter private final TextField iPrice;
    @Getter private final TextField description;
    @Getter private final TextField units;
    @Getter private final ComboBox<String> actionsCB;
    @Getter private final ComboBox<String> alertsCB;
    @Getter private final TextField alert;
    @Getter private final TextArea notes;

    @Getter private final Button buttonCancel;
    @Getter private final Button buttonSave;
    @Getter private final Button buttonArchive;

    private HorizontalLayout buttons;

    private VerticalLayout chartVerticalLayout;
    
    @Setter private NoteModel selectedNoteModel;
    
    public NotesEditView() {
        this.selectedNoteModel = null;
        
        this.ticker = new TextField();
        this.ticker.setRequired(true);
        this.ticker.setRequiredIndicatorVisible(true);

        this.iPrice = new TextField();
        this.iPrice.setRequired(true);
        this.iPrice.setRequiredIndicatorVisible(true);

        this.description = new TextField();
        this.units = new TextField();
        this.units.setRequired(true);
        this.units.setRequiredIndicatorVisible(true);

        this.alert = new TextField();
        this.notes = new TextArea();

        this.actionsCB = new ComboBox<>("", "Buy", "Sell", "Hold",
            "Watch", "Hedge", "Other");
        this.actionsCB.setValue("Buy");

        this.alertsCB = new ComboBox<>("", "Date", "Price", "Other");
        this.alertsCB.setValue("Price");

        this.buttonCancel = new Button("Cancel");

        this.buttonSave = new Button("Save");
        this.buttonSave.setEnabled(false);

        this.buttonArchive = new Button("Archive");
        this.buttonArchive.setEnabled(false);
    }

    @PostConstruct
    public void construct() {
        topLeft = new FlexLayout();
        topLeft.addClassName("addEditForm");
        topRight = new FlexLayout();
        topRight.addClassName("addEditChart");

        topRow = new FlexLayout();
        topRow.setAlignItems(Alignment.STRETCH);
        topRow.setWidth("100%");
        topRow.setHeight("100%");
        topRow.add(topLeft, topRight);
        topRow.setFlexGrow(1, topRight);
        topRow.setFlexWrap(FlexLayout.FlexWrap.WRAP);
        this.topLeft.setMaxWidth("100vw");
        this.topLeft.setMaxHeight("100vh");
        this.topRight.setMaxWidth("100vw");
        this.topRight.setMaxHeight("100vw");

        this.addClassName("addEdit-content");

        this.add(topRow);

        this.buttons = new HorizontalLayout(this.buttonSave, this.buttonCancel, this.buttonArchive);

        this.formSetup();

        //on edit, all buttons are visible
        this.buttonArchive.setVisible(true);
        this.buttonCancel.setVisible(true);
        this.buttonSave.setVisible(true);

        //save is disabled until a change
        this.buttonSave.setEnabled(false);
    }

    @PreDestroy
    private void destruct() {

    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        this.noteService.AppTracking("TPC:Notes:Edit");

        if (this.prefsController.getPref("TPCDrawerClose").
            equalsIgnoreCase("yes")) {
            this.appController.setDrawerOpened(false);
        }

        //fill form with data
        this.setEditFields();

        //initial button settings upon entry
        this.buttons.setVisible(true);
        this.buttonSave.setEnabled(false);
        
        this.buttonCancel.setVisible(true);
        this.buttonCancel.setEnabled(true);
        
        this.buttonArchive.setVisible(true);
        this.buttonArchive.setEnabled(true);
        
        //initial focus
        this.actionsCB.focus();

//        //do the chart for the ticker        
//        this.addChartSetup(this.notesMVCModel.getSelectedNoteModel().getTicker());
//        //set focus on the form
//        this.notes.focus();
        //allow archive and save only on 'mine'
//        if (this.notesMVCModel.getSelectedNoteModel().getJoomlaId().equalsIgnoreCase(
//            SecurityUtils.getUserId().toString())) {
//            this.buttonArchive.setVisible(true);
//            this.buttonArchive.setEnabled(true);
//            this.buttonSave.setVisible(true);
//            this.buttonSave.setEnabled(false);
//        }
//        else {
//            this.buttonArchive.setVisible(false);
//            this.buttonSave.setVisible(false);
//        }
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent ble) {
    }

    private void formSetup() {
        VerticalLayout vertLayout;
        HorizontalLayout h1, h2, h3, h4, h5;

        vertLayout = new VerticalLayout();

        this.ticker.setPlaceholder("Item/Ticker*");
        this.ticker.setMinLength(1);
        this.ticker.setMaxWidth("180px");
        this.ticker.setValueChangeMode(ValueChangeMode.ON_CHANGE);

        this.actionsCB.setMaxWidth("100px");
        this.actionsCB.setValue("Buy");

        this.alertsCB.setMaxWidth("100px");
        this.alertsCB.setValue("Price");

        this.alert.setPlaceholder("Alert");
        this.alert.setMaxWidth("180px");

        this.description.setPlaceholder("Description");
        this.description.setMinWidth("297px");

        this.notes.setPlaceholder("Enter notes");
        this.notes.setMinHeight("90px");
        this.notes.setMaxHeight("250px");
        this.notes.setVisible(true);
        this.notes.setMinWidth("297px");

        this.units.setPlaceholder("Units");
        this.units.setMaxWidth("140px");

        this.iPrice.setPlaceholder("Price");
        this.iPrice.setMaxWidth("140px");

        //first row
        h1 = new HorizontalLayout(this.ticker, this.actionsCB);
        //second row
//        h2 = new HorizontalLayout(this.notes);
        //third row
        h3 = new HorizontalLayout(this.units, this.iPrice);
        //fourth row
        h4 = new HorizontalLayout(this.alertsCB, this.alert);
        //fifth row
        h5 = new HorizontalLayout(this.description);

        vertLayout.add(h1, this.notes, h3, h4, h5);

        vertLayout.add(this.buttons);

        //disallow edit of ticker, initial price
        this.ticker.setEnabled(false);
        this.iPrice.setEnabled(false);

        this.topLeft.add(vertLayout);
    }

    private void addChartSetup(String ticker) {
//        List<OHLCVModel> ohlcvModels;
//        ApexChartsBuilder builder;
//        ApexCharts chart;
//        Annotations annotations;
//
//        //remove any residual chart components
//        if (this.topRight.getComponentCount() > 0) {
//            this.topRight.removeAll();
//        }
//
//        chartVerticalLayout = new VerticalLayout();
//
//        //candlestick for ticker
//        ohlcvModels = noteService.getEquityOHLCVData(ticker);
//
//        //annotations
//        annotations = new Annotations();
//
//        doAnnotations(annotations, ticker);
//
//        builder = new CandleStickChart(
//            OHLCVModel.getCoordSeries(ticker, ohlcvModels), annotations)
//            .withTitle(TitleSubtitleBuilder.get().withText(ticker).build());
//
//        chart = builder.build();
//
//        chartVerticalLayout.add(chart);
////        chartVerticalLayout.setMaxHeight("100vw");
////        chartVerticalLayout.setMaxWidth("100vw");
//
//        this.topRight.add(chartVerticalLayout);
//
////        chart.setHeight(Double.toString(this.screenSize.getHeight()));
////        chart.setMinHeight("100vh");
////        chart.setMaxHeight("100vh");
////        chart.setWidth(Double.toString(this.screenSize.getWidth()));
////        chart.setMinWidth("100vw");
////        chart.setMaxWidth("100vw");
    }

    private void doAnnotations(Annotations annotations,
        String ticker) {
        List<SupportResistanceModel> supResModels;
        String sql;
        List<YAxisAnnotations> yAxisAnnotationsList;
        AnnotationStyle annotationStyle;
        AnnotationLabel annotationLabel;
        YAxisAnnotations yAxisAnnotations;

        yAxisAnnotationsList = new ArrayList<>();

        //ticker support levels data
//        sql = String.format(SupportResistanceModel.SQL_STRING,
//            SecurityUtils.getUserId(), ticker);
        sql = String.format(SupportResistanceModel.SQL_STRING, "0", ticker);

        supResModels = noteService.getSupportResistanceModels(sql);

        for (SupportResistanceModel srm : supResModels) {
            annotationStyle = new AnnotationStyle();
            annotationStyle.setFontSize("10px");
            annotationStyle.setBackground("#ffffff");
            annotationStyle.setColor("#888a85");

            annotationLabel = new AnnotationLabel();
            annotationLabel.setBorderColor("#ffffff");
            annotationLabel.setBorderWidth(0.0);
//            annotationLabel.setText("Strong");
            annotationLabel.setStyle(annotationStyle);
            annotationLabel.setPosition("back");
            annotationLabel.setTextAnchor("start");

            yAxisAnnotations = new YAxisAnnotations();
//            yAxisAnnotations.setY(301.0);
//            yAxisAnnotations.setY2(299.0);
            yAxisAnnotations.setBorderColor("#000000");
            yAxisAnnotations.setFillColor("#000000");
//            yAxisAnnotations.setOpacity(0.3);
            yAxisAnnotations.setLabel(annotationLabel);

            switch (srm.getWeight()) {
                case 1:
                    annotationLabel.setText("Weak");
                    yAxisAnnotations.setY2(srm.getSrLevel() * 1.001);
                    yAxisAnnotations.setY(srm.getSrLevel() * 0.999);
                    yAxisAnnotations.setOpacity(0.1);
                    break;
                case 2:
                    annotationLabel.setText("Medium");
                    yAxisAnnotations.setY2(srm.getSrLevel() * 1.002);
                    yAxisAnnotations.setY(srm.getSrLevel() * 0.998);
                    yAxisAnnotations.setOpacity(0.3);
                    break;
                case 3:
                    annotationLabel.setText("Strong");
                    yAxisAnnotations.setY2(srm.getSrLevel() * 1.003);
                    yAxisAnnotations.setY(srm.getSrLevel() * 0.997);
                    yAxisAnnotations.setOpacity(0.5);
                    break;
                default:
            }

            yAxisAnnotationsList.add(yAxisAnnotations);
        }

        annotations.setYaxis(yAxisAnnotationsList);
    }

    private void setEditFields() {
        //need selectedNoteModel from NotedsMVCModel
        if (this.selectedNoteModel != null){
        this.ticker.setValue(this.selectedNoteModel.getTicker());
        this.actionsCB.setValue(this.selectedNoteModel.getAction());
        this.notes.setValue(this.selectedNoteModel.getNotes());
        this.units.setValue(this.selectedNoteModel.getUnits());
        this.iPrice.setValue(this.selectedNoteModel.getIPrice());
        this.alertsCB.setValue(this.selectedNoteModel.getTriggerType());
        this.alert.setValue(this.selectedNoteModel.getTrigger());
        this.description.setValue(this.selectedNoteModel.getDescription());
        }
    }
}
