import {Link, NavLink} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {useCart} from "../hooks/useCart";

export default function Navbar() {
  const {cart} = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          ServiceBook
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({isActive}) =>
              isActive ? "font-semibold text-blue-600" : "text-gray-700"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({isActive}) =>
              isActive ? "font-semibold text-blue-600" : "text-gray-700"
            }
          >
            Cart
          </NavLink>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative"
          >
            <FiShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
