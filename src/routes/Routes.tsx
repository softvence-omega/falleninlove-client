import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import SuperAdminRoutes from "./SuperAdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Form from "@/pages/Form";
import Services from "@/pages/Services";

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
import HomeDashboardUser from "@/pages/HomeDashboardUser";
import AdminPolicy from "@/components/Admin/AdminPolicy";
import AdminProcedure from "@/components/Admin/AdminProcedure";
import AdminGuideline from "@/components/Admin/AdminGuideline";
import AdminSops from "@/components/Admin/AdminSops";
import AdminForms from "@/components/Admin/AdminForms";
import AdminChecklist from "@/components/Admin/AdminChecklist";
import AdminWorkInstruction from "@/components/Admin/AdminWorkInstruction";
import AdminTraining from "@/components/Admin/AdminTraining";
import AdminOthers from "@/components/Admin/AdminOthers";
import AdminAiTraining from "@/components/Admin/AdminAiTraining";
import AdminInduction from "@/components/Admin/AdminInduction";
import AdminCompliance from "@/components/Admin/AdminCompliance";
import AdminSurvey from "@/components/Admin/AdminSurvey";
import AdminUserRole from "@/components/Admin/AdminUserRole";
import AdminOrganization from "@/components/Admin/AdminOrganization";
import AdminAudit from "@/components/Admin/AdminAudit";
import AdminLanguage from "@/components/Admin/AdminLanguage";
import AdminReports from "@/components/Admin/AdminReports";
import SuperAdminDashboard from "@/pages/SuperAdmin/SuperAdminDashboard";
import SuperAdminDoc from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminDoc";
import SuperAdminMasterTemp from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminMasterTemp";
import SuperAdminDocLifecycle from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminDocLifecycle";
import SuperAdminUsageInsight from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminUsageInsight";
import SuperAdminAutomation from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminAutomation";
import SuperAdminOrg from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminOrg";
import SuperAdminSystem from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminSystem";
import SuperAdminAudit from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminAudit";
import SuperAdminTeamAccess from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminTeamAccess";
import SuperAdminCommunication from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminCommunication";
import SuperAdminCompliance from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminCompliance";
import SuperAdminAiTraining from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminAiTraining";
import SuperAdminAiModule from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminAiModule";
import SuperAdminAiVersionControl from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminAiVersionControl";
import SuperAdminRatingFeed from "@/pages/SuperAdmin/SuperAdminMainComponents/SuperAdminRatingFeed";


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
    ],
  },
  {
        path: "/userdash",
        element: <UserRoutes />,
        children: [
          { path: "", element: <HomeDashboardUser /> },
          {path:'policies', element:<PolicyCards />},
          {path:'procedures', element:<Procedure/>},
          {path:'documents', element:<Documents/>},
          {path:'bookmarks', element:<Bookmarks />},
          {path:"ai-policy-assistant",element:<AiPolicyUserDash/>},
          {path:"voice-activate-companion",element:<VoiceActivate/>},
          {path:"induction-training",element:<Training/>},
          {path:"emergency-access",element:<EmergencyAccess/>},
          {path:"survey-well-being",element:<SurveyWellbeing/>},
          {path:"settings",element:<Settings/>},
          {path:"supports",element:<Supports/>},
        ],
      },
         {
        path: "/admin",
        element: <AdminRoute />,
        children: [
          { path: "", element: <AdminDashboard /> },
          {path: "admin-policies", element: <AdminPolicy/> },
          {path: "admin-procedures", element: <AdminProcedure/> },
          {path: "admin-guidelines", element: <AdminGuideline/> },
          {path: "admin-sops", element: <AdminSops/> },
          {path: "admin-forms", element: <AdminForms/> },
          {path: "admin-checklists", element: <AdminChecklist/> },
          {path: "admin-work-instructions", element: <AdminWorkInstruction/> },
          {path: "admin-training-materials", element: <AdminTraining/> },
          {path: "admin-others", element: <AdminOthers/> },
          {path: "admin-ai-training", element: <AdminAiTraining/> },
          {path: "admin-induction", element: <AdminInduction/> },
          {path: "admin-compliance", element: <AdminCompliance/> },
          {path: "admin-survey-feedback", element: <AdminSurvey/> },
          {path: "admin-user-role", element: <AdminUserRole/> },
          {path: "admin-org-settings", element: <AdminOrganization/>},
          {path: "admin-audit", element: <AdminAudit/> },
          {path: "admin-language", element: <AdminLanguage/> },
          {path: "admin-reports", element: <AdminReports/> },
        ],
      },
      {
        path:"/super-admin",
        element: <SuperAdminRoutes/>,
        children:[
          {path: "", element: <SuperAdminDashboard/>},
          {path:"superadmin-doc-upload", element: <SuperAdminDoc/>},
          {path:"superadmin-master-templates", element: <SuperAdminMasterTemp/>},
          {path:"superadmin-doc-lifecycle", element: <SuperAdminDocLifecycle/>},
          {path:"superadmin-usage-insights", element: <SuperAdminUsageInsight/>},
          {path:"superadmin-rating-feedback", element: <SuperAdminRatingFeed/>},

          {path:"superadmin-ai-automation", element: <SuperAdminAutomation/>},
          {path:"superadmin-org-manager", element: <SuperAdminOrg/>},
          {path:"superadmin-system-settings", element: <SuperAdminSystem/>},
          {path:"superadmin-audit-logs", element: <SuperAdminAudit/>},
          {path:"superadmin-team-access", element: <SuperAdminTeamAccess/>},
          {path:"superadmin-communication", element: <SuperAdminCommunication/>},
          {path:"superadmin-compliance-privacy", element: <SuperAdminCompliance/>},
          {path:"superadmin-ai-training", element: <SuperAdminAiTraining/>},
          {path:"superadmin-ai-module", element: <SuperAdminAiModule/>},
          {path:"superadmin-ai-version-control", element: <SuperAdminAiVersionControl/>},
        ],
      },
      // 🔹 Admin Dashboard Routes
  { path: "*", element: <NotFound /> },
]);

export default routes;
