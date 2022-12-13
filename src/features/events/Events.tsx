import SearchOffIcon from '@mui/icons-material/SearchOff';
import cn from 'classnames';

import styles from "./Events.module.scss";
import useFormattedDates from '../calendar/useFormattedDates';

Events.List = function ({ empty }: { empty: boolean }) {

    return (
        <div className={cn({
            [styles.list]: true,
            [styles["list--empty"]]: empty,
        })}>
            <div className={styles.list__info}>
                <p>Nothing here yet!</p>
                <SearchOffIcon fontSize={"large"} />
            </div>
            <p className={styles.list__instruction}>
                Schedule events by using the button blow.
            </p>
        </div>
    )
}

export default function Events() {
    const { dayOfTheMonth, dayOfTheWeek, month } = useFormattedDates({ date: true });

    return (
        <section className={styles.events}>
            <div className={styles.events__date}>
                <p>
                    {dayOfTheWeek.verbose},{" "}
                    {month.verbose} {dayOfTheMonth.verbose}
                </p>
            </div>
            <Events.List empty={true} />
            <button className={styles.list__button}>Add</button>
        </section >
    )
}