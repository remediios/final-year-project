import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const { currentUser, signout } = useAuth();
  const [error, setError] = useState("");

  const handleSignOut = async () => {
    setError("");

    try {
      await signout();
      navigate("/auth/signin");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/" className="btn btn-primary w-100 mt-3 ">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleSignOut}>
          Sign-Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
