import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Card, Button } from "react-bootstrap";
import { PageTitle } from "../styles/texts/Global";

const Profile = () => {
  return (
    <>
      <Sidebar />
      <PageTitle>Profile</PageTitle>
    </>
  );
};

export default Profile;
