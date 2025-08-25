import  { useState } from 'react';
import { Search, AlertTriangle, Lock, CheckCircle, Snowflake } from 'lucide-react';
import { ComplianceAlert, insights, mockAlerts } from '@/common/demodata';
import ComplianceChart from './AdminComponents/ComplianceChart';



export default function AdminCompliance() {






  const [alerts] = useState<ComplianceAlert[]>(mockAlerts);
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [sortBy, setSortBy] = useState('Sort by : Date ( Newest)');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate metrics
  const totalAlerts = alerts.length;
  const openAlerts = alerts.filter(alert => alert.status === 'Open').length;
  const resolvedAlerts = alerts.filter(alert => alert.status === 'Resolved').length;
  const complianceScore = Math.round((resolvedAlerts / totalAlerts) * 100) || 88;

  // Filter alerts based on current filters
  const filteredAlerts = alerts.filter(alert => {
    const matchesStatus = statusFilter === 'All Status' || alert.status === statusFilter;
    const matchesType = typeFilter === 'All Types' || alert.type === typeFilter;
    const matchesSearch = alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

 

  const getStatusColor = (status: string) => {
    return status === 'Open' ? 'text-yellow-500' : 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Compliance Dashboard</h1>

        {/* Compliance Overview Cards */}
        <div className="bg-white rounded-lg border border-yellow-400 p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-600 mb-6">Compliance Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Alerts */}
            <div className="bg-gray-50 shadow border border-yellow-400 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Alerts</h3>
              <p className="text-4xl font-bold text-blue-600">{totalAlerts}</p>
            </div>

            {/* Open Alerts */}
            <div className="bg-gray-50 shadow border border-yellow-400 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3">
                <Lock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Open Alerts</h3>
              <p className="text-4xl font-bold text-red-500">{openAlerts}</p>
            </div>

            {/* Resolved Alerts */}
            <div className="bg-gray-50 shadow border border-yellow-400 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Resolved Alerts</h3>
              <p className="text-4xl font-bold text-green-500">{resolvedAlerts}</p>
            </div>

            {/* Compliance Score */}
            <div className="bg-gray-50 shadow border border-yellow-400 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3">
                <Snowflake className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Compliance Score</h3>
              <p className="text-4xl font-bold text-yellow-500">{complianceScore}%</p>
            </div>
          </div>
        </div>

        {/* Compliance Alerts Section */}
        <div className="bg-white rounded-lg border border-yellow-400 p-6">
          <h2 className="text-lg font-medium text-gray-600 mb-6">Compliance Alerts</h2>

          {/* Filters and Search */}
          <div className="space-y-4 mb-6">
            {/* Filter Dropdowns Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-yellow-400 rounded-2xl text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 flex-1"
              >
                <option>All Status</option>
                <option>Open</option>
                <option>Resolved</option>
              </select>

              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 border border-yellow-400 rounded-2xl text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 flex-1"
              >
                <option>All Types</option>
                <option>Policy Expiry</option>
                <option>Training Gap</option>
                <option>Incident Report</option>
              </select>

              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-yellow-400 rounded-2xl text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 flex-1"
              >
                <option>Sort by : Date ( Newest)</option>
                <option>Sort by : Date ( Oldest)</option>
                <option>Sort by : Severity</option>
              </select>
            </div>

            {/* Search Bar Row */}
            <div className="relative max-w-md">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Search Alerts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-16 pr-4 py-3 border border-yellow-400 rounded-2xl text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 w-full"
              />
            </div>
          </div>

          {/* Alerts Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Alert ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Severity</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{alert.id}</td>
                    <td className="py-3 px-4 text-gray-600">{alert.type}</td>
                    <td className="py-3 px-4 text-gray-600 max-w-md">{alert.description}</td>
                    <td className="py-3 px-4 text-[#3BAE5A]">{alert.date}</td>
                    <td className={`py-3 px-4 font-medium}`}>
                      {alert.severity}
                    </td>
                    <td className={`py-3 px-4 font-medium ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full h-3 rounded-full bg-gray-600 overflow-hidden">
              <div 
                className="h-full bg-red-400  transition-all duration-300"
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
{/* charts and progress bar */}
        </div>
          <div className='my-4'>
            <ComplianceChart/>
          </div>

          {/* actionable insights */}
          <div className="bg-white rounded-2xl border border-yellow-400 p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-medium text-gray-700 mb-6">
        Actionable Insights & Recommendations
      </h2>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-sm sm:text-base  leading-relaxed">
              {insight.isUrgent && (
                <span className="font-semibold text-gray-600">Urgent: </span>
              )}
              {insight.text}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-start">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200 text-sm sm:text-base">
          Create Compliance Report
        </button>
      </div>
    </div>
      </div>
  );
}