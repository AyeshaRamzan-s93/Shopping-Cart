
function CartPage({ cart, increaseQty, decreaseQty, removeItem, total }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p> Your cart is empty!</p>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>Rs. {item.price.toLocaleString()}</p>
                </div>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p className="subtotal">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </p>

                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                   Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: Rs. {total.toLocaleString()}</h3>
        </>
      )}
    </div>
  );
}

export default CartPage;
