import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const { data, error } = await supabase.from("cart").select("*");

    if (error) {
      console.log(error);
    } else {
      setCartItems(data);
    }
  };

 const getPriceNumber = (price) => {
  const cleanPrice = String(price).replace(/[₹,\s]/g, "");
  return Number(cleanPrice) || 0;
  };

  const total = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price),
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}

      <h2>Total: ₹{total.toLocaleString()}</h2>

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">Select Payment Method</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>

      <br />
      <br />

      <button>Place Order</button>
    </div>
  );
}

export default Cart;