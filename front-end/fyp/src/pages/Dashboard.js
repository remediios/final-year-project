import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
//eslint-disable-next-line
import { operatingSystem } from "../functions/bmetrics/userinfo";
import { Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PageTitle } from "../styles/texts/Global";
import { AuthVerifyAlert } from "../styles/dashboard/AuthRelated";
import IdleTimer from "../classes/IdleTimer";

const Dashboard = () => {
  const { currentUser, signout } = useAuth();
  const [alert, setAlert] = useState(true);
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    console.log("DASHBOARD", currentUser);
    //console.log("Operating System: ", operatingSystem());
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 10,
      onTimeout: async () => {
        setIsTimeout(true);
        await signout();
      },
      onExpired: () => {
        setIsTimeout(true);
        console.log("LOGOUT ACTIVATED");
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      {!currentUser.emailVerified && (
        <Box sx={{ width: "100%" }}>
          <Collapse in={alert}>
            <AuthVerifyAlert
              severity="info"
              action={
                <IconButton
                  size="small"
                  onClick={() => {
                    setAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Please verify your account! Check your email inbox for further
              instructions!
            </AuthVerifyAlert>
          </Collapse>
        </Box>
      )}
      <div>{isTimeout ? "Timeout" : "Active"}</div>
      <PageTitle>Dashboard</PageTitle>
    </>
  );
};

export default Dashboard;

// <AuthVerifyAlert
//   severity="info"
//   size="small"
//   onClose={() => {
//     console.log("test");
//   }}
// >
//   Please verify your account! Check your inbox for further
//   instructions
// </AuthVerifyAlert>;
