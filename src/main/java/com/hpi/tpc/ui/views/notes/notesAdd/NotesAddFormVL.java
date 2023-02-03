package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.ui.views.baseClass.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.textfield.*;
import com.vaadin.flow.data.value.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import lombok.*;

/**
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component
public class NotesAddFormVL
    extends ViewBaseVL
    implements BeforeEnterObserver
{

//    @Autowired private TPCDAOImpl tpcService;
//    @Autowired private NotesModel notesModel;

    //must be the same as the data model fields
    @Getter private final TextField ticker;
    @Getter private final TextField iPrice;
    @Getter private final TextField description;
    @Getter private final TextField units;
    @Getter private final ComboBox<String> actionsCB;
    @Getter private final ComboBox<String> alertsCB;
    @Getter private final TextField alert;
    @Getter private final TextArea notes;

    private final NotesAddControlsHL controlsHL;

    public NotesAddFormVL()
    {
        this.setClassName("notesAddFormVL");
        this.setMaxWidth("100vw");
        this.setMaxHeight("100vh");

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

        this.controlsHL = new NotesAddControlsHL();

        this.doLayout();
    }

    private void doLayout()
    {
        HorizontalLayout h1, h3, h4, h5;

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
        
        //title
        this.add(new NotesAddFormTitleVL("Add a note ..."));

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

        this.add(h1, this.notes, h3, h4, h5);
        
        this.add(this.controlsHL);

        //allow edit of ticker and initial price for Adds
        this.ticker.setEnabled(true);
        this.iPrice.setEnabled(true);
    }

//    private void setFields()
//    {
//        if (this.notesModel.getSelectedNoteModel() != null)
//        {
//            this.ticker.setValue(this.notesModel.getSelectedNoteModel().getTicker());
//            this.actionsCB.setValue(this.notesModel.getSelectedNoteModel().getAction());
//            this.notes.setValue(this.notesModel.getSelectedNoteModel().getNotes());
//            this.units.setValue(this.notesModel.getSelectedNoteModel().getUnits().toString());
//            this.iPrice.setValue(this.notesModel.getSelectedNoteModel().getIPrice().toString());
//            this.alertsCB.setValue(this.notesModel.getSelectedNoteModel().getTriggerType());
//            this.alert.setValue(this.notesModel.getSelectedNoteModel().getTrigger());
//            this.description.setValue(this.notesModel.getSelectedNoteModel().getDescription());
//        }
//    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        //initial button settings upon entry
        this.controlsHL.getButtonAddSave().setVisible(true);
        this.controlsHL.getButtonAddSave().setEnabled(false);

        this.controlsHL.getButtonAddCancel().setVisible(true);
        this.controlsHL.getButtonAddCancel().setEnabled(true);

        this.controlsHL.getButtonAddArchive().setVisible(true);
        this.controlsHL.getButtonAddArchive().setEnabled(true);

        //initial focus
        this.actionsCB.focus();
    }
}
