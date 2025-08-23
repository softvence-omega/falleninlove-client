import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Form from "@/pages/Form";
import Services from "@/pages/Services";

import Dashboard from "@/pages/HomeDashboardUser";
import PolicyCards from "@/components/reusable/PolicyCardsUser";
import Procedure from "@/components/Procedure";
import Documents from "@/components/Documents";
import Bookmarks from "@/components/Bookmarks";
import AiPolicyUserDash from "@/components/AiPolicyUserDash";
import VoiceActivate from "@/components/VoiceActivate";
import Training from "@/components/Training";
import EmergencyAccess from "@/components/EmergencyAccess";
import SurveyWellbeing from "@/components/SurveyWellbeing";
import Settings from "@/components/Settings";
import Supports from "@/components/Supports";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/policyadmin", element: <PolicyCards /> },
      { path: "/form", element: <Form /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      {
        path: "/userdash",
        element: <UserRoutes />,
        children: [
          { path: "", element: <Dashboard /> },
          {path:'policies', element:<PolicyCards />},
          {path:'procedures', element:<Procedure/>},
          {path:'documents', element:<Documents/>},
          {path:'bookmarks', element:<Bookmarks />},
          {path:"ai-poilicy-assistant",element:<AiPolicyUserDash/>},
          {path:"voice-activate-companion",element:<VoiceActivate/>},
          {path:"induction-training",element:<Training/>},
          {path:"emergency-access",element:<EmergencyAccess/>},
          {path:"survey-well-being",element:<SurveyWellbeing/>},
          {path:"settings",element:<Settings/>},
          {path:"supports",element:<Supports/>},
        ],
      },

      // 🔹 Admin Dashboard Routes
      {
        path: "/admin",
        element: <AdminRoute />,
        children: [
          { path: "", element: <AdminDashboard /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
