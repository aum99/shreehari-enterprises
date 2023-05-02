import { Fragment, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component";

import { signOutStart } from "../../store/user/user.action";

import { Navbar, NavLinksContainer, NavLink, Logo } from "./navigation.styles";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate("/");
  const navigateToHome = useCallback(() => {
    navigate("/");
  });

  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutStart());
  return (
    <Fragment>
      <Navbar>
        <Logo onClick={navigateToHome} />
        <NavLinksContainer>
          <NavLink to="/products">Products</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Get Started</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
