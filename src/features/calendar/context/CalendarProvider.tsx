import React, { createContext } from "react"
import { useImmerReducer } from "use-immer";

import { Action, CalendarState } from "../types";
import calendarReducer, { initialState } from "./calendarReducer";

export const CalendarContext = createContext<CalendarState | null>(null);
export const CalendarDispatchContext =
    createContext<React.Dispatch<Action> | null>(null);

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
