import React, { useState } from "react";

const interests: string[] = [
    "Badminton",
    "Cricket",
    "Music",
    "Cooking",
    "Travelling",
    "Dacing",
    "Art",
    "Designing",
    "Political Science",
    "Party",
    "Singing",
    "EDM",
    "Fashion",
    "Athletics",
    "Basketball",
    "Sports",
    "Gaming",
    "Drama",
    "Social Work",
    "Business",
    "Charity",
];

const FavoritesModal: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([
        "Badminton",
        "Party",
        "EDM",
        "Social Work",
    ]);

    const toggleInterest = (item: string) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg mx-7 relative">
            <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
                aria-label="Close"
            >
                ✕
            </button>

            <h2 className="text-lg font-semibold mb-1">
                Add More to you’re Favorites!
            </h2>
            <p className="text-sm text-gray-300 mb-4">
                Select your interests to get event suggestions based on what you
                love
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
                {interests.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => toggleInterest(item)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition 
              ${
                  selected.includes(item)
                      ? "bg-blue-900 text-white border-blue-900"
                      : "bg-transparent text-gray-200 border border-gray-400 hover:bg-gray-700"
              }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="text-center mt-2">
                <button className="text-sm text-gray-300 hover:text-white underline">
                    View All
                </button>
            </div>
        </div>
    );
};

export default FavoritesModal;
