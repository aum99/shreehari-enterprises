import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../product-card/product.styles";

import { CartDropDownContainer } from "./cart-dropdown.styles";

const CartDropDown = () => {
  const navigate = useNavigate();
  const goToCheckout = useCallback(() => {
    navigate("/checkout");
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
