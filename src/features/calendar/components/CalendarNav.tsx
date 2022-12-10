import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { MouseEventHandler, useContext } from 'react';
import { CalendarContext, CalendarDispatchContext } from '../context/CalendarProvider';

import styles from "./Calendar.module.scss";
import { CalendarState } from '../types';
import { selectNextMonth, selectPrevMonth } from '../context/actions';

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
    const { month, year } = useContext(CalendarContext) as CalendarState;
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