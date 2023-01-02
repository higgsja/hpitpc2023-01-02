package com.hpi.tpc.ui.views.menus.admin;

import static com.hpi.tpc.AppConst.ROUTE_ADMIN_PREFERENCES;
import static com.hpi.tpc.AppConst.TITLE_PAGE_ADMIN;
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
@Route(value = ROUTE_ADMIN_PREFERENCES, layout = MainLayout.class)

@NoArgsConstructor
@PageTitle(TITLE_PAGE_ADMIN)
@PermitAll
public class AdminPrefs
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
    @Autowired private JdbcTemplate jdbcTemplate;

    @PostConstruct
    private void construct() {
        Span aSpan;
        String sql;
        String keyValue;

        keyValue = "";

        sql = "select KeyValue from TPCHelp where KeyId = 'AdminHelp';";
        SqlRowSet rowSet = this.jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next()) {
            //will only be one
            keyValue = rowSet.getString("KeyValue");
        }
        aSpan = new Span();
        aSpan.getElement().setProperty("innerHTML", keyValue);

        this.add(aSpan);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee) {
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent ble) {
    }
}
