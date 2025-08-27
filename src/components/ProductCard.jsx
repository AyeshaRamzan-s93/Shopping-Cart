


function ProductCard({ product, addToCart, cart, increaseQty, decreaseQty, removeItem }) {
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <p className="price">Rs. {product.price.toLocaleString()}</p>

      {!inCart ? (
        <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <div className="cart-controls">
          <div className="qty-box">
            <button onClick={() => decreaseQty(product.id)}>-</button>
            <span>{inCart.quantity}</span>
            <button onClick={() => increaseQty(product.id)}>+</button>
          </div>
          <button className="remove-btn" onClick={() => removeItem(product.id)}> Remove</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
