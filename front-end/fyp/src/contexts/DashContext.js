import React, { useState, createContext, useContext } from "react";

const DashContext = createContext();

export function useDash() {
  return useContext(DashContext);
}

export function DashProvider({ children }) {
  const [userTraining, setUserTraining] = useState(true);
  const [timer, setTimer] = useState(10);
  const [userBehaviour, setUserBehaviour] = useState({});
  const [keysPressed, setKeysPressed] = useState(1);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalButtonClicks, setTotalButtonClicks] = useState(0);
  const [coinPageViews, setCoinPageViews] = useState(0);
  const [coinsVisited, setCoinsVisited] = useState(0);
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
    coinsVisited,
    setCoinsVisited,
  };

  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}
