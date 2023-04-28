import { useEffect } from "react";

import { addCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";

import SHOP_DATA from "../../shopData";

const Categories = () => {
  useEffect(() => {
    addCollectionsAndDocuments("categories", SHOP_DATA);
  }, []);
  return (
    <div>
      <h1>This is the categories page</h1>
    </div>
  );
};

export default Categories;
