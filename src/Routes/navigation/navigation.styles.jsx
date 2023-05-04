import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../assets/Logo-500x500-px.svg";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7%;
  border-bottom: 2px solid #000;
  position: fixed;
  top: 0;
  width: 90%;
  background-color: #ffffff;
  z-index: 950;
`;

export const Logo = styled(BrandLogo)`
  height: 100px;
  width: 100px;
  cursor: pointer;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;

export const NavLink = styled(Link)`
  font-size: medium;
  text-decoration: none;
  color: black;
  margin: 5px;
`;

export const BrandImage = styled.img`
  background-image: url("../../assets/logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
`;
