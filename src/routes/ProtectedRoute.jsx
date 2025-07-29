import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const sessionData = localStorage.getItem("userData");
  const userDetails = sessionData ? JSON.parse(sessionData) : null;
  const isAuthenticated = userDetails?.result?.token ? true : false;
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/user/Login" state={{ from: location }} replace />
  );
};
export default ProtectedRoute;
