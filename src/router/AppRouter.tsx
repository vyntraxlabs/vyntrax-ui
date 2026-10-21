import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {
  Dashboard,
  Login,
} from "../pages";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}