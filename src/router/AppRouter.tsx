import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {
  Cameras,
  Dashboard,
  Devices,
  Login,
  Security,
  Settings,
} from "../pages";

import {
  PrivateRoutes,
  PublicRoutes,
} from "./";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route element={<PublicRoutes />}>
          <Route
            path="/login"
            element={<Login />}
          />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/devices"
            element={<Devices />}
          />

          <Route
            path="/cameras"
            element={<Cameras />}
          />

          <Route
            path="/security"
            element={<Security />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}