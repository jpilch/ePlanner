import { Action } from "../types";

export function selectDate(shorthand: string): Action {
    return {
        type: "SELECT_DATE",
        payload: shorthand,
    }
}