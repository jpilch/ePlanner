import SearchOffIcon from '@mui/icons-material/SearchOff';
import cn from 'classnames';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import styles from "./Events.module.scss";
import useFormattedDates from '../calendar/useFormattedDates';
import React, { useContext, useEffect, useCallback, useState } from 'react';
import { CalendarContext } from '../calendar/context/CalendarProvider';
import db, { CalendarEvent } from '../storage/db';
import { populate } from '../storage/populate';
import { endOfDay, startOfDay, format } from 'date-fns';
import EventsEvent from './EventsEvent';

Events.List = function () {
    const { date } = useContext(CalendarContext)!;

    const [events, setEvents] = useState<CalendarEvent[] | null>(null);

    const findSavedEvents = useCallback(async () => {
        const start = startOfDay(date).getTime();
        const end = endOfDay(date).getTime();
        const foundEvents = (await db.events
            .where("startTimestamp").between(start, end, true, true,)
            .or("endTimestamp").between(start, end, true, true,)
            .toArray()).concat((await db.events
                .where("startTimestamp").below(start)
                .and(e => e.endTimestamp > end)
                .toArray()));
        setEvents(foundEvents);
    }, [date])

    useEffect(() => {
        findSavedEvents();
    }, [findSavedEvents]);

    const isEmpty = events == null || events.length === 0;
    const displayedEvents = isEmpty
        ? (
            <React.Fragment>
                <div className={styles.list__info}>
                    <p>Nothing here yet!</p>
                    <SearchOffIcon fontSize={"large"} />
                </div>
                <p className={styles.list__instruction}>
                    Schedule events by using the button blow.
                </p>
            </React.Fragment >
        ) : (
            events.map(event => (
                <EventsEvent event={event} key={event.id} />
            ))
        );

    return (
        <div className={cn({
            [styles.list]: true,
            [styles["list--empty"]]: isEmpty,
        })}>
            {displayedEvents}
        </div>
    )
}



export default function Events() {
    const { dayOfTheMonth, dayOfTheWeek, month } = useFormattedDates({ date: true });

    return (
        <section className={styles.events}>
            <div className={styles.events__date}>
                <p>
                    {dayOfTheWeek.verbose},{" "}
                    {month.verbose} {dayOfTheMonth.verbose}
                </p>
            </div>
            <Events.List />
            <button
                className={styles.list__button}
                onClick={() => populate()}>
                <AddCircleIcon />
            </button>
        </section >
    )
}