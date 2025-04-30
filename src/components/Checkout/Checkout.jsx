import './Checkout.css'

function Checkout({ foods}) {
  const productosEnCarrito = foods.filter(item => item.carrito > 0);

  const listFoods = productosEnCarrito.map(product =>
    <p key={product.id}>
      {product.emoji} x {product.carrito}   $ {product.carrito * product.price}
    </p>
  );

  function handleClick() {
    alert('You clicked me!');
  }
  let sumCost = productosEnCarrito.reduce((sum, item) => sum + item.price * item.carrito,0);
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