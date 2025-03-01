import { useEffect, useState } from "react";
import CardProperty from "./CardProperty";

const DiscoverProperty = () => {
  const [disproperty, setDisproperty] = useState([]);

  useEffect(() => {
    fetch("prop_data.json")
      .then((res) => res.json())
      .then((data) => setDisproperty(data));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-700">Discover Latest Properties</h1>
        <p className="text-xl mt-2">Newest Properties Around You</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {disproperty.map((property) => (
          <CardProperty key={property.id} disproperty_sing={property} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverProperty;
