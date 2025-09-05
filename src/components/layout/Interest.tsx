"use client";

import Link from "next/link";
import { useState } from "react";

interface Event {
    title: string;
    date: string;
    location: string;
    organizer: string;
    image: string;
}

const events: Event[] = [
    {
        title: "Learn content creating efficiently",
        date: "Friday, 18 Aug",
        location: "Free/Madrid",
        organizer: "Albert Flores",
        image: "/event1.jpg",
    },
    {
        title: "Experience AR like never before",
        date: "Friday, 18 Aug",
        location: "Free/New York",
        organizer: "Arlene McCoy",
        image: "/event2.jpg",
    },
    {
        title: "Yoga se hi Hoga!!",
        date: "Friday, 19 Aug",
        location: "Free/India",
        organizer: "Arne Ca",
        image: "/event3.jpg",
    },
    {
        title: "Color the world with Black and White",
        date: "Friday, 20 Aug",
        location: "Free/Madrid",
        organizer: "Brooklyn Simmons",
        image: "/event4.jpg",
    },
    {
        title: "Color coder’s Galaxy",
        date: "Saturday, 21 Aug",
        location: "Free/Paris",
        organizer: "Annette Black",
        image: "/event5.jpg",
    },
    {
        title: "Tech ED in town",
        date: "Saturday, 22 Aug",
        location: "Free/Dubai",
        organizer: "Ralph Edwards",
        image: "/event6.jpg",
    },
    {
        title: "Wonder what!",
        date: "Sunday, 23 Aug",
        location: "Free/New York",
        organizer: "Jane Cooper",
        image: "/event7.jpg",
    },
    {
        title: "EDM Super Night",
        date: "Wednesday, 19 Sep",
        location: "Free/Madrid",
        organizer: "Arlene McCoy",
        image: "/event8.jpg",
    },
];

export default function Interest() {
    const [location, setLocation] = useState("new-york");

    return (
        <section className="mx-1">
            <div className="mb-6 border-[1px] border-gray-300 p-7 font-semibold">
                <p className="text-gray-600 pl-[201px]">
                    Browsing events in{" "}
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="px-2 py-1 text-blue-600 font-medium underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="new-york">New York City</option>
                        <option value="london">London</option>
                        <option value="paris">Paris</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="singapore">Singapore</option>
                    </select>
                </p>
            </div>
            <div className="p-7 font-semibold">
                <h2 className="text-lg font-semibold mb-6 ">
                    Based on your interests
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event) => (
                        <div
                            key={event.title}
                            className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm">
                                    {event.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    {event.date}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {event.location}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {event.organizer}
                                </p>
                                <button className="mt-4 w-full bg-indigo-800 text-white py-1.5 rounded text-sm font-medium hover:bg-indigo-900">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See more */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-2 border rounded-full text-sm hover:bg-gray-100">
                        See More
                    </button>
                </div>
            </div>
        </section>
    );
}
