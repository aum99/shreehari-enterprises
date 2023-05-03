import { useDispatch, useSelector } from "react-redux";

import { selectCartStore } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import { ProductContainer, Name, Price, Button } from "./product.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartStore);
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductContainer>
      <img src={imageUrl} alt={name}></img>
      <Name>{name}</Name>
      <Price>Rs.{price}</Price>
      <Button onClick={addToCart}>ADD TO CART</Button>
    </ProductContainer>
  );
};

export default ProductCard;
