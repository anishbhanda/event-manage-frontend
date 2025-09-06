import React, { useState } from "react";

const filters = [
    "All",
    "For You",
    "Online",
    "Today",
    "Free",
    "Music",
    "Community",
    "Charity",
    "Sports",
];

const events = [
    {
        id: 1,
        title: "Enjoy the magic of music with us!",
        date: "Fri, Sep 15",
        location: "Orlando, Maryland",
        price: "Offline",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=500&q=80",
    },
    {
        id: 2,
        title: "Let you go Insane!",
        date: "Mon, Sep 16",
        location: "Target Function",
        price: "Free",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
    },
    {
        id: 3,
        title: "Master the Media world successfully",
        date: "Tue, Sep 22",
        location: "Techno Learn",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1616469829581-7fcbf472d4a3?w=500&q=80",
    },
    {
        id: 4,
        title: "Aging & Progression",
        date: "Wed, Sep 20",
        location: "Louis Walter",
        price: "Free Trial",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
    },
    {
        id: 5,
        title: "Enjoy the magic of music with us!",
        date: "Fri, Sep 15",
        location: "Orlando, Maryland",
        price: "Offline",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=500&q=80",
    },
    {
        id: 6,
        title: "Let you go Insane!",
        date: "Mon, Sep 16",
        location: "Target Function",
        price: "Free",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
    },
    {
        id: 7,
        title: "Master the Media world successfully",
        date: "Tue, Sep 22",
        location: "Techno Learn",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1616469829581-7fcbf472d4a3?w=500&q=80",
    },
    {
        id: 8,
        title: "Aging & Progression",
        date: "Wed, Sep 20",
        location: "Louis Walter",
        price: "Free Trial",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
    },
];

export default function ContentCards() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="p-8">
            <div className="flex gap-6 mb-6 border-b pb-2">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={`text-sm font-medium pb-2 transition ${
                            activeFilter === filter
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600 hover:text-blue-500"
                        }`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="h-40 w-full object-cover"
                        />

                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                                {event.title}
                            </h3>
                            <p className="text-xs text-gray-500">
                                {event.date}
                            </p>
                            <p className="text-xs text-gray-500 mb-4">
                                {event.location}
                            </p>
                            <p className="text-sm font-medium text-gray-700">
                                {event.price}
                            </p>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-900 text-white text-sm font-medium py-2 rounded-md mt-3 hover:bg-blue-800">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
