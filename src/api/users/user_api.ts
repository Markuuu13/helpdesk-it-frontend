
export const auth_api = import.meta.env.VITE_AUTH_API || "http://localhost:8000/api/auth/";

interface LoginResponse {
    access: string;
    refresh: string;
}

export default async function LoginAPI(username: string, password: string) {
    username = username.trim();
    password = password.trim();

    if (!username || !password) {
        throw new Error("Username and password are required.");
    }

    try {
        const response = await fetch(`${auth_api}login/`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            if(response.status === 401) {
                console.log("Invalid username or password.");
            } 
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed.");

        }

        const data: LoginResponse = await response.json();

        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        return data;
        
    } catch (error: any) {
        console.error("Login error:", error);
        throw new Error(error.message || "An unexpected error occurred during login.");
    }
}