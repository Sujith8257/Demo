import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAuthenticatedUser } from "./api";

export default function AuthRoute(props) {
  const location = useLocation();
  return <SessionGate key={location.key} {...props} />;
}

function SessionGate({ role, publicOnly = false }) {
  const [session, setSession] = useState({ checking: true, user: null });

  useEffect(() => {
    let active = true;

    async function verifySession() {
      try {
        const stored = JSON.parse(sessionStorage.getItem("amihive_auth"));
        if (typeof stored?.token !== "string" || !stored.token) {
          throw new Error("Missing session");
        }
        const user = await getAuthenticatedUser(stored.token);
        if (!active) return;
        if (!user || !["USER", "ADMIN"].includes(user.role) || user.isBlocked || user.isDeleted) {
          throw new Error("Account unavailable");
        }
        setSession({ checking: false, user });
      } catch {
        if (!active) return;
        sessionStorage.removeItem("amihive_auth");
        setSession({ checking: false, user: null });
      }
    }

    verifySession();
    return () => { active = false; };
  }, []);

  if (session.checking) return <output aria-live="polite">Checking session...</output>;
  if (!session.user) return publicOnly ? <Outlet /> : <Navigate to="/login" replace />;

  const destination = session.user.role === "ADMIN" ? "/dashboard" : "/home";
  if (publicOnly || session.user.role !== role) return <Navigate to={destination} replace />;
  return <Outlet />;
}