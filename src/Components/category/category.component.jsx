import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import {
  HeaderContainer,
  Container,
  ProductsContainer,
  Heading,
  CategoryButtonsContainer,
  CategoryButton,
  HomeLink,
} from "./category.styles";

import ProductCard from "../product-card/product.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log(products);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <HeaderContainer>
        <HomeLink to="/products"> &lt; Home</HomeLink>
        <Heading>{category}</Heading>
        <CategoryButtonsContainer>
          {Object.keys(categoriesMap).map((title) => (
            <CategoryButton to={`/products/${title}`}>{title}</CategoryButton>
          ))}
        </CategoryButtonsContainer>
      </HeaderContainer>
      <Container>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ProductsContainer>
      </Container>
    </Fragment>
  );
};

export default Category;
