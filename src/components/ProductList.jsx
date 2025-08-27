

import ProductCard from "./ProductCard";


import shoesImg from "../assets/shoes.jpg";
import bagImg from "../assets/handbag.jpg";
import perfumeImg from "../assets/perfume.jpg";
import capImg from "../assets/cap.jpg";
import sunglassesImg from "../assets/sunglasses.jpg";
import walletImg from "../assets/wallet.jpg";
import beltImg from "../assets/belt.jpg";
import necklaceImg from "../assets/necklace.jpg";
import ringImg from "../assets/ring.jpg";



const products = [
  { id: 1, name: "Luxury Perfume", price: 5400, image: perfumeImg, desc: "Long-lasting fragrance for special occasions." },
  { id: 2, name: "Nike Sports Shoes", price: 6500, image: shoesImg, desc: "Lightweight running shoes with cushioned sole." },
  { id: 3, name: "Designer Handbag", price: 8500, image: bagImg, desc: "Trendy handbag with spacious compartments." },
  { id: 4, name: "Stylish Cap", price: 1200, image: capImg, desc: "Cool cap for casual wear." },
  { id: 5, name: "Sunglasses", price: 2200, image: sunglassesImg, desc: "UV protected stylish shades." },
  { id: 6, name: "Leather Wallet", price: 1800, image: walletImg, desc: "Premium leather wallet for men." },
  { id: 7, name: "Classic Belt", price: 1500, image: beltImg, desc: "Durable belt with steel buckle." },
  { id: 8, name: "Gold Necklace", price: 15000, image: necklaceImg, desc: "Elegant gold plated necklace." },
  { id: 9, name: "Diamond Ring", price: 25000, image: ringImg, desc: "Beautiful diamond studded ring." }
];

function ProductList({ addToCart, cart, increaseQty, decreaseQty, removeItem }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem} 
        />
      ))}
    </div>
  );
}

export default ProductList;


