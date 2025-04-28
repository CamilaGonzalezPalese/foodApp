import './FoodList.css';

function FoodItems({ food }) {
  return (

<div className={`food-item ${food.stock === 0 ? 'no-stock' : ''}`}>
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
