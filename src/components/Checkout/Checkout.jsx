//Checkout.jsx
import './Checkout.css';
import { useTheme } from '../../context/DarkContext.jsx';

function Checkout({ foods, setFoods }) {
  const { darkMode, toggleTheme } = useTheme();
  const themeClass = darkMode ? 'dark' : 'light';
  async function handleClick(product) {
    if (product.carrito > 0) {
      try {
        await fetch(`http://localhost:3000/foods/${product.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            carrito: product.carrito - 1,
            stock: product.stock + 1
          })
        });

        const response = await fetch("http://localhost:3000/foods");
        const updatedFoods = await response.json();
        setFoods(updatedFoods);

      } catch (err) {
        console.error("Error actualizando el producto:", err);
      }
    }
  }

  const productosEnCarrito = foods.filter(item => item.carrito > 0);

  const listFoods = productosEnCarrito.map(product =>
    <p key={product.id} onClick={() => handleClick(product)}>
      {product.emoji} x {product.carrito}   $ {product.carrito * product.price} ❌
    </p>
  );

  const sumCost = productosEnCarrito.reduce(
    (sum, item) => sum + item.price * item.carrito,
    0
  );
  return (
    <div>
      <div className={'checkout ' + themeClass}>
        <h2>Checkout</h2>
        <div>{listFoods}</div>
        <h5 className={'total' + themeClass}>Total: {sumCost}</h5>
      </div>
    </div>
  );
}

export default Checkout;
