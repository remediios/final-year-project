import React, { useContext, useEffect, useRef } from "react";
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

const ResetPassword = () => {
  const emailRef = useRef();
  const { setCurrent } = useContext(AuthContext);
  useEffect(() => {
    return setCurrent("reset");
  }, []);
  return (
    <FormBoxContainer>
      <Margin direction="vertical" margin={20} />
      <MediumText>Enter your email :</MediumText>
      <FormContainer id="resetPassword">
        <Input type="email" placeholder="Email" ref={emailRef} />
      </FormContainer>
      <Margin direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" form="resetPassword">
        Reset
      </SubmitButton>
      <Margin direction="vertical" margin="1em" />
      <MutedLink href="/auth/signin">
        Already have an account?
        <BoldLink href="/auth/signin">Sign-In</BoldLink>
      </MutedLink>
    </FormBoxContainer>
  );
};

export default ResetPassword;
