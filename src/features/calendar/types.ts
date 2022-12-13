interface BaseDay {
    id: string;
}

export interface PlaceholderDay extends BaseDay {
    type: "placeholder";
}

export interface ValidMonthDay extends BaseDay {
    type: "valid";
    date: Date;
}

export enum ActionTypes {
    NEXT_MONTH,
    PREV_MONTH,
    RESET,
    SELECT_DATE
}

export interface Action {
    type: ActionTypes;
    payload?: number;
}

interface NumericAndVerbose {
    numeric: number;
    verbose: string;
}

export interface FormattedMonth {
    year: number;
    month: NumericAndVerbose;
}

export interface FormattedDate extends FormattedMonth {
    dayOfTheWeek: NumericAndVerbose;
    dayOfTheMonth: NumericAndVerbose;
}

/**
 * month - timestamp of currently selected month
 * date - timestamp of currently selected date
 */
export interface CalendarState {
    month: number;
    date: number;
}