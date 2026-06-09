import { NavLink } from "react-router-dom";

type NavItemProps = {
  isActive: boolean;
};

const linkClass = ({ isActive }: NavItemProps) =>
  `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
    isActive
      ? "bg-blue-50 text-blue-600 font-medium"
      : "text-gray-600 hover:bg-gray-100"
  }`;

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col">

      {/* Logo */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-lg font-bold text-gray-800">
          IT Help Desk
        </h1>
        <p className="text-xs text-gray-500">
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
        Logged in as <span className="font-medium">Admin</span>
      </div>

    </aside>
  );
}