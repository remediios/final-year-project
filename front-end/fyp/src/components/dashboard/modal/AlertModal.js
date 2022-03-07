import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useDash } from "../../../contexts/DashContext";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid rgba(36, 44, 92)",
  boxShadow: 24,
  p: 4,
};

const AlertModal = ({ open, handleClose, setError }) => {
  const [response, setResponse] = React.useState("");
  const { setContinuousAuthentication } = useDash();
  const { signout } = useAuth();
  let navigate = useNavigate();
  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = async () => {
    if (response === "red") {
      console.log("Correct Answer");
      handleClose();
      setContinuousAuthentication(true);
      // navigate("/dashboard");
    } else {
      console.log("Incorrect Answer");
      try {
        await signout();
        navigate("/auth/signin");
      } catch {
        setError("Failed to log out");
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Security Question
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, fontSize: 14 }}>
            Please answer the following security question according to your
            response on registration.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, fontSize: 14 }}>
            What is your favourite color?
          </Typography>
          <FormControl sx={{ mt: 2, mb: 0, width: 100, height: 50 }}>
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>
              Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={response}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"red"}>Red</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"green"}>Green</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Button
              variant="contained"
              sx={{ mt: 4, height: 30, fontSize: 14 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AlertModal;
