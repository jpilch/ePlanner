import styles from "./Events.module.scss";
import cn from "classnames";

export default function Events() {
    return (
        <section className={styles.events}>
            <div className={styles.events__date}>
                <p>Thursday, December 8th</p>
            </div>
        </section >
    )
}

Events.Event = function ({ name, empty = false }: {
    name?: string,
    empty?: boolean
}) {
    return (
        <div className={cn({
            [styles.event]: true,
            [styles["event--empty"]]: empty
        })}>
            <p>{empty ? "No events yet!" : name}</p>
        </div>
    )
}