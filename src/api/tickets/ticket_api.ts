
export const ticketApi = import.meta.env.TICKET_API || "http://localhost:8000/api";

export async function TicketAPI() {
    const token = localStorage.getItem("access_token");

    if(!token) {
        console.error("No access token found. Please log in.");
    }

    try{

        const response = await fetch(`${ticketApi}/tickets/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            if(response.status === 401) {
                console.log("Unauthorized access. Please log in again.");
            }
        }

        const data = await response.json();
        return data;
        

    } catch (error: any) {
        console.error("Ticket API error:", error);
    }
}