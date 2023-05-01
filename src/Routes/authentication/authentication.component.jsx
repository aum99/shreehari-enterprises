import SignUp from "../../Components/forms/sign-up.component";

import { Container } from "./authentication.styles";
import { Fragment } from "react";

const Auth = () => {
  return (
    <Fragment>
      <Container>
        <SignUp />
      </Container>
    </Fragment>
  );
};

export default Auth;
