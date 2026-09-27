export const auth_api = import.meta.env.VITE_AUTH_API || "http://localhost:8000/api/auth/";

interface LoginResponse {
    access: string;
    refresh: string;
}

export interface UserProfile {
    first_name: string;
    last_name: string;
    name: string;
    email: string;
    role: string;
    is_active: boolean;
}

// Login API
export async function LoginAPI(username: string, password: string) {
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

// User Profile
export async function UserProfileAPI(){
    const token = localStorage.getItem("access_token");

    if (!token) {
        console.error("No access token found. Please log in.");
        throw new Error("No access token found. Please log in.");
    }

    try{
        const response = await fetch(`${auth_api}profile/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if(response.status === 401) {
                console.log("Unauthorized access. Please log in again.");
            }
            const errorData = await response.json();
            console.error("User profile error:", errorData);
            throw new Error(errorData.message || "Failed to fetch user profile.");
        }

        const data = await response.json();

        return data as UserProfile;
    } catch(error: any) {
        console.error("User profile error:", error);
        throw new Error(error.message || "An unexpected error occurred while fetching user profile.");
    }
}