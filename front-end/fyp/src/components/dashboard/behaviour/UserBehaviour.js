import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDash } from "../../../contexts/DashContext";

const UserBehaviour = () => {
  const [buffer, setBuffer] = useState([]);
  const { userBehaviour } = useDash();
  // const fetchTest = async () => {
  //   const { data } = await axios.get("http://localhost:8080/api/user/metrics");
  //   setUserData(data);
  //   console.log(userData);
  // };

  // useEffect(() => {
  //   fetchTest();
  //   //eslint-disable-next-line
  // }, []);

  useEffect(() => {
    buffer.push(userBehaviour);
    console.log("Buffer updated", buffer);
  }, [userBehaviour]);

  return <></>;
};

export default UserBehaviour;
