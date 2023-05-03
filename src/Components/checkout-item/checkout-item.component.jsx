import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartStore } from "../../store/cart/cart.selector";

import { CheckOutItemContainer, Column, Click } from "./checkout-item.styles";

const CheckOutItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartStore);

  const addToCart = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  const removeFromCart = () => {
    dispatch(removeItemFromCart(cartItems, item));
  };
  const clearFromCart = () => {
    dispatch(clearItemFromCart(cartItems, item));
  };
  return (
    <CheckOutItemContainer>
      <Column>{item.name}</Column>

      <Column>
        <Click onClick={removeFromCart}>&lt;</Click>
        {item.quantity}
        <Click onClick={addToCart}>&gt;</Click>
      </Column>

      <Column>{item.price}</Column>
      <Column>
        <Click onClick={clearFromCart}>&#10005;</Click>
      </Column>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
