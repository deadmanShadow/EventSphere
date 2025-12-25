import HostApplicationStatus from "@/components/modules/ApplyForHost/HostApplicationStatus";
import DashboardPieChart from "@/components/modules/Dashboard/Charts/DashboardPieChart";
import { UserPastEventsTable, UserUpcomingEventsTable } from "@/components/modules/Dashboard/TableWrappers/UserTables";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMyEvents, getSavedEvents } from "@/services/user/userEventManagement";
import { IEvent } from "@/types/event.interface";
import { CalendarIcon, CheckCircle, ClockIcon, UsersIcon } from "lucide-react";

const UserDashboardPage = async () => {
  const result = await getMyEvents();
  const savedResult = await getSavedEvents();
  const events: IEvent[] = result?.data || [];
  const savedEvents: IEvent[] = savedResult?.data || [];

  const upcomingEvents = events.filter(
    (e) => new Date(e.dateTime) > new Date()
  );
  const pastEvents = events.filter((e) => new Date(e.dateTime) <= new Date());


  const chartData = [
    { name: "Joined", value: events.length },
    { name: "Saved", value: savedEvents.length }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-3xl font-semibold">My Dashboard</h1>
        <HostApplicationStatus />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Joined Events
            </CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Events
            </CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Events
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pastEvents.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Saved Events
            </CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{savedEvents.length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
             <UserUpcomingEventsTable
                data={upcomingEvents.slice(0, 5)}
            />
            <UserPastEventsTable
                data={pastEvents.slice(0, 5)}
            />
        </div>
        <div>
            <DashboardPieChart 
                data={chartData} 
                nameKey="name" 
                dataKey="value"
                title="Activity Overview"
                colors={["#a11f65", "#10b981"]}
            />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
