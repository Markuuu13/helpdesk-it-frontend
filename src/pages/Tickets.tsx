const tickets = [
  { id: "#1048", title: "Unable to access email", requester: "Sarah Johnson", status: "Open", priority: "High", updated: "2 min ago" },
  { id: "#1047", title: "Laptop replacement request", requester: "Michael Chen", status: "In progress", priority: "Medium", updated: "1 hour ago" },
  { id: "#1046", title: "VPN connection issue", requester: "Emily Davis", status: "Open", priority: "Low", updated: "3 hours ago" },
  { id: "#1045", title: "Software installation", requester: "James Wilson", status: "Resolved", priority: "Medium", updated: "Yesterday" },
];

const statusColor: Record<string, string> = {
  Open: "#2563eb",
  "In progress": "#d97706",
  Resolved: "#16a34a",
};

export default function Ticket() {
  return (
    <main style={styles.page}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Helpdesk<span>IT</span></h2>
        <nav>
          <a style={styles.navActive}>▣ &nbsp; Tickets</a>
          <a style={styles.navItem}>▤ &nbsp; Dashboard</a>
          <a style={styles.navItem}>⚙ &nbsp; Settings</a>
        </nav>
        <div style={styles.profile}><strong>Alex Morgan</strong><small>Support agent</small></div>
      </aside>

      <section style={styles.content}>
        <header style={styles.header}>
          <div><p style={styles.eyebrow}>SUPPORT CENTER</p><h1 style={styles.title}>Tickets</h1></div>
          <button style={styles.newButton}>+ New ticket</button>
        </header>

        <div style={styles.stats}>
          <div><small>Open tickets</small><strong>24</strong></div>
          <div><small>In progress</small><strong>12</strong></div>
          <div><small>Resolved this week</small><strong>38</strong></div>
        </div>

        <section style={styles.panel}>
          <div style={styles.panelTop}><h2 style={styles.panelTitle}>All tickets</h2><input style={styles.search} placeholder="Search tickets..." /></div>
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead><tr>{["Ticket", "Requester", "Status", "Priority", "Last updated"].map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
              <tbody>{tickets.map((ticket) => <tr key={ticket.id}>
                <td><strong>{ticket.id}</strong><br /><span style={styles.ticketTitle}>{ticket.title}</span></td>
                <td>{ticket.requester}</td>
                <td><span style={{ ...styles.badge, color: statusColor[ticket.status] }}><i style={{ ...styles.dot, background: statusColor[ticket.status] }} />{ticket.status}</span></td>
                <td style={{ color: ticket.priority === "High" ? "#dc2626" : "#64748b" }}>{ticket.priority}</td>
                <td style={{ color: "#64748b" }}>{ticket.updated}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { display: "flex", minHeight: "100vh", background: "#f8fafc", color: "#172033", fontFamily: "Inter, Arial, sans-serif" },
  sidebar: { width: 230, padding: "30px 18px", background: "#111827", color: "#cbd5e1", display: "flex", flexDirection: "column", boxSizing: "border-box" },
  logo: { margin: "0 12px 48px", color: "white", fontSize: 22 },
  navActive: { display: "block", padding: "12px", borderRadius: 8, background: "#1d4ed8", color: "white", marginBottom: 8 },
  navItem: { display: "block", padding: "12px", marginBottom: 8 },
  profile: { marginTop: "auto", padding: "14px 12px", borderTop: "1px solid #374151", display: "flex", flexDirection: "column", gap: 5 },
  content: { flex: 1, padding: "42px 6%", maxWidth: 1150, margin: "auto" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 },
  eyebrow: { color: "#2563eb", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, margin: 0 },
  title: { fontSize: 32, margin: "8px 0 0" },
  newButton: { border: 0, borderRadius: 7, padding: "12px 18px", background: "#2563eb", color: "white", fontWeight: 700, cursor: "pointer" },
  stats: { display: "flex", gap: 18, marginBottom: 24 },
  panel: { background: "white", border: "1px solid #e2e8f0", borderRadius: 10, boxShadow: "0 2px 8px #0f172a08" },
  statsBox: {},
  panelTop: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", borderBottom: "1px solid #e2e8f0" },
  panelTitle: { margin: 0, fontSize: 18 },
  search: { padding: "9px 12px", border: "1px solid #cbd5e1", borderRadius: 6, outline: "none" },
  table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
  ticketTitle: { color: "#64748b", fontSize: 13, display: "inline-block", marginTop: 5 },
  badge: { fontWeight: 600, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 },
  dot: { width: 7, height: 7, borderRadius: "50%", display: "inline-block" },
};