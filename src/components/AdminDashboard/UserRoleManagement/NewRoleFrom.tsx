

import { useState } from "react"

export default function NewRoleForm() {
  const [roleName, setRoleName] = useState("")
  const [description, setDescription] = useState("")
  const [permissions, setPermissions] = useState({
    viewDocs1: false,
    viewDocs2: false,
    viewDocs3: false,
    viewDocs4: false,
    viewDocs5: false,
    viewDocs6: false,
  })

  const handlePermissionChange = (key: string, checked: boolean) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: checked,
    }))
  }

  const handleCancel = () => {
    setRoleName("")
    setDescription("")
    setPermissions({
      viewDocs1: false,
      viewDocs2: false,
      viewDocs3: false,
      viewDocs4: false,
      viewDocs5: false,
      viewDocs6: false,
    })
  }

  const handleCreateRole = () => {
    console.log("Creating role:", { roleName, description, permissions })
    // Handle role creation logic here
  }

  return (
   <div className="p-4">
     <div className="  rounded-lg border border-[#FFC399] p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Add New Role</h2>

      <div className="space-y-6">
        {/* Role Name */}
        <div>
          <label htmlFor="roleName" className="block text-sm font-medium text-gray-700 mb-2">
            Role Name :
          </label>
          <input
            id="roleName"
            type="text"
            placeholder="Jane Doe"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="w-full px-3 py-2 border border-[#FFC399] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Brief Description of This role's responsibilities."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[80px] px-3 py-2 border border-[#FFC399] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        {/* Permissions */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Permissions</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(permissions).map(([key, checked],) => (
              <div key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={key}
                  checked={checked}
                  onChange={(e) => handlePermissionChange(key, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-[#FFC399] rounded"
                />
                <label htmlFor={key} className="text-sm text-gray-600 cursor-pointer">
                  View Documents
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
     <div className="flex justify-end gap-3 pt-4 mx-12">
  <button
    onClick={handleCancel}
    className="px-4 py-2  text-white border border-[#FFC399] rounded-md bg-[#FF715B] cursor-pointer"
  >
    Cancel
  </button>
  <button
    onClick={handleCreateRole}
    className="px-4 py-2 bg-[#2CBCA4] text-white border border-[#FFC399] rounded-md cursor-pointer "
  >
    Create Role
  </button>
</div>

      </div>
    </div>
   </div>
  )
}
