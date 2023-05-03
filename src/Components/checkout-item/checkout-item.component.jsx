import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartStore } from "../../store/cart/cart.selector";

const CheckOutItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartStore);

  const addToCart = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  return (
    <div>
      <p>
        {item.name} - {item.quantity} <span onClick={addToCart}>&gt;</span> -{" "}
        {item.price} -{item.quantity * item.price}
      </p>
    </div>
  );
};

export default CheckOutItem;
