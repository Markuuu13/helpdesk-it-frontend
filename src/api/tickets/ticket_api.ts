export const ticketApi =
  import.meta.env.TICKET_API || "http://localhost:8000/api";

export interface AllTicket {
  ticket_number: string;
  title: string;
  created_by: number;
  created_at: string;
  asset: string;
  status: string;
  priority: string | null;
}

export async function TicketAPI(): Promise<AllTicket[] | null> {
  const token = localStorage.getItem("access_token");

  if (!token) {
    console.error("No access token found. Please log in.");
  }

  try {
    const response = await fetch(`${ticketApi}/tickets/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("Unauthorized access. Please log in again.");
      return null;
    }

    const data = await response.json();
    return data as AllTicket[];
  } catch (error: any) {
    console.error("Ticket API error:", error);
    return null;
  }
}
