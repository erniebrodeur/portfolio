import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'godu',
        description: 'Fast disk usage analyzer written in Go, providing detailed directory size analysis with clean CLI output.',
        gradient: 'from-green-500 to-blue-600',
        tags: ['Go', 'CLI'],
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description of your amazing project and the technologies used to build it.',
        gradient: 'from-blue-500 to-purple-600',
        tags: ['React', 'Node.js'],
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description of your amazing project and the technologies used to build it.',
        gradient: 'from-purple-500 to-pink-600',
        tags: ['Vue', 'Python'],
        githubUrl: '#',
        liveUrl: '#'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                            <div className={`h-48 bg-gradient-to-r ${project.gradient}`}></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-blue-600 text-xs rounded">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        <a href={project.githubUrl} className="text-gray-400 hover:text-white">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.liveUrl} className="text-gray-400 hover:text-white">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}