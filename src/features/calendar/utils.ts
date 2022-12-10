import { v4 as uuidv4 } from "uuid";
import { ValidMonthDay, PlaceholderDay, SelectedDate } from "./types";

import { format, getDaysInMonth, parse, startOfMonth } from "date-fns";

export function getMonthDays(month: number, year: number) {
    const zeroIndexedMonth = month - 1;
    const date = new Date(+year, +zeroIndexedMonth);
    const daysNumber = getDaysInMonth(date);
    const firstDay = startOfMonth(date);
    const firstDayIdx = +format(firstDay, "i");

    return Array(35).fill(null)
        .map((_, i) => i + 1)
        .reduce((acc, q) => {
            const number = q - firstDayIdx + 1;
            const date = new Date(+year, +zeroIndexedMonth, number)
            const shorthand = format(date, "yyyy-MM-dd");
            if (q < firstDayIdx || number > daysNumber) {
                return acc.concat({ id: uuidv4(), type: "placeholder" });
            }
            return acc.concat({
                type: "valid",
                number,
                shorthand,
                id: uuidv4()
            });
        }, [] as Array<PlaceholderDay | ValidMonthDay>);
}

export function getSelectedDate(shorthand: string): SelectedDate {
    const date = parse(shorthand, "yyyy-MM-dd", new Date());
    return {
        shorthand: format(date, "yyyy-MM-dd"),
        dayOfTheWeek: {
            numeric: format(date, "i"),
            verbose: format(date, "EEEE"),
        },
        dayOfTheMonth: {
            numeric: format(date, "d"),
            verbose: format(date, "do"),
        },
        month: {
            numeric: format(date, "M"),
            verbose: format(date, "MMMM"),
        },
        year: format(date, "yyyy"),
    }
}