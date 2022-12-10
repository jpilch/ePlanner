import React, { useContext } from "react";
import cn from "classnames";

import styles from "./Calendar.module.scss";
import { DAYS_OF_THE_WEEK } from "../constants";
import { CalendarState, PlaceholderDay, ValidMonthDay } from "../types";
import { getMonthDays } from "../utils";
import { CalendarContext, CalendarDispatchContext } from "../context/CalendarProvider";
import { selectDate } from "../context/actions";

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
    const dispatch = useContext(CalendarDispatchContext)!;

    const handleClick = (shorthand: string) =>
        (_e: React.MouseEvent) => dispatch(selectDate(shorthand));

    return (
        <tr>
            {days.map(day => {
                let displayedDay;
                if (day.type === "placeholder") {
                    displayedDay = (
                        <td
                            className={cn(
                                styles.table__cell,
                                styles["table__cell--empty"]
                            )}
                            key={day.id}>
                            <p className={styles.table__day}></p>
                        </td>
                    )
                } else {
                    displayedDay = (
                        <td
                            className={cn({
                                [styles.table__cell]: true,
                                [styles["table__cell--selected"]]:
                                    day.shorthand === selectedDate.shorthand
                            })}
                            onClick={handleClick(day.shorthand)}
                            key={day.id}>
                            <p className={styles.table__day}>{day.number}</p>
                        </td>
                    )
                }
                return displayedDay;
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
            <CalendarTable.DaysRow days={days.slice(35, 42)} />
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
