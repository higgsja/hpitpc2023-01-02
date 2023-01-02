package com.hpi.tpc.ui.views.notes.notes;

import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.services.*;
import com.vaadin.flow.spring.annotation.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

/*
 * Data related logic:
 * Manages data receiving input from the controller
 */
@UIScope
@VaadinSessionScope
@Component
public class NotesMVC_M {
    @Autowired private TPCDAOImpl noteService;
//    @Autowired private PrefsController prefsController;

    @Setter @Getter private NoteModel selectedNoteModel;

    public NotesMVC_M() {
        int i = 0;
    }
    
    public void getPrefs() {
//        this.prefsController.setDefaults("PortfolioTrack");
//        this.prefsController.readPrefsByPrefix("PortfolioTrack");
//        this.selectedTrackActive = this.prefsController
//            .getPref("PortfolioTrackActive").equals("Yes");
//        this.selectedTrackOpen = this.prefsController
//            .getPref("PortfolioTrackOpen").equals("Yes");
    }

    public void writePrefs() {
//        //preferences, update the hashmap, then write to database
//        this.prefsController.setPref("PortfolioTrackActive",
//            selectedTrackActive ? "Yes" : "No");
//        this.prefsController.setPref("PortfolioTrackOpen",
//            selectedTrackOpen ? "Yes" : "No");
//        
//        this.prefsController.writePrefsByPrefix("PortfolioTrack");
    }

    void setSelected(NoteModel noteModel) {
        //without the session variable, this could be simple setter
        this.selectedNoteModel = noteModel;
    }

    /**
     * Save the note to the database
     * need to come in with the NoteModel from the form.
     */
    void save(NotesEditView notesEditView, Boolean isArchive) {
        Integer actionInteger;
        Integer alertInteger;
        NoteModel tempNoteModel;

        actionInteger = 1;
        alertInteger = 2;
        if (isArchive){
        noteService.AppTracking("TPC:Notes:Edit:Archive");    
        }else{
        noteService.AppTracking("TPC:Notes:Edit:Save");    
        }
        

        if (this.selectedNoteModel.getTicker().isEmpty()) {
            //should never happen as save is disabled under these conditions
            //todo: highlight the problem
            return;
        }

        switch (notesEditView.getActionsCB().getValue()){
            case "Buy":
                actionInteger = ActionModel.ACTIONS_BUY;
                break;
            case "Sell":
                actionInteger = ActionModel.ACTIONS_SELL;
                break;
            case "Watch":
                actionInteger = ActionModel.ACTIONS_WATCH;
                break;
            case "Hedge":
                actionInteger = ActionModel.ACTIONS_HEDGE;
                break;
            case "Other":
                actionInteger = ActionModel.ACTIONS_OTHER;
                break;
            case "Hold":
                actionInteger = ActionModel.ACTIONS_HOLD;
                break;
            default:
        }

        switch (notesEditView.getAlertsCB().getValue()){
            case "Date":
                alertInteger = AlertTypeModel.ALERTS_DATE;
                break;
            case "Price":
                alertInteger = AlertTypeModel.ALERTS_PRICE;
                break;
            case "Other":
                alertInteger = AlertTypeModel.ALERTS_OTHER;
                break;
            default:
        }

        //get data from the form
        tempNoteModel = new NoteModel(
            //these are key fields to find the record
            this.selectedNoteModel.getJoomlaId(),
            this.selectedNoteModel.getTStamp(),
            //these are edits
            notesEditView.getTicker().getValue(),
            notesEditView.getIPrice().getValue(),
            notesEditView.getDescription().getValue(),
            notesEditView.getNotes().getValue(),
            notesEditView.getUnits().getValue(),
            actionInteger.toString(),
            alertInteger.toString(),
            notesEditView.getAlert().getValue(),
            isArchive ? "0" : this.selectedNoteModel.getActive(),
            //leave date entered without changes
            this.selectedNoteModel.getDateEntered()
        );

        this.noteService.updateNote(tempNoteModel);
    }
    
    /**
     * Save the note to the database
     * need to come in with the NoteModel from the form.
     */
    void save(NotesAddView notesAddView, Boolean isTicker, Boolean isArchive) {
        Integer actionInteger;
        Integer alertInteger;
        NoteModel tempNoteModel;

        actionInteger = 1;
        alertInteger = 2;
        noteService.AppTracking("TPC:Notes:Add:Save");

        if (this.selectedNoteModel.getTicker().isEmpty()) {
            //should never happen as save is disabled under these conditions
            //todo: highlight the problem
            return;
        }

        switch (notesAddView.getActionsCB().getValue()){
            case "Buy":
                actionInteger = ActionModel.ACTIONS_BUY;
                break;
            case "Sell":
                actionInteger = ActionModel.ACTIONS_SELL;
                break;
            case "Watch":
                actionInteger = ActionModel.ACTIONS_WATCH;
                break;
            case "Hedge":
                actionInteger = ActionModel.ACTIONS_HEDGE;
                break;
            case "Other":
                actionInteger = ActionModel.ACTIONS_OTHER;
                break;
            case "Hold":
                actionInteger = ActionModel.ACTIONS_HOLD;
                break;
            default:
        }

        switch (notesAddView.getAlertsCB().getValue()){
            case "Date":
                alertInteger = AlertTypeModel.ALERTS_DATE;
                break;
            case "Price":
                alertInteger = AlertTypeModel.ALERTS_PRICE;
                break;
            case "Other":
                alertInteger = AlertTypeModel.ALERTS_OTHER;
                break;
            default:
        }

        //get data from the form
        tempNoteModel = new NoteModel(
            //these are key fields
            this.selectedNoteModel.getJoomlaId(),
            //null for add
            this.selectedNoteModel.getTStamp(),
            //uppercase if a ticker
            isTicker ? notesAddView.getTicker().getValue().toUpperCase() : notesAddView.getTicker().getValue(),
            notesAddView.getIPrice().getValue(),
            notesAddView.getDescription().getValue(),
            notesAddView.getNotes().getValue(),
            notesAddView.getUnits().getValue(),
            actionInteger.toString(),
            alertInteger.toString(),
            notesAddView.getAlert().getValue(),
            isArchive ? "0" : this.selectedNoteModel.getActive(),
            //leave date entered without changes
            this.selectedNoteModel.getDateEntered()
        );

        this.noteService.saveNote(tempNoteModel);
    }
}
