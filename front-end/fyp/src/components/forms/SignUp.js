import React, { useContext } from "react";
import { AuthContext } from "../../context/ContextAPI";
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../../styles/forms/Global";
import { Margin } from "./Margin";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { current, setCurrent } = useContext(AuthContext);
  console.log(current);
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    return;
  };

  return (
    <FormBoxContainer>
      <FormContainer id="signup" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <Input
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          placeholder="Confirm Password"
          {...register("passwordCheck", { required: true })}
        />
      </FormContainer>
      <Margin direction="vertical" margin="1.4em" />
      <SubmitButton type="submit" form="signup">
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
  );
};

export default SignUp;
