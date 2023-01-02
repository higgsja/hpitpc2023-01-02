package com.hpi.tpc.ui.views.coaching.gains;

import com.hpi.tpc.app.security.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.vaadin.flow.component.combobox.*;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.radiobutton.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.*;
import org.springframework.stereotype.*;

@UIScope
@VaadinSessionScope
@Component
@NoArgsConstructor
public class GainsControlsHL2
    extends ControlsHLBase
    implements ControlsHLInterface
{

    @Autowired private GainsModel gainsMVCModel;
    @Autowired private JdbcTemplate jdbcTemplate;

    @Getter private final ComboBox<EquityTypeModel> cbEquityType = new ComboBox<>();
    @Getter private final RadioButtonGroup<String> radioButtonGroup = new RadioButtonGroup<>();
    @Getter private final Label total = new Label();

    private final HorizontalLayout radioGroupHL = new HorizontalLayout();
    private final HorizontalLayout totalHL = new HorizontalLayout();

    @PostConstruct
    public void construct_b()
    {
        //hit as is the super
        this.addClassName("gainsControlsHL2");
    }

    /**
     *
     */
    @Override
    public void doLayout()
    {
        this.setupEquityTypes();
        this.doRadioGroupHL();
        this.doTotalHL();

        this.add(this.cbEquityType, this.radioGroupHL, this.totalHL);
    }

    private void doRadioGroupHL()
    {
        this.radioButtonGroup.setItems("%", "$");
        this.radioButtonGroup.setClassName("radioGroup");
        this.radioButtonGroup.setValue(this.gainsMVCModel.getSelectedChartType());

        this.radioGroupHL.add(this.radioButtonGroup);
    }

    private void doTotalHL()
    {
        this.total.setText("Total: $999,999.99");
        this.total.setClassName("coachingGainsTotal");

        this.totalHL.add(this.total);
    }

    private void setupEquityTypes()
    {
        this.cbEquityType.setWidth("110px");

        this.setEquityTypes((this.gainsMVCModel.getSelectedTimeframeModel().getTimeframe().equalsIgnoreCase("Open")
            ? "PositionsOpen" : "PositionsClosed"), true);
    }

    protected void setEquityTypes(String dataTable, Boolean bInit)
    {
        List<EquityTypeModel> equityTypes;
        List<EquityTypeModel> tmpEquityTypes;

        equityTypes = new ArrayList<>();
        //add the All choice
        equityTypes.add(EquityTypeModel.builder()
            .equityType("--All--")
            .build());
        
        tmpEquityTypes = jdbcTemplate.query(
            String.format(EquityTypeModel.SQL_DISTINCT_EQUITY_TYPES,
                dataTable,
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedPositionModel().getTicker(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSelectedTradeTacticModel().getTacticId(),
                this.gainsMVCModel.getSqlTimeframe(),
                SecurityUtils.getUserId()), //all equityType
            new EquityTypeMapper());

        //put the rest of equityTypes into the array
        for (EquityTypeModel etm : tmpEquityTypes)
        {
            //uppercase first letter
            etm.setEquityType(etm.getEquityType().substring(0, 1).toUpperCase()
                + etm.getEquityType().substring(1).toLowerCase());
            equityTypes.add(etm);
        }

        if (bInit)
        {
            this.gainsMVCModel.setEquityTypeModels(equityTypes);

            this.cbEquityType.setItems(this.gainsMVCModel.getEquityTypeModels());
            if (this.gainsMVCModel.getEquityTypeModels().size() > 0)
            {
                this.cbEquityType.setValue(this.gainsMVCModel.getEquityTypeModels().get(0));
            }
        } else
        {
            //odd behavior in combobox if we switch to a new list that is the same as the old list
            //  do not do that (Doc, it hurts when I do that ...)
            EquityTypeModel[] array1 = equityTypes.toArray(new EquityTypeModel[0]);
            EquityTypeModel[] array2 = this.gainsMVCModel.getEquityTypeModels().toArray(new EquityTypeModel[0]);
            if (!Arrays.equals(array1, array2))
            {
                this.gainsMVCModel.setEquityTypeModels(equityTypes);
                //change pick list
                this.cbEquityType.setItems(this.gainsMVCModel.getEquityTypeModels());
                this.cbEquityType.setValue(this.gainsMVCModel.getSelectedEquityTypeModel());
            }
        }
    }
}
