import React from "react";

interface Review {
    name: string;
    rating: number;
    image: string;
    text: string;
}

const reviews: Review[] = [
    {
        name: "Theresa Webb",
        rating: 4.5,
        image: "/theresa.jpg",
        text: "Lorem ipsum dolor sit amet consectetur. Sed lorem risus felis id vulputate tristique venenatis maecenas.",
    },
    {
        name: "Jacob Jones",
        rating: 4.5,
        image: "/jacob.jpg",
        text: "Lorem ipsum dolor sit amet consectetur. Sed lorem risus felis id vulputate tristique venenatis maecenas.",
    },
    {
        name: "Devon Lane",
        rating: 4.5,
        image: "/devon.jpg",
        text: "Lorem ipsum dolor sit amet consectetur. Sed lorem risus felis id vulputate tristique venenatis maecenas.",
    },
    {
        name: "Cody Fisher",
        rating: 4.5,
        image: "/cody.jpg",
        text: "Lorem ipsum dolor sit amet consectetur. Sed lorem risus felis id vulputate tristique venenatis maecenas.",
    },
];

const Reviews: React.FC = () => {
    return (
        <section className="p-7">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">What people said...</h2>
                <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-gray-100">
                    →
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="bg-gray-700 text-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <div className="flex justify-center -mt-12 mb-4">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-20 h-20 rounded-full border-4 border-white object-cover"
                            />
                        </div>

                        <h3 className="text-md font-semibold text-center">
                            {review.name}
                        </h3>
                        <p className="text-yellow-400 text-center mb-2">
                            {review.rating} ★
                        </p>

                        <p className="text-sm text-gray-200 text-center">
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
