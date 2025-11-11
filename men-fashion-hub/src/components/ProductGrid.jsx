import React from "react";
import casualShirtImg from "../assets/images/Screenshot_11-11-2025_12232_www.bing.com.jpeg";

const products = [
  { id: 1, name: "Casual Shirt", price: "₹799", img: casualShirtImg },
];

const ProductGrid = () => {
  return (
    <section className="products">
      <h2>Trending Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
