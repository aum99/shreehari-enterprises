import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { addCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
// import SHOP_DATA from "../../shopData";

import AllProducts from "../../Components/all-products/all-products.component";
import Category from "../../Routes/category/category.component";

import { fetchCategoriesStart } from "../../store/categories/categories.action";

const Categories = () => {
  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<AllProducts />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Categories;
