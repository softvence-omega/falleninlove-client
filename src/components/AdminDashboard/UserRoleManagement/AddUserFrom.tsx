import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  role: string;
}

function  AddUserFrom() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    role: ''
  });
  
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  
  const roles = [
    'Administrator',
    'Manager',
    'Editor',
    'Viewer',
    'Contributor'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRoleSelect = (role: string) => {
    setFormData(prev => ({
      ...prev,
      role
    }));
    setIsRoleDropdownOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      email: '',
      role: ''
    });
    setIsRoleDropdownOpen(false);
  };

  const handleCreateUser = () => {
    // Handle form submission
    console.log('Creating user:', formData);
  };

  return (
    <div className="  p-4">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 w-full ">
        {/* Title */}
        <h2 className="text-lg font-medium text-gray-900 mb-6">Add New User</h2>
        
        {/* Full Name Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Jane Doe"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email :
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="jan.doe@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Role Dropdown */}
        <div className="mb-8 relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Assign Role :
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors flex items-center justify-between"
            >
              <span className={formData.role ? 'text-gray-900' : 'text-gray-500'}>
                {formData.role || 'Select Role'}
              </span>
              <ChevronDown 
                className={`h-4 w-4 text-gray-400 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isRoleDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleSelect(role)}
                    className="w-full px-3 py-2 text-left text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 justify-end">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleCreateUser}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Create User
          </button>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isRoleDropdownOpen && (
        <div 
          className="fixed inset-0 z-5" 
          onClick={() => setIsRoleDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default AddUserFrom;