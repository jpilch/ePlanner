import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import styles from "./Calendar.module.scss";

export default function CalendarNavigation() {
    return (
        <div className={styles.navigation}>
            <CalendarNavigation.Icon>
                <ArrowLeftIcon />
            </CalendarNavigation.Icon>
            <p className={styles.navigation__month}>December 2022</p>
            <CalendarNavigation.Icon>
                <ArrowRightIcon />
            </CalendarNavigation.Icon>
        </div>
    )
}

CalendarNavigation.Icon = function ({ children }: { children: JSX.Element }) {
    return (
        <div className={styles.navigation__icon}>{children}</div>
    )
}
