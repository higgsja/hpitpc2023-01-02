package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.notes.*;
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
@Route(value = ROUTE_NOTES_CONTROLLER_ADD, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_ADD)
@org.springframework.stereotype.Component
@PermitAll
public class NotesAddControllerFL
    extends ViewControllerBaseFL
    implements BeforeEnterObserver
{

    @Autowired private NotesModel notesModel;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private NotesAddFormVL notesAddFormVL;

//    private final NotesAddFormTitleVL notesAddFormTitleVL;

    public NotesAddControllerFL()
    {
        this.addClassName("notesAddControllerFL");
        this.setAlignItems(Alignment.STRETCH);
        this.setWidth("100%");
        this.setHeight("100%");
    }

    @PostConstruct
    private void construct()
    {
        this.notesAddFormVL.setMaxHeight("100vh");
        this.notesAddFormVL.setMaxWidth("100vw");
        this.add(this.notesAddFormVL);
    }

    private void setFields()
    {
        
        //for add, ticker is null
        if (this.notesModel.getSelectedNoteModel().getTicker() != null)
        {
            this.notesAddFormVL.getTicker().setValue(this.notesModel.getSelectedNoteModel().getTicker());
        }
        if (this.notesModel.getSelectedNoteModel().getAction() != null)
        {

            this.notesAddFormVL.getActionsCB().setValue(this.notesModel.getSelectedNoteModel().getAction());
        }
        if (this.notesModel.getSelectedNoteModel().getNotes() != null)
        {
            this.notesAddFormVL.getNotes().setValue(this.notesModel.getSelectedNoteModel().getNotes());
        }
        if (this.notesModel.getSelectedNoteModel().getUnits() != null)
        {
            this.notesAddFormVL.getUnits().setValue(this.notesModel.getSelectedNoteModel().getUnits().toString());
        } else
        {
            this.notesAddFormVL.getUnits().setValue("100");
        }
        if (this.notesModel.getSelectedNoteModel().getIPrice() != null)
        {
            this.notesAddFormVL.getIPrice().setValue(this.notesModel.getSelectedNoteModel().getIPrice().toString());
        }
        if (this.notesModel.getSelectedNoteModel().getTriggerType() != null)
        {
            this.notesAddFormVL.getAlertsCB().setValue(this.notesModel.getSelectedNoteModel().getTriggerType());
        }

        if (this.notesModel.getSelectedNoteModel().getTrigger() != null)
        {
            this.notesAddFormVL.getAlert().setValue(this.notesModel.getSelectedNoteModel().getTrigger());
        }

        if (this.notesModel.getSelectedNoteModel().getDescription() != null)
        {
            this.notesAddFormVL.getDescription().setValue(this.notesModel.getSelectedNoteModel().getDescription());
        }
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);

        //log feature use
        this.serviceTPC.AppTracking("TPC:Notes:Add:Controller");

        this.setFields();

        //refresh gear (none)
        super.updateNavBarGear(null);
    }

    @Override
    public void addMenuBarTabs()
    {
        //not changing them
    }
}
