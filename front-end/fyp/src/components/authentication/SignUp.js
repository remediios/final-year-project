import React, { useContext, useEffect, useRef, useState } from "react";
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
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const [error, setError] = useState("");
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState();

  useEffect(() => {
    return setCurrent("signup");
    //eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordCheckRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/step1");
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setError("Please enter a valid email");
          break;
        case "auth/missing-email":
          setError("Please enter a email");
          break;
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/weak-password":
          setError("Weak password (at least 6 characters)");
          break;
        default:
          setError("Failed to create an account");
      }
    }
    setLoading(false);
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <FormBoxContainer>
        <FormContainer id="signup" onSubmit={handleSubmit}>
          <Input
            value={val}
            onChange={(e) => {
              setVal(e.target.value.trim());
            }}
            onPaste={(e) => {
              setVal(e.target.value.trim());
            }}
            onCopy={(e) => {
              setVal(e.target.value.trim());
            }}
            type="text"
            placeholder="Username"
            ref={usernameRef}
            required
          />
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
          <BoldLink href="/auth/signin">Sign-In</BoldLink>
        </MutedLink>
        {error && <Margin direction="vertical" margin="2em" />}
      </FormBoxContainer>
    </>
  );
};

export default SignUp;
