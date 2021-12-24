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
import ResetPassword from "./ResetPassword";
import { AuthContext } from "../../contexts/ContextAPI";

const Auth = () => {
  const [current, setCurrent] = useState("signin");
  const contextValues = { current, setCurrent };

  console.log(current);
  return (
    <AuthContext.Provider value={contextValues}>
      <BoxContainer>
        <TopContainer>
          <BackDrop />
          {current === "signin" && (
            <HeaderContainer>
              <HeaderText>LOGIN</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {current === "signup" && (
            <HeaderContainer>
              <HeaderText>SIGN-UP</HeaderText>
              <SmallText>Create an account to continue!</SmallText>
            </HeaderContainer>
          )}
          {current === "reset" && (
            <HeaderContainer>
              <HeaderText>PASSWORD</HeaderText>
              <HeaderText>RESET</HeaderText>
              <SmallText style={{ marginBottom: "0px" }}>
                Reset your password in one click!
              </SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          <Routes>
            <Route path="/*" element={<SignIn />} />
            <Route path="signin/*" element={<SignIn />} />
            <Route path="signup/*" element={<SignUp />} />
            <Route path="reset/*" element={<ResetPassword />} />
          </Routes>
        </InnerContainer>
      </BoxContainer>
    </AuthContext.Provider>
  );
};

export default Auth;
