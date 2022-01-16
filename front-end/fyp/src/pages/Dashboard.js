import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
//eslint-disable-next-line
import { operatingSystem } from "../functions/bmetrics/userinfo";
import { PageTitle } from "../styles/texts/Global";
import EmailNotVerifiedAlert from "../components/authentication/EmailNotVerifiedAlert";

const Dashboard = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("DASHBOARD", currentUser);
    //console.log("Operating System: ", operatingSystem());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      <EmailNotVerifiedAlert user={currentUser} />
      <PageTitle>Dashboard</PageTitle>
    </>
  );
};

export default Dashboard;
