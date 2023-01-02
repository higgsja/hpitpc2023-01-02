package com.hpi.tpc.ui.views.notes.notes;

import com.hpi.tpc.ui.views.main.MainLayout;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

/**
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Component
@Route(value = ROUTE_NOTES_MVC_VIEW_ARCHIVED, layout = MainLayout.class)
@PermitAll
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_ARCHIVED)
public class NotesMVC_V_Archived
    extends NotesMVC_V_Abstract
    implements BeforeEnterObserver, BeforeLeaveObserver {

    @Autowired private TPCDAOImpl noteService;

    @Autowired private MainLayout appController;

    @Autowired private PrefsController prefsController;

    public NotesMVC_V_Archived() {
        int i = 0;
    }

    @PostConstruct
    void construct() {
        //this is hit; super is not unless called
        this.notesGrid
            .addItemClickListener(event -> {
                this.notesMVCModel.setSelected(event.getItem());
                UI.getCurrent().navigate(NOTES_EDIT_VIEW);
            });
    }

    @PreDestroy
    void destruct() {
        //hit on exit; super is not unless called
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {

        this.noteService.AppTracking("TPC:Notes:View:Mine");

        this.getData();
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event
    ) {
        //gets hit on the way to notesEdit
    }

    /*
     * populates grid with correct data
     */
    @Override
    public void getData() {
        List<NoteModel> aList;

        aList = this.noteService.getByJId("archived");

        //this.notesGrid.getDataProvider().refreshAll();
        this.notesGrid.getDataProvider().refreshAll();

        //this.notesGrid.setItems(aList);
        this.notesGrid.setItems(aList);
    }
}
