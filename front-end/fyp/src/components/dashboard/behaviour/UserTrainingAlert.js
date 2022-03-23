import React, { useState } from "react";
import { Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DataCollectionModeAlert } from "../../../styles/dashboard/AuthRelated";

const UserTrainingAlert = ({ dataCollection }) => {
  const [alert, setAlert] = useState(true);
  return (
    <>
      {dataCollection && (
        <Box sx={{ width: "100%" }}>
          <Collapse in={alert}>
            <DataCollectionModeAlert
              severity="error"
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
              DATA COLLECTION MODE
            </DataCollectionModeAlert>
          </Collapse>
        </Box>
      )}
    </>
  );
};

export default UserTrainingAlert;
