package com.hpi.tpc.ui.views.coaching;

import static com.hpi.tpc.AppConst.ROUTE_COACHING_PREFERENCES;
import static com.hpi.tpc.AppConst.TITLE_PAGE_COACHING;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.security.*;
import lombok.*;

@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component
@Route(value = ROUTE_COACHING_PREFERENCES, layout = MainLayout.class)

@NoArgsConstructor
@PageTitle(TITLE_PAGE_COACHING)
@PermitAll
public class CoachingPrefs
    extends PagePrefsBase
    implements BeforeEnterObserver
{

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        this.init("CoachingHelp");
    }
}
