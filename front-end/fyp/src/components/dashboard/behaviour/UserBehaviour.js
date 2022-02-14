import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDash } from "../../../contexts/DashContext";

const UserBehaviour = () => {
  const [userData, setUserData] = useState([]);
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
    userData.push(userBehaviour);
    console.log(userData);
    console.log("Behaviour activated");
  }, [userBehaviour]);

  return <></>;
};

export default UserBehaviour;
