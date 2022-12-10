import { Action, ActionTypes } from "../types";

export function selectDate(shorthand: string): Action {
    return {
        type: ActionTypes.SELECT_DATE,
        payload: shorthand,
    }
}

export function selectNextMonth() {
    return {
        type: ActionTypes.NEXT_MONTH,
    }
}

export function selectPrevMonth() {
    return {
        type: ActionTypes.PREV_MONTH,
    }
}