import FoodItems from './FoodItems';
import './FoodList.css';
import { useTheme } from '../../context/DarkContext.jsx';


function FoodList({ foods, setFoods }) {
const themeClass = useTheme();
  return (
    <div className={'food-list ' + themeClass}>
      {foods.map((food) => (
        <FoodItems key={food.id} food={food} setFoods={setFoods} />
      ))}
    </div>
  );
}

export default FoodList;
