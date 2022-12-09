type ActionType = "NEXT_MONTH" | "PREV_MONTH" | "RESET" | "SELECT_DATE";

export interface Action {
    type: ActionType,
    payload: string,
}

interface StateValueTypes {
    numeric: string,
    verbose: string,
}

export interface CalendarState {
    dayOfTheWeek: StateValueTypes,
    dayOfTheMonth: StateValueTypes,
    month: StateValueTypes,
    year: string
}