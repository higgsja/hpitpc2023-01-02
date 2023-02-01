package com.hpi.tpc.ui.views.notes;

import com.hpi.tpc.ui.views.notes.notesAddEdit.NotesEditHL;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.notes.notesAdd.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

/**
 * handles state of application
 * contains objects representing the data
 * provides ways to query and change the data
 * responds to requests from View and instructions from Controller
 */
@UIScope
@VaadinSessionScope
@NoArgsConstructor
@Component
public class NotesModel {
    @Autowired private TPCDAOImpl noteService;

    @Setter @Getter private NoteModel selectedNoteModel;
    
    @Getter private List<NoteModel> dataProvider;

    
    public void getPrefs(String prefPrefix) {
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
    void save(NotesEditHL notesEditHL, Boolean isArchive) {
        //not hit
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

        switch (notesEditHL.getActionsCB().getValue()){
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

        switch (notesEditHL.getAlertsCB().getValue()){
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
            notesEditHL.getTicker().getValue(),
            Double.valueOf(notesEditHL.getIPrice().getValue()),
            notesEditHL.getDescription().getValue(),
            notesEditHL.getNotes().getValue(),
            Double.valueOf(notesEditHL.getUnits().getValue()),
            actionInteger.toString(),
            alertInteger.toString(),
            notesEditHL.getAlert().getValue(),
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
    void save(NotesAddFormVL notesAddFormVL, Boolean isTicker, Boolean isArchive) {
        //not hit
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

        switch (notesAddFormVL.getActionsCB().getValue()){
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

        switch (notesAddFormVL.getAlertsCB().getValue()){
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
            isTicker ? notesAddFormVL.getTicker().getValue().toUpperCase() 
                : notesAddFormVL.getTicker().getValue(),
            Double.valueOf(notesAddFormVL.getIPrice().getValue()),
            notesAddFormVL.getDescription().getValue(),
            notesAddFormVL.getNotes().getValue(),
            Double.valueOf(notesAddFormVL.getUnits().getValue()),
            actionInteger.toString(),
            alertInteger.toString(),
            notesAddFormVL.getAlert().getValue(),
            isArchive ? "0" : this.selectedNoteModel.getActive(),
            //leave date entered without changes
            this.selectedNoteModel.getDateEntered()
        );

        this.noteService.saveNote(tempNoteModel);
    }
    
    public void getData(String subset){
         List<NoteModel> aList;

        aList = this.noteService.getByJId(subset);
        
        this.dataProvider = aList;

//        this.notesGrid.getDataProvider().refreshAll();

//        //this.notesGrid.setItems(aList);
//        this.getNotesGrid().setItems(aList);
    }
}
