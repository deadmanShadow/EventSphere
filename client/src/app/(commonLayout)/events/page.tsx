import AllEvents from "@/components/modules/event/AllEvents";
import { EventCardsSkeleton } from "@/components/modules/Home/HomeSkeletons";
import { Suspense } from "react";

const AllEventsPage = () => {
  return (
    <Suspense fallback={<EventCardsSkeleton />}>
      <AllEvents />
    </Suspense>
  );
};

export default AllEventsPage;
