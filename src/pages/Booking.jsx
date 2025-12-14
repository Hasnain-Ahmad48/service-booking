import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services.json";
import { useCart } from "../hooks/useCart";

export default function Booking() {
  const { id } = useParams();
  const service = services.find((s) => s.id == id);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    addToCart({
      ...service,
      date: form.date.value,
      time: form.time.value,
      notes: form.notes.value,
    });

    navigate("/cart");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl mb-4">{service.title}</h2>

      <input type="date" name="date" required className="border p-2 mb-2 w-full" />
      <input type="time" name="time" required className="border p-2 mb-2 w-full" />
      <textarea name="notes" placeholder="Notes" className="border p-2 w-full" />

      <button className="bg-blue-600 text-white px-4 py-2 mt-4">
        Add to Cart
      </button>
    </form>
  );
}
