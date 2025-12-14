import {Link} from "react-router-dom";

export default function ServiceCard({service}) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={service.image}
        className="rounded mb-2"
      />
      <h3 className="font-bold">{service.title}</h3>
      <p>${service.price}</p>
      <p>⭐ {service.rating}</p>
      <Link
        to={`/service/${service.id}`}
        className="text-blue-500 underline"
      >
        View Details
      </Link>
    </div>
  );
}
