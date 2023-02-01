package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.ui.views.baseClass.*;
import com.vaadin.flow.component.button.*;
import lombok.*;

public class NotesAddControlsHL
    extends ControlsHLBase
{

    @Getter private Button buttonAddSave;
    @Getter private Button buttonAddCancel;
    @Getter private Button buttonAddArchive;

    public NotesAddControlsHL()
    {
        this.addClassName("notesAddControlsHL");
        
        this.doLayout();
    }

    @Override
    public final void doLayout()
    {
        this.buttonAddSave = new Button("Save");
        this.buttonAddSave.setVisible(true);
        this.buttonAddSave.setEnabled(false);   //until something changes
        this.buttonAddCancel = new Button("Cancel");
        this.buttonAddCancel.setVisible(true);
        this.buttonAddArchive = new Button("Archive");
        this.buttonAddArchive.setVisible(true);
        
        this.add(this.buttonAddSave, this.buttonAddCancel, this.buttonAddArchive);
    }
}
