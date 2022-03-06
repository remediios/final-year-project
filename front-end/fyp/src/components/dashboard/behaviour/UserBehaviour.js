import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDash } from "../../../contexts/DashContext";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const UserBehaviour = () => {
  const [buffer, setBuffer] = useState([]);
  //eslint-disable-next-line
  const [error, setError] = useState("");
  const [classifierResponses, setClassifierResponses] = useState([]);
  let navigate = useNavigate();
  const {
    userBehaviour,
    userTraining,
    continuousAuthentication,
    setContinuousAuthentication,
    caData,
  } = useDash();
  const { signout } = useAuth();

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
      .then(async function (response) {
        classifierResponses.push(response.data.response);
        console.log(classifierResponses);
        if (classifierResponses.includes(0)) {
          setContinuousAuthentication(false);
          setError("");
          try {
            await signout();
            navigate("/auth/signin");
          } catch {
            setError("Failed to log out");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userTraining) {
      buffer.push(userBehaviour);
      console.log("Behaviour", userBehaviour);
      console.log("Buffer updated", buffer);
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

  return <></>;
};

export default UserBehaviour;
