import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component";

import {
  Navbar,
  NavLinksContainer,
  NavbarBrand,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <Navbar>
        <NavbarBrand>Shreehari</NavbarBrand>
        <NavLinksContainer>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/auth">Get Started</NavLink>
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
