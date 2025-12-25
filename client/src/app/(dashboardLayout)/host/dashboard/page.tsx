import DashboardBarChart from "@/components/modules/Dashboard/Charts/DashboardBarChart";
import { HostEventsTable } from "@/components/modules/Dashboard/TableWrappers/HostTables";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHostedEvents } from "@/services/host/hostedEventManagement";
import { IEvent } from "@/types/event.interface";
import { CalendarIcon, DollarSignIcon, TrendingUpIcon, UsersIcon } from "lucide-react";


const HostDashboardPage = async () => {
  const result = await getHostedEvents();
  const events: IEvent[] = result?.data || [];

  const upcomingEvents = events.filter(
    (e) => new Date(e.dateTime) > new Date()
  );
  const pastEvents = events.filter((e) => new Date(e.dateTime) <= new Date());
  const totalParticipants = events.reduce(
    (sum, e) => sum + (e._count?.participants || 0),
    0
  );
  const totalRevenue = events.reduce(
    (sum, e) => sum + (e._count?.participants || 0) * parseFloat(e.joiningFee),
    0
  );

  // Group events by month for Bar Chart
  const monthlyStats = events.reduce((acc: any[], event) => {
    const month = new Date(event.dateTime).toLocaleString('default', { month: 'short' });
    const revenue = parseFloat(event.joiningFee) * (event._count?.participants || 0);
    const participants = event._count?.participants || 0;
    
    const existing = acc.find(item => item.name === month);
    if (existing) {
      existing.revenue += revenue;
      existing.participants += participants;
    } else {
      acc.push({ name: month, revenue, participants });
    }
    return acc;
  }, []);



  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Host Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalParticipants}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardBarChart 
            data={monthlyStats} 
            xKey="name" 
            yKey="revenue" 
            title="Revenue Overview"
            color="#10b981"
        />
         <DashboardBarChart 
            data={monthlyStats} 
            xKey="name" 
            yKey="participants" 
            title="Participant Trends"
            color="#3b82f6"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <HostEventsTable
            type="upcoming"
            data={upcomingEvents.slice(0, 5)}
        />
        <HostEventsTable
            type="past"
            data={pastEvents.slice(0, 5)}
        />
      </div>
    </div>
  );
};

export default HostDashboardPage;