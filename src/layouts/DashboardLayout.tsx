import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="flex flex-col flex-1">

        {/* Topbar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">

          <input
            className="border rounded px-3 py-1 text-sm w-1/3"
            placeholder="Search tickets..."
          />

          <div className="text-sm text-gray-600">
            Admin User
          </div>

        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}