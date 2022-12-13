import { v4 as uuidv4 } from "uuid";
import { ValidMonthDay, PlaceholderDay } from "./types";

import { format, getDaysInMonth, startOfMonth } from "date-fns";

export function getMonthDays(month: number, year: number) {
    const zeroIndexedMonth = month - 1;
    const date = new Date(+year, +zeroIndexedMonth);
    const totalDays = getDaysInMonth(date);
    const firstDay = startOfMonth(date);
    const firstDayIdx = +format(firstDay, "i");

    return Array(42).fill(null)
        .map((_, i) => i + 1)
        .reduce((acc, q) => {
            const curr = q - firstDayIdx + 1;
            const date = new Date(+year, +zeroIndexedMonth, curr)
            if (q < firstDayIdx || curr > totalDays) {
                return acc.concat({ id: uuidv4(), type: "placeholder" });
            }
            return acc.concat({
                type: "valid",
                date: date,
                id: uuidv4()
            });
        }, [] as Array<PlaceholderDay | ValidMonthDay>);
}
