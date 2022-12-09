import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useContext } from 'react';
import { CalendarContext } from './CalendarContext';

import styles from "./Calendar.module.scss";
import { CalendarState } from './types';

CalendarNav.Icon = function ({ children }: { children: JSX.Element }) {
    return (
        <div className={styles.nav__icon}>
            {children}
        </div>
    )
}

export default function CalendarNav() {
    const { month, year } = useContext(CalendarContext) as CalendarState;

    return (
        <div className={styles.nav}>
            <CalendarNav.Icon>
                <KeyboardArrowLeftIcon />
            </CalendarNav.Icon>
            <p>{month.verbose} {year}</p>
            <CalendarNav.Icon>
                <KeyboardArrowRightIcon />
            </CalendarNav.Icon>
        </div>
    )
}