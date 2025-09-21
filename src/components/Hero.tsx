import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Ernie</h1>
            <p className="text-xl mb-8 max-w-xl">
                Full-stack developer focused on React, TypeScript, and modern web apps.
            </p>
            <div className="flex gap-4 justify-center">
                <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded shadow-lg transition">
                    View Projects
                </a>
                <a href="#contact" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded shadow-lg transition">
                    Contact Me
                </a>
            </div>
            <div className="flex gap-6 mt-8 text-white">
                <a href="https://github.com/erniebrodeur" target="_blank"><Github size={28} /></a>
                <a href="https://linkedin.com" target="_blank"><Linkedin size={28} /></a>
                <a href="mailto:you@example.com"><Mail size={28} /></a>
            </div>
        </section>
    );
}