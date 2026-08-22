import { NavLink } from "react-router-dom";
import type { UserProfile } from "../../api/users/user_api";

type NavItemProps = {
  isActive: boolean;
};

interface SidebarProps {
  user?: UserProfile | null;
}

const linkClass = ({ isActive }: NavItemProps) =>
  `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
    isActive
      ? "bg-gray-800 text-white font-medium"
      : "text-gray-600 hover:bg-gray-100"
  }`;

export default function Sidebar({user} : SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-green-400 border-r flex flex-col">

      {/* Logo */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-lg font-bold text-white">
          IT Help Desk
        </h1>
        <p className="text-xs text-gray-100">
          Support System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        <NavLink to="/app/dashboard" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/app/tickets" className={linkClass}>
          🎫 Tickets
        </NavLink>

        <NavLink to="/app/assets" className={linkClass}>
          💻 Assets
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t text-xs text-gray-500">
        Logged in as <span className="font-medium uppercase">{user?.role}</span>
      </div>

    </aside>
  );
}