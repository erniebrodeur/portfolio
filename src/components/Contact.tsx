import { Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'Godu',
            description: 'Godu is my existing project with all its original content.',
            github: 'https://github.com/erniebrodeur/godu',
        },
    ];

    return (
        <section id="projects" className="px-4 py-12 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="mb-4">{p.description}</p>
                        {p.github && (
                            <a href={p.github} target="_blank" className="flex items-center gap-1 text-blue-400 hover:text-blue-600">
                                <Github size={18} /> Code
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}