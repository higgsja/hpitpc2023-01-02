package com.hpi.tpc.ui.views.coaching.gains.positions;

import com.hpi.tpc.ui.views.baseClass.*;

public class GainsPositionsVL
    extends ViewBaseVL
{
    private final GainsPositionsTitleVL gainsPositionsTitleVL;
    private final GainsPositionsGridVL gainsPositionsGridVL;

    public GainsPositionsVL()
    {
        this.addClassName("gainsPositionsVL");
        
        //title
        this.gainsPositionsTitleVL = new GainsPositionsTitleVL("Positions");
        this.add(this.gainsPositionsTitleVL);
        
        //grid
        this.gainsPositionsGridVL = new GainsPositionsGridVL();
        this.add(this.gainsPositionsGridVL);
    }    
}
