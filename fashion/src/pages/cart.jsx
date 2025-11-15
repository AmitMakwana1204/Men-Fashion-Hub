import React from "react";
import { useCart } from "./Cartcontext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is empty 😕</h3>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <div>
              <input
                type="number"
                value={item.qty}
                min="1"
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
              />
            </div>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
};
export default Cart;
