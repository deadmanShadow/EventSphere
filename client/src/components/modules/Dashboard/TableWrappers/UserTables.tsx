"use client";

import DashboardTable, { Column } from "@/components/modules/Dashboard/DashboardTable";
import { ReviewDialog } from "@/components/modules/review/ReviewDialog";
import { IEvent } from "@/types/event.interface";
import Link from "next/link";

export const UserUpcomingEventsTable = ({ data }: { data: IEvent[] }) => {
  const columns: Column<IEvent>[] = [
    {
      header: "Event",
      accessorKey: "name",
    },
    {
      header: "Date",
      cell: (event) => new Date(event.dateTime).toLocaleDateString(),
    },
    {
      header: "Action",
      cell: (event) => (
        <Link
          href={`/events/${event.id}`}
          className="text-xs text-[#a11f65] hover:underline"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <DashboardTable
      title="Upcoming Events"
      columns={columns}
      data={data}
      action={
        data.length === 0 && (
          <Link
            href="/events"
            className="text-xs text-[#a11f65] hover:underline"
          >
            Explore events
          </Link>
        )
      }
    />
  );
};

export const UserPastEventsTable = ({ data }: { data: IEvent[] }) => {
  const columns: Column<IEvent>[] = [
    {
      header: "Event",
      accessorKey: "name",
    },
    {
      header: "Date",
      cell: (event) => new Date(event.dateTime).toLocaleDateString(),
    },
    {
      header: "Review",
      cell: (event) => (
        <ReviewDialog eventId={event.id} hostId={event.createdBy} />
      ),
    },
  ];

  return <DashboardTable title="Past Events" columns={columns} data={data} />;
};
