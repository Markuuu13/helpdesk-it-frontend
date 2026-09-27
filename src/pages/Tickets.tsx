import { useState } from "react";
import styles from "../css/Tickets.module.css";
import AddTicketForm from "../components/forms/AddTicketForm";
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

const priorityColor: Record<string, string> = {
    High: "#dc2626",
    Medium: "#64748b",
    Low: "#64748b",
};

export default function Tickets() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Tickets</h1>
                    <p className={styles.subtitle}>Track and manage support requests from your team.</p>
                </div>
                <button
                    className={styles.primaryButton} 
                    onClick={() => setIsFormOpen(true)}>
                    ＋ New ticket
                </button>
            </div>

            <section className={styles.stats}>
                {[["Open tickets", "24", "↑ 3 today", "#2563eb"], ["In progress", "12", "Being worked on", "#d97706"], ["Resolved this week", "38", "↑ 18% vs last week", "#16a34a"]].map(([label, value, detail, color]) => (
                    <div className={styles.statCard} key={label}>
                        <div className={styles.statIcon} style={{ color, background: `${color}14` }}>●</div>
                        <div>
                            <p className={styles.statLabel}>{label}</p>
                            <strong className={styles.statValue}>{value}</strong>
                            <p className={styles.statLabel} style={{ color }}>{detail}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className={styles.panel}>
                <div className={styles.toolbar}>
                    <div>
                        <h2 className={styles.sectionTitle}>All tickets</h2>
                        <span className={styles.count}>{tickets.length} tickets</span>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.search}>⌕ <input aria-label="Search tickets" placeholder="Search tickets..." /></div>
                        <select className={styles.select} defaultValue="All statuses">
                            <option>All statuses</option>
                            <option>Open</option>
                            <option>In progress</option>
                            <option>Resolved</option>
                        </select>
                    </div>
                </div>

                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {["Ticket", "Requester", "Status", "Priority", "Last updated"].map((heading) => (
                                    <th className={styles.th} key={heading}>{heading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td className={styles.td}>
                                        <div className={styles.ticketId}>{ticket.id}</div>
                                        <span className={styles.ticketTitle}>{ticket.title}</span>
                                    </td>
                                    <td className={styles.td}>{ticket.requester}</td>
                                    <td className={styles.td}>
                                        <span
                                            className={styles.badge}
                                            style={{ color: statusColor[ticket.status], background: `${statusColor[ticket.status]}14` }}
                                        >
                                            <i className={styles.dot} style={{ background: statusColor[ticket.status] }} />
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.priority} style={{ color: priorityColor[ticket.priority] }}>
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className={styles.td}>{ticket.updated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.footer}>
                    <span>Showing 1–{tickets.length} of {tickets.length} tickets</span>
                    <div>
                        <button className={styles.pageButton}>‹</button>
                        <button className={`${styles.pageButton} ${styles.activePage}`}>1</button>
                        <button className={styles.pageButton}>›</button>
                    </div>
                </div>
            </section>

            {isFormOpen && (
                <AddTicketForm onClose={() => setIsFormOpen(false)}/>
            )}
        </main>
    );
}