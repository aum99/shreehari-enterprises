import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import {
  ProductsContainer,
  Container,
  CategoryLink,
  HeaderContainer,
} from "./all-products.styles";

import ProductCard from "../product-card/product.component";

const AllProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      <HeaderContainer>
        <h1>All Products</h1>
        {Object.keys(categoriesMap).map((title) => (
          <CategoryLink to={`/products/${title}`}>{title}</CategoryLink>
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
