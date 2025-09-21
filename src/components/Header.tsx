import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full flex items-center justify-between p-6 bg-gray-900 text-white shadow-md">
            <h1 className="text-2xl font-bold">Ernie Brodeur</h1>
            <nav>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <ul className={`md:flex md:gap-6 ${isOpen ? 'flex flex-col gap-4 mt-4' : 'hidden'}`}>
                    <li><a href="#about" className="hover:text-blue-400">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}