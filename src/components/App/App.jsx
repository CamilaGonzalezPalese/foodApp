import './App.css';
import FoodList from '../../components/FoodList/FoodList.jsx';
import Checkout from '../../components/Checkout/Checkout.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <div className="App">
          <header className="header">
            <h1 className="title">Food app</h1>
          </header>
          <main className="main-content">
            <FoodList foods={foods} setFoods={setFoods} />
            <Checkout foods={foods} setFoods={setFoods} />
          </main>
        </div>
      ) : (
        <p>Error: {error}</p>
      )}
    </>
  );
}

export default App;