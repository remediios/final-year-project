import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
//eslint-disable-next-line
import { operatingSystem } from "../functions/bmetrics/userinfo";
import EmailNotVerifiedAlert from "../components/authentication/EmailNotVerifiedAlert";
import DashChart from "../components/dashboard/chart/DashChart";
import { Container } from "../styles/dashboard/Global";
import DashTable from "../components/dashboard/table/DashTable";
import DashInfo from "../components/dashboard/info/DashInfo";
import UserBehaviour from "../components/dashboard/behaviour/UserBehaviour";
import { useDash } from "../contexts/DashContext";
import { clickEvent } from "../functions/global/global";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const {
    totalClicks,
    setTotalClicks,
    timer,
    setKeysPressed,
    userTraining,
    setTotalButtonClicks,
  } = useDash();
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [cryptoInfo, setCryptoInfo] = useState(false);
  const currency = "GBP";

  useEffect(() => {
    console.log("DASHBOARD", currentUser);
    //console.log("Operating System: ", operatingSystem());
    const userSelectedCrypto = localStorage.getItem("selectedCrypto");
    const userSelectedPage = localStorage.getItem("selectedPage");
    if (userSelectedCrypto === undefined || userSelectedCrypto === null) {
      localStorage.setItem("selectedCrypto", selectedCoin);
    } else if (userSelectedPage === undefined || userSelectedPage === null) {
      localStorage.setItem("selectedPage", 1);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userTraining) {
      if (timer > 0) clickEvent(setTotalClicks, totalClicks);
      else {
        setKeysPressed(0);
        setTotalClicks(0);
        setTotalButtonClicks(0);
      }
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      <EmailNotVerifiedAlert user={currentUser} />
      <UserBehaviour />
      <Container id="dashContainer">
        <DashTable
          currency={currency}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
        />
        {cryptoInfo ? (
          <DashInfo
            currency={currency}
            selectedCoin={selectedCoin}
            setCryptoInfo={setCryptoInfo}
          />
        ) : (
          <DashChart
            currency={currency}
            selectedCoin={selectedCoin}
            setCryptoInfo={setCryptoInfo}
          />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
