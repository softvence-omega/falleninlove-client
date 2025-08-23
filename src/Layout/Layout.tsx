
import { Outlet } from "react-router-dom";

import UserNavbar from "@/components/User/UserNavbar";

const Layout: React.FC = () => {
  return (
    <div>
      <UserNavbar></UserNavbar>
      <main>
        <Outlet />
      </main>
     
    </div>
  );
};

export default Layout;
