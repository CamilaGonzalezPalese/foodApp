import {foods} from "/src/assets/Foods.js"
import './FoodList.css'
function FoodList() {

  return (
    <div className='food-list'>
    {foods.map(food => (
      <div className={`food-item ${food.stock === 0 ? 'no-stock' : ''}`} key={food.id}>
        <figure>
          <span className="emoji">{food.emoji}</span>
        </figure>
        <div className='info-product'>
          <button className={food.stock === 0 ? 'out' : ''}>
          <p className='price'>${food.stock}</p>
          </button>
        </div>
      </div>
    ))}
  </div>
  );

}

export default FoodList;