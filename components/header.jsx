import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold">Portfolio</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#home" className="block px-3 py-2 hover:text-blue-400">Home</a>
                            <a href="#about" className="block px-3 py-2 hover:text-blue-400">About</a>
                            <a href="#projects" className="block px-3 py-2 hover:text-blue-400">Projects</a>
                            <a href="#contact" className="block px-3 py-2 hover:text-blue-400">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}