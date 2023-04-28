import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { addCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
// import SHOP_DATA from "../../shopData";

import AllCategories from "../../Components/all-categories/all-categories.component";
import Category from "../../Components/category/category.component";

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
      <Route index element={<AllCategories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Categories;
