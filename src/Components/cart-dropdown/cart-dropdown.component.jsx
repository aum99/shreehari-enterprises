import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../product-card/product.styles";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartDropDownContainer } from "./cart-dropdown.styles";

const CartDropDown = () => {
  const navigate = useNavigate();
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  const goToCheckout = useCallback(() => {
    navigate("/checkout");
    toggleCart();
  });
  return (
    <CartDropDownContainer>
      <p>Currently nothing here</p>
      <p>coming soon!!! </p>
      <Button onClick={goToCheckout}>CheckOut</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
