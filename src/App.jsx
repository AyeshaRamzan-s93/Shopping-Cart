


import { useState } from "react";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import "./components/ShoppingCart.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-container">
      <header>
        <h1> Fashion Accessories Store</h1>
        <button
          className="view-cart-btn"
          onClick={() => setShowCartPage(!showCartPage)}
        >
          {showCartPage ? "Back to Shop" : `View Your Cart (${cart.length})`}
        </button>
      </header>

      {!showCartPage ? (
        <ProductList
          addToCart={addToCart}
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      ) : (
        <CartPage
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
          total={total}
        />
      )}
    </div>
  );
}

export default App;
