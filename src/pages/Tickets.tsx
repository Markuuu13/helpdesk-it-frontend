const tickets = [
  { id: 1, title: "WiFi not working", status: "open", priority: "high", assigned: "John" },
  { id: 2, title: "Laptop slow", status: "in_progress", priority: "medium", assigned: "Mike" },
  { id: 3, title: "Email issue", status: "resolved", priority: "low", assigned: "Anna" },
];

export default function Tickets() {
  return (
    <div className="space-y-4">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          + Create Ticket
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-5 bg-gray-100 p-3 text-sm font-semibold">
          <div>ID</div>
          <div>Title</div>
          <div>Status</div>
          <div>Priority</div>
          <div>Assigned</div>
        </div>

        {/* Rows */}
        {tickets.map((t) => (
          <div
            key={t.id}
            className="grid grid-cols-5 p-3 border-t text-sm hover:bg-gray-50"
          >
            <div>#{t.id}</div>
            <div>{t.title}</div>

            <div>
              <span className={`px-2 py-1 rounded text-xs ${
                t.status === "open"
                  ? "bg-red-100 text-red-600"
                  : t.status === "in_progress"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}>
                {t.status}
              </span>
            </div>

            <div>{t.priority}</div>
            <div>{t.assigned}</div>
          </div>
        ))}

      </div>
    </div>
  );
}