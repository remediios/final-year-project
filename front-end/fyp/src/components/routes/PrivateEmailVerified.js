import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateEmailVerified({ children }) {
  const { currentUser } = useAuth();
  return currentUser.emailVerified ? children : <Navigate to="/dashboard" />;
}
