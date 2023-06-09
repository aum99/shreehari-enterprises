import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import { Container, Header, Description, Form, FormInput } from "./form.styles";

import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      resetFormFields();
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      alert("Failed to signup user :(", error);
      return;
    }
  };

  return (
    <Container>
      <Header>I do not have an account</Header>
      <Description>
        Create your account and discover wide range of products
      </Description>
      <Form onSubmit={HandleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={HandleChange}
          placeholder="Enter your name"
          required
        />

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

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={HandleChange}
          placeholder="Enter your password again"
          required
        />

        <Button type="submit">SignUp</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
