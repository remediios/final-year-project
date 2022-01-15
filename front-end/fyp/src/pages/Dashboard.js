import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
import { PageTitle } from "../styles/texts/Global";
import { operatingSystem } from "../functions/bmetrics/userinfo";

const Dashboard = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log("CurrentUser", currentUser);
    console.log("Operating System: ", operatingSystem());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      <PageTitle>Dashboard</PageTitle>
    </>
  );
};

export default Dashboard;
