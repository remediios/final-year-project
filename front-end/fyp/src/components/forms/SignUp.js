import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/ContextAPI";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { Margin } from "./Margin";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const SignUp = () => {
  let navigate = useNavigate();
  const { setCurrent } = useContext(AuthContext);
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordCheckRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <FormBoxContainer>
        <FormContainer id="signup" onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" ref={emailRef} />
          <Input type="password" placeholder="Password" ref={passwordRef} />
          <Input
            type="password"
            placeholder="Confirm Password"
            ref={passwordCheckRef}
          />
        </FormContainer>
        <Margin direction="vertical" margin="1.4em" />
        <SubmitButton disabled={loading} type="submit" form="signup">
          Sign-Up
        </SubmitButton>
        <Margin direction="vertical" margin="1em" />
        <MutedLink href="/auth/signin">
          Already have an account?
          <BoldLink href="/auth/signin" onClick={setCurrent("signup")}>
            Sign-In
          </BoldLink>
        </MutedLink>
      </FormBoxContainer>
    </>
  );
};

export default SignUp;
