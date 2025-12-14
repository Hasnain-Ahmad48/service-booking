import {useState, useEffect} from "react";

export const useCart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = item => setCart([...cart, item]);
  const removeFromCart = id => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  return {cart, addToCart, removeFromCart, clearCart};
};
