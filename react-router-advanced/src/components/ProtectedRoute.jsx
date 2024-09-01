
import { Navigate } from "react-router-dom";
import React from "react";
import useAuth from "../hooks/useAuth";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};


const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};
interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export default ProtectedRoute;
