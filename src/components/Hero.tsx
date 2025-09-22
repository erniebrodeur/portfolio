import { Github, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center', 
            padding: '0 1rem',
            background: 'linear-gradient(to bottom, #111827, #1f2937, #374151)'
        }}>
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>Hi, I'm Ernie</h1>
            <p style={{fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '36rem'}}>
                I architect enterprise integration systems and developer tools that scale from startups to Fortune 500 companies. 15+ years building the infrastructure that powers video platforms, CI/CD pipelines, and developer workflows.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                <a href="#projects" className="btn-primary">
                    View Projects
                </a>
                <a href="#contact" className="btn-secondary">
                    Contact Me
                </a>
            </div>
            <div style={{display: 'flex', gap: '1.5rem', marginTop: '2rem'}}>
                <a href="https://github.com/erniebrodeur" target="_blank"><Github size={28} /></a>
                <a href="mailto:ebrodeur@ujami.net"><Mail size={28} /></a>
            </div>
        </section>
    );
}