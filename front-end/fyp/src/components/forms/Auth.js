import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  BackDrop,
  BoxContainer,
  TopContainer,
  HeaderContainer,
  HeaderText,
  SmallText,
  InnerContainer,
} from "../../styles/forms/Global";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthContext } from "../../context/AuthContext";

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Auth = () => {
  const [isExpanded, setExpanded] = useState(false);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <SmallText>Please sign-in to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <Routes>
          <Route path="/*" element={<SignIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <p onClick={playExpandingAnimation}>Click</p>
      </InnerContainer>
    </BoxContainer>
  );
};

export default Auth;
