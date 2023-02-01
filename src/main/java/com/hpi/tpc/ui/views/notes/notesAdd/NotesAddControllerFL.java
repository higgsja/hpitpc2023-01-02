package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.notes.NotesConst.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
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
@Route(value = ROUTE_NOTES_CONTROLLER_ADD, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_ADD)
@org.springframework.stereotype.Component
@PermitAll
public class NotesAddControllerFL
    extends ViewControllerBaseFL
    implements BeforeEnterObserver
{

    @Autowired private TPCDAOImpl serviceTPC;

    private final NotesAddFormTitleVL notesAddFormTitleVL;
    private final NotesAddFormVL notesAddFormVL;

    public NotesAddControllerFL()
    {
        this.addClassName("notesAddControllerFL");
        this.setAlignItems(Alignment.STRETCH);
        this.setWidth("100%");
        this.setHeight("100%");

        this.notesAddFormTitleVL = new NotesAddFormTitleVL("Add a note ...");
        this.notesAddFormTitleVL.setMaxWidth("100vw");

        this.notesAddFormVL = new NotesAddFormVL();
        this.notesAddFormVL.setMaxHeight("100vh");
        this.notesAddFormVL.setMaxWidth("100vw");

        this.add(this.notesAddFormTitleVL, this.notesAddFormVL);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);

        //log feature use
        this.serviceTPC.AppTracking("TPC:Notes:Add:Controller");

        //grid layout may change based on preferences change; refresh on every entry
        //none for now
        //this.notesMineVL.doLayout(this.notesModel.getStringColumns());
        //set listeners on new layout if necessary
        //data may change; update data on every entry
//        this.notesModel.getData("all");
        //set data grid to display data provider data
//        this.notesAllVL.getNotesGrid().setItems(this.notesModel.getDataProvider());
        //refresh gear (none)
        super.updateNavBarGear(null);
    }

    @Override
    public void addMenuBarTabs()
    {
        //not changing them
    }
}
