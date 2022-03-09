import React, { useEffect, useState } from "react";
import { clickEvent } from "../../../functions/global/global";
import { useDash } from "../../../contexts/DashContext";
import { useAuth } from "../../../contexts/AuthContext";
const ContinuousAuthentication = () => {
  const { currentUser } = useAuth();
  const {
    continuousAuthentication,
    setContinuousAuthentication,
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
    setCaData,
  } = useDash();
  const [status, setStatus] = useState("waiting");

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

  useEffect(() => {
    if (continuousAuthentication) {
      setContinuousAuthentication(true);
      console.log("Continuous Authentication: ON");
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (continuousAuthentication) {
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
        setCaData({
          dom_pv: coinPageViews,
          ks_kpt: keysPressed,
          md_bct: totalButtonClicks,
          md_ct: totalClicks,
          md_cvt: coinsAccessed,
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
  }, [status, continuousAuthentication]);

  return <></>;
};

export default ContinuousAuthentication;
