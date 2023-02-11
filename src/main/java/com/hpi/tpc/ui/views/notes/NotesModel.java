package com.hpi.tpc.ui.views.notes;

import com.hpi.tpc.data.entities.*;
import com.hpi.tpc.services.*;
import com.hpi.tpc.ui.views.notes.notesAdd.*;
import com.studerw.tda.client.*;
import com.studerw.tda.model.quote.*;
import com.vaadin.flow.data.binder.*;
import com.vaadin.flow.spring.annotation.*;
import java.util.*;
import lombok.*;
import lombok.Setter;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

/**
 * handles state of application
 * contains objects representing the data
 * provides ways to query and change the data
 * responds to requests from View and instructions from Controller
 */
@UIScope
@VaadinSessionScope
//@NoArgsConstructor
@Component
public class NotesModel
{

    @Autowired private TPCDAOImpl noteService;

    @Setter @Getter private NoteModel selectedNoteModel;
    @Getter private List<NoteModel> dataProvider;
    @Getter private final Binder<NoteModel> binder;
    private final Properties props;
    private final HttpTdaClient httpTdaClient;
    @Getter private Quote quote;
    @Getter @Setter private Boolean isSave;
    public NotesModel()
    {
        this.binder = new Binder<>(NoteModel.class);
        this.props = new Properties();
        props.setProperty("tda.client_id", "VYEUORVKFCJSAZG9TBJOGSQZX8PKXWZB");
        props
            .setProperty("tda.token.refresh", "ixs1FhJY2f7uhCRjK8a+Brw0XQyAjLV4Q/H5QCDz00M3B3ep0/bBnJNaiFanWnp1f3Kpg9lNUqfHlE1bQm8XhEivX/Kbo2h/lR7uQ28xCEAYBS/xetpQyvT4DL1WtA3wZtNdDiPRwiTHP63pnf+wK46iKal2MlaLLebpUXLNqPWVBqc43/NpukM/8UX2dZiW7Xl/Oh/lJKuxvH8obosWVPdc4Ol0VVQ5ff9JL2o0ZovfDs01P55UJfhv3f8ZAImUxa3zrjlnR9JwrIqq0QK6tITO0ysanVB+dhe+lzb0f9nqc+mqxEB6t55+K0413Pyl5uzEhSh5Owt39sRy/FGEAf+JkwSWgYxJV3u0VcMgW9/FZZy1s27126bYhEtJ35AhwXN4xLY/InT0WgblGAybBsYh5BNksZHy52ZRiFgGvLRszvrshoEQu8hyKby100MQuG4LYrgoVi/JHHvlH/wBtHqoauMnRWdARXR4HRyF7vk3BOX/jvFTmHSXk4nP9Iv79q+t2Wt71/E/kT6ORlOjHVYNRg3Roo4X0SBj9yb5fFzvwm8G/4X+nhM7nScW69tPsCzqDNdDecvnvp47ma9EEW/L2vLWXdVjcLR1CJrS6XHUb2SOZiAKJb8MErUlfHgeL0eNRNW5tSbgh62uywdJigmwB/lmHdG537sMIjyX1yIYmkF0L6Gtx0qjS7/nB+5U9ZFyeSfwSEk5maHJOXalCTWyCecEqMpEDAUhVYmkXfMsUbWbslXlfXI9gS7n/QyZzR6Tz8jbKCVAd9S8f2BP/kJhGGSl702Y9OlXIlxZk5pDIcZElX2TjGAbmr6eqwN+UIKfYxzI2lzWo/EdA9L8Yks6Iag7FDDTFvhNYnQ01N0AsKFWoBzz2buHkDOnegsshbhM5vxZ5Wg=212FD3x19z9sWBHDJACbC00B75E");
        props.setProperty("tda.account.id", "865-837053");
//        props.setProperty("tda.url", CMOfxDirectModel.getFIMODELS().
//            get(0).getHttpHost());
        props.setProperty("tda.debug.bytes.length", "-1");

        this.httpTdaClient = new HttpTdaClient(props);
        
        this.quote = null;
        this.isSave = false;
    }

    public Quote getTickerInfo(String ticker)
    {
        return this.quote = this.httpTdaClient.fetchQuote(ticker);
    }

    public void getPrefs(String prefPrefix)
    {
//        this.prefsController.setDefaults("PortfolioTrack");
//        this.prefsController.readPrefsByPrefix("PortfolioTrack");
//        this.selectedTrackActive = this.prefsController
//            .getPref("PortfolioTrackActive").equals("Yes");
//        this.selectedTrackOpen = this.prefsController
//            .getPref("PortfolioTrackOpen").equals("Yes");
    }

    public void writePrefs()
    {
//        //preferences, update the hashmap, then write to database
//        this.prefsController.setPref("PortfolioTrackActive",
//            selectedTrackActive ? "Yes" : "No");
//        this.prefsController.setPref("PortfolioTrackOpen",
//            selectedTrackOpen ? "Yes" : "No");
//        
//        this.prefsController.writePrefsByPrefix("PortfolioTrack");
    }

    public void setSelected(NoteModel noteModel)
    {
        //without the session variable, this could be simple setter
        this.selectedNoteModel = noteModel;
    }

