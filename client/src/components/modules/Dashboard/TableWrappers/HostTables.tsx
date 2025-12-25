"use client";

import DashboardTable, { Column } from "@/components/modules/Dashboard/DashboardTable";
import { IEvent } from "@/types/event.interface";

export const HostEventsTable = ({
  data,
  type,
}: {
  data: IEvent[];
  type: "upcoming" | "past";
}) => {
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
      header: "Participants",
      cell: (event) => event._count?.participants || 0,
    },
    {
      header: "Action",
      cell: (event) => (
        <span className="text-xs text-muted-foreground">
          {new Date(event.dateTime) > new Date() ? "Upcoming" : "Completed"}
        </span>
      ),
    },
  ];

  return (
    <DashboardTable
      title={type === "upcoming" ? "Upcoming Events" : "Past Events"}
      columns={columns}
      data={data}
    />
  );
};
