package com.hpi.tpc.data.entities;

import java.sql.*;
import java.util.*;
import org.springframework.jdbc.core.*;

public class NoteMapper implements RowMapper<NoteModel> {
    @Override
    public NoteModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        NoteModel note;
        Long longTime;

        TimeZone.setDefault(TimeZone.getTimeZone("GMT"));
        longTime = rs.getTimestamp("TStamp").getTime();

        note = NoteModel.builder()
            .joomlaId(((Integer) rs.getInt("JoomlaId")).toString())
            .tStamp(longTime)
            .ticker(rs.getString("Ticker"))
            .iPrice(((Double) rs.getDouble("IPrice")).toString())
            .description(rs.getString("Description"))
            .notes(rs.getString("Notes"))
            .units(((Double) rs.getDouble("Units")).toString())
            .action(rs.getString("Action"))
            .triggerType(rs.getString("TriggerType"))
            .trigger(rs.getString("Trigger"))
            .active(((Integer) rs.getInt("Active")).toString())
            .dateEntered(rs.getString("DateEntered"))
            .high((((Double) rs.getDouble("High")).toString()))
            .low((((Double) rs.getDouble("Low")).toString()))
            .close((((Double) rs.getDouble("Close")).toString()))
            .priceChange((((Double) rs.getDouble("PriceChange")).toString()))
            .priceChangePct((((Double) rs.getDouble("PriceChangePct")).
                toString()))
            .gain((((Double) rs.getDouble("Gain")).toString()))
            .gainPct((((Double) rs.getDouble("GainPct")).toString()))
            .atr((((Double) rs.getDouble("ATR")).toString()))
            .earnDate(rs.getString("EarnDate"))
            .build();

        return note;
    }
}
