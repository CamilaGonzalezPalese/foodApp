import './App.css'
import FoodList from '../../components/FoodList/FoodList.jsx';
import Checkout from '../../components/Checkout/Checkout.jsx'
import { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const url = "http://localhost:3000/foods"
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFoods(data);
      } catch (err) {
        setError(err.message);
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [])

  return (
    <>
    {!loading && !error? (
      <div className="App">
      <header className="header">
        <h1 className="title">Food app</h1>
      </header>
      <main className="main-content">
        <FoodList foods={foods}/>
        <Checkout />
      </main>
      </div>) : <p> Error</p>}
    </>
  );
}

export default App