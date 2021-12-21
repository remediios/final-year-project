import React, { useContext } from "react";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { Margin } from "./Margin";
import { AuthContext } from "../../context/ContextAPI";

const SignIn = () => {
  const { switchToSignup } = useContext(AuthContext);
  return (
    <FormBoxContainer>
      <FormContainer id="signin">
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </FormContainer>
      <Margin direction="vertical" margin={10} />
      <MutedLink>Forgot your password?</MutedLink>
      <Margin direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" form="signin">
        Sign-In
      </SubmitButton>
      <Margin direction="vertical" margin="1em" />
      <MutedLink>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup}>Sign-Up</BoldLink>
      </MutedLink>
    </FormBoxContainer>
  );
};

export default SignIn;
