import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full">
            <Image
                src="/HeroImage.png"
                alt="Yuvan Concert"
                width={1200}
                height={500}
                className="w-full object-cover"
            />
        </section>
    );
}
