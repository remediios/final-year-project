import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Card, Button } from "react-bootstrap";
import { PageTitle } from "../styles/texts/Global";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser, signout } = useAuth();
  return (
    <>
      <Sidebar user={currentUser} />
      <PageTitle>Profile</PageTitle>
    </>
  );
};

export default Profile;
