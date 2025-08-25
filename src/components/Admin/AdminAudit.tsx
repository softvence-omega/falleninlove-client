import { useState } from "react";
import { Search, Download } from "lucide-react";

// Define activity keys
type ActivityKey = "logins" | "policy" | "roles" | "exports" | "ai";

interface Log {
  timestamp: string;
  user: string;
  activityType: string;
  description: string;
  ipAddress: string;
}

export default function App() {
  const [auditMode, setAuditMode] = useState<boolean>(false);
  const [retentionPeriod, setRetentionPeriod] = useState<string>("1 Year");
  const [activities, setActivities] = useState<Record<ActivityKey, boolean>>({
    logins: true,
    policy: true,
    roles: false,
    exports: false,
    ai: false,
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleActivityChange = (key: ActivityKey) => {
    setActivities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const logs: Log[] = [
    {
      timestamp: "2025-07-17 10:30 AM",
      user: "Admin User",
      activityType: "Login",
      description: "Successful login to Admin Panel.",
      ipAddress: "192.168.1.10",
    },
    {
      timestamp: "2025-07-16 03:45 PM",
      user: "John Smith",
      activityType: "Policy Change",
      description: 'Updated "Medication Management Policy".',
      ipAddress: "203.0.113.25",
    },
    {
      timestamp: "2025-07-17 10:30 AM",
      user: "Admin User",
      activityType: "Login",
      description: "Successful login to Admin Panel.",
      ipAddress: "192.168.1.10",
    },
  ];

  const filteredLogs = logs.filter((log) =>
    [log.timestamp, log.user, log.activityType, log.description, log.ipAddress]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Audit Mode Access</h1>

      {/* Control Audit Mode */}
      <div className="bg-white border border-orange-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Control Audit Mode
        </h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-medium text-gray-700">Audit Mode Status:</p>
            <p className="text-sm text-gray-600 mt-1 max-w-xl">
              When enabled, all user activities and system changes will be
              meticulously logged for compliance and security reviews. Disabling
              audit mode will stop logging new activities.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3">
            <span
              className={`font-semibold ${
                auditMode ? "text-green-600" : "text-red-500"
              }`}
            >
              {auditMode ? "Enabled" : "Disabled"}
            </span>
            <button
              onClick={() => setAuditMode(!auditMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                auditMode ? "bg-green-500" : "bg-red-400"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  auditMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
          Save Audit Settings
        </button>
      </div>

      {/* Audit Log Configuration */}
      <div className="bg-white border border-orange-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Audit Log Configuration
        </h2>

        {/* Retention Period */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Log Retention Period:
          </label>
          <select
            value={retentionPeriod}
            onChange={(e) => setRetentionPeriod(e.target.value)}
            className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option>1 Month</option>
            <option>6 Months</option>
            <option>1 Year</option>
            <option>3 Years</option>
          </select>
        </div>

        {/* Activities */}
        <div className="mb-4">
          <p className="font-medium text-gray-700 mb-2">Activities to Log:</p>
          <div className="space-y-2">
            {(Object.keys(activities) as ActivityKey[]).map((key) => (
              <label
                key={key}
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={activities[key]}
                  onChange={() => handleActivityChange(key)}
                  className="rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                />
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
            ))}
          </div>
        </div>

        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
          Save Log Configuration
        </button>
      </div>

      {/* Audit Log History */}
      <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Audit Log History
          </h2>
          <div className="flex items-center space-x-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
              <Download size={18} />
              Export Logs (CSV)
            </button>
            {/* Updated search bar to match the user's design */}
            <div className="relative flex items-center border border-orange-200 rounded-lg pr-4 bg-white">
              <div className="bg-teal-500 p-2 rounded-full m-2 flex items-center justify-center">
                <Search size={18} className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Search Logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 border-0 focus:ring-0 focus:border-0 rounded-r-md text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.activityType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.ipAddress}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredLogs.length === 0 && (
            <div className="p-4 text-center text-gray-500">No logs found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
