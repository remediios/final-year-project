import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
//eslint-disable-next-line
import { operatingSystem } from "../functions/bmetrics/userinfo";
import EmailNotVerifiedAlert from "../components/authentication/EmailNotVerifiedAlert";
import DashChart from "../components/dashboard/chart/DashChart";
import { Container } from "../styles/dashboard/Global";
import DashTable from "../components/dashboard/table/DashTable";

const Dashboard = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    //console.log("DASHBOARD", currentUser);
    //console.log("Operating System: ", operatingSystem());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      <EmailNotVerifiedAlert user={currentUser} />
      <Container>
        <DashTable />
        <DashChart />
      </Container>
    </>
  );
};

export default Dashboard;
