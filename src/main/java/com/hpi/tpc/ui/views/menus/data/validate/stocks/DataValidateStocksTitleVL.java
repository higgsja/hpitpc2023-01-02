package com.hpi.tpc.ui.views.menus.data.validate.stocks;

import com.hpi.tpc.ui.views.baseClass.*;

public class DataValidateStocksTitleVL
    extends ViewBaseVL
{

    public DataValidateStocksTitleVL()
    {
        this.addClassName("dataValidateStockTitleVL");
        this.add(this.titleFormat("Validate Stock Transactions"));
        
        this.setHeight("14px");
        
        this.getElement().getStyle().set("padding", "0");
    }
}
