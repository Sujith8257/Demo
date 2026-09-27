import { API_BASE_URL } from "../config/api";

export async function submitAuth(path, payload) {
  return requestAuth(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function getAuthenticatedUser(token) {
  return requestAuth("/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

async function requestAuth(path, options) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/users${path}`, {
      ...options,
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    if (error.name === "TimeoutError") {
      throw new Error("The server took too long to respond. Please try again.");
    }
    throw new Error("Cannot reach the server. Please try again shortly.");
  }

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    const errorMessages = {
      401: "Invalid email or password.",
      409: "Email already registered. Please sign in.",
    };
    const fallback = errorMessages[response.status]
      ?? "Unable to complete your request. Please try again.";
    throw new Error(typeof result?.message === "string" ? result.message : fallback);
  }

  return result.data;
}