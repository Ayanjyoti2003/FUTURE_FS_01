import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1a1f2b] text-white shadow-lg fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold hover:text-[#00ADB5] transition">
                    AYAN JYOTI BORA
                </a>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li><a href="#about" className="hover:text-teal-400">About</a></li>
                    <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-[#1a1f2b] px-4 pb-4 space-y-3 font-medium">
                    <li><a href="#about" className="block hover:text-teal-400">About</a></li>
                    <li><a href="#skills" className="block hover:text-teal-400">Skills</a></li>
                    <li><a href="#projects" className="block hover:text-teal-400">Projects</a></li>
                    <li><a href="#contact" className="block hover:text-teal-400">Contact</a></li>
                </ul>
            )}
        </nav>
    );
}
