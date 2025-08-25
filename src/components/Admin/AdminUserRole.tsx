import { useState } from "react";
import AddUserFrom from "../AdminDashboard/UserRoleManagement/AddUserFrom";
import AllUsers from "../AdminDashboard/UserRoleManagement/AllUsers";
import UserAndRoleMAngement from "../AdminDashboard/UserRoleManagement/UserAndRoleMAngement";
import { AddNewRole } from "../AdminDashboard/UserRoleManagement/AddNewRole";
import NewRoleForm from "../AdminDashboard/UserRoleManagement/NewRoleFrom";

export default function AdminUserRole() {
  const [showFormUser, setShowFormUser] = useState(false);
  const [ShowAddNewRole, setShowAddNewRole] = useState(false);
  return (
    <div>
      <UserAndRoleMAngement></UserAndRoleMAngement>
      <AllUsers onCreateNewUser={() => setShowFormUser(true)}></AllUsers>

      {
        showFormUser&&(<AddUserFrom></AddUserFrom>)
      }
      
      <AddNewRole AddedNewRole={() => setShowAddNewRole(true)}></AddNewRole>

      {
        ShowAddNewRole &&(
          <NewRoleForm></NewRoleForm>
        )
      }
      

      

    </div>
  )
}
