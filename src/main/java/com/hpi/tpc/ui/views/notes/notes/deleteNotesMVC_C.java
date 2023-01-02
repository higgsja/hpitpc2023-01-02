package com.hpi.tpc.ui.views.notes.notes;

import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.data.entities.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import org.springframework.beans.factory.annotation.*;

/*
 * Interface between Model and View to process business logic and incoming requests:
 * manipulate data using the Model
 * interact with the Views to render output
 * respond to user input and performance actions on data model objects.
 * receives input, optionally validates it and passes it to the model
 */
@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component
public class deleteNotesMVC_C {
    @Autowired private NotesMVC_M notesMVCModel;
    @Autowired private NotesMVC_V_Mine notesMVCViewMine;

    @Autowired private NotesAddView notesAddView;
    @Autowired private NotesEditView notesEditView;
    
    private Boolean isArchive;

    private ArrayList<Registration> listeners;

    public deleteNotesMVC_C() {
        this.isArchive = true;
    }

    @PostConstruct
    private void construct() {
        //establish listeners on the view; postconstruct not hit
        this.listeners = new ArrayList<>();
        this.doListeners();
    }

    @PreDestroy
    private void destruct() {
        this.removeListeners();
    }

    /**
     * called from postConstruct
     */
    private void doListeners() {
        /*****
         * addView listeners
         */
        //ticker change
        this.listeners.add(this.notesAddView.getTicker().addValueChangeListener(event -> {
            //todo
            FinVizEquityInfoModel fvm;

            // does not happen if ticker is initially blank
            // does happen if delete what was in there
            if (event.getValue().isEmpty()) {
                notesAddView.getTicker().focus();
                notesAddView.getButtonSave().setEnabled(false);
                return;
            }
            
            //keep model noteModel updated
            this.notesMVCModel.getSelectedNoteModel().setTicker(event.getValue().toUpperCase());

            //use ticker for lookup
            fvm = FinVizEquityInfoModel.FIN_VIZ_HASH_TABLE.get(event.getValue().toUpperCase());
            if (fvm != null) {
                //causes recursion here
                //this.notesAddView.getTicker().setValue(fvm.getTicker());
                //know it is a ticker and not just a random note
                this.notesAddView.setIsTicker(true);
                this.notesAddView.getIPrice().setValue(fvm.getPrice());
                this.notesAddView.getDescription().setValue(fvm.getCompany());

                // handle the chart only if valid ticker
//                if (this.topRight.getComponentCount() > 0) {
//                    this.topRight.removeAll();
//                }
//                addChartSetup(fvm.getTicker());
            }

            this.notesAddView.getButtonSave().setEnabled(true);
        }));
        
                //notesAdd save
        this.listeners.add(this.notesAddView.getButtonSave().addClickListener(e -> {
            this.notesMVCModel.save(notesAddView, this.notesAddView.getIsTicker(), !this.isArchive);
            
            UI.getCurrent().navigate(HOME_URL);
        }));
        
        //notesAdd cancel
        this.listeners.add(this.notesAddView.getButtonCancel().addClickListener(e -> {
            
            UI.getCurrent().navigate(HOME_URL);
        }));

        //action change
        this.listeners.add(this.notesEditView.getActionsCB().addValueChangeListener(e -> {
            //all of these may get hit on entry for an edit
            notesEditView.getButtonSave().setEnabled(true);
        }));
        
        /*****
         * editView listeners
         */

        //notes change
        this.listeners.add(this.notesEditView.getNotes().addValueChangeListener(e -> {
            notesEditView.getButtonSave().setEnabled(true);
        }));

        //units change
        this.listeners.add(this.notesEditView.getUnits().addValueChangeListener(e -> {
            //todo
            //gets hit on edit due to setting the values
            notesEditView.getButtonSave().setEnabled(true);
        }));

        //initial price change
        this.listeners.add(this.notesEditView.getIPrice().addValueChangeListener(e -> {
            notesEditView.getButtonSave().setEnabled(true);
        }));

        //alert type change
        this.listeners.add(this.notesEditView.getAlertsCB().addValueChangeListener(e -> {
            notesEditView.getButtonSave().setEnabled(true);
        }));

        //alert change
        this.listeners.add(this.notesEditView.getAlert().addValueChangeListener(e -> {
            notesEditView.getButtonSave().setEnabled(true);
        }));

        //description change
        this.listeners.add(this.notesEditView.getDescription().addValueChangeListener(e -> {
            notesEditView.getButtonSave().setEnabled(true);
        }));

        //notesEdit save
        this.listeners.add(this.notesEditView.getButtonSave().addClickListener(e -> {
            this.notesMVCModel.save(this.notesEditView, false);

            UI.getCurrent().navigate(HOME_URL);
        }));

        //notesEdit cancel
        this.listeners.add(this.notesEditView.getButtonCancel().addClickListener(e -> {
            
            UI.getCurrent().navigate(HOME_URL);
        }));

        //notesEdit archive
        this.listeners.add(this.notesEditView.getButtonArchive().addClickListener(e -> {
            this.notesMVCModel.save(this.notesEditView, true);

            UI.getCurrent().navigate(HOME_URL);
        }));

        //grid, mine
        this.listeners.add(this.notesMVCViewMine.getNotesGrid().addItemClickListener(event -> {
            notesEditView.setSelectedNoteModel(event.getItem());
            notesMVCModel.setSelectedNoteModel(event.getItem());
            
            UI.getCurrent().navigate(NOTES_EDIT_VIEW);
        }));
    }

    /**
     * called from preDestroy
     */
    private void removeListeners() {
        for (Registration r : this.listeners) {
            if (r != null) {
                r.remove();
            }
        }

        this.listeners.clear();
    }
}
