"use client";

import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { UserRole } from "@/lib/auth-utils";
import {
    approveHostApplication,
    getAllHostApplications,
    rejectHostApplication,
} from "@/services/admin/hostApplications";
import { getAllUsers, updateUsers } from "@/services/admin/userManagement";
import { HostApplication } from "@/types/hostApplication.interface";
import { UserInfo } from "@/types/user.interface";
import { CheckCircle, Clock, User, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UserManagement = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hostApplications, setHostApplications] = useState<HostApplication[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [usersResult, hostAppsResult] = await Promise.all([
          getAllUsers(),
          getAllHostApplications(),
        ]);

        const allUsers = usersResult?.data || [];
        const filteredUsers = allUsers.filter(
          (user: UserInfo) => user.role === "USER"
        );

        setUsers(filteredUsers);
        setHostApplications(hostAppsResult?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      const result = await updateUsers(userId, { role: newRole });

      if (result?.success) {
        setUsers((prev) =>
          prev.map((user) =>
            user.id === userId ? { ...user, role: newRole as UserRole } : user
          )
        );
        toast.success("Role updated successfully");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role");
    }
  };

  const handleApproveApplication = async (userId: string) => {
    try {
      const result = await approveHostApplication(userId);
      if (result?.success) {
        setHostApplications((prev) =>
          prev.map((app) =>
            app.userId === userId ? { ...app, status: "APPROVED" } : app
          )
        );
        toast.success("Application approved successfully");
      }
    } catch (error) {
      console.error("Error approving application:", error);
      toast.error("Failed to approve application");
    }
  };

  const handleRejectApplication = async (userId: string) => {
    try {
      const result = await rejectHostApplication(userId);
      if (result?.success) {
        setHostApplications((prev) =>
          prev.map((app) =>
            app.userId === userId ? { ...app, status: "REJECTED" } : app
          )
        );
        toast.success("Application rejected");
      }
    } catch (error) {
      console.error("Error rejecting application:", error);
      toast.error("Failed to reject application");
    }
  };



  const getUserApplication = (userId: string) => {
    return hostApplications.find((app) => app.userId === userId);
  };

  if (isLoading) {
    return <TableSkeleton columns={5} rows={5} />;
  }

  return (
    <div className="space-y-4 border rounded-md max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Host Application</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: UserInfo) => {
            const application = getUserApplication(user.id);

            return (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10 border border-primary/40">
                      <AvatarImage src={user.image} />
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.role === "HOST"
                        ? "bg-primary/20 text-primary"
                        : "bg-green-100 text-green-600"
                    }
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  {application ? (
                    <div className="space-y-2">
                      <Badge
                        className={`flex items-center gap-1 w-fit ${
                          application.status === "PENDING"
                            ? "bg-orange-100 text-orange-600"
                            : application.status === "APPROVED"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {application.status === "PENDING" && (
                          <Clock className="h-3 w-3" />
                        )}
                        {application.status === "APPROVED" && (
                          <CheckCircle className="h-3 w-3" />
                        )}
                        {application.status === "REJECTED" && (
                          <XCircle className="h-3 w-3" />
                        )}
                        {application.status}
                      </Badge>
                      {application.status === "PENDING" && (
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            onClick={() =>
                              handleApproveApplication(application.userId)
                            }
                            className="bg-green-600 hover:bg-green-700 h-7 px-2"
                          >
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              handleRejectApplication(application.userId)
                            }
                            className="h-7 px-2"
                          >
                            <XCircle className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-400">No application</span>
                  )}
                </TableCell>
                <TableCell>
                  <Select
                    value={user.role}
                    onValueChange={(value) => handleRoleChange(user.id, value)}
                    
                  >
                    <SelectTrigger className="w-32 bg-primary/5 border border-primary/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USER">USER</SelectItem>
                      <SelectItem value="HOST">HOST</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
