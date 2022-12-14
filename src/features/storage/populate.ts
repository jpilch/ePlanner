import db, { CalendarEvent } from "./db";

const mockEvents: CalendarEvent[] = [
    {
        title: "Example event #1",
        desc: "This is an example event",
        startTimestamp: 1670997600000,
        endTimestamp: 1671033600000,
    },
    {
        title: "Example event #4",
        desc: "This is an example event",
        startTimestamp: 1670738400000,
        endTimestamp: 1671188400000,
    },
    {
        title: "Example event #5",
        desc: "This is an example event",
        startTimestamp: 1670983200000,
        endTimestamp: 1671112800000,
    },
    {
        title: "Example event #6",
        desc: "This is an example event",
        startTimestamp: 1668898800000,
        endTimestamp: 1675206000000,
    },
    {
        title: "Example event #7",
        desc: "This is an example event",
        startTimestamp: 1671055200000,
        endTimestamp: 1671057000000,
    },
    {
        title: "Example event #2",
        desc: "This is an example event",
        startTimestamp: 1671084000000,
        endTimestamp: 1671105600000,
    },
    {
        title: "Example event #3",
        desc: "This is an example event",
        startTimestamp: 1670911200000,
        endTimestamp: 1670958000000,
    }
];

export async function populate() {
    await db.events.clear();
    await db.events.bulkAdd(mockEvents);
}