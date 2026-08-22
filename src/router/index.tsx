import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tickets from "../pages/Tickets";
import ProtectedRoute from "./protected_route";
import PublicRoute from "./public_route";
import Assets from "../pages/Assets";

export const router = createBrowserRouter([
  // PUBLIC
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },

  // APP (LAYOUT)
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "assets",
        element: <Assets />,
      },
    ],
  },
]);