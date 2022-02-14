import React, { useState, createContext, useContext } from "react";

const DashContext = createContext();

export function useDash() {
  return useContext(DashContext);
}

export function DashProvider({ children }) {
  const [userTraining, setUserTraining] = useState(true);
  const [timer, setTimer] = useState(10);
  const [userBehaviour, setUserBehaviour] = useState({
    ks_kpt: 0,
    md_ct: 0,
    md_cvt: 0,
    md_bct: 0,
    dom_pv: 0,
    ks_ts: 0,
    user_status: 0,
  });
  const [keysPressed, setKeysPressed] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalButtonClicks, setTotalButtonClicks] = useState(0);
  const [coinPageViews, setCoinPageViews] = useState(0);
  const [accessedCoins, setAccessedCoins] = useState([]);
  const [coinsAccessed, setCoinsAccessed] = useState(0);

  const value = {
    totalClicks,
    setTotalClicks,
    userTraining,
    setUserTraining,
    keysPressed,
    setKeysPressed,
    timer,
    setTimer,
    totalButtonClicks,
    setTotalButtonClicks,
    userBehaviour,
    setUserBehaviour,
    coinPageViews,
    setCoinPageViews,
    coinsAccessed,
    setCoinsAccessed,
    accessedCoins,
    setAccessedCoins,
  };

  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}
