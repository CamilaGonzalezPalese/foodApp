import './Checkout.css';

function Checkout( { items }) {
   const foods = [
    { title: 'burger', id: 1, cost: 10 },
    { title: 'fries', id: 2, cost: 5 },
    { title: 'taco', id: 3, cost: 7 },
  ];/* 
  const listFoods = items.map(item, index =>
    <li key={index}>
      {item.name} {item.price}
    </li>
  );*/

  function handleClick() {
    alert('You clicked me!');
  }
  let sumCost = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div className='checkout'>
        <h2>Checkout</h2>
        {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
        <h5 className='total'>Total: {sumCost}</h5>
      </div>
    </>

  )
};

export default Checkout