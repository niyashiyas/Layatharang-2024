"use client"
import withAuth from "@/components/auth";
import { EditResultForm } from "@/components/component/edit-result-form";
import { useParams } from "next/navigation";
function EditEvent() {
const { eventId } = useParams();
        return (
            <div className=" bg-white">
                <EditResultForm eventId={eventId} />
            </div>
        );
    }
export default withAuth(EditEvent);
