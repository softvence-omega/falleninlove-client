import { Outlet } from "react-router-dom";
import UserNavbar from "@/components/User/UserNavbar";

const Layout: React.FC = () => {
  const isRoleUser = false; 

  return (
    <div>
      {isRoleUser && <UserNavbar />}
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

