interface Category {
    name: string;
    image: string;
}

const categories: Category[] = [
    { name: "Music", image: "/music.png" },
    { name: "Business", image: "/business.png" },
    { name: "Nightlife", image: "/nightlife.png" },
    { name: "Holidays", image: "/holidays.png" },
    { name: "Food & Drink", image: "/food.png" },
    { name: "Education", image: "/education.png" },
    { name: "Gaming", image: "/gaming.png" },
    { name: "Politics", image: "/politics.png" },
    { name: "Health", image: "/health.png" },
    // ➕ Add 2 more if you want full 6 + 5 = 11
    // { name: "Travel", image: "/travel.png" },
    // { name: "Art", image: "/art.png" },
];

export default function PyramidCategories() {
    // First 6 categories
    const row1 = categories.slice(0, 5);
    // Next 5 categories
    const row2 = categories.slice(5, 11);

    const renderRow = (row: Category[]) => (
        <div className="flex justify-center gap-6 my-4">
            {row.map((cat) => (
                <div key={cat.name} className="flex flex-col items-center">
                    <div className="">
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="px-8 pt-12">
            <h2 className="text-xl font-semibold mb-8">Categories</h2>
            {renderRow(row1)}
            {renderRow(row2)}
        </section>
    );
}
