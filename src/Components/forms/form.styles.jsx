import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.p`
  margin: 0;
  font-size: x-large;
  font-weight: 600;
  padding: 0 10px;
`;

export const Description = styled.p`
  font-weight: 100;
  padding: 0 10px;
  font-size: medium;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  row-gap: 15px;
  flex-direction: column;
  width: 380px;
  padding: 10px;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  padding: 5px 5px;
  font-family: "Open Sans Condensed";
  margin-bottom: 20px;
  font-size: medium;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
`;
