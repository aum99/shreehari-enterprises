import { useState } from "react";
import { useDispatch } from "react-redux";

import { Container, Header, Description, Form, FormInput } from "./form.styles";

import Button from "../button/button.component";

import { signInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInStart(email, password));
      resetFormFields();
    } catch (error) {
      alert("Failed to sign in :( ", error);
      return;
    }
  };
  return (
    <Container>
      <Header>I already have an account</Header>
      <Description>Sign in with your email and password</Description>
      <Form onSubmit={HandleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={HandleChange}
          placeholder="Enter your email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={HandleChange}
          placeholder="Enter your password"
          required
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
