import React, { useState, createContext, useContext } from "react";

const DashContext = createContext();

export function useDash() {
  return useContext(DashContext);
}

export function DashProvider({ children }) {
  const [userTraining, setUserTraining] = useState(false);
  const [timer, setTimer] = useState(10);
  const [keysPressed, setKeysPressed] = useState(1);
  const [totalClicks, setTotalClicks] = useState(0);
  const value = {
    totalClicks,
    setTotalClicks,
    userTraining,
    setUserTraining,
    keysPressed,
    setKeysPressed,
    timer,
    setTimer,
  };

  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}
