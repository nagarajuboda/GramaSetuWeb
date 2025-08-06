import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SuperAdminDashboard from "../components/superAdmin/Dasboard";
import StateAdminDashboard from "../components/stateAdmin/Dashboard";
import Sidebar from "../components/Sidebar";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/notfound/Notfound";
import States from "../components/superAdmin/States";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import Districts from "../components/superAdmin/Districts";
import Panchayat from "../components/superAdmin/Panchayat";
import Users from "../components/superAdmin/Users";
import { User } from "lucide-react";
export default function AllRoutes() {
  return (
    <ProtectedRoute>
      <RoleBasedRoutes />
    </ProtectedRoute>
  );
}
function RoleBasedRoutes() {
  const sessionData = localStorage.getItem("userData");
  const userDetails = sessionData ? JSON.parse(sessionData) : null;

  const roleMap = {
    super_admin: "Super_Admin",
    state_admin: "State_Admin",
  };

  let userRole = userDetails?.result?.role?.roleName?.toLowerCase(); // normalize

  userRole = roleMap[userRole] || userRole;

  const roleBasedRoutes = {
    Super_Admin: [
      { path: "/SuperAdminDashboard", element: <SuperAdminDashboard /> },
      { path: "/States", element: <States /> },
      { path: "/Districts", element: <Districts /> },
      { path: "/Panchayat", element: <Panchayat /> },
      { path: "/Users", element: <Users /> },
    ],
    State_Admin: [
      { path: "/StateAdminDashboard", element: <StateAdminDashboard /> },
    ],
  };
  const accessibleRoutes = roleBasedRoutes[userRole] || [];
  return (
    // <Sidebar>
    //   <Routes>
    //     {accessibleRoutes.map(({ path, element }, index) => (
    //       <Route key={index} path={path} element={element} />
    //     ))}
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Sidebar>
    <Sidebar>
      <PageTransitionWrapper>
        <Routes>
          {accessibleRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransitionWrapper>
    </Sidebar>
  );
}
