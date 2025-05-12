import { useState } from "react";
import ProductItem from "./ProductItem.jsx";

const ProductList = ({ items }) => {
  const [productItems, setProductItems] = useState(items);

  return productItems.length > 0 ? (
    <ul>
      {productItems.map((item) => {
        return <ProductItem key={item.id} productItem={item} />;
      })}
    </ul>
  ) : (
    <span>No products...</span>
  );
};

export default ProductList;