import React, { useState, createContext, useContext } from "react";

const DashContext = createContext();

export function useDash() {
  return useContext(DashContext);
}

export function DashProvider({ children }) {
  const [userTraining, setUserTraining] = useState(false);
  const [keysPressed, setKeysPressed] = useState(1);
  const value = { keysPressed, setKeysPressed };

  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}
