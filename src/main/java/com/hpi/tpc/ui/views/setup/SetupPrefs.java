package com.hpi.tpc.ui.views.setup;

import static com.hpi.tpc.AppConst.*;
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
@Route(value = ROUTE_SETUP_PREFERENCES, layout = MainLayout.class)
@org.springframework.stereotype.Component
@NoArgsConstructor
//@CssImport("./styles/custom.css")
@PageTitle(TITLE_PAGE_SETUP)
@PermitAll
public class SetupPrefs
    extends VerticalLayout
    implements BeforeEnterObserver, BeforeLeaveObserver {
    @Autowired private JdbcTemplate jdbcTemplate;

    @PostConstruct
    private void init() {
        Span aSpan;
        String sql;
        String keyValue;

        keyValue = "";

        sql = "select KeyValue from TPCHelp where KeyId = 'SetupHelp';";
        SqlRowSet rowSet = this.jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next()) {
            //will only be one
            keyValue = rowSet.getString("KeyValue");
        }
        aSpan = new Span();
        aSpan.getElement().setProperty("innerHTML", keyValue);

        this.add(aSpan);
    }

    @PreDestroy
    private void destruct() {

    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee) {
    }

    @Override
    public void beforeLeave(BeforeLeaveEvent ble) {
    }
}
