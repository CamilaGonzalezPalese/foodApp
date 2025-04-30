import './FoodList.css';

function FoodItems({ food }) {
  function handleClick() {
    if (food.stock > 0) {
      food.carrito += 1;
      food.stock -= 1;
      console.log(`${food.name} actualizado:`, food);
    }
  }  
  return (
<div className={`food-item ${food.stock === 0 ? 'no-stock' : ''}`}
  onClick={handleClick}
>
  <figure>
    <span className="emoji">{food.emoji}</span>
  </figure>

  <div className="info-product">
    {food.stock === 0 && <p className="no-stock-text">No stock</p>}
    <div className={`food-stock ${food.stock === 0 ? 'out' : ''}`}>
      {food.stock}
     </div>
  </div>
</div>
  );
}

export default FoodItems;
