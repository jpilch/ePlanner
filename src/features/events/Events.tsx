import SearchOffIcon from '@mui/icons-material/SearchOff';
import cn from 'classnames';

import styles from "./Events.module.scss";
import useFormattedDates from '../calendar/useFormattedDates';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CalendarContext } from '../calendar/context/CalendarProvider';
import db, { CalendarEvent } from '../storage/db';
import { populate } from '../storage/populate';

Events.List = function ({ empty }: { empty: boolean }) {
    const calendarContext = useContext(CalendarContext)!;

    const [events, setEvents] = useState<CalendarEvent[]>();

    useEffect(() => {
        const findSavedEvents = async () => {
            db.events
                .where("startTimestamp")
                .belowOrEqual(calendarContext.date)
                .and(e => e.endTimestamp >= calendarContext.date)
                .toArray().then(foundEvents => setEvents(foundEvents));
        }
        findSavedEvents();
    }, []);

    console.log(events)

    return (
        <div className={cn({
            [styles.list]: true,
            [styles["list--empty"]]: empty,
        })}>
            <div className={styles.list__info}>
                <p>Nothing here yet!</p>
                <SearchOffIcon fontSize={"large"} />
            </div>
            <p className={styles.list__instruction}>
                Schedule events by using the button blow.
            </p>
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
            <Events.List empty={true} />
            <button
                className={styles.list__button}
                onClick={() => populate()}>
                Add
            </button>
        </section >
    )
}