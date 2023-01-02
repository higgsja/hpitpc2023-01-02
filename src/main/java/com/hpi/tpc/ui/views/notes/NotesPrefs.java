package com.hpi.tpc.ui.views.notes;

import com.hpi.tpc.ui.views.main.MainLayout;
import static com.hpi.tpc.AppConst.*;
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
    extends VerticalLayout {

    @Autowired private JdbcTemplate jdbcTemplate;

    @PostConstruct
    private void init() {
        Span aSpan;
        String sql;
        String keyId;
        String keyValue;
        SqlRowSet rowSet;

        keyId = "ConfigNotesHelp";
        keyValue = "";

        sql = "select KeyValue from TPCHelp where KeyId = 'ConfigNotesHelp';";
        rowSet = this.jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next()) {
            //will only be one
            keyValue = rowSet.getString("KeyValue");
        }
        aSpan = new Span();
        aSpan.getElement().setProperty("innerHTML", keyValue);

        this.add(aSpan);
    }
}
