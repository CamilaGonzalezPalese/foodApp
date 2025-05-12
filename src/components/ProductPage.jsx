import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList.jsx";

const url = "http://localhost:3000/foods";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const productData = await response.json();

      setProductList(productData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <span>Loading...</span>}

      {!isLoading && <ProductList items={productList} />}
    </>
  );
};

export default ProductPage;