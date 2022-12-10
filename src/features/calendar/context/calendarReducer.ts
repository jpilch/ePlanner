import { format } from "date-fns";
import { Action, ActionTypes, CalendarState } from "../types";

export default function calendarReducer(draft = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.NEXT_MONTH:
        case ActionTypes.PREV_MONTH:
        case ActionTypes.SELECT_DATE:
            draft.selectedDate.shorthand = action.payload;
            break;
        case ActionTypes.RESET:
            return draft;
        default:
            throw new Error("Unsupported action type");
    }
}

const today = new Date();
export const initialState: CalendarState = {
    month: {
        numeric: format(today, "M"),
        verbose: format(today, "MMMM"),
    },
    year: format(today, "yyyy"),
    selectedDate: {
        shorthand: format(today, "yyyy-MM-dd"),
        dayOfTheWeek: {
            numeric: format(today, "i"),
            verbose: format(today, "EEEE"),
        },
        dayOfTheMonth: {
            numeric: format(today, "d"),
            verbose: format(today, "do"),
        },
    },
};
