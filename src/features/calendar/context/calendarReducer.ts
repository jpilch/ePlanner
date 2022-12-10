import { format } from "date-fns";
import { Action, CalendarState } from "../types";

export default function calendarReducer(state = initialState, action: Action): CalendarState {
    switch (action.type) {
        case "NEXT_MONTH":
        case "PREV_MONTH":
        case "SELECT_DATE":
        case "RESET":
            return state;
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
