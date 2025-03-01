import { Link } from "react-router-dom";

const CardProperty = ({ disproperty_sing }) => {
    const { estate_title, image, description, price, location, facilities } = disproperty_sing;

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <figure>
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt={estate_title}
                />
            </figure>
            <Link to={`/property/${disproperty_sing.id}`}>
                <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-800">{estate_title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{location}</p>
                    <p className="mt-2 text-gray-600">{description}</p>
                    <div className="mt-4">
                        <span className="text-indigo-600 font-semibold">{price}</span>
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-gray-700">
                        {facilities.map((facility, index) => (
                            <div key={index} className="flex items-center">
                                <span>• {facility}</span>
                            </div>
                        ))}
                    </div>
                </div></Link>
        </div>
    );
};

export default CardProperty;
