import React from "react";

const hashtags = [
    { text: "#Music", active: true },
    { text: "#Concert" },
    { text: "#Rally" },
    { text: "#Gaming" },
    { text: "#Ai", active: true },
    { text: "#Food" },
    { text: "#Night Show" },
    { text: "#Drinks" },
    { text: "#Badminton" },
    { text: "#Love", active: true },
    { text: "#Latest" },
    { text: "#Charity" },
    { text: "#Riding" },
    { text: "#Business" },
    { text: "#Commingsoon", active: true },
    { text: "#Viral" },
];

export default function TrendingHashtags() {
    return (
        <div className="bg-gray-800 text-white p-6 mx-7 rounded-lg w-fit">
            <h2 className="text-lg font-semibold mb-4">Trending #Hashtags</h2>
            <div className="flex flex-wrap gap-3">
                {hashtags.map((tag, index) => (
                    <span
                        key={index}
                        className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition 
              ${
                  tag.active
                      ? "bg-blue-900 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
                    >
                        {tag.text}
                    </span>
                ))}
            </div>
        </div>
    );
}
