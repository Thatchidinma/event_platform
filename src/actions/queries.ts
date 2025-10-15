import {  useQuery } from "@tanstack/react-query";
import { getEvents } from "./events";


export const useGetEvents = () => {
    return useQuery({
        queryKey: ['events'],
        queryFn: getEvents,

    });
};