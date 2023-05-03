import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../product-card/product.component";

const PopularProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const popular = [3, 7, 9, 10, 12, 21, 22, 11];
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        const prods = products.filter((product) =>
          popular.includes(product.id)
        );
        return prods.map((product) => (
          <ProductCard product={product} key={product.id} />
        ));
      })}
    </Fragment>
  );
};

export default PopularProducts;
