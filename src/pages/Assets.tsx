export default function Assets() {
    const assets = [
        { name: "MacBook Pro 14-inch", tag: "AST-00124", category: "Laptop", assignedTo: "Olivia Martin", status: "In use", condition: "Good" },
        { name: "Dell UltraSharp Monitor", tag: "AST-00123", category: "Monitor", assignedTo: "James Wilson", status: "In use", condition: "Good" },
        { name: "iPhone 15 Pro", tag: "AST-00122", category: "Mobile", assignedTo: "Unassigned", status: "Available", condition: "New" },
        { name: "Lenovo ThinkPad X1", tag: "AST-00121", category: "Laptop", assignedTo: "Sophia Taylor", status: "In repair", condition: "Fair" },
        { name: "Logitech MX Keys", tag: "AST-00120", category: "Accessories", assignedTo: "Noah Brown", status: "In use", condition: "Good" },
    ];

    return (
        <main style={styles.page}>
            <div style={styles.header}>
                <div>
                    <p style={styles.eyebrow}>INVENTORY MANAGEMENT</p>
                    <h1 style={styles.title}>Assets</h1>
                    <p style={styles.subtitle}>Track and manage your organization's hardware and equipment.</p>
                </div>
                <button style={styles.primaryButton}>＋ Add asset</button>
            </div>

            <section style={styles.stats}>
                {[["Total assets", "248", "↑ 12% this month", "#4f46e5"], ["In use", "186", "75% of total", "#0f766e"], ["Available", "42", "Ready to assign", "#b45309"], ["Needs attention", "20", "Requires action", "#dc2626"]].map(([label, value, detail, color]) => (
                    <div style={styles.statCard} key={label}>
                        <div style={{ ...styles.statIcon, color, background: `${color}14` }}>●</div>
                        <div><p style={styles.statLabel}>{label}</p><strong style={styles.statValue}>{value}</strong><p style={{ ...styles.statDetail, color }}>{detail}</p></div>
                    </div>
                ))}
            </section>

            <section style={styles.panel}>
                <div style={styles.toolbar}>
                    <div><h2 style={styles.sectionTitle}>All assets</h2><span style={styles.count}>248 assets</span></div>
                    <div style={styles.actions}>
                        <div style={styles.search}>⌕ <input aria-label="Search assets" placeholder="Search assets..." /></div>
                        <select style={styles.select} defaultValue="All categories"><option>All categories</option><option>Laptop</option><option>Monitor</option><option>Mobile</option><option>Accessories</option></select>
                        <button style={styles.exportButton}>⇩ Export</button>
                    </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={styles.table}><thead><tr>{["Asset", "Category", "Assigned to", "Status", "Condition", ""].map(header => <th style={styles.th} key={header}>{header}</th>)}</tr></thead>
                        <tbody>{assets.map(asset => <tr key={asset.tag}><td style={styles.td}><div style={styles.assetName}>{asset.name}</div><div style={styles.assetTag}>{asset.tag}</div></td><td style={styles.td}>{asset.category}</td><td style={styles.td}>{asset.assignedTo}</td><td style={styles.td}><span style={{ ...styles.badge, ...(asset.status === "In use" ? styles.green : asset.status === "Available" ? styles.amber : styles.red) }}>{asset.status}</span></td><td style={styles.td}>{asset.condition}</td><td style={{ ...styles.td, textAlign: "right" }}>•••</td></tr>)}</tbody>
                    </table>
                </div>
                <div style={styles.footer}><span>Showing 1–5 of 248 assets</span><div><button style={styles.pageButton}>‹</button><button style={{ ...styles.pageButton, ...styles.activePage }}>1</button><button style={styles.pageButton}>2</button><button style={styles.pageButton}>3</button><button style={styles.pageButton}>›</button></div></div>
            </section>
        </main>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: { minHeight: "100vh", padding: "36px 42px", background: "#f8fafc", color: "#172033", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 30 },
    eyebrow: { margin: "0 0 8px", color: "#6366f1", fontSize: 11, fontWeight: 700, letterSpacing: 1.2 },
    title: { margin: 0, fontSize: 30, letterSpacing: -0.7 }, subtitle: { margin: "8px 0 0", color: "#64748b", fontSize: 14 },
    primaryButton: { border: 0, borderRadius: 7, background: "#4f46e5", color: "white", padding: "11px 17px", fontWeight: 600, fontSize: 14, cursor: "pointer" },
    stats: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 25 }, statCard: { background: "white", border: "1px solid #e8edf3", borderRadius: 10, padding: 20, display: "flex", gap: 14, alignItems: "center" }, statIcon: { width: 34, height: 34, borderRadius: 8, display: "grid", placeItems: "center", fontSize: 16 }, statLabel: { margin: 0, color: "#64748b", fontSize: 12 }, statValue: { display: "block", fontSize: 24, margin: "3px 0 2px" }, statDetail: { margin: 0, fontSize: 11 },
    panel: { background: "white", border: "1px solid #e8edf3", borderRadius: 10, overflow: "hidden" }, toolbar: { padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #edf1f5" }, sectionTitle: { display: "inline", margin: 0, fontSize: 17 }, count: { marginLeft: 10, color: "#94a3b8", fontSize: 12 }, actions: { display: "flex", gap: 9 }, search: { display: "flex", gap: 8, alignItems: "center", border: "1px solid #dbe2ea", borderRadius: 6, padding: "0 10px", color: "#94a3b8" }, searchInput: {}, input: { border: 0, outline: 0, width: 145, padding: "9px 0", fontSize: 13 }, select: { border: "1px solid #dbe2ea", borderRadius: 6, padding: "0 10px", color: "#475569", background: "white" }, exportButton: { border: "1px solid #dbe2ea", borderRadius: 6, padding: "0 13px", background: "white", color: "#475569" },
    table: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, th: { textAlign: "left", padding: "12px 22px", color: "#94a3b8", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: .5, background: "#fbfcfe" }, td: { padding: "15px 22px", borderTop: "1px solid #f0f2f5", color: "#475569" }, assetName: { color: "#1e293b", fontWeight: 600 }, assetTag: { color: "#94a3b8", fontSize: 11, marginTop: 3 }, badge: { padding: "5px 9px", borderRadius: 12, fontSize: 11, fontWeight: 600 }, green: { color: "#15803d", background: "#dcfce7" }, amber: { color: "#a16207", background: "#fef3c7" }, red: { color: "#b91c1c", background: "#fee2e2" }, footer: { padding: "16px 22px", color: "#94a3b8", fontSize: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }, pageButton: { border: "1px solid #e2e8f0", background: "white", color: "#64748b", width: 30, height: 29, marginLeft: 5, borderRadius: 5 }, activePage: { background: "#eef2ff", color: "#4f46e5", borderColor: "#c7d2fe" }
};