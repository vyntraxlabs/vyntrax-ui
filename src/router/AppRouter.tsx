import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AIAssistant,
  Cameras,
  Dashboard,
  Devices,
  Login,
  Rooms,
  Security,
  Settings,
} from "../pages";

import { PrivateRoutes, PublicRoutes } from "./";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/devices" element={<Devices />} />

          <Route path="/rooms" element={<Rooms />} />

          <Route path="/cameras" element={<Cameras />} />

          <Route path="/security" element={<Security />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/ai-assistant" element={<AIAssistant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
