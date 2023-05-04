import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 50px;
  padding: 30px 10px;
  background: black;
  position: static;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FooterLinks = styled.div`
  color: #ffffff;
  margin-bottom: 25px;
  margin-top: 10px;
`;

export const Signature = styled.div`
  color: #ffffff;
  font-size: larger;
`;

export const CtaButton = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 0 30px;
  font-size: larger;
  margin-bottom: 10px;
`;
