package com.hpi.tpc.ui.views.notes.notesAdd;

import com.hpi.tpc.ui.views.notes.*;
import com.studerw.tda.model.quote.*;
import com.vaadin.flow.data.binder.*;
import com.vaadin.flow.data.validator.*;

//@Component
public class TickerValidator
    extends AbstractValidator<String>
{
    private final NotesModel notesModel;
    public TickerValidator(String errorMessage, NotesModel notesModel)
    {
        super(errorMessage);
        this.notesModel = notesModel;
    }

    @Override
    public ValidationResult apply(String ticker, ValueContext context)
    {
        Quote quote;

        if (ticker == null)
        {
            return toResult(ticker, true);
        }

        quote = null;
        try
        {
            quote = this.notesModel.getTickerInfo(ticker);
        } catch (RuntimeException e)
        {
            return toResult(ticker, false);
        }

        return toResult(ticker, true);
    }
}
