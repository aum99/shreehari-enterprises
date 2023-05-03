import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../product-card/product.styles";

import {
  selectIsCartOpen,
  selectCartStore,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartStore);

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  const goToCheckout = useCallback(() => {
    navigate("/checkout");
    toggleCart();
  });

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item}></CartItem>)
        ) : (
          <EmptyMessage>No Items in the cart</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>CheckOut</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
