import { useEffect, useState } from "react";
import styles from "../css/Tickets.module.css";
import AddTicketForm from "../components/forms/AddTicketForm";
import { TicketAPI, type AllTicket } from "../api/tickets/ticket_api";

// const tickets = [
//     { id: "#1048", title: "Unable to access email", requester: "Sarah Johnson", status: "Open", priority: "High", updated: "2 min ago" },
//     { id: "#1047", title: "Laptop replacement request", requester: "Michael Chen", status: "In progress", priority: "Medium", updated: "1 hour ago" },
//     { id: "#1046", title: "VPN connection issue", requester: "Emily Davis", status: "Open", priority: "Low", updated: "3 hours ago" },
//     { id: "#1045", title: "Software installation", requester: "James Wilson", status: "Resolved", priority: "Medium", updated: "Yesterday" },
// ];

const statusColor: Record<string, string> = {
    open: "#2563eb",
    "in_progress": "#d97706",
    resolved: "#16a34a",
    closed: "#94a3b8",
};

const priorityColor: Record<string, string> = {
    high: "#dc2626",
    medium: "#64748b",
    low: "#64748b",
};

export default function Tickets() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [tickets, setTickets] = useState<AllTicket[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState("all");

    const filteredTickets =
        status == "all"
            ? tickets
            : tickets.filter((t) => t.status.toLowerCase() == status);

    useEffect(() => {
        TicketAPI()
            .then((data => {
                if (data === null) setError("Failed to load tickets.");
                else setTickets(data);
            }))
            .catch((err) => {
                console.error("Error fetching tickets:", err);
                setError("Failed to load tickets.");
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <main className={styles.page}>Loading...</main>;
    if (error) return <main className={styles.page}>{error}</main>;

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
                        <span className={styles.count}>{filteredTickets.length} tickets</span>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.search}>⌕ <input aria-label="Search tickets" placeholder="Search tickets..." /></div>
                        <select className={styles.select}
                            value={status}
                            onChange = {(e) => setStatus(e.target.value)}>
                            <option value="all">All statuses</option>
                            <option value="open">Open</option>
                            <option value="in_progress">In progress</option>
                            <option value="resolved">Resolved</option>
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
                            {filteredTickets.map((ticket) => (
                                <tr key={ticket.ticket_number}>
                                    <td className={styles.td}>
                                        <div className={styles.ticketId}>{ticket.ticket_number}</div>
                                        <span className={styles.ticketTitle}>{ticket.title}</span>
                                    </td>
                                    <td className={styles.td}>{ticket.created_by}</td>
                                    <td className={styles.td}>
                                        <span
                                            className={styles.badge}
                                            style={{ color: statusColor[ticket.status], background: `${statusColor[ticket.status]}14` }}
                                        >
                                            <i className={styles.dot} style={{ background: statusColor[ticket.status] }} />
                                            {ticket.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className={styles.td}>
                                        <span className={styles.priority} style={{ color: priorityColor[ticket.priority ? ticket.priority.toLowerCase() : ""] }}>
                                            {ticket.priority?.toUpperCase() || "No Priority Level"}
                                        </span>
                                    </td>
                                    <td className={styles.td}>{ticket.created_at}</td>
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
                <AddTicketForm onClose={() => setIsFormOpen(false)} />
            )}
        </main>
    );
}