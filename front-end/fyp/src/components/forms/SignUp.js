import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { Margin } from "./Margin";

const SignUp = () => {
  return (
    <FormBoxContainer>
      <FormContainer id="signup">
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Margin direction="vertical" margin="1.4em" />
      <SubmitButton type="submit" form="signup">
        Sign-Up
      </SubmitButton>
      <Margin direction="vertical" margin="1em" />
      <MutedLink href="/auth/signin">
        Already have an account?
        <BoldLink href="/auth/signin">Signin</BoldLink>
      </MutedLink>
    </FormBoxContainer>
  );
};

export default SignUp;
