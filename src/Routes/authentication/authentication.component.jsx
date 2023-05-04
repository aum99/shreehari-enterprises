import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import SignUp from "../../Components/forms/sign-up.component";
import SignIn from "../../Components/forms/sign-in.component";

import { Container, WelcomeHeader } from "./authentication.styles";

const Auth = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Fragment>
      <Container>
        {!currentUser ? (
          <Fragment>
            <SignUp />
            <SignIn />
          </Fragment>
        ) : (
          <WelcomeHeader>Welcome {currentUser.displayName} !</WelcomeHeader>
        )}
      </Container>
    </Fragment>
  );
};

export default Auth;
