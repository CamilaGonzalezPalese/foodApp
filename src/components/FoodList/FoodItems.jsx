//FoodItems.jsx
import './FoodList.css';
import { useTheme } from '../../context/DarkContext.jsx';
import { Link } from "react-router-dom";

function FoodItems({ food, setFoods }) {
  async function handleClick() {
    if (food.stock > 0) {
      try {
        await fetch(`http://localhost:3000/foods/${food.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            carrito: food.carrito + 1,
            stock: food.stock - 1
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

  const themeClass = useTheme();
  return (
    <div>
<div className={`food-item ${food.stock === 0 ? 'no-stock' : ''} ` + themeClass} >
      <figure>
        <span className="emoji">{food.emoji}</span>
        <Link className="food"  to={`/products/${food.id}`}>
          Details
        </Link>
      </figure>

      {food.stock === 0 && <p className="no-stock-text">No stock</p>}
      <div className={`food-stock ${food.stock === 0 ? 'out' : ''}`+ themeClass}>
        {food.stock}
      </div>
      <button onClick={handleClick}>
        Agregar
      </button>
      
    </div>
    
    </div>
    
  );
}

export default FoodItems;
