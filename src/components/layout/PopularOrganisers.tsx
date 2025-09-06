import React from "react";

interface Organiser {
  name: string;
  followers: string;
  image: string;
}

const organisers: Organiser[] = [
  {
    name: "Robert Fox",
    followers: "78.9k Followers",
    image: "/organiser1.jpg",
  },
  {
    name: "Annette Black",
    followers: "34.9k Followers",
    image: "/organiser2.jpg",
  },
  {
    name: "Kristin Watson",
    followers: "63.9k Followers",
    image: "/organiser3.jpg",
  },
  {
    name: "Albert Flores",
    followers: "98.9k Followers",
    image: "/organiser4.jpg",
  },
];

const PopularOrganisers: React.FC = () => {
  return (
    <section className="p-7">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Popular Organiser’s</h2>
        <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-gray-100">
          →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {organisers.map((org) => (
          <div
            key={org.name}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={org.image}
              alt={org.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />

            <h3 className="font-semibold text-sm">{org.name}</h3>
            <p className="text-xs text-gray-500 mb-4">{org.followers}</p>

            <button className="px-6 py-2 bg-indigo-800 text-white text-sm rounded hover:bg-indigo-900">
              Follow
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularOrganisers;
