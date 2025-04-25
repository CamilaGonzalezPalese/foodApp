import './FoodList.css';

function FoodItems({ food }) {
  return (
    <>
      <div className={`food-item ${food.stock === 0 ? 'no-stock' : ''}`}>
        <figure>
          <span className="emoji">{food.emoji}</span>
        </figure>
        <div className='info-product'>
          <button className={food.stock === 0 ? 'out' : ''}>
            <p className='price'>${food.stock}</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItems;
