import React from "react";
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

const Auth = () => {
  return (
    <>
      <BoxContainer>
        <TopContainer>
          <BackDrop />
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
        </InnerContainer>
      </BoxContainer>
    </>
  );
};

export default Auth;
