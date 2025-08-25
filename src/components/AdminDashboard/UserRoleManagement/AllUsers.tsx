import React, { useState } from 'react';
import { Search, Plus, ChevronDown } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: 'Active' | 'Inactive';
}
interface UserTableProps {
  onCreateNewUser?: () => void;
}

const  AllUsers: React.FC<UserTableProps> = ({ onCreateNewUser }) => {
  const [users] = useState<User[]>([
    {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@caresuite.com.au',
      role: 'Carer',
      lastLogin: '2025-07-01',
      status: 'Active'
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john.smith@caresuite.com.au',
      role: 'Facility Manager',
      lastLogin: '2025-07-01',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Emily White',
      email: 'emily.white@caresuite.com.au',
      role: 'Admin',
      lastLogin: '2025-07-01',
      status: 'Active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === 'All Roles' || user.role === selectedRole;
    const matchesStatus =
      selectedStatus === 'All Statuses' || user.status === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className=" p-4">
      <div className=" rounded-xl shadow-md p-6 w-full border border-[#FFC399] ">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Manage Users
          </h1>
          <button
  className="bg-[#2CBCA4] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 mb-6 cursor-pointer"
  onClick={onCreateNewUser} // ✅ attach the callback properly
>
  <Plus className="w-4 h-4" />
  Add New Users
</button>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Role Filter */}
            <div className="relative">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 min-w-[140px]"
              >
                <option>All Roles</option>
                <option>Carer</option>
                <option>Facility Manager</option>
                <option>Admin</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 min-w-[140px]"
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-500" />
              <input
                type="text"
                placeholder="Search Users"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className=" rounded-lg  overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse ">
              <thead className="rounded-xl">
                <tr className="bg-gray-50 text-left font-medium rounded-2xl text-[#6B7280]">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Last Login</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-[#DEC9BA]"
                  >
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3">{user.lastLogin}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`${
                          user.status === 'Active'
                            ? 'text-[#FFBB33]'
                            : 'text-gray-500'
                        } font-medium`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center font-medium space-x-4">
                        <button className="text-[#2F80ED] cursor-pointer hover:underline">
                          Edit
                        </button>
                        <button className="text-[#2CBCA4] cursor-pointer hover:underline">
                          Deactivate
                        </button>
                        
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 w-[70%]"></div>
            <div className="h-full bg-gray-800 w-[30%]"></div>
          </div>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No users found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
