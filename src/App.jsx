import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import ServiceDetails from "./pages/ServiceDetails";
import Booking from "./pages/Booking";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        
        <Route
          path="/booking/:id"
          element={<Booking />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/success"
          element={<CheckoutSuccess />}
        />
      </Routes>
    </BrowserRouter>
  );
}
