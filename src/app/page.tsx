import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Categories from "@/components/layout/Categories";
import Interest from "@/components/layout/Interest";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <Interest />
            <main className="p-6">
                <h1 className="text-3xl font-bold">Welcome to MyApp 🚀</h1>
                <p className="mt-4 text-gray-700">
                    This is your homepage built with Next.js + TypeScript.
                </p>
            </main>
        </>
    );
}
