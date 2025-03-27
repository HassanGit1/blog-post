import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-indigo-600 text-2xl font-extrabold">BlogZone</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-800 text-lg font-medium hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 text-lg font-medium hover:text-indigo-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 text-lg font-medium hover:text-indigo-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
