package com.hpi.tpc.ui.views.menus.data.equities.stocks;

import lombok.*;
import org.springframework.stereotype.*;

@Component
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
public class FilterFinVizInfo
{
    private String filterTicker = "";
    private String filterSector = "";
    private String filterIndustry = "";
}
