import React from "react";
import { useCart } from "./Cartcontext";

const Shirt = () => {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Blue Shirt",
    price: 499,
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};


export default Shirt;