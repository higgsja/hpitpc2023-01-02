package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.app.security.*;
import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.baseClass.*;
import com.hpi.tpc.ui.views.main.*;
import com.hpi.tpc.ui.views.notes.*;
import static com.hpi.tpc.ui.views.notes.NotesConst.*;
import com.studerw.tda.model.quote.*;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.*;
import com.vaadin.flow.router.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import javax.annotation.*;
import javax.annotation.security.*;
import org.springframework.beans.factory.annotation.*;

/*
 * Controller: Interface between Model and View to process business logic and incoming
 * requests:
 * manipulate data using the Model
 * interact with the Views to render output
 * respond to user input and performance actions on data model objects.
 * receives input, optionally validates it and passes it to the model
 * Target for navigation from appDrawer
 */
@UIScope
@VaadinSessionScope
@Route(value = ROUTE_NOTES_CONTROLLER_ADD, layout = MainLayout.class)
@PageTitle(TITLE_PAGE_NOTES + ": " + TITLE_PAGE_NOTES_ADD)
@org.springframework.stereotype.Component
@PermitAll
public class NotesAddControllerFL
    extends ViewControllerBaseFL
    implements BeforeEnterObserver
{

    @Autowired private NotesModel notesModel;
    @Autowired private TPCDAOImpl serviceTPC;
    @Autowired private NotesAddFormVL notesAddFormVL;

//    private final NotesAddFormTitleVL notesAddFormTitleVL;
    public NotesAddControllerFL()
    {
        this.addClassName("notesAddControllerFL");
        this.setAlignItems(Alignment.STRETCH);
        this.setWidth("100%");
        this.setHeight("100%");
    }

    @PostConstruct
    private void construct()
    {
//        this.notesAddFormVL.setMaxHeight("100vh");
//        this.notesAddFormVL.setMaxWidth("100vw");
        this.add(this.notesAddFormVL);

        this.addListeners();
    }

    private void addListeners()
    {
        //for fields
        this.notesAddFormVL.getTicker().addBlurListener(e ->
        {
            //fired with focus change, get ticker data
            //how does .addValidator work
            if (e.getSource().getValue().trim().isEmpty())
            {
                this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(false);
                return;
            }

            this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(true);
            this.getTickerInfo(e.getSource().getValue());
        });

        this.notesAddFormVL.getControlsHL().getButtonAddSave().addClickListener((ClickEvent<Button> e) ->
        {
            this.notesModel.getSelectedNoteModel().setAction(this.notesAddFormVL.getActionsCB().getValue());
            this.notesModel.getSelectedNoteModel().setActive("1");
            this.notesModel.getSelectedNoteModel().setDateEntered(
                new java.sql.Date(System.currentTimeMillis()).toString());
            this.notesModel.getSelectedNoteModel().setDescription(this.notesAddFormVL.getDescription().getValue());
            this.notesModel.getSelectedNoteModel().setIPrice(Double.valueOf(
                this.notesAddFormVL.getIPrice().getValue()));
            this.notesModel.getSelectedNoteModel().setNotes(this.notesAddFormVL.getNotes().getValue());
            this.notesModel.getSelectedNoteModel().setTrigger(this.notesAddFormVL.getAlert().getValue());
            this.notesModel.getSelectedNoteModel().setTriggerType(this.notesAddFormVL.getAlertsCB().getValue());
            this.notesModel.getSelectedNoteModel()
                .setUnits(Double.valueOf(this.notesAddFormVL.getUnits().getValue()));

            this.notesModel.saveAdd();
            //how do you know the save succeeded?
            this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(false);
        });

        this.notesAddFormVL.getControlsHL().getButtonAddCancel().addClickListener(e ->
        {
            UI.getCurrent().navigate(ROUTE_NOTES_CONTROLLER_MINE);
        });

        this.notesAddFormVL.getControlsHL().getButtonAddArchive().addClickListener(e ->
        {
            this.notesModel.saveUpdate(this.notesAddFormVL, Boolean.TRUE);
        });
    }

    private void getTickerInfo(String ticker)
    {
        Quote quote;
        
        quote = null;
        try
        {
            quote = this.notesModel.getTickerInfo(ticker);
        } catch (RuntimeException e)
        {
            //disable save
            this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(false);
            //do an error message
            return;
        }

        EquityQuote equityQuote = (EquityQuote) quote;
        equityQuote.getLastPrice();
        equityQuote.getMark();
        this.notesAddFormVL.getTicker().setValue(ticker.toUpperCase());
        this.notesModel.getSelectedNoteModel().setTicker(ticker.toUpperCase());

//        this.notesAddFormVL.getIPrice().setValue(equityQuote.getBidPrice().toString());
        this.notesAddFormVL.getIPrice().setValue(equityQuote.getLastPrice().toString());
//        this.notesAddFormVL.getIPrice().setValue(equityQuote.getMark().toString());
//        this.notesAddFormVL.getIPrice().setValue(equityQuote.getAskPrice().toString());
        this.notesModel.getSelectedNoteModel().setIPrice(equityQuote.getLastPrice().doubleValue());

        this.notesAddFormVL.getDescription().setValue(equityQuote.getDescription());
        this.notesModel.getSelectedNoteModel().setDescription(equityQuote.getDescription());
    }

    private void setFields()
    {

        //for add, ticker is null
        if (!Objects.isNull(this.notesModel.getSelectedNoteModel().getTicker()))
//        if (this.notesModel.getSelectedNoteModel().getTicker() != null)
        {
            this.notesAddFormVL.getTicker().setValue(this.notesModel.getSelectedNoteModel().getTicker());
        }
        if (!Objects.isNull(this.notesModel.getSelectedNoteModel().getAction()))
        {

            this.notesAddFormVL.getActionsCB().setValue(this.notesModel.getSelectedNoteModel().getAction());
        }
        if (this.notesModel.getSelectedNoteModel().getNotes() != null)
        {
            this.notesAddFormVL.getNotes().setValue(this.notesModel.getSelectedNoteModel().getNotes());
        }
        if (this.notesModel.getSelectedNoteModel().getUnits() != null)
        {
            this.notesAddFormVL.getUnits().setValue(this.notesModel.getSelectedNoteModel().getUnits().toString());
        } else
        {
            this.notesAddFormVL.getUnits().setValue("100");
        }
        if (!Objects.isNull(this.notesModel.getSelectedNoteModel().getIPrice()))
        {
            this.notesAddFormVL.getIPrice().setValue(this.notesModel.getSelectedNoteModel().getIPrice().toString());
        }
        if (!Objects.isNull(this.notesModel.getSelectedNoteModel().getTriggerType()))
        {
            this.notesAddFormVL.getAlertsCB().setValue(this.notesModel.getSelectedNoteModel().getTriggerType());
        }

        if (!Objects.isNull(this.notesModel.getSelectedNoteModel().getTrigger()))
        {
            this.notesAddFormVL.getAlert().setValue(this.notesModel.getSelectedNoteModel().getTrigger());
        }

        if (!Objects.isNull(this.notesModel.getSelectedNoteModel().getDescription()))
        {
            this.notesAddFormVL.getDescription().setValue(this.notesModel.getSelectedNoteModel().getDescription());
        }
    }

    @Override
    public void beforeEnter(BeforeEnterEvent bee)
    {
        super.beforeEnter(bee);

        //log feature use
        this.serviceTPC.AppTracking("TPC:Notes:Add:Controller");

        //starter note template
        this.notesModel.setSelectedNoteModel(new NoteModel(SecurityUtils.getUserId().toString(),
            null, null, null, null, null, 100.0, null, null, null, "1", null));

        this.setFields();

        //allow changes for Add
        this.notesAddFormVL.getTicker().setEnabled(true);
        this.notesAddFormVL.getIPrice().setEnabled(true);

        //initial button settings upon entry
        this.notesAddFormVL.getControlsHL().getButtonAddSave().setVisible(true);
        this.notesAddFormVL.getControlsHL().getButtonAddSave().setEnabled(false);

        this.notesAddFormVL.getControlsHL().getButtonAddCancel().setVisible(true);
        this.notesAddFormVL.getControlsHL().getButtonAddCancel().setEnabled(true);

        this.notesAddFormVL.getControlsHL().getButtonAddArchive().setVisible(true);
        this.notesAddFormVL.getControlsHL().getButtonAddArchive().setEnabled(false);

        //refresh gear (none)
        super.updateNavBarGear(null);
    }

    @Override
    public void addMenuBarTabs()
    {
        //not changing them
    }
}
