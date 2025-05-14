// Home.jsx
import './Home.css';
import FoodList from '../components/FoodList/FoodList.jsx';
import Checkout from '../components/Checkout/Checkout.jsx';
import { useEffect, useState, useContext } from 'react';
import { useTheme } from '../context/DarkContext.jsx';

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode, toggleTheme } = useTheme();
  const themeClass = darkMode ? 'dark' : 'light';
  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:3000/foods");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setFoods(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
  <>
    {!loading && !error ? (
      <>
        <div className={"main-content " + themeClass}>
          <FoodList foods={foods} setFoods={setFoods} />
          <Checkout foods={foods} setFoods={setFoods} />
        </div>
      </>
    ) : (
      <p>Error: {error}</p>
    )}
  </>
);
}

export default Home;