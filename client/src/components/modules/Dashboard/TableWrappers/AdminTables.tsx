"use client";

import DashboardTable, { Column } from "@/components/modules/Dashboard/DashboardTable";
import { IEvent } from "@/types/event.interface";
import { HostApplication } from "@/types/hostApplication.interface";
import { UserInfo } from "@/types/user.interface";
import { User } from "lucide-react";
import Image from "next/image";

export const RecentUsersTable = ({ data }: { data: UserInfo[] }) => {
  const columns: Column<UserInfo>[] = [
    {
      header: "User",
      cell: (user) => (
        <div className="flex items-center gap-3">
            {user.image ? (
                    <Image src={user.image} alt={user.name} width={30} height={30} className="rounded-full" />
            ) : (
                <User className="h-8 w-8 p-1 bg-gray-100 rounded-full" />
            )}
            <div>
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
        </div>
      ),
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: (user) => (
        <span className="text-xs font-medium px-2 py-1 bg-primary/10 rounded-full text-primary">
          {user.role}
        </span>
      ),
    },
    {
        header: "Status",
        accessorKey: "status",
          cell: (user) => (
        <span
          className={`text-xs font-semibold ${
            user.status === "ACTIVE" ? "text-green-600" : "text-red-600"
          }`}
        >
          {user.status || "N/A"}
        </span>
      ),
    }
  ];

  return <DashboardTable title="Recent Users" columns={columns} data={data} />;
};

export const RecentEventsTable = ({ data }: { data: IEvent[] }) => {
  const columns: Column<IEvent>[] = [
    {
      header: "Event Name",
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
      header: "Fee",
      cell: (event) => `$${event.joiningFee}`,
    },
  ];

  return <DashboardTable title="Recent Events" columns={columns} data={data} />;
};

export const HostApplicationsTable = ({
  data,
}: {
  data: HostApplication[];
}) => {
  const columns: Column<HostApplication>[] = [
    {
      header: "Applicant",
      cell: (app) => (
        <div>
          <p className="font-medium">{app.user.name}</p>
          <p className="text-xs text-muted-foreground">{app.user.email}</p>
        </div>
      ),
    },
    {
      header: "Applied At",
      cell: (app) => new Date(app.appliedAt).toLocaleDateString(),
    },
    {
      header: "Status",
      cell: (app) => (
        <span className="text-orange-600 text-xs font-bold">{app.status}</span>
      ),
    },
  ];

  return <DashboardTable title="Host Applications" columns={columns} data={data} />;
};
