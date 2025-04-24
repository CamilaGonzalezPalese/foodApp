import { foods } from '/src/assets/Foods.js';
import FoodItems from './FoodItems';
import './FoodList.css';

function FoodList() {
  return (
    <div className='food-list'>
      {foods.map((food) => (
        <FoodItems key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;