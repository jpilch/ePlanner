import { v4 as uuidv4 } from "uuid";
import { ValidMonthDay, PlaceholderDay } from "./types";

import { format, getDaysInMonth, startOfMonth } from "date-fns";

export function getMonthDays(month: number, year: number) {
    const date = new Date(+year, +month);
    const daysNumber = getDaysInMonth(date);
    const firstDay = startOfMonth(date);
    const firstDayIdx = +format(firstDay, "i");

    return Array(35).fill(null)
        .map((_, i) => i + 1)
        .reduce((acc, q) => {
            const number = q - firstDayIdx + 1;
            const date = new Date(+year, +month, number)
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