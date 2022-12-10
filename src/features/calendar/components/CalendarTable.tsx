import React, { useContext } from "react";
import cn from "classnames";

import styles from "./Calendar.module.scss";
import { DAYS_OF_THE_WEEK } from "../constants";
import { CalendarState, PlaceholderDay, ValidMonthDay } from "../types";
import { getMonthDays } from "../utils";
import { CalendarContext } from "../context/CalendarProvider";

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

CalendarTable.DaysRow = React.memo(({ days }: {
    days: Array<PlaceholderDay | ValidMonthDay>
}) => {
    const { selectedDate } = useContext(CalendarContext) as CalendarState;

    return (
        <tr>
            {days.map(day => {
                if (day.type === "placeholder") {
                    return (
                        <td className={styles.table__cell} key={day.id}>
                            <p className={styles.table__day}></p>
                        </td>
                    )
                }
                return (
                    <td
                        className={cn({
                            [styles.table__cell]: true,
                            [styles["table__cell--selected"]]:
                                day.shorthand === selectedDate.shorthand
                        })}
                        key={day.id}>
                        <p className={styles.table__day}>{day.number}</p>
                    </td>
                )
            })}
        </tr>
    )
})

CalendarTable.Body = () => {
    const { month, year } = useContext(CalendarContext) as CalendarState;
    const days = getMonthDays(+month.numeric, +year);

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
