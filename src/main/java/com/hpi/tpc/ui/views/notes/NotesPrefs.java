package com.hpi.tpc.ui.views.notes;

import com.hpi.tpc.ui.views.main.MainLayout;
import static com.hpi.tpc.AppConst.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.support.rowset.*;
import org.springframework.stereotype.*;

/**
 * makes direct request for data from model
 * does not change data;
 * user actions are sent to the controller
 * dumb, just builds the view
 */
@UIScope
@VaadinSessionScope
@Component
@Route(value = ROUTE_NOTES_PREFERENCES, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_NOTES)
@NoArgsConstructor
@PermitAll
public class NotesPrefs
    extends PagePrefsBase
    implements BeforeEnterObserver
{

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        this.init("ConfigNotesHelp");
    }
}
