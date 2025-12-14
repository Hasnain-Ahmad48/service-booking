import {useParams, Link} from "react-router-dom";
import services from "../data/services.json";
import {FiStar} from "react-icons/fi";

export default function ServiceDetails() {
  const {id} = useParams();

  // Service find by ID
  const service = services.find(item => item.id === Number(id));

  // Safety check
  if (!service) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Service not found 😕</h2>
        <Link
          to="/"
          className="text-blue-600 underline mt-4 block"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow rounded-lg p-6">
        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          className="rounded-lg w-full h-72 object-cover"
        />

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{service.title}</h1>

          <div className="flex items-center gap-2 mb-3">
            <FiStar className="text-yellow-500" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-gray-500">({service.category})</span>
          </div>

          <p className="text-gray-700 mb-4">{service.description}</p>

          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-bold text-blue-600">
              ${service.price}
            </span>

            <Link
              to={`/booking/${service.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