    /**
     * Save the note to the database
     * need to come in with the NoteModel from the form.
     *
     * @param notesAddFormVL
     * @param isArchive
     */
    public void saveUpdate(NotesAddFormVL1 notesAddFormVL, Boolean isArchive)
    {
        //not hit
        Integer actionInteger;
        Integer alertInteger;
        NoteModel tempNoteModel;

        actionInteger = 1;
        alertInteger = 2;
        if (isArchive)
        {
            noteService.AppTracking("TPC:Notes:Edit:Archive");
        } else
        {
            noteService.AppTracking("TPC:Notes:Edit:Save");
        }

        switch (notesAddFormVL.getAction().getValue())
        {
            case "Buy":
                actionInteger = ActionModel.ACTIONS_BUY;
                break;
            case "Sell":
                actionInteger = ActionModel.ACTIONS_SELL;
                break;
            case "Watch":
                actionInteger = ActionModel.ACTIONS_WATCH;
                break;
            case "Hedge":
                actionInteger = ActionModel.ACTIONS_HEDGE;
                break;
            case "Other":
                actionInteger = ActionModel.ACTIONS_OTHER;
                break;
            case "Hold":
                actionInteger = ActionModel.ACTIONS_HOLD;
                break;
            default:
        }

        switch (notesAddFormVL.getTriggerType().getValue())
        {
            case "Date":
                alertInteger = AlertTypeModel.ALERTS_DATE;
                break;
            case "Price":
                alertInteger = AlertTypeModel.ALERTS_PRICE;
                break;
            case "Other":
                alertInteger = AlertTypeModel.ALERTS_OTHER;
                break;
            default:
        }

        //get data from the form
        tempNoteModel = new NoteModel(
            //these are key fields to find the record
            this.selectedNoteModel.getJoomlaId(),
            this.selectedNoteModel.getTStamp(),
            //these are edits
            notesAddFormVL.getTicker().getValue().strip(),
            Double.valueOf(notesAddFormVL.getIPrice().getValue()),
            notesAddFormVL.getDescription().getValue(),
            notesAddFormVL.getNotes().getValue(),
            Double.valueOf(notesAddFormVL.getUnits().getValue()),
            actionInteger.toString(),
            alertInteger.toString(),
            notesAddFormVL.getAlert().getValue(),
            isArchive ? "0" : this.selectedNoteModel.getActive(),
            //leave date entered without changes
            this.selectedNoteModel.getDateEntered()
        );

        if (notesAddFormVL.getTicker().getValue().isEmpty())
        {
            //should never happen as save is disabled under these conditions
            //todo: highlight the problem
            return;
        }

        this.noteService.updateNote(tempNoteModel);
    }

    /**
     * Save the note to the database
     * need to come in with the NoteModel from the form.
     */
    public void saveAdd()
    {
        //not hit
        Integer actionInteger;
        Integer alertInteger;
        NoteModel tempNoteModel;

        actionInteger = 1;
        alertInteger = 2;
        this.noteService.AppTracking("TPC:Notes:Add:Save");

        switch (this.selectedNoteModel.getAction())
        {
            case "Buy":
                actionInteger = ActionModel.ACTIONS_BUY;
                break;
            case "Sell":
                actionInteger = ActionModel.ACTIONS_SELL;
                break;
            case "Watch":
                actionInteger = ActionModel.ACTIONS_WATCH;
                break;
            case "Hedge":
                actionInteger = ActionModel.ACTIONS_HEDGE;
                break;
            case "Other":
                actionInteger = ActionModel.ACTIONS_OTHER;
                break;
            case "Hold":
                actionInteger = ActionModel.ACTIONS_HOLD;
                break;
            default:
        }

        switch (this.selectedNoteModel.getTriggerType())
        {
            case "Date":
                alertInteger = AlertTypeModel.ALERTS_DATE;
                break;
            case "Price":
                alertInteger = AlertTypeModel.ALERTS_PRICE;
                break;
            case "Other":
                alertInteger = AlertTypeModel.ALERTS_OTHER;
                break;
            default:
        }

        //get data from the form
//        tempNoteModel = new NoteModel(
//            //these are key fields
//            this.binder.getBean().getJoomlaId(),
//            //null for add
//            null,
//            //this.binder.getBean().getTStamp(),
//            //uppercase if a ticker
//            this.binder.getBean().getTicker().toUpperCase(),
//            this.binder.getBean().getIPrice(),
//            this.binder.getBean().getDescription(),
//            this.binder.getBean().getNotes(),
//            this.binder.getBean().getUnits(),
//            actionInteger.toString(),
//            alertInteger.toString(),
//            this.binder.getBean().getTrigger(),
//            this.binder.getBean().getActive(),
//            new java.sql.Date(System.currentTimeMillis()).toString()
//        );

        tempNoteModel = new NoteModel(
            //these are key fields
            this.selectedNoteModel.getJoomlaId(),
            //null for add
            this.selectedNoteModel.getTStamp(),
            //uppercase if a ticker
            this.selectedNoteModel.getTicker(),
            this.selectedNoteModel.getIPrice(),
            this.selectedNoteModel.getDescription(),
            this.selectedNoteModel.getNotes(),
            this.selectedNoteModel.getUnits(),
            actionInteger.toString(),
            alertInteger.toString(),
            this.selectedNoteModel.getTrigger(),
            this.selectedNoteModel.getActive(),
            this.selectedNoteModel.getDateEntered()
        );


        this.noteService.saveNote(tempNoteModel);
    }

    public void getData(String subset)
    {
        List<NoteModel> aList;

        aList = this.noteService.getByJId(subset);

        this.dataProvider = aList;
    }
}
