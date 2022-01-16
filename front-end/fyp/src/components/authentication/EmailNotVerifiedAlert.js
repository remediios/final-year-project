import React, { useState } from "react";
import { Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AuthVerifyAlert } from "../../styles/dashboard/AuthRelated";

const EmailNotVerifiedAlert = ({ user }) => {
  const [alert, setAlert] = useState(true);
  return (
    <>
      {!user.emailVerified && (
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
              Please verify your account for full access! Check your email inbox
              for further instructions!
            </AuthVerifyAlert>
          </Collapse>
        </Box>
      )}
    </>
  );
};

export default EmailNotVerifiedAlert;
