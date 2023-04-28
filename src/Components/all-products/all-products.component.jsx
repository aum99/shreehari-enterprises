import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import { ProductsContainer, Container } from "./all-products.styles";

import ProductCard from "../product-card/product.component";

const AllProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Container>
      <h1>All Products</h1>
      <ProductsContainer>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ));
        })}
      </ProductsContainer>
    </Container>
  );
};

export default AllProducts;
