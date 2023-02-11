package com.hpi.tpc.ui.views.notes.mine;

import com.hpi.tpc.ui.views.notes.NotesAbstractVL;
import com.hpi.tpc.ui.views.main.*;
import static com.hpi.tpc.ui.views.notes.NotesConst.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
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
@NoArgsConstructor
@Route(value = ROUTE_NOTES_VIEW_MINE, layout = MainLayout.class)
@PermitAll
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_MINE)
public class NotesMineVL
    extends NotesAbstractVL
    implements BeforeEnterObserver
{
    @PostConstruct
    private void construct()
    {
        //this is hit; super is not unless called
        this.addClassName("notesViewMineVL");
        
        this.getNotesGrid().addItemClickListener(event ->
            {
//                this.getNotesModel().setSelectedNoteModel(event.getItem());
                this.getNotesModel().getBinder().setBean(event.getItem());
                UI.getCurrent().navigate(ROUTE_NOTES_VIEW_EDIT);
            });
    }
    
    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        //there are things needed from the parent
        super.beforeEnter(event);
    }

    @Override
    public void getData()
    {
        //not required
    }
}
