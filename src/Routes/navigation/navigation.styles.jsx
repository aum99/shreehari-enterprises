import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin: 5px 10px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const NavbarBrand = styled(Link)`
  font-size: large;
  text-align: left;
  text-decoration: none;
  color: black;
`;

export const NavLink = styled(Link)`
  font-size: medium;
  text-decoration: none;
  color: black;
  margin: 5px;
`;
