import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
