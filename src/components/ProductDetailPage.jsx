import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  // React router provides a useful hook which you can use to
  // extract params 👇
  const params = useParams();

  // React router provides another useful hook which you can use
  // to navigate programmatically 👇
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

/*    // We want to navigate to the home page after a short delay
  const navigateToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };  */

  useEffect(() => {
    // Fetch the product details using async/await
    const fetchProduct = async () => {
      try {
        const url = `http://localhost:3000/foods/${params.productId}`;
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
    /* navigateToHome(); */
  }, [params.productId, navigate]);

  // We want to render some loading state if the product is not yet loaded 👇
  if (!product) return <p>Loading product...</p>;

  // We want to render the product details 👇
  return (
    <div
      style={{
        borderRadius: "15px",
        border: "solid black 4px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>Product details</h1>
      <span style={{ fontSize: "5rem" }}>{product.emoji}</span>
      <p>Description: {product.name}</p>
      <span>${product.price}</span>
      {/* <p>Product Code: {params.productId}</p> */}
    </div>
  );
};

export default ProductDetailPage;