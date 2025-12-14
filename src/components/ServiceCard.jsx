import {Link} from "react-router-dom";

export default function ServiceCard({service}) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={service.image}
        alt={service.title}
        className="h-48 w-full object-cover rounded mb-3"
      />
      <h3 className="font-bold">{service.title}</h3>
      <p>${service.price}</p>
      <p>⭐ {service.rating}</p>
      <Link to={`/service/${service.id}`}>
      <button>View Details</button>
      </Link>
    </div>
  );
}
