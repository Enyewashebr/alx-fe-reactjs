
import { Navigate } from "react-router-dom";
import React from "react";


const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};
interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export default ProtectedRoute;
