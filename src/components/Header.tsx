import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem',
            backgroundColor: '#111827',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            position: 'relative'
        }}>
            <h1 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Ernie Brodeur</h1>
            <nav>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        display: window.innerWidth <= 767 ? 'block' : 'none'
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <ul style={{
                    display: window.innerWidth <= 767 ? 'none' : 'flex',
                    gap: '1.5rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}>
                    <li><a href="#about" style={{color: 'white', textDecoration: 'none'}}>About</a></li>
                    <li><a href="#projects" style={{color: 'white', textDecoration: 'none'}}>Projects</a></li>
                    <li><a href="#contact" style={{color: 'white', textDecoration: 'none'}}>Contact</a></li>
                </ul>
                {isOpen && (
                    <ul style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: '#111827',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem 1.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        listStyle: 'none',
                        margin: 0,
                        gap: '1rem'
                    }}>
                        <li><a href="#about" onClick={() => setIsOpen(false)} style={{color: 'white', textDecoration: 'none'}}>About</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)} style={{color: 'white', textDecoration: 'none'}}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)} style={{color: 'white', textDecoration: 'none'}}>Contact</a></li>
                    </ul>
                )}
            </nav>
        </header>
    );
}