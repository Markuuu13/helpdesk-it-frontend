import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tickets from "../pages/Tickets";

export const router = createBrowserRouter([
  // PUBLIC
  {
    path: "/",
    element: <Login />,
  },

  // APP (LAYOUT)
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
    ],
  },
]);