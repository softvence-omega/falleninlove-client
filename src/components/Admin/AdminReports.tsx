import {  Search, Download } from 'lucide-react';
import { useState } from 'react';

// This is the data for the report cards. We can define a type for it to ensure consistency.
interface ReportCard {
  title: string;
  description: string;
}

// This is the data for the system logs table. We define a type for each log entry.
interface SystemLog {
  timestamp: string;
  level: string;
  source: string;
  message: string;
  ipAddress: string;
}

// The main component that renders the entire dashboard.
export default function AdminReports() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Define the data for the report cards. Icons have been removed as requested.
  const reportCards: ReportCard[] = [
    {
      title: 'Compliance Report',
      description: 'Detailed overview of compliance status, alerts, and policy adherence.',
    },
    {
      title: 'Induction Completion Report',
      description: 'Track progress and completion rates for all induction flows.',
    },
    {
      title: 'Policy Readership Report',
      description: 'Analyze policy engagement and read rates across categories and users.',
    },
  ];

  // Define the data for the system logs.
  const systemLogs: SystemLog[] = [
    {
      timestamp: '2025-07-17 10:30 AM',
      level: 'INFO',
      source: 'System',
      message: 'Application started successfully.',
      ipAddress: '192.168.1.10',
    },
    {
      timestamp: '2025-07-16 03:45 PM',
      level: 'WARN',
      source: 'Database',
      message: 'Low disk space warning on database server.',
      ipAddress: '203.0.113.25',
    },
    {
      timestamp: '2025-07-17 10:30 AM',
      level: 'ERROR',
      source: 'AI Module',
      message: 'Failed to process AI query: Invalid input format.',
      ipAddress: '192.168.1.10',
    },
  ];

  // Filter the logs based on the search term.
  const filteredLogs = systemLogs.filter(log =>
    Object.values(log).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className=" min-h-screen p-8 font-sans w-full">
      <div className="mx-auto">
        {/* Main Title Section - Removed bg, shadow, and border from this container */}
        <div className="p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Reports & Logs</h1>
        </div>

        {/* Engagement Overview Section - Updated to match new design */}
        <div className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Engagement Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reportCards.map((card, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-orange-400">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{card.description}</p>
                <button className="w-full bg-teal-500 text-white font-medium py-2 px-4 rounded-xl shadow hover:bg-emerald-600 transition-colors">
                  Generate Report
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* System Logs Section - Updated to match new design */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-400">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">System Logs</h2>
          <div className="flex justify-between items-center mb-4">
            {/* Export button updated with teal background and white text */}
            <button className="bg-teal-500 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:bg-teal-600 transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export All Logs (CSV)
            </button>
            <div className="relative border border-orange-400 rounded-xl">
  <input
    type="text"
    placeholder="Search Logs..."
    className="pl-12 pr-4 py-2 w-64 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 border-none"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-teal-500 p-1.5 rounded-full">
    <Search className="w-4 h-4 text-white" />
  </div>
</div>

          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLogs.map((log, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.timestamp}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {/* Log level span without background color */}
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold">
                        {log.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.source}</td>
                    <td className="px-6 py-4 max-w-sm overflow-hidden text-sm text-gray-500 truncate">{log.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.ipAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
