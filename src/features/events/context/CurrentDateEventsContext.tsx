import { endOfDay, startOfDay } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../calendar/context/CalendarContext";
import db, { CalendarEvent } from "../../storage/db";

export const EventsContext = createContext<CalendarEvent[] | null>(null);

export default function EventsProvider({ children }: {
    children: JSX.Element | JSX.Element[]
}) {
    const [state, setState] = useState<CalendarEvent[] | null>(null);
    const { date } = useContext(CalendarContext)!;

    useEffect(() => {
        let ignore = false;

        findSavedEvents();

        async function findSavedEvents() {
            const start = startOfDay(date).getTime();
            const end = endOfDay(date).getTime();
            const foundEvents = (await db.events
                .where("startTimestamp").between(start, end, true, true,)
                .or("endTimestamp").between(start, end, true, true,)
                .toArray()).concat((await db.events
                    .where("startTimestamp").below(start)
                    .and(e => e.endTimestamp > end)
                    .toArray()));
            if (!ignore) {
                setState(foundEvents);
            }
        }

        return function () {
            ignore = true;
        }
    }, [date]);


    return (
        <EventsContext.Provider value={state}>
            {children}
        </EventsContext.Provider>
    )
}