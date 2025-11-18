import React from "react";
import { useCart } from "./Cartcontext";
import './Shirt.css';

const products = [
  {
    id: 1,
    name: "Double Cuff Sky Blue Shirt",
    price: 499,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/4MSS1813-03-M3138_55c1b4d9-546d-4b06-9452-8ecbda858518.jpg?v=1761547329&quality=80",
  },
  {
    id: 2,
    name: "Staunton Red Shirt",
    price: 549,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2671-06-M22.jpg?v=1703750561&quality=80",
  },
  {
    id: 3,
    name: "Green Slim Fit Shirt",
    price: 749,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4b6af9ad2084fd0737996336ef9aa53e.jpg?v=1734528534&quality=80",
  },
   {
    id: 5,
    name: "Black Stripes Slim Fit Shirt",
    price: 799,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 6,
    name: "Black Stripes Slim Fit Shirt",
    price: 899,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 7,
    name: "Black Stripes Slim Fit Shirt",
    price: 849,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 8,
    name: "Black Stripes Slim Fit Shirt",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 9,
    name: "Black Stripes Slim Fit Shirt",
    price: 639,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 10,
    name: "Black Stripes Slim Fit Shirt",
    price: 629,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 11,
    name: "Black Stripes Slim Fit Shirt",
    price: 489,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 12,
    name: "Black Stripes Slim Fit Shirt",
    price: 679,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 13,
    name: "Black Stripes Slim Fit Shirt",
    price: 589,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 14,
    name: "Black Stripes Slim Fit Shirt",
    price: 539,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 15,
    name: "Black Stripes Slim Fit Shirt",
    price: 439,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 16,
    name: "Black Stripes Slim Fit Shirt",
    price: 679,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
   {
    id: 17,
    name: "Black Stripes Slim Fit Shirt",
    price: 485,
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3513-08-M28_67bdea09-7c54-41cb-baa1-ece47c57624a.jpg?v=1762516796&quality=80",
  },
];

const Shirt = () => {
  const { addToCart } = useCart();

  return (
          

<div className="container">
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} />
      <h6>{product.name}</h6>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  ))}
</div>

  );
};


export default Shirt;