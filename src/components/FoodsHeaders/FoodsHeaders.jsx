import './FoodsHeaders.css';
import FoodList from '../FoodList/FoodList.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import { ThemeContext } from '../../context/DarkContext.jsx';
import { useEffect, useState, useContext } from 'react';

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
function FoodsHeaders() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
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
        <ThemeContext.Provider value={theme}>
          <div className={"App " + theme}>
          
            <header className={"header " + theme}>
              <h1 className="title">Food app</h1>
            </header>
            <main className={"main-content " + theme}>

              <FoodList foods={foods} setFoods={setFoods} />
              <Checkout foods={foods} setFoods={setFoods} />

            </main>
          <Button onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
            console.log(theme)
          }}>
            Toggle theme
          </Button>
          
          </div>
        </ThemeContext.Provider>
      ) : (
        <p>Error: {error}</p>
      )}
    </>
  );
}

export default FoodsHeaders;