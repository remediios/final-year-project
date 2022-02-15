import React, { useState } from "react";
import { Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TrainingModeAlert } from "../../../styles/dashboard/AuthRelated";

const UserTrainingAlert = ({ training }) => {
  const [alert, setAlert] = useState(true);
  return (
    <>
      {training && (
        <Box sx={{ width: "100%" }}>
          <Collapse in={alert}>
            <TrainingModeAlert
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
              TRAINING MODE : ON
            </TrainingModeAlert>
          </Collapse>
        </Box>
      )}
    </>
  );
};

export default UserTrainingAlert;
