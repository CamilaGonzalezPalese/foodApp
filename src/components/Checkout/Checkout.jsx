import './Checkout.css'
import '../../assets/Foods.js'

function Checkout() {
  
  const listFoods = foods.map(product =>
    <li key={product.id}>

      {product.emoji} {product.title} {product.cost}
    </li>
  );

  function handleClick() {
    alert('You clicked me!');
  }
  let sumCost = foods.reduce((sum, item) => sum + item.cost, 0);
  return (
    <>
      <div className='checkout'>
        <h2>Cuenta</h2>
        <ul onClick={handleClick}>{listFoods}</ul>
        <h5 className='total'>Total: {sumCost}</h5>
      </div>
    </>

  )
};

export default Checkout