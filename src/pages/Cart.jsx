import {useCart} from "../hooks/useCart";
import {useNavigate} from "react-router-dom";

export default function Cart() {
  const {cart, removeFromCart, clearCart} = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-6">
      {cart.map(item => (
        <div
          key={item.id}
          className="border p-2 mb-2"
        >
          <h3>{item.title}</h3>
          <p>
            {item.date} at {item.time}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${total}</h2>

      <button
        onClick={() => {
          clearCart();
          navigate("/success");
        }}
        className="bg-green-600 text-white px-4 py-2 mt-4"
      >
        Checkout
      </button>
    </div>
  );
}
