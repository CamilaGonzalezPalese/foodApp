import './Checkout.css'
function Checkout() {
  const foods = [
    { title: 'burger', id: 1, cost: 10 },
    { title: 'fries', id: 2, cost: 5 },
    { title: 'taco', id: 3, cost: 7 },
  ];
  const listFoods = foods.map(product =>
    <li key={product.id}>
      {product.title} {product.cost}
    </li>
  );

  function handleClick() {
    alert('You clicked me!');
  }
  let sumCost = foods.reduce((sum, item) => sum + item.cost, 0);
  return (
    <>
      <div className='checkout'>
        <h2>Checkout</h2>
        <ul onClick={handleClick}>{listFoods}</ul>
        <h5 className='total'>Total: {sumCost}</h5>
      </div>
    </>

  )
};

export default Checkout