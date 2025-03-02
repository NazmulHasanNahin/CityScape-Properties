import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../Shared/Nav";
import { Helmet } from "react-helmet-async";

const Property = () => {
    const Properties = useLoaderData();
    const { id } = useParams();

    const property = Properties.find((Property) => Property.id == id);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet><title>{property.estate_title}</title></Helmet>
            <Nav />
            <div className="container mx-auto p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Property Image */}
                        <div className="md:w-1/2">
                            <img
                                className="w-full h-72 md:h-full object-cover"
                                src={property.image}
                                alt={property.estate_title}
                            />
                        </div>
                        {/* Property Details */}
                        <div className="p-6 md:w-1/2">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{property.estate_title}</h1>
                            <p className="text-gray-600">{property.description}</p>

                            <div className="mt-4">
                                <p className="text-gray-500 text-sm">Location:</p>
                                <p className="text-gray-700 font-semibold">{property.location}</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-500 text-sm">Price:</p>
                                <p className="text-indigo-600 font-bold text-xl">{property.price}</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-500 text-sm">Area:</p>
                                <p className="text-gray-700">{property.area}</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-500 text-sm">Facilities:</p>
                                <ul className="list-disc list-inside text-gray-700">
                                    {property.facilities.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all">
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;
