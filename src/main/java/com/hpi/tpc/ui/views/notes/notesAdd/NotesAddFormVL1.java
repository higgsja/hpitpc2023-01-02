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
public class NotesAddFormVL1
    extends NotesAddEditFormAbstractVL1
{

//    @Autowired private NotesModel notesModel;

    public NotesAddFormVL1()
    {
        this.addClassName("notesAddFormVL");
    }

    @Override
    public void doLayout()
    {
        super.doLayout();
    }
}
