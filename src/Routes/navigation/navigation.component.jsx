import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  Navbar,
  NavLinksContainer,
  NavbarBrand,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar>
        <NavbarBrand>Shreehari</NavbarBrand>
        <NavLinksContainer>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/auth">Get Started</NavLink>
        </NavLinksContainer>
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
