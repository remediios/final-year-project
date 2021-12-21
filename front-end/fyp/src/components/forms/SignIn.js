import React from "react";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { Margin } from "./Margin";

const SignIn = () => {
  return (
    <FormBoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Margin direction="vertical" margin={10} />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Margin direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Sign-In</SubmitButton>
      <Margin direction="vertical" margin="1em" />
      <MutedLink href="/auth/signup">
        Don't have an account? <BoldLink href="/auth/signup">Sign-Up</BoldLink>
      </MutedLink>
    </FormBoxContainer>
  );
};

export default SignIn;
