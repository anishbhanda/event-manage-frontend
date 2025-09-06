import React from "react";

interface City {
    name: string;
    image: string;
}

const cities: City[] = [
    {
        name: "Chicago",
        image: "/chicago.jpg",
    },
    {
        name: "Las Vegas",
        image: "/lasvegas.jpg",
    },
    {
        name: "Miami",
        image: "/miami.jpg",
    },
];

const Cities: React.FC = () => {
    return (
        <section className="p-7">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">
                    Top Destinations in USA
                </h2>
                <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-gray-100">
                    →
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cities.map((city) => (
                    <div
                        key={city.name}
                        className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                    >
                        <img
                            src={city.image}
                            alt={city.name}
                            className="w-full h-40 object-cover"
                        />

                        <div className="absolute bottom-2 left-2 text-white font-semibold text-sm bg-black/40 px-3 py-1 rounded">
                            {city.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cities;
