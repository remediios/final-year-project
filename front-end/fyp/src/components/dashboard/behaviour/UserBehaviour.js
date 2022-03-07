import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDash } from "../../../contexts/DashContext";
import AlertModal from "../modal/AlertModal";

const UserBehaviour = () => {
  const [buffer, setBuffer] = useState([]);
  //eslint-disable-next-line
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [classifierResponses, setClassifierResponses] = useState([]);
  const {
    userBehaviour,
    userTraining,
    continuousAuthentication,
    setContinuousAuthentication,
    caData,
  } = useDash();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const postData = async () => {
    axios
      .post("http://localhost:8080/api/users_training", userBehaviour)
      .catch(function (error) {
        console.log(error);
      });
  };

  const sendToClassifier = async () => {
    axios
      .post("http://127.0.0.1:5000/analyse", caData)
      .then(function (response) {
        let MLresponse = response.data.response;
        classifierResponses.push(MLresponse);
        // console.log(classifierResponses);
        if (MLresponse === 0) {
          setContinuousAuthentication(false);
          setError("");
          handleOpen();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userTraining) {
      buffer.push(userBehaviour);
      // console.log("Behaviour", userBehaviour);
      // console.log("Buffer updated", buffer);
      postData();
    } else if (continuousAuthentication) {
      // console.log("Behaviour", userBehaviour);
      // console.log("CA Data", caData);
      sendToClassifier();
    } else {
      setBuffer([]);
      setClassifierResponses([]);
    }
    //eslint-disable-next-line
  }, [userBehaviour]);

  return (
    <>
      {open ? (
        <AlertModal handleClose={handleClose} open={open} setError={setError} />
      ) : (
        ""
      )}
    </>
  );
};

export default UserBehaviour;
