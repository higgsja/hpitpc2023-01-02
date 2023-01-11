package com.hpi.tpc.ui.views.menus;

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

    @Autowired private MainLayout mainLayout;
    @Autowired private PrefsController prefsController;
//    @Autowired private NotesMVC_M notesMVCModel;

    public MenuBar menuBar;
    private HorizontalLayout prefsPageHL;

    public ViewControllerBase()
    {
        this.setClassName("viewControllerBase");
        this.menuBar = new MenuBar();
        this.menuBar.setOpenOnHover(true);
    }

    /**
     * establish top navBar menu
     *
     * @param prefsPage: Route to preferences page
     */
    public void doNavBar(String prefsPage)
    {
        //clear the old menu items
        this.mainLayout.removeTopMenu();

        this.prefsPageHL = this.createPreferencesTab(prefsPage);

        //add the new menu items
        this.mainLayout.addTopMenu(this.menuBar, this.prefsPageHL);
    }

    /**
     * Change the gear icon route as necessary
     * When there is no preference page, prefsPageHL is set to null
     */
    public void updatePrefsIcon()
    {
        this.mainLayout.removePagePrefsHL();

        if (prefsPageHL != null)
        {
            this.mainLayout.addPagePrefsHL(prefsPageHL);
        }
    }

    /**
     * create top menuBar tabs and listeners
     */
    public abstract void createMenuTabs();

    /*
     * create the preferences icon and listener for the top menuBar
     */
    public HorizontalLayout createPreferencesTab(String prefsPage)
    {
        //hit
        Icon prefsIcon;
        HorizontalLayout prefsHorizontalLayout;

        prefsHorizontalLayout = new HorizontalLayout();
        prefsHorizontalLayout.setWidth("100%");
        prefsHorizontalLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.END);

        if (prefsPage == null)
        {
            return prefsHorizontalLayout;
        }

        prefsIcon = new Icon(VaadinIcon.COG);
        prefsIcon.setColor("#169FF3");
        prefsHorizontalLayout.add(prefsIcon);

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
        if (this.prefsController.getPref("TPCDrawerClose").equalsIgnoreCase("yes"))
        {
            this.mainLayout.setDrawerOpened(false);
        }
    }
}
