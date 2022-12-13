import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { MouseEventHandler, useContext } from 'react';
import { CalendarDispatchContext } from '../context/CalendarProvider';

import styles from "./Calendar.module.scss";
import { selectNextMonth, selectPrevMonth } from '../context/actions';
import useFormattedDates from '../useFormattedDates';

CalendarNav.Icon = function ({ children, handleClick }: {
    children: JSX.Element,
    handleClick: MouseEventHandler,
}) {
    return (
        <div className={styles.nav__icon} onClick={handleClick}>
            {children}
        </div>
    )
}

export default function CalendarNav() {
    const { month, year } = useFormattedDates({ month: true });
    const dispatch = useContext(CalendarDispatchContext)!;

    return (
        <div className={styles.nav}>
            <CalendarNav.Icon handleClick={_e => dispatch(selectPrevMonth())}>
                <KeyboardArrowLeftIcon />
            </CalendarNav.Icon>
            <p>{month.verbose} {year}</p>
            <CalendarNav.Icon handleClick={_e => dispatch(selectNextMonth())}>
                <KeyboardArrowRightIcon />
            </CalendarNav.Icon>
        </div>
    )
}