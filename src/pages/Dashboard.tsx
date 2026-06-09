export default function Dashboard() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Tickets</p>
          <h2 className="text-2xl font-bold">24</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Open</p>
          <h2 className="text-2xl font-bold text-red-500">8</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">In Progress</p>
          <h2 className="text-2xl font-bold text-yellow-500">10</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Resolved</p>
          <h2 className="text-2xl font-bold text-green-500">6</h2>
        </div>

      </div>

      {/* Recent Tickets */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Recent Tickets</h2>

        <ul className="space-y-2 text-sm text-gray-700">
          <li>• WiFi not working</li>
          <li>• Laptop overheating</li>
          <li>• Email access issue</li>
        </ul>
      </div>

    </div>
  );
}