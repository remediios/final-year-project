import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo, UsernameHeader } from "../styles/profile/Global";

const Profile = () => {
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

  useEffect(() => {
    console.log("CurrentUser", currentUser);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      <UserInfo>
        <UsernameHeader>{currentUser.displayName}</UsernameHeader>
      </UserInfo>

      {/* <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser.email}
          <Link to="/" className="btn btn-primary w-100 mt-3 ">
            Update Profile
          </Link>
        </Card.Body>
      </Card> */}
      <button onClick={handleSignOut}>Sign-Out</button>
    </>
  );
};

export default Profile;
