import styles from '../../css/AddTicketForm.module.css';
type AddTicketFormProps = {
    onClose: () => void;
}
export default function AddTicketForm({ onClose }: AddTicketFormProps) {
    return (
        <div className={styles.overlay}>
            <form className={styles.form}>
                <div className={styles.formHeader}>
                    <h1 className={styles.title}>Create a Ticket</h1>
                    <button type="button" className={styles.closeButton} onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="requester">Requester</label>
                    <input type="text" id="requester" name="requester" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="status">Status</label>
                    <select id="status" name="status" required>
                        <option value="Open">Open</option>
                        <option value="In progress">In progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" name="priority" required>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit" className={styles.submitButton}>
                    Add Ticket
                </button>
            </form>
        </div>
    );
}