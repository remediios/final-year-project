import React, { useContext, useRef, useState, useEffect } from "react";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { Margin } from "./Margin";
import { AuthContext } from "../../contexts/ContextAPI";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
  const { setCurrent } = useContext(AuthContext);
  const { signin } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return setCurrent("signin");
    //eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <FormBoxContainer>
        <FormContainer id="signin" onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" ref={emailRef} />
          <Input type="password" placeholder="Password" ref={passwordRef} />
        </FormContainer>
        <Margin direction="vertical" margin={10} />
        <MutedLink href="/auth/reset">Forgot your password?</MutedLink>
        <Margin direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" form="signin">
          Sign-In
        </SubmitButton>
        <Margin direction="vertical" margin="1em" />
        <MutedLink href="/auth/signup">
          Don't have an account?
          <BoldLink href="/auth/signup">Sign-Up</BoldLink>
        </MutedLink>
      </FormBoxContainer>
    </>
  );
};

export default SignIn;
