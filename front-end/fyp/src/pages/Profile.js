import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { UserInfo, UsernameHeader } from "../styles/profile/Global";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("PROFILE", currentUser);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {!currentUser.emailVerified && <Navigate to="/dashboard" />}
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
    </>
  );
};

export default Profile;
