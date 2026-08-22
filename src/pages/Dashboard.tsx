import styles from "../css/Dashboard.module.css";

const recentTickets = [
    { id: "#1048", title: "Unable to access email", requester: "Sarah Johnson", status: "Open" },
    { id: "#1047", title: "Laptop replacement request", requester: "Michael Chen", status: "In progress" },
    { id: "#1046", title: "VPN connection issue", requester: "Emily Davis", status: "Open" },
    { id: "#1045", title: "Software installation", requester: "James Wilson", status: "Resolved" },
];

const statusColor: Record<string, string> = {
    Open: "#2563eb",
    "In progress": "#d97706",
    Resolved: "#16a34a",
};

const activity = [
    { text: "Sarah Johnson opened a new ticket", time: "2 min ago", color: "#2563eb" },
    { text: "Michael Chen's ticket was marked In progress", time: "1 hour ago", color: "#d97706" },
    { text: "James Wilson's ticket was resolved", time: "Yesterday", color: "#16a34a" },
    { text: "New asset assigned to Olivia Martin", time: "Yesterday", color: "#4f46e5" },
];

const team = [
    { name: "Alex Morgan", role: "Support agent", status: "Online", color: "#16a34a" },
    { name: "Priya Nair", role: "Support agent", status: "Online", color: "#16a34a" },
    { name: "Tom Reyes", role: "IT technician", status: "Away", color: "#d97706" },
    { name: "Lena Park", role: "Support lead", status: "Offline", color: "#94a3b8" },
];

export default function Dashboard() {
    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Dashboard</h1>
                    <p className={styles.subtitle}>Welcome back, here's what's happening today.</p>
                </div>
                <button className={styles.primaryButton}>＋ New ticket</button>
            </div>

            <section className={styles.stats}>
                {[["Open tickets", "24", "↑ 3 today", "#2563eb"], ["In progress", "12", "Being worked on", "#d97706"], ["Resolved this week", "38", "↑ 18% vs last week", "#16a34a"], ["Total assets", "248", "20 need attention", "#4f46e5"]].map(([label, value, detail, color]) => (
                    <div className={styles.statCard} key={label}>
                        <div className={styles.statIcon} style={{ color, background: `${color}14` }}>●</div>
                        <div>
                            <p className={styles.statLabel}>{label}</p>
                            <strong className={styles.statValue}>{value}</strong>
                            <p className={styles.statDetail} style={{ color }}>{detail}</p>
                        </div>
                    </div>
                ))}
            </section>

            <div className={styles.grid}>
                <section className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2 className={styles.panelTitle}>Recent tickets</h2>
                        <button className={styles.viewAll}>View all →</button>
                    </div>
                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    {["Ticket", "Requester", "Status"].map((heading) => (
                                        <th className={styles.th} key={heading}>{heading}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {recentTickets.map((ticket) => (
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className={styles.sideStack}>
                    <section className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h2 className={styles.panelTitle}>Recent activity</h2>
                        </div>
                        <ul className={styles.activityList}>
                            {activity.map((item, i) => (
                                <li className={styles.activityItem} key={i}>
                                    <span className={styles.activityDot} style={{ background: item.color }} />
                                    <p className={styles.activityText}>
                                        {item.text}
                                        <span className={styles.activityTime}>{item.time}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h2 className={styles.panelTitle}>Team status</h2>
                        </div>
                        <ul className={styles.teamList}>
                            {team.map((member) => (
                                <li className={styles.teamItem} key={member.name}>
                                    <span className={styles.teamName}>
                                        {member.name}
                                        <span className={styles.teamRole}>{member.role}</span>
                                    </span>
                                    <span
                                        className={styles.statusPill}
                                        style={{ color: member.color, background: `${member.color}14` }}
                                    >
                                        {member.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}