import { format } from "date-fns"

import { useContext } from "react"
import { CalendarContext } from "./context/CalendarContext"
import { FormattedDate, FormattedMonth } from "./types"

type FormattedDates = FormattedMonth & FormattedDate;

type Options = { date?: boolean, month?: boolean };

export default function useFormattedDates(options?: Options): FormattedDates {
    const calendarContext = useContext(CalendarContext)!;

    const formattedDates = {} as FormattedDates;

    if (options?.month) {
        const date = new Date(calendarContext.month);
        const formattedMonth: FormattedMonth = {
            year: +format(date, "yyyy"),
            month: {
                numeric: +format(date, "M"),
                verbose: format(date, "MMMM"),
            }
        };
        Object.assign(formattedDates, formattedMonth);
    }

    if (options?.date) {
        const date = new Date(calendarContext.date);
        const formattedDate: FormattedDate = {
            year: +format(date, "yyyy"),
            month: {
                numeric: +format(date, "M"),
                verbose: format(date, "MMMM"),
            },
            dayOfTheWeek: {
                numeric: +format(date, "i"),
                verbose: format(date, "EEEE"),
            },
            dayOfTheMonth: {
                numeric: +format(date, "d"),
                verbose: format(date, "do"),
            },
        };
        Object.assign(formattedDates, formattedDate);
    }

    return formattedDates;
}   