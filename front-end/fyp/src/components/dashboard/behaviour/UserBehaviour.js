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
    userDataCollection,
    continuousAuthentication,
    setContinuousAuthentication,
    caData,
  } = useDash();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const postData = async () => {
    await axios
      .post("http://localhost:8080/api/user/data", userBehaviour)
      .catch(function (error) {
        console.log(error);
      });
  };

  const sendToClassifier = async () => {
    await axios
      .post("http://127.0.0.1:5000/analyse", caData)
      .then(function (response) {
        let MLresponse = response.data.response;
        classifierResponses.push(MLresponse);
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
    if (userDataCollection) {
      buffer.push(userBehaviour);
      postData();
    } else if (continuousAuthentication) {
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
