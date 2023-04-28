import { ProductContainer, Name, Price } from "./product.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductContainer>
      <img src={imageUrl} alt={name}></img>
      <Name>{name}</Name>
      <Price>Rs.{price}</Price>
    </ProductContainer>
  );
};

export default ProductCard;
