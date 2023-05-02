import { Fragment } from "react";

import SignUp from "../../Components/forms/sign-up.component";
import SignIn from "../../Components/forms/sign-in.component";

import { Container } from "./authentication.styles";

const Auth = () => {
  return (
    <Fragment>
      <Container>
        <SignUp />
        <SignIn />
      </Container>
    </Fragment>
  );
};

export default Auth;
