package com.hpi.tpc.ui.views.notes.archived;

import com.hpi.tpc.ui.views.notes.NotesModel;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.notes.NotesConst.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;

/*
 * Controller: Interface between Model and View to process business logic and incoming
 * requests:
 * manipulate data using the Model
 * interact with the Views to render output
 * respond to user input and performance actions on data model objects.
 * receives input, optionally validates it and passes it to the model
 * Target for navigation from appDrawer
 */
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_NOTES_CONTROLLER_ARCHIVED, layout = MainLayout.class)
@org.springframework.stereotype.Component
@PermitAll
public class NotesArchivedControllerFL
    extends ViewControllerBaseFL
    implements BeforeEnterObserver
{

    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private NotesModel notesModel;

    private final NotesArchivedVL notesArchivedVL;

    public NotesArchivedControllerFL()
    {
        this.addClassName("notesArchivedControllerFL");

        this.notesArchivedVL = new NotesArchivedVL();

        this.add(this.notesArchivedVL);
    }

    @PostConstruct
    public void construct()
    {
        this.notesModel.getPrefs("NotesArchived");
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);

        //log feature use
        this.serviceTPC.AppTracking("TPC:Notes:Archived:Controller");

        //grid layout may change based on preferences change; refresh on every entry
        //none for now
        //this.notesMineVL.doLayout(this.notesModel.getStringColumns());
        //set listeners on new layout if necessary
        
        //data may change; update data on every entry
        this.notesModel.getData("archived");
        
        //set data grid to display data provider data
        this.notesArchivedVL.getNotesGrid().setItems(this.notesModel.getDataProvider());

        //refresh gear (none)
        super.updateNavBarGear(null);
    }

    @Override
    public void addMenuBarTabs()
    {
        //not changing them
    }
}
