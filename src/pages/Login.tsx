import { useState } from "react";
import LoginAPI from "../api/users/user_api";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Username and password are required.");
      return;
    }
    setError("");
    setLoading(true);

    console.log("Attempting login with:", { username, password });
    try {
      await LoginAPI(username, password)
      navigate("/app/dashboard");

    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.message || "An unexpected error occurred during login.");

    } finally {
      setLoading(false);
    }
  }
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-6 rounded shadow w-96">

          <h1 className="text-xl font-bold mb-4">IT Help Desk Login</h1>

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="w-full border p-2 mb-4 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            onClick={() => handleLogin(username, password)}
          >
            Login
          </button>

        </div>

      </div>
    );
  }
