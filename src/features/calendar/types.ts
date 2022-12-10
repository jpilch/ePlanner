interface BaseDay {
    id: string;
}

export interface PlaceholderDay extends BaseDay {
    type: "placeholder";
}

export interface ValidMonthDay extends BaseDay {
    type: "valid";
    number: number;
    shorthand: string;
}

export enum ActionTypes {
    NEXT_MONTH,
    PREV_MONTH,
    RESET,
    SELECT_DATE
}

export interface Action {
    type: ActionTypes,
    payload: string,
}

interface NumericAndVerbose {
    numeric: string,
    verbose: string,
}

export interface CalendarState {
    month: NumericAndVerbose,
    year: string,
    selectedDate: {
        shorthand: string,
        dayOfTheWeek: NumericAndVerbose,
        dayOfTheMonth: NumericAndVerbose,
    },
}