export default function TicketDetails() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Ticket #123</h1>
        <p className="text-gray-600">WiFi not working in office</p>
      </div>

      {/* Info */}
      <div className="bg-white p-4 rounded shadow space-y-2 text-sm">
        <p><b>Status:</b> Open</p>
        <p><b>Priority:</b> High</p>
        <p><b>Assigned:</b> John Technician</p>
      </div>

      {/* Description */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-700">
          Cannot connect to WiFi since morning. Tried restarting router but still not working.
        </p>
      </div>

      {/* Comments */}
      <div className="bg-white p-4 rounded shadow space-y-4">

        <h2 className="font-semibold">Comments</h2>

        <div className="space-y-2 text-sm">
          <p><b>Admin:</b> Please check router.</p>
          <p><b>Tech:</b> Investigating now.</p>
          <p><b>User:</b> Still not working.</p>
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-2">
          <input
            className="flex-1 border rounded px-3 py-2 text-sm"
            placeholder="Add comment..."
          />
          <button className="bg-blue-500 text-white px-4 rounded">
            Send
          </button>
        </div>

      </div>

    </div>
  );
}