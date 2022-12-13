import { addMonths, subMonths } from "date-fns";
import { Action, ActionTypes, CalendarState } from "../types";

export default function calendarReducer(draft = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.NEXT_MONTH: {
            const curr = new Date(draft.month);
            const next = addMonths(curr, 1);
            draft.month = next.getTime();
            break;
        }
        case ActionTypes.PREV_MONTH: {
            const curr = new Date(draft.month);
            const next = subMonths(curr, 1);
            draft.month = next.getTime();
            break;
        }
        case ActionTypes.SELECT_DATE:
            draft.date = action.payload!;
            break;
        case ActionTypes.RESET:
            const today = new Date();
            draft.month = new Date(
                today.getFullYear(),
                today.getMonth()
            ).getTime();
            draft.date = today.getTime();
            break;
        default:
            throw new Error("Unsupported action type");
    }
}

const today = new Date();
export const initialState: CalendarState = {
    month: new Date(
        today.getFullYear(),
        today.getMonth()
    ).getTime(),
    date: today.getTime(),
};
