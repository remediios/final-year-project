import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useDash } from "../../../contexts/DashContext";
import { questions } from "../../../config/security/questions";
import { getRandomInt } from "../../../functions/global/global";

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
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState(0);
  const { setContinuousAuthentication } = useDash();
  const { signout } = useAuth();
  let navigate = useNavigate();
  const responseRef = useRef();

  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (response.length === 0) {
      return;
    }

    if (response === questions[question].answer) {
      handleClose();
      setContinuousAuthentication(true);
    } else {
      try {
        await signout();
        navigate("/auth/signin");
      } catch {
        setError("Failed to log out");
      }
    }
  };

  useEffect(() => {
    let min = 0;
    let max = questions.length - 1;
    const number = getRandomInt(min, max);
    setQuestion(number);
  }, []);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Security Question
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, fontSize: 14 }}>
            Please answer the following security question according to your
            response on registration.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, fontSize: 14 }}>
            {questions[question].name}
          </Typography>
          <TextField
            id="standard-basic"
            label="Answer"
            variant="standard"
            sx={{ width: 150, mt: 1 }}
            ref={responseRef}
            onChange={handleChange}
          />
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
