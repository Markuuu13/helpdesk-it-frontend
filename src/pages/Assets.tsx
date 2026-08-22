import styles from "../css/Assets.module.css";
export default function Assets() {
    const assets = [
        { name: "MacBook Pro 14-inch", tag: "AST-00124", category: "Laptop", assignedTo: "Olivia Martin", status: "In use", condition: "Good" },
        { name: "Dell UltraSharp Monitor", tag: "AST-00123", category: "Monitor", assignedTo: "James Wilson", status: "In use", condition: "Good" },
        { name: "iPhone 15 Pro", tag: "AST-00122", category: "Mobile", assignedTo: "Unassigned", status: "Available", condition: "New" },
        { name: "Lenovo ThinkPad X1", tag: "AST-00121", category: "Laptop", assignedTo: "Sophia Taylor", status: "In repair", condition: "Fair" },
        { name: "Logitech MX Keys", tag: "AST-00120", category: "Accessories", assignedTo: "Noah Brown", status: "In use", condition: "Good" },
    ];

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Assets</h1>
                    <p className={styles.subtitle}>Track and manage your organization's hardware and equipment.</p>
                </div>
                <button className={styles.primaryButton}>＋ Add asset</button>
            </div>

            <section className={styles.stats}>
                {[["Total assets", "248", "↑ 12% this month", "#4f46e5"], ["In use", "186", "75% of total", "#0f766e"], ["Available", "42", "Ready to assign", "#b45309"], ["Needs attention", "20", "Requires action", "#dc2626"]].map(([label, value, detail, color]) => (
                    <div className={styles.statCard} key={label}>
                        <div className={styles.statIcon} style={{ color, background: `${color}14` }}>●</div>
                        <div>
                            <p className={styles.statLabel}>{label}</p>
                            <strong className={styles.statValue}>{value}</strong>
                            <p className={styles.statDetail} style={{ color }}>
                                {detail}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <section className={styles.panel}>
                <div className={styles.toolbar}>
                    <div>
                        <h2 className={styles.sectionTitle}>All assets</h2>
                        <span className={styles.count}>248 assets</span>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.search}>⌕ <input aria-label="Search assets" placeholder="Search assets..." /></div>
                        <select className={styles.select} defaultValue="All categories">
                            <option>All categories</option>
                            <option>Laptop</option>
                            <option>Monitor</option>
                            <option>Mobile</option>
                            <option>Accessories</option>
                        </select>
                        <button className={styles.exportButton}>⇩ Export</button>
                    </div>
                </div>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {["Asset", "Category", "Assigned to", "Status", "Condition", ""].map((header) => (
                                    <th className={styles.th} key={header}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {assets.map((asset) => (
                                <tr key={asset.tag}>
                                    <td className={styles.td}>
                                        <div className={styles.assetName}>{asset.name}</div>
                                        <div className={styles.assetTag}>{asset.tag}</div>
                                    </td>
                                    <td className={styles.td}>{asset.category}</td>
                                    <td className={styles.td}>{asset.assignedTo}</td>
                                    <td className={styles.td}>
                                        <span className={`${styles.badge} ${asset.status === "In use" ? styles.green : asset.status === "Available" ? styles.amber : styles.red}`}>
                                            {asset.status}
                                        </span>
                                    </td>
                                    <td className={styles.td}>{asset.condition}</td>
                                    <td className={styles.td} style={{ textAlign: "right" }}>
                                        •••
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.footer}>
                    <span>Showing 1–5 of 248 assets</span>
                    <div>
                        <button className={styles.pageButton}>‹</button>
                        <button className={`${styles.pageButton} ${styles.activePage}`}>1</button>
                        <button className={styles.pageButton}>2</button>
                        <button className={styles.pageButton}>3</button>
                        <button className={styles.pageButton}>›</button>
                    </div>
                </div>
            </section>
        </main>
    );
}