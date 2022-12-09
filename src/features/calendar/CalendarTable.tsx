import React from "react";

import styles from "./Calendar.module.scss";
import { DAYS_OF_THE_WEEK } from "./constants";
import { Day } from "./types";
import { getMonthDays } from "./utils";

CalendarTable.Head = React.memo(() => (
    <thead>
        <tr>
            {DAYS_OF_THE_WEEK.map(day => (
                <th className={styles.table__heading} key={day.id}>
                    {day.name}
                </th>
            ))}
        </tr>
    </thead>
))

CalendarTable.DaysRow = React.memo(({ days }: { days: Array<Day> }) => (
    <tr>
        {days.map(day => (
            <td
                className={styles.table__cell}
                key={day.id}
                onClick={e => e.currentTarget.classList.toggle(styles["table__cell--selected"])}
            >
                <p className={styles.table__day}>
                    {day?.number ?? ""}
                </p>

            </td>
        ))}
    </tr>
))

CalendarTable.Body = () => {
    const days = getMonthDays();

    return (
        <tbody>
            <CalendarTable.DaysRow days={days.slice(0, 7)} />
            <CalendarTable.DaysRow days={days.slice(7, 14)} />
            <CalendarTable.DaysRow days={days.slice(14, 21)} />
            <CalendarTable.DaysRow days={days.slice(21, 28)} />
            <CalendarTable.DaysRow days={days.slice(28, 35)} />
        </tbody>
    )
}

export default function CalendarTable() {
    return (
        <table className={styles.table}>
            <CalendarTable.Head />
            <CalendarTable.Body />
        </table>
    )
}
