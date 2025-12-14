import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard";
import {useState} from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = services.filter(
    s =>
      s.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || s.category === category)
  );

  return (
    <div className="p-6">
      <input
        placeholder="Search services..."
        className="border p-2 w-full mb-4"
        onChange={e => setSearch(e.target.value)}
      />

      <select
        className="border p-2 mb-4"
        onChange={e => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Development</option>
        <option>Design</option>
      </select>

      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </div>
  );
}
