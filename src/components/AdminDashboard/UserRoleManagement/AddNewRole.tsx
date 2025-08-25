import React, { useState } from 'react';
import { Plus } from 'lucide-react';
 interface Role {
  id: string;
  name: string;
  description: string;
  usersAssigned: number;
}

interface AddRoleProps {
  AddedNewRole?: () => void;
}


const initialRoles: Role[] = [
  {
    id: '1',
    name: 'Carer',
    description: 'Access to policies, training, and basic care documentation.',
    usersAssigned: 80,
  },
  {
    id: '2',
    name: 'Facility Manager',
    description: 'Access to all user-level features plus induction flow management, basic reports.',
    usersAssigned: 5,
  },
];

export const AddNewRole: React.FC<AddRoleProps> = ({AddedNewRole})=> {
  const [roles, setRoles] = useState<Role[]>(initialRoles);

 
  const handleEditPermissions = (roleId: string) => {
    console.log('Edit permissions for role:', roleId);
    // TODO: Implement edit permissions functionality
  };

  const handleDeleteRole = (roleId: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter(role => role.id !== roleId));
    }
  };

  return (
    <div className="  p-4">
      <div className=" rounded-xl shadow-md p-6 w-full border border-[#FFC399]">
        {/* Header */}
       
         <div className="px-6 py-5 border-gray-200">
  {/* First line: Title */}
  <h2 className="text-xl font-semibold text-gray-900 mb-3">
    Manage Roles & Permissions
  </h2>

  {/* Second line: Button aligned right */}
  <div className="flex justify-end">
    <button
      onClick={AddedNewRole}
      className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
    >
      <Plus className="w-4 h-4 mr-2" />
      Add New Role
    </button>
  </div>
</div>

   

        {/* Roles Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-b  border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Role Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Users Assigned
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody >
              {roles.map((role) => (
                <tr key={role.id} className=' border-b border-[#DEC9BA]' >
                  <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                    {role.name}
                  </td>
                  <td className="px-6 py-4  text-gray-700 ">
                    {role.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center  text-gray-900 font-medium">
                    {role.usersAssigned}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center ">
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleEditPermissions(role.id)}
                        className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
                      >
                        Edit Permissions
                      </button>
                      <button
                        onClick={() => handleDeleteRole(role.id)}
                        className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
