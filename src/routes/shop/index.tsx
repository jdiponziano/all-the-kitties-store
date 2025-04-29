import { Routes, Route } from "react-router";
import { ShopDirectory } from "components/shop-directory";
import Category from "routes/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ShopDirectory />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
