import FoodItems from './FoodItems';
import './FoodList.css';

function FoodList({ foods, setFoods }) {
  return (
    <div className='food-list'>
      {foods.map((food) => (
        <FoodItems key={food.id} food={food} setFoods={setFoods} />
      ))}
    </div>
  );
}

export default FoodList;
