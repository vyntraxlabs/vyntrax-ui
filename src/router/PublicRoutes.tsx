import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks";

export function PublicRoutes() {
  const { session, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}