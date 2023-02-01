package com.hpi.tpc.ui.views.notes.notesAddEdit;

import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.button.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import javax.annotation.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

//@NoArgsConstructor
//@UIScope
//@VaadinSessionScope
//@Route(value = ROUTE_NOTES_INFO, layout = MainLayout.class)
//@PageTitle(TITLE_PAGE_NOTES)
//@Component
//@PermitAll
public class NotesAddEditFormControlsHL
    extends ControlsHLBase
{

    @Autowired MainLayout mainLayout;
    @Autowired private TPCDAOImpl noteService;
    
    @Getter private Button equitiesStocksPrefsSave;
    @Getter private Button equitiesStocksPrefsCancel;

    private HorizontalLayout buttonsHL;

    public NotesAddEditFormControlsHL()
    {
        this.doLayout();
    }

    @Override
    public final void doLayout(){
        this.addClassName("notesAddEditFormControlsHL");
        
        
    }
}
