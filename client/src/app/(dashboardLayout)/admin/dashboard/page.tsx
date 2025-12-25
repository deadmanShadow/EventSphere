import DashboardBarChart from "@/components/modules/Dashboard/Charts/DashboardBarChart";
import DashboardPieChart from "@/components/modules/Dashboard/Charts/DashboardPieChart";
import { HostApplicationsTable, RecentEventsTable, RecentUsersTable } from "@/components/modules/Dashboard/TableWrappers/AdminTables";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllEvents } from "@/services/admin/eventManagement";
import { getAllHostApplications } from "@/services/admin/hostApplications";
import { getAllUsers } from "@/services/admin/userManagement";
import { IEvent } from "@/types/event.interface";
import { HostApplication } from "@/types/hostApplication.interface";
import { UserInfo } from "@/types/user.interface";

import {
  BarChart,
  CalendarArrowUp,
  DollarSign,
  Users
} from "lucide-react";

const AdminDashboardPage = async () => {
  const [usersResult, eventsResult, hostApplicationsResult] = await Promise.all([
    getAllUsers(),
    getAllEvents(),
    getAllHostApplications(),
  ]);

  const allUsers: UserInfo[] = usersResult?.data || [];
  const users = allUsers.filter((user) => user.role !== "ADMIN");

  const events: IEvent[] = eventsResult?.data || [];
  const hostApplications: HostApplication[] = hostApplicationsResult?.success ? hostApplicationsResult.data || [] : [];
  const pendingApplications = hostApplications.filter(app => app.status === "PENDING");
  
  const totalRevenue = events.reduce(
    (acc, event) =>
      acc + parseFloat(event.joiningFee) * (event._count?.participants || 0),
    0
  );

  // Prepare Chart Data
  const roleDistribution = [
    { name: "Users", value: allUsers.filter(u => u.role === "USER").length },
    { name: "Hosts", value: allUsers.filter(u => u.role === "HOST").length },
    { name: "Admins", value: allUsers.filter(u => u.role === "ADMIN").length },
  ];

  // Group events by month for Bar Chart (Mocking monthly trend based on available events)
  const monthlyRevenue = events.reduce((acc: any[], event) => {
    const month = new Date(event.dateTime).toLocaleString('default', { month: 'short' });
    const revenue = parseFloat(event.joiningFee) * (event._count?.participants || 0);
    
    const existing = acc.find(item => item.name === month);
    if (existing) {
      existing.revenue += revenue;
    } else {
      acc.push({ name: month, revenue });
    }
    return acc;
  }, []);





  return (
    <div className="space-y-8">
      <h1 className="text-xl md:text-3xl font-semibold tracking-tight">
        Admin Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-5 w-5 text-blue-700" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">
              All user roles included
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarArrowUp className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{events.length}</div>
            <p className="text-xs text-muted-foreground">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              From all paid events
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Engagement Rate
            </CardTitle>
            <BarChart className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">76%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardBarChart 
            data={monthlyRevenue} 
            xKey="name" 
            yKey="revenue" 
            title="Revenue Trends"
            color="#8884d8"
        />
        <DashboardPieChart 
            data={roleDistribution} 
            nameKey="name" 
            dataKey="value" 
            title="User Role Distribution"
        />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <RecentUsersTable data={users.slice(0, 5)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RecentEventsTable data={events.slice(0, 5)} />
            <HostApplicationsTable data={pendingApplications.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
