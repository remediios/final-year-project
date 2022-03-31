import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
import EmailNotVerifiedAlert from "../components/authentication/EmailNotVerifiedAlert";
import DashChart from "../components/dashboard/chart/DashChart";
import { Container } from "../styles/dashboard/Global";
import DashTable from "../components/dashboard/table/DashTable";
import DashInfo from "../components/dashboard/info/DashInfo";
import UserBehaviour from "../components/dashboard/behaviour/UserBehaviour";
import { useDash } from "../contexts/DashContext";
import { clickEvent } from "../functions/global/global";
import UserTrainingAlert from "../components/dashboard/behaviour/UserTrainingAlert";
import ContinuousAuthentication from "../components/dashboard/continuous auth/ContinuousAuthentication";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const {
    userDataCollection,
    setUserDataCollection,
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
    SERVER_SEND_TIME,
    COLLECTION_TIME,
    setTimerDataCollection,
    setContinuousAuthentication,
  } = useDash();
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [cryptoInfo, setCryptoInfo] = useState(false);
  const currency = "GBP";
  const [status, setStatus] = useState("waiting");
  const [collectionStatus, setCollectionStatus] = useState(false);

  useEffect(() => {
    const userSelectedCrypto = localStorage.getItem("selectedCrypto");
    const userSelectedPage = localStorage.getItem("selectedPage");
    if (userSelectedCrypto === undefined || userSelectedCrypto === null) {
      localStorage.setItem("selectedCrypto", selectedCoin);
    } else if (userSelectedPage === undefined || userSelectedPage === null) {
      localStorage.setItem("selectedPage", 1);
    }
    //Change boolean value if CA is intended to be turned off.
    setContinuousAuthentication(false);
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
            return SERVER_SEND_TIME;
          } else {
            return prevCountDown - 1;
          }
        });
      }, 1000);
    }
  };

  const startCollectionTimer = () => {
    let interval = setInterval(() => {
      setTimerDataCollection((prevCountDown) => {
        if (prevCountDown === 0) {
          clearInterval(interval);
          setUserDataCollection(false);
          setCollectionStatus(false);
          setUserBehaviour({
            stringId: currentUser.uid,
            ks_kpt: 0,
            md_ct: 0,
            md_cvt: 0,
            md_bct: 0,
            dom_pv: 0,
            ks_ts: 0,
            user_status: 1,
          });
          console.log("Data Collection: OFF");
          return COLLECTION_TIME;
        } else {
          return prevCountDown - 1;
        }
      });
    }, 1000);
  };

  const handleDataCollection = () => {
    setUserDataCollection(true);
    setCollectionStatus(true);
    startCollectionTimer();
  };

  useEffect(() => {
    if (userDataCollection) {
      setCollectionStatus(true);
      // startCollectionTimer();
      console.log("Data Collection: ON");
    }
  }, [userDataCollection]);

  useEffect(() => {
    if (userDataCollection) {
      setStatus("started");
      if (status === "started") {
        startDataRetrievalTimer();
        clickEvent(setTotalClicks);
      } else if (status === "finished") {
        setUserBehaviour({
          ...userBehaviour,
          stringId: currentUser.uid,
          ks_kpt: keysPressed,
          md_ct: totalClicks,
          md_cvt: coinsAccessed,
          md_bct: totalButtonClicks,
          dom_pv: coinPageViews,
          ks_ts: 0,
          user_status: 1,
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
  }, [status, collectionStatus]);

  return (
    <>
      <Sidebar
        user={currentUser}
        dataCollectionFunction={handleDataCollection}
      />
      <EmailNotVerifiedAlert user={currentUser} />
      <UserTrainingAlert dataCollection={userDataCollection} />
      <UserBehaviour />
      <ContinuousAuthentication />
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
