package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.app.security.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.notes.*;
import static com.hpi.tpc.ui.views.notes.NotesConst.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.*;
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
    @Autowired private NotesAddFormVL1 notesAddFormVL;

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
        this.add(this.notesAddFormVL);

        this.addListeners();
    }

    private void addListeners()
    {
        this.notesAddFormVL.getControlsHL().getButtonAddSave().addClickListener((ClickEvent<Button> e) ->
        {
            //set this so no error when clearing the ticker after a save
            this.notesModel.setIsSave(true);
            this.notesModel.saveAdd();
            //todo: how do you know the save succeeded?
            this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(false);
            this.notesAddFormVL.getTicker().focus();
            this.notesAddFormVL.getTicker().setValue("");
        });

        this.notesAddFormVL.getControlsHL().getButtonAddCancel().addClickListener(e ->
        {
            UI.getCurrent().navigate(ROUTE_NOTES_CONTROLLER_MINE);
        });

        this.notesAddFormVL.getControlsHL().getButtonAddArchive().addClickListener(e ->
        {
            this.notesModel.saveUpdate(this.notesAddFormVL, Boolean.TRUE);
        });
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);

        //log feature use
        this.serviceTPC.AppTracking("TPC:Notes:Add:Controller");

        //starter note template
        this.notesModel.setSelected(new NoteModel());
        this.notesModel.getSelectedNoteModel().setJoomlaId(SecurityUtils.getUserId().toString());
        this.notesModel.getSelectedNoteModel().setAction("Buy");
        this.notesModel.getSelectedNoteModel().setUnits(100.0);
        this.notesModel.getSelectedNoteModel().setTriggerType("Price");
        this.notesModel.getSelectedNoteModel().setTrigger("");
        this.notesModel.getSelectedNoteModel().setActive("1");


//        this.notesModel.getBinder().readBean(this.notesModel.getSelectedNoteModel());
        this.notesModel.getBinder().setBean(this.notesModel.getSelectedNoteModel());

        //allow changes for Add
        this.notesAddFormVL.getTicker().setEnabled(true);
        this.notesAddFormVL.getIPrice().setEnabled(true);

        //initial button settings upon entry
        this.notesAddFormVL.getControlsHL().getButtonAddSave().setVisible(true);
        this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(false);

        this.notesAddFormVL.getControlsHL().getButtonAddCancel().setVisible(true);
        this.notesAddFormVL.getControlsHL().getButtonAddCancel().setEnabled(true);

        this.notesAddFormVL.getControlsHL().getButtonAddArchive().setVisible(true);
        this.notesAddFormVL.getControlsHL().getButtonAddArchive().setEnabled(false);

        //refresh gear (none)
        super.updateNavBarGear(null);
    }

    @Override
    public void addMenuBarTabs()
    {
        //not changing them
    }
}
