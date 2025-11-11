
import React from "react";

const products = [
  { id: 1, name: "Casual Shirt", price: "₹799", img: "https://via.placeholder.com/200" },
  { id: 2, name: "Denim Jeans", price: "₹1299", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Sports Shoes", price: "₹1999", img: "https://via.placeholder.com/200" },
];

const ProductGrid = () => {
  return (
    <section className="products">
      <h2>Trending Products</h2>
      <div className="product-grid">
        {products.map(product => (
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
