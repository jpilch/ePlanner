import React, { createContext } from "react"
import { useImmerReducer } from "use-immer";
import { format } from "date-fns";

import { Action, State } from "./types";

const today = new Date();
const initialState: State = {
    dayOfTheMonth: {
        numeric: format(today, "d"),
        verbose: format(today, "do"),
    },
    month: {
        numeric: format(today, "M"),
        verbose: format(today, "MMMM"),
    },
    year: format(today, "yyyy"),
};

const CalendarContext = createContext<State | null>(null);
const CalendarDispatchContext = createContext<React.Dispatch<Action> | null>(null);

export default function CalendarProvider({ children }: {
    children: JSX.Element[] | JSX.Element
}) {
    const [state, dispatch] = useImmerReducer(calendarReducer, initialState)

    return (
        <CalendarContext.Provider value={state}>
            <CalendarDispatchContext.Provider value={dispatch}>
                {children}
            </CalendarDispatchContext.Provider>
        </CalendarContext.Provider>
    )
}

function calendarReducer(state = initialState, action: Action): State {
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