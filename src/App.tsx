import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />

            <footer className="py-8 text-center text-gray-400">
                <p>&copy; 2025 Ernie Brodeur. All rights reserved.</p>
            </footer>
        </div>
    );
}