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
    userTraining,
    timer,
    setKeysPressed,
    setTotalClicks,
    setTotalButtonClicks,
    setCoinPageViews,
    setCoinsAccessed,
    setAccessedCoins,
    keysPressed,
    totalClicks,
    totalButtonClicks,
    coinPageViews,
    coinsAccessed,
    userBehaviour,
    setUserBehaviour,
    setTimer,
  } = useDash();
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [cryptoInfo, setCryptoInfo] = useState(false);
  const currency = "GBP";
  const [status, setStatus] = useState("waiting");

  useEffect(() => {
    // console.log("DASHBOARD", currentUser);
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

  const startDataRetrievalTimer = () => {
    if (status === "started") {
      setStatus("started");
      let interval = setInterval(() => {
        setTimer((prevCountDown) => {
          if (prevCountDown === 0) {
            clearInterval(interval);
            setStatus("finished");
            return 10;
          } else {
            return prevCountDown - 1;
          }
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (userTraining) {
      setStatus("started");
      if (status === "started") {
        clickEvent(setTotalClicks);
        startDataRetrievalTimer();
      } else if (status === "finished") {
        setUserBehaviour({
          ...userBehaviour,
          ks_kpt: keysPressed,
          md_ct: totalClicks,
          md_cvt: coinsAccessed,
          md_bct: totalButtonClicks,
          dom_pv: coinPageViews,
          ks_ts: 0,
          user_status: 0,
        });
        setKeysPressed(0);
        setTotalClicks(0);
        setTotalButtonClicks(0);
        setCoinPageViews(0);
        setCoinsAccessed(0);
        setAccessedCoins([]);
      }
    }
    //eslint-disable-next-line
  }, [status]);

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
