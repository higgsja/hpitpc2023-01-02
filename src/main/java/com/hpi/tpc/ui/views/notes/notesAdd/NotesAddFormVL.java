package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.ui.views.notes.*;
import com.hpi.tpc.ui.views.notes.notesAddEdit.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import org.springframework.beans.factory.annotation.*;

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
    extends NotesAddEditFormAbstractVL1
    implements BeforeEnterObserver
{

    @Autowired private NotesModel notesModel;

    public NotesAddFormVL()
    {
        this.addClassName("notesAddFormVL");
    }

    @Override
    public void doLayout()
    {
        super.doLayout();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
//        //initial button settings upon entry
//        this.getControlsHL().getButtonAddSave().setVisible(true);
//        this.getControlsHL().getButtonAddSave().setEnabled(false);
//
//        this.getControlsHL().getButtonAddCancel().setVisible(true);
//        this.getControlsHL().getButtonAddCancel().setEnabled(true);
//
//        this.getControlsHL().getButtonAddArchive().setVisible(true);
//        this.getControlsHL().getButtonAddArchive().setEnabled(true);


    }
}
