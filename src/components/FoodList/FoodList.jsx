//FoodList.jsx
import FoodItems from './FoodItems.jsx';
import './FoodList.css';
import { useTheme } from '../../context/DarkContext.jsx';


function FoodList({ foods, setFoods }) {

  const { darkMode, toggleTheme } = useTheme();
  const themeClass = darkMode ? 'dark' : 'light';
  return (
    <div className={'food-list ' + themeClass}>
      {foods.map((food) => (
        <FoodItems key={food.id} food={food} setFoods={setFoods} />
      ))}
    </div>
  );
}

export default FoodList;
