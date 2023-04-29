import { ProductContainer, Name, Price, Button } from "./product.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductContainer>
      <img src={imageUrl} alt={name}></img>
      <Name>{name}</Name>
      <Price>Rs.{price}</Price>
      <Button>ADD TO CART</Button>
    </ProductContainer>
  );
};

export default ProductCard;
