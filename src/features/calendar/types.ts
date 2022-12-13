interface BaseDay {
    id: string;
}

export interface PlaceholderDay extends BaseDay {
    type: "placeholder";
}

export interface ValidMonthDay extends BaseDay {
    type: "valid";
    timestamp: number;
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

/**
 * month - timestamp of currently selected month
 * date - timestamp of currently selected date
 */
export interface CalendarState {
    month: number;
    date: number;
}