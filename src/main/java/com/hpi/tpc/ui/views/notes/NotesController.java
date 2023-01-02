package com.hpi.tpc.ui.views.notes;

import com.hpi.tpc.ui.views.notes.notes.NotesMVC_V_Mine;
import com.hpi.tpc.ui.views.notes.notes.NotesMVC_M;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.app.security.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.menus.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.contextmenu.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component
@PermitAll
@Route(value = ROUTE_NOTES, layout = MainLayout.class)
@RouteAlias(value = HOME_URL, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_NOTES)
@NoArgsConstructor
/*
 * Controller: Interface between Model and View to process business logic and incoming
 * requests:
 * manipulate data using the Model
 * interact with the Views to render output
 * respond to user input and performance actions on data model objects.
 * receives input, optionally validates it and passes it to the model
 * Target for navigation from appDrawer
 */
public class NotesController
    extends ViewControllerBase
    implements BeforeEnterObserver
{

    //not used here but must be instantiated here
//    @Autowired private NotesMVCController notesMVCController;
    @Autowired private NotesMVC_M notesMVCModel;
    @Autowired private NotesModel notesModel;

    @PostConstruct
    private void construct()
    {
        this.setClassName("notesMenu");
        this.menuBar.setId("notesMenuId");

        //get any preferences
        this.notesModel.getPrefs();

        this.createMenuTabs();
    }

    /*
     * create top menuBar tabs and listeners
     */
    @Override
    public void createMenuTabs()
    {
        MenuItem notesItem = this.menuBar.addItem(TITLE_NOTES);
        SubMenu notesSubMenu = notesItem.getSubMenu();
        MenuItem notesAdd = notesSubMenu.addItem(TITLE_PAGE_NOTES_ADD);
        notesSubMenu.add(new Hr());
        MenuItem notesMineItem = notesSubMenu.addItem(TITLE_PAGE_NOTES_MINE);
        MenuItem notesAllItem = notesSubMenu.addItem(TITLE_PAGE_NOTES_ALL);
        notesSubMenu.add(new Hr());
        MenuItem notesDeletedItem = notesSubMenu.addItem(TITLE_PAGE_NOTES_ARCHIVED);

        notesAdd.addClickListener((ClickEvent<MenuItem> event) ->
        {
            //give model a starter noteModel
            notesMVCModel.setSelectedNoteModel(new NoteModel(SecurityUtils.getUserId().toString(),
                null, null, null, null, null, null, null, null, null, "1", null));
            UI.getCurrent().navigate(NOTES_ADD_VIEW);
        });

        notesMineItem.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(ROUTE_NOTES_MVC_VIEW_MINE);
        });

        notesAllItem.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(ROUTE_NOTES_MVC_VIEW_ALL);
        });

        notesDeletedItem.addClickListener((ClickEvent<MenuItem> event) ->
        {
            UI.getCurrent().navigate(ROUTE_NOTES_MVC_VIEW_ARCHIVED);
        });
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);
        //refresh navBar for this view
        super.doNavBar(ROUTE_NOTES_PREFERENCES);

        bee.forwardTo(NotesMVC_V_Mine.class);
    }
}
