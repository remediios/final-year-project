import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDash } from "../../../contexts/DashContext";

const UserBehaviour = () => {
  const [buffer, setBuffer] = useState([]);
  const { userBehaviour, userTraining } = useDash();

  const postData = async () => {
    axios.post('http://localhost:8080/api/users_training', userBehaviour);
  };

  useEffect(() => {
    if (userTraining) {
      buffer.push(userBehaviour);
      console.log("Behaviour", userBehaviour);
      console.log("Buffer updated", buffer);
      postData();
    } else {
      setBuffer([]);
    }
    //eslint-disable-next-line
  }, [userBehaviour]);

  return <></>;
};

export default UserBehaviour;
