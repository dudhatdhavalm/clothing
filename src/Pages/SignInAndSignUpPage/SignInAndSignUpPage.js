import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import { SignInAndSignUpPageContainer } from "./SignInAndSignUpPageStyles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage;
