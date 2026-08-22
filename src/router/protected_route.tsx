import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem("access_token");

    if(!token) {
        return <Navigate to= "/" replace />;
    }

    return children;
}