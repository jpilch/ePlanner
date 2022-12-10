import { Action, ActionTypes } from "../types";

export function selectDate(shorthand: string): Action {
    return {
        type: ActionTypes.SELECT_DATE,
        payload: shorthand,
    }
}