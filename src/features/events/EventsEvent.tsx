import cn from 'classnames';
import { format } from "date-fns";

import ClearIcon from '@mui/icons-material/Clear';
import CreateIcon from '@mui/icons-material/Create';

import styles from "./Events.module.scss";
import { CalendarEvent } from "../storage/db";

export default function EventsEvent({ event }: { event: CalendarEvent }) {
    const { startTimestamp, endTimestamp, title, desc } = event;
    const formatDate = (timestamp: number) => format(new Date(timestamp), "yyyy/MM/dd, HH:mm");

    return (
        <div className={styles.event}>
            <h2 className={styles.event__title}>
                {title}
            </h2>
            <p className={styles.event__desc}>
                {desc}
            </p>
            <p className={cn(
                styles.pref,
                styles["pref--from"],
            )}>
                from
            </p>
            <p className={cn(
                styles.date,
                styles["date--from"],
            )}>
                {formatDate(startTimestamp)}
            </p>
            <p className={cn(
                styles.pref,
                styles["pref--to"],
            )}>
                to
            </p>
            <p className={cn(
                styles.date,
                styles["date--to"],
            )}>
                {formatDate(endTimestamp)}
            </p>
            <button className={cn(
                styles.button,
                styles["button--edit"]
            )}>
                <CreateIcon sx={{ fontSize: 15 }} />
                edit
            </button>
            <button className={cn(
                styles.button,
                styles["button--delete"]
            )}>
                <ClearIcon sx={{ fontSize: 15 }} />
                delete
            </button>
        </div>
    )
}