import type { EventType } from "../types/global";

const EVENTS_ENDPOINT = "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events";

export const getEvents = async (): Promise<EventType[]> => {
    const res = await fetch(EVENTS_ENDPOINT);

    if (!res.ok) {
        throw new Error(`Failed to fetch events. Status: ${res.status}`);
    }

    return (await res.json()) as EventType[];
};
