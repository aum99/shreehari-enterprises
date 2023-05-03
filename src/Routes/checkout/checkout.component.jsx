import { useSelector } from "react-redux";

import {
  selectCartStore,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckOutItem from "../../Components/checkout-item/checkout-item.component";

import { CheckOutContainer } from "./checkout.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartStore);
  const cartTotal = useSelector(selectCartTotal);
  if (cartItems) {
    return (
      <CheckOutContainer>
        <h1>Welcome to the checkout page</h1>
        {cartItems.map((item) => (
          <CheckOutItem item={item} key={item.id} />
        ))}
        <h2>Total: {cartTotal}</h2>
      </CheckOutContainer>
    );
  } else {
    <p>Nothing here</p>;
  }
};

export default CheckOut;
