"use client";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Categories from "@/components/layout/Categories";
import Interest from "@/components/layout/Interest";
import HashTags from "@/components/layout/HashTags";
import ContentCards from "@/components/layout/ContentCards";
import Personalization from "@/components/layout/Personalization";
import PopularOrganisers from "@/components/layout/PopularOrganisers";
import Cities from "@/components/layout/Cities";
import Reviews from "@/components/layout/Reviews";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <Interest title={"Based on your interests"} />
            <HashTags />
            <ContentCards />
            <Personalization />
            <Interest title={"More Events"} />
            <PopularOrganisers />
            <Cities />
            <Reviews />
            <main className="p-6">
                <h1 className="text-3xl font-bold">Welcome to MyApp 🚀</h1>
                <p className="mt-4 text-gray-700">
                    This is your homepage built with Next.js + TypeScript.
                </p>
            </main>
        </>
    );
}
