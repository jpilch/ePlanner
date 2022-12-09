import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import styles from "./Calendar.module.scss";

CalendarNav.Icon = function ({ children }: { children: JSX.Element }) {
    return (
        <div className={styles.nav__icon}>
            {children}
        </div>
    )
}

export default function CalendarNav() {
    return (
        <div className={styles.nav}>
            <CalendarNav.Icon>
                <KeyboardArrowLeftIcon />
            </CalendarNav.Icon>
            <p>December 2022</p>
            <CalendarNav.Icon>
                <KeyboardArrowRightIcon />
            </CalendarNav.Icon>
        </div>
    )
}