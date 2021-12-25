import React, { useContext, useEffect, useRef, useState } from "react";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MediumText,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { AuthContext } from "../../contexts/ContextAPI";
import { Margin } from "./Margin";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "@mui/material";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const { setCurrent } = useContext(AuthContext);
  const emailRef = useRef();
  const [error, setError] = useState("");
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    return setCurrent("reset");
    //eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
      document.getElementById("resetPassword").reset();
      document.getElementById("btn").disabled = true;
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setError("Please enter a valid email");
          break;
        case "auth/missing-email":
          setError("Please enter a email");
          break;
        case "auth/user-not-found":
          setError("Please sign-up, account does not exist!");
          break;
        default:
          setError("Failed to reset password");
      }
    }
    setLoading(false);
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="info">{message}</Alert>}
      <FormBoxContainer>
        <Margin direction="vertical" margin={10} />
        <MediumText>Enter your email :</MediumText>
        <FormContainer id="resetPassword" onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" ref={emailRef} />
        </FormContainer>
        <Margin direction="vertical" margin="1.6em" />
        <SubmitButton id="btn" type="submit" form="resetPassword">
          Reset
        </SubmitButton>
        <Margin direction="vertical" margin="1em" />
        <MutedLink href="/auth/signin">
          Already have an account?
          <BoldLink href="/auth/signin">Sign-In</BoldLink>
        </MutedLink>
      </FormBoxContainer>
    </>
  );
};

export default ResetPassword;
