import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import {
  ProductsContainer,
  Container,
  CategoryButton,
  HeaderContainer,
  Header,
} from "./all-products.styles";

import ProductCard from "../product-card/product.component";

const AllProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      <HeaderContainer>
        <Header>All Products</Header>
        {Object.keys(categoriesMap).map((title) => (
          <CategoryButton to={`/products/${title}`}>{title}</CategoryButton>
        ))}
      </HeaderContainer>
      <Container>
        <ProductsContainer>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ));
          })}
        </ProductsContainer>
      </Container>
    </Fragment>
  );
};

export default AllProducts;
