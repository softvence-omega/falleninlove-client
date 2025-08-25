import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Settings } from "lucide-react";
import AdminCharts from "./AdminCharts";

// Types for better maintainability
interface StatItem {
  label: string;
  value: string;
  sub: string;
  color: string;
}

interface ComplianceAlert {
  type: string;
  description: string;
  date: string;
  status: "Pending" | "Urgent";
  action: string;
}

const AdminDashboard: React.FC = () => {
  // Mock data with proper typing (replace with API later)
  const stats: StatItem[] = [
    { label: "Induction Completion", value: "85%", sub: "Target: 95%", color: "text-blue-500"},
    { label: "Policy Read Rates", value: "72%", sub: "Average across all policies",color: "text-orange-400" },
    { label: "Compliance Alerts", value: "03", sub: "Action required",color: "text-green-500" },
    { label: "Survey Engagement", value: "72%", sub: "Average response rate",color: "text-yellow-500" },
  ];

  const complianceAlerts: ComplianceAlert[] = [
    {
      type: "Policy Expiry",
      description: '"Medication Management" policy expiring soon.',
      date: "2025-08-15",
      status: "Pending",
      action: "Review",
    },
    {
      type: "Training Gap",
      description: '5 staff members require "First Aid" refresher.',
      date: "2025-07-10",
      status: "Urgent",
      action: "Assign Training",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900">Organization Dashboard</h1>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <Card key={i} className="border border-orange-200 shadow-sm bg-white">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <p className="text-sm font-medium text-gray-600">{item.label}</p>
              <p className={`text-2xl font-bold mt-1 ${item.color}`}>{item.value}</p>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Placeholder */}
     <AdminCharts/>

      {/* Compliance Alerts */}
      <Card className="shadow-sm bg-white border-amber-400">
        <CardContent className="p-6">
          <h2 className="font-semibold text-lg mb-4 text-gray-900">Recent Compliance Alerts</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 font-semibold text-gray-600/80">Alert Type</th>
                  <th className="p-3 font-semibold text-gray-600/80">Description</th>
                  <th className="p-3 font-semibold text-gray-600/80">Date</th>
                  <th className="p-3 font-semibold text-gray-600/80">Status</th>
                  <th className="p-3 font-semibold text-gray-600/80">Action</th>
                </tr>
              </thead>
              <tbody>
                {complianceAlerts.map((alert, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="p-3 font-medium text-gray-900">{alert.type}</td>
                    <td className="p-3 text-gray-700">{alert.description}</td>
                    <td className="p-3 text-gray-700">{alert.date}</td>
                    <td
                      className={`p-3 font-medium ${
                        alert.status === "Urgent"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {alert.status}
                    </td>
                    <td className="p-3">
                      <Button variant="link" className="text-blue-600 p-0 h-auto hover:text-blue-800">
                        {alert.action}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Bottom actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="font-medium text-gray-900">Document Suite</p>
            <p className="text-sm text-gray-500 mt-2">
              Upload, manage, and generate policies with AI.
            </p>
            <Button className="mt-4  hover:bg-[#2CBCA4] text-gray-700 border cursor-pointer rounded-md">
              Go to Documents
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="font-medium text-gray-900">User & Role Management</p>
            <p className="text-sm text-gray-500 mt-2">
              Manage staff accounts, roles, and permissions.
            </p>
            <Button className="mt-4 hover:bg-[#2CBCA4] text-gray-700 border cursor-pointer rounded-md">
              Manage Users
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="font-medium text-gray-900">Organisation Settings</p>
            <p className="text-sm text-gray-500 mt-2">
              Configure branding, integrations, and general settings.
            </p>
            <Button className="mt-4 hover:bg-[#2CBCA4] text-gray-700 border cursor-pointer rounded-md">
              Configure Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;