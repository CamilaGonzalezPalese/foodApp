import './FoodList.css';
import { addToCheckout } from '../Checkout/utils.jsx';  

function FoodItems({ food }) {
  return (
    <>
      <div 
      className={`food-item ${food.stock === 0 ? 'no-stock' : ''}`}
      onClick={addToCheckout}>
        <figure>
          <span className="emoji">{food.emoji}</span>
        </figure>
        <div className='info-product'>
        {/* Por que es un boton? */}
          <button className={food.stock === 0 ? 'out' : ''}>
            <p className='price'>${food.stock}</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItems;
