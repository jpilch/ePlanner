import { v4 as uuidv4 } from "uuid";
import { Day } from "./types";

export function getMonthDays() {
    const nDays = 30;
    const startsAt = 3;

    let days = Array(35).fill(null)
        .map((_, i) => i)
        .reduce((acc, q) => {
            const number = (q - startsAt) + 1;
            if (q < startsAt || number > nDays) {
                return acc.concat({ id: uuidv4() });
            }
            return acc.concat({ number, id: uuidv4() });
        }, [] as Array<Day>);

    return days;
}