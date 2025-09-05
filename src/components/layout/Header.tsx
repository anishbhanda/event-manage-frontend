import Link from "next/link";
import { Search, User } from "lucide-react"; // lucide-react icons

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow px-6 py-3 flex items-center justify-between z-50">
            <div className="text-2xl font-bold text-black-700">
                <Link href="/">EventTribe</Link>
            </div>

            <div className="flex-1 mx-6">
                <div className="flex items-center border rounded-full px-3 py-1">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 px-2 py-1 outline-none text-sm"
                    />
                </div>
            </div>

            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/create-event" className="hover:text-blue-600">
                    Create Event
                </Link>
                <Link href="/favorites" className="hover:text-blue-600">
                    Favorites
                </Link>
                <Link href="/help" className="hover:text-blue-600">
                    Help Centre
                </Link>

                {/* User profile */}
                <div className="flex items-center space-x-2">
                    <button className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
                        Emily
                    </button>
                    <User size={22} className="text-gray-700" />
                </div>
            </nav>
        </header>
    );
}
