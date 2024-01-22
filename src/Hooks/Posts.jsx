import { collection, deleteDoc, doc, orderBy, query, where } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import {useCollectionData} from "react-firebase-hooks/firestore"

 

export function useEvents(uid = null) {
    const q = uid
        ? query(
            collection(db, "Events"),
            orderBy("created", "desc"),
            where("uid", "==", uid)
        )
        : query(collection(db, "events"), orderBy("created", "desc"));
    const [Events, isEventLoading, isError] = useCollectionData(q);
    if (isError) throw isError;
    return { Events, isEventLoading ,isError};
}

export function useDeleteEvent(id) {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    async function deleteEvent() {
        const res = window.confirm("Are you sure you want to delete this Event?");
        if (res) {
            setLoading(true);
            // Delete Initiative document
            await deleteDoc(doc(db, "events", id));
            toast({
                title: "Event deleted!",
                status: "info",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            setLoading(false);
        }
    }
    return { deleteEvent, isLoading };
} 