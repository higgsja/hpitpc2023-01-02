package com.hpi.tpc.ui.views.main;

import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.app.security.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.prefs.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.notes.notes.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.applayout.*;
import com.vaadin.flow.component.dependency.*;
import com.vaadin.flow.component.icon.*;
import com.vaadin.flow.component.menubar.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.dom.*;
import com.vaadin.flow.shared.*;
import com.vaadin.flow.spring.annotation.*;
import com.vaadin.flow.theme.lumo.*;
import java.util.*;
import javax.annotation.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;

@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component
@CssImport(value = "./styles/vaadin-app-layout.css", themeFor = "vaadin-app-layout")
public class MainLayout
    extends AppLayout
{

    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private MainDrawer mainDrawer;
    @Autowired private PrefsController prefsController;
    @Autowired private NotesMVC_M notesMVCModel;

    //globals
    @Getter private List<ClientSectorModel> clientAllSectorListModels;
    @Getter private List<ClientSectorModel> clientActiveSectorListModels;
    @Getter private HashMap<Integer, String> clientAllSectorHashMap;
    @Getter private HashMap<Integer, Double> clientSectorIdTgtPctHashMap;
    //clientEquityAttributes does not change often
    @Getter private List<ClientEquityModel> clientEquityAttributesModels;

    //top menu 
    private DrawerToggle drawerToggle;
    private Icon noteIcon;
    private MenuBar menuBar;
    private HorizontalLayout pagePrefsHL;

    private Registration tabSelectionListener;

    public MainLayout()
    {
    }

    @PostConstruct
    private void construct()
    {
        prefsController.readPrefsByPrefix("TPC");

        ThemeList themeList = UI.getCurrent().getElement().getThemeList();

        if (themeList.contains(Lumo.DARK))
        {
        } else
        {
            themeList.add(Lumo.DARK);
        }

        this.getClientSectorLists();

        this.getClientEquityAttributesList();

        //construct the drawer
        this.addToDrawer(this.mainDrawer.getMainMenuTabs());
        this.tabSelectionListener = this.mainDrawer.getMainMenuTabs().addSelectedChangeListener(event ->
        {
            UI.getCurrent().navigate(((MyTab) event.getSelectedTab()).getNavTarget());
        });
        this.setPrimarySection(Section.DRAWER);

        //construct the navBar
        this.addToNavbar(true, new DrawerToggle(), this.noteIcon());
    }

    private Icon noteIcon()
    {
        Icon pencilIcon;

        pencilIcon = new Icon(VaadinIcon.PENCIL);
        pencilIcon.setColor("#169FF3");

        //add listener for new note
        pencilIcon.addClickListener(event ->
        {
            //give model a starter noteModel
            notesMVCModel.setSelectedNoteModel(new NoteModel(SecurityUtils.getUserId().toString(),
                null, null, null, null, null, null, null, null, null, "1", null));
            UI.getCurrent().navigate(NOTES_ADD_VIEW);
        });

        return pencilIcon;
    }

    public void removeTopMenu()
    {
        if (this.menuBar != null)
        {
            this.remove(this.menuBar);
            this.menuBar = null;
        }

        if (this.pagePrefsHL != null)
        {
            this.remove(this.pagePrefsHL);
            this.pagePrefsHL = null;
        }
    }

    public void removeTopMenuBar()
    {
        if (this.menuBar != null)
        {
            this.remove(this.menuBar);
            this.menuBar = null;
        }
    }

    public void removePagePrefsHL()
    {
        if (this.pagePrefsHL != null)
        {
            this.remove(this.pagePrefsHL);
            this.pagePrefsHL = null;
        }
    }

    public void updatePagePrefsHL(HorizontalLayout prefsPageHL)
    {
        this.addToNavbar();
    }

    public void addTopMenu(MenuBar menuBar, HorizontalLayout pagePrefsHL)
    {
        //hit
        this.addToNavbar(menuBar, pagePrefsHL);
        this.menuBar = menuBar;
        this.pagePrefsHL = pagePrefsHL;
    }

    public void addTopMenuBar(MenuBar menuBar)
    {
        this.addToNavbar(menuBar);
    }

    public void addPagePrefsHL(HorizontalLayout pagePrefsHL)
    {
        this.addToNavbar(pagePrefsHL);
    }

//    public void clearNavBar()
//    {
//        Element mainLayoutElement;
//        //get array of all elements in the layout; process those with attribute of 'slot'
//        for (Object c : this.getElement().getChildren().toArray())
//        {
//            mainLayoutElement = (Element) c;
//            //only want slot elements
//            if (mainLayoutElement.getAttribute("slot") != null
//                //and those that are 'navbar'
//                && (mainLayoutElement.getAttribute("slot").equalsIgnoreCase("navbar")
//                //or 'navbar touch-optimized'
//                || mainLayoutElement.getAttribute("slot").equalsIgnoreCase("navbar touch-optimized")))
//            {
//                //then remove them from the navBar
//                this.getElement().removeChild((Element) c);
//            }
//        }
//    }
    public void getClientSectorLists()
    {
        //query data from backend
        this.clientAllSectorListModels = this.serviceTPC.getClientSectorModels(
            ClientSectorModel.SQL_SELECT_ALL_SECTORS_BY_NAME);

        //put in the hashMaps
        this.clientAllSectorHashMap = new HashMap<>();
        this.clientSectorIdTgtPctHashMap = new HashMap<>();

        for (ClientSectorModel csm : this.clientAllSectorListModels)
        {
            this.clientAllSectorHashMap.put(csm.getClientSectorId(), csm.getCSecShort());
            this.clientSectorIdTgtPctHashMap.put(csm.getClientSectorId(), csm.getTgtPct());
        }

        //query data from backend
        this.clientActiveSectorListModels = this.serviceTPC.getClientSectorModels(
            ClientSectorModel.SQL_SELECT_ALL_ACTIVE_SECTORS_BY_NAME);

        //put in the hashMap
        this.clientAllSectorHashMap = new HashMap<>();

        for (ClientSectorModel csm : this.clientAllSectorListModels)
        {
            this.clientAllSectorHashMap.put(csm.getClientSectorId(), csm.getCSecShort());
        }
    }

    public void getClientEquityAttributesList()
    {
        //query clientEquityAttributes data from backend
        //need to pull in equityInfo.Company
        this.clientEquityAttributesModels = this.serviceTPC.getClientEquityAttributesModels();
    }
}
