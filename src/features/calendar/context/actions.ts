import { Action, ActionTypes } from "../types";

export function selectDate(timestamp: number): Action {
    return {
        type: ActionTypes.SELECT_DATE,
        payload: timestamp,
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