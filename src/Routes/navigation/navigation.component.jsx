import { Fragment, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component";

import { Navbar, NavLinksContainer, NavLink, Logo } from "./navigation.styles";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate("/");
  const navigateToHome = useCallback(() => {
    navigate("/");
  });
  return (
    <Fragment>
      <Navbar>
        <Logo onClick={navigateToHome} />
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
