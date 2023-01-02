package com.hpi.tpc.ui.views.notes.notes;

import com.hpi.tpc.ui.views.main.MainLayout;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.services.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
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
@NoArgsConstructor
@Route(value = ROUTE_NOTES_MVC_VIEW_MINE, layout = MainLayout.class)
@PermitAll
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_MINE)
public class NotesMVC_V_Mine
    extends NotesMVC_V_Abstract
    implements BeforeEnterObserver, BeforeLeaveObserver
{

    @Autowired private TPCDAOImpl noteService;

    @PostConstruct
    private void construct()
    {
        this.setId("notesContentViewMineID");
        this.setClassName("notesContentViewMine");
        //this is hit; super is not unless called
    }

    @PreDestroy
    void destruct()
    {
        //hit on exit; super is not unless called
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event)
    {
        //there are things needed from the parent
        super.beforeEnter(event);

        this.noteService.AppTracking("TPC:Notes:View:Mine");

        this.getData();
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent event)
    {
        //gets hit on the way to notesEdit
    }

    /*
     * populates grid with correct data
     */
    @Override
    public void getData()
    {
        List<NoteModel> aList;

        aList = this.noteService.getByJId("mine");

        //this.notesGrid.getDataProvider().refreshAll();
        this.notesGrid.getDataProvider().refreshAll();

        //this.notesGrid.setItems(aList);
        this.notesGrid.setItems(aList);
    }
}
