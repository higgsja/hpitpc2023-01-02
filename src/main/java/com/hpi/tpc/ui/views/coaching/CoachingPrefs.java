package com.hpi.tpc.ui.views.coaching;

import static com.hpi.tpc.AppConst.ROUTE_COACHING_PREFERENCES;
import static com.hpi.tpc.AppConst.TITLE_PAGE_COACHING;
import com.hpi.tpc.ui.views.main.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import javax.annotation.*;
import javax.annotation.security.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.support.rowset.*;

@UIScope
@VaadinSessionScope
@org.springframework.stereotype.Component
@Route(value = ROUTE_COACHING_PREFERENCES, layout = MainLayout.class)

@NoArgsConstructor
@PageTitle(TITLE_PAGE_COACHING)
@PermitAll
public class CoachingPrefs
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver
{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    private void init()
    {
        Span aSpan;
        String sql;
        String keyValue;

        keyValue = "";

        //get help information
        sql = "select KeyValue from TPCHelp where KeyId = 'CoachingHelp';";
        SqlRowSet rowSet = this.jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next())
        {
            //will only be one
            keyValue = rowSet.getString("KeyValue");
        }
        aSpan = new Span();
        aSpan.getElement().setProperty("innerHTML", keyValue);

        this.add(aSpan);
    }

    @PreDestroy
    private void destruct()
    {

    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent ble)
    {
    }
}
