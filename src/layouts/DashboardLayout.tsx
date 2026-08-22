import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { UserProfileAPI, type UserProfile } from "../api/users/user_api";

export default function DashboardLayout() {

  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      UserProfileAPI()
      .then(setUser)
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        localStorage.removeItem("access_token");
        navigate("/");
      })
      .finally(() => setLoading(false));
    }, []);
    
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Right side */}
      <div className="flex flex-col flex-1">

        {/* Topbar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">

          <input
            className="border rounded px-3 py-1 text-sm w-1/3"
            placeholder="Search tickets..."
          />

          <div className="text-sm text-gray-600">
            {user?.name || "User"}
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