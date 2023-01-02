package com.hpi.tpc.ui.views.menus;

import com.hpi.tpc.ui.views.notes.notes.NotesMVC_M;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.icon.*;
import com.vaadin.flow.component.menubar.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

/*
 * Abstract View Controller: 
 * common methods and fields for View Controllers
 */
@Component
public abstract class ViewControllerBase
    extends FlexLayout
    implements BeforeEnterObserver
{

    @Getter @Autowired private MainLayout mainLayout;
    @Getter @Autowired private PrefsController prefsController;
    @Autowired private NotesMVC_M notesMVCModel;

    @Getter public final MenuBar menuBar;

    public ViewControllerBase()
    {
        this.menuBar = new MenuBar();
        this.menuBar.setOpenOnHover(true);
    }

    //private com.vaadin.flow.component.Component noteIcon()
//    private Icon noteIcon()
//    {
//        Icon pencilIcon;
//
//        pencilIcon = new Icon(VaadinIcon.PENCIL);
//        pencilIcon.setColor("#169FF3");
//
//        //add listener for new note
//        pencilIcon.addClickListener(event ->
//        {
//            //give model a starter noteModel
//            notesMVCModel.setSelectedNoteModel(new NoteModel(SecurityUtils.getUserId().toString(),
//                null, null, null, null, null, null, null, null, null, "1", null));
//            UI.getCurrent().navigate(NOTES_ADD_VIEW);
//        });
//
//        return pencilIcon;
//    }

    /**
     * establish top navBar menu
     *
     * @param prefsPage: Route to preferences page
     */
    public void doNavBar(String prefsPage)
    {

//        this.mainLayout.clearNavBar();
//        if (this.mainLayout.getPagePrefsHL() != null)
//        {
//            this.mainLayout.remove(this.mainLayout.getPagePrefsHL());
//        }
        
        //clear the old menu items
        this.mainLayout.removeTopMenu();

        //add the new menu items
        this.mainLayout.addTopMenu(this.menuBar, this.createPreferencesTab(prefsPage));

        //add to navBar
//        this.mainLayout.addToNavbar(true, new DrawerToggle(), this.noteIcon(),
//            this.menuBar, this.createPreferencesTab(prefsPage));
    }

    /**
     * create top menuBar tabs and listeners
     */
    public abstract void createMenuTabs();

    /*
     * create the preferences icon and listener for the top menuBar
     */
    private HorizontalLayout createPreferencesTab(String prefsPage)
    {
        //hit
        Icon prefsIcon;
        HorizontalLayout prefsHorizontalLayout;

        prefsHorizontalLayout = new HorizontalLayout();

        prefsIcon = new Icon(VaadinIcon.COG);
        prefsIcon.setColor("#169FF3");
        prefsHorizontalLayout.add(prefsIcon);
        prefsHorizontalLayout.setWidth("100%");
        prefsHorizontalLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.END);

        //add listener to prefs page
        prefsIcon.addClickListener((ClickEvent<Icon> t) ->
        {
            UI.getCurrent().navigate(prefsPage);
        });

        return prefsHorizontalLayout;
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        if (this.getPrefsController().getPref("TPCDrawerClose").equalsIgnoreCase("yes"))
        {
            this.getMainLayout().setDrawerOpened(false);
        }
    }
}
