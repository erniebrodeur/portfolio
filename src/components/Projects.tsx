import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'pushover',
        description: 'A gem to interface with pushover.net - providing both CLI and API interfaces for sending push notifications.',
        gradient: 'from-red-500 to-pink-600',
        tags: ['Ruby', 'API', 'CLI'],
        githubUrl: 'https://github.com/erniebrodeur/pushover',
        liveUrl: 'http://erniebrodeur.github.io/pushover/'
    },
    {
        id: 2,
        name: 'goprompt',
        description: 'Customizable shell prompt tool using Go concurrency for fast, responsive prompts that never hang.',
        gradient: 'from-blue-500 to-cyan-600',
        tags: ['Go', 'CLI', 'Shell'],
        githubUrl: 'https://github.com/erniebrodeur/goprompt',
        liveUrl: 'https://github.com/erniebrodeur/goprompt'
    },
    {
        id: 3,
        name: 'ruby-beautify',
        description: 'A CLI tool to beautify Ruby code output with configurable indentation and formatting options.',
        gradient: 'from-red-600 to-orange-500',
        tags: ['Ruby', 'CLI', 'Formatter'],
        githubUrl: 'https://github.com/erniebrodeur/ruby-beautify',
        liveUrl: 'https://github.com/erniebrodeur/ruby-beautify'
    },
    {
        id: 4,
        name: 'mcp-grep',
        description: 'Model Context Protocol server that exposes grep functionality with natural language prompting support.',
        gradient: 'from-green-500 to-blue-600',
        tags: ['Python', 'MCP', 'CLI'],
        githubUrl: 'https://github.com/erniebrodeur/mcp-grep',
        liveUrl: 'https://smithery.ai/server/@erniebrodeur/mcp-grep'
    },
    {
        id: 5,
        name: 'cts-mpx',
        description: 'Ruby SDK for communicating with MPX REST services, providing comprehensive API access.',
        gradient: 'from-purple-500 to-indigo-600',
        tags: ['Ruby', 'SDK', 'API'],
        githubUrl: 'https://github.com/erniebrodeur/cts-mpx',
        liveUrl: 'https://github.com/erniebrodeur/cts-mpx'
    },
    {
        id: 6,
        name: 'cts-mpx-aci',
        description: 'Account Continuous Integration toolkit for recording, imaging, and deploying MPX data services.',
        gradient: 'from-orange-500 to-red-600',
        tags: ['Ruby', 'DevOps', 'CI/CD'],
        githubUrl: 'https://github.com/erniebrodeur/cts-mpx-aci',
        liveUrl: 'https://github.com/erniebrodeur/cts-mpx-aci'
    }
]

export default function Projects() {
    const getGradient = (gradientString: string) => {
        const colorMap: { [key: string]: string } = {
            'red-500': '#ef4444',
            'red-600': '#dc2626',
            'pink-600': '#db2777',
            'blue-500': '#3b82f6',
            'blue-600': '#2563eb',
            'cyan-600': '#0891b2',
            'orange-500': '#f97316',
            'orange-600': '#ea580c',
            'green-500': '#10b981',
            'green-600': '#059669',
            'purple-500': '#a855f7',
            'indigo-600': '#4f46e5'
        };
        
        const parts = gradientString.split(' to-');
        const fromColor = parts[0].replace('from-', '');
        const toColor = parts[1];
        
        return `linear-gradient(to right, ${colorMap[fromColor] || '#3b82f6'}, ${colorMap[toColor] || '#2563eb'})`;
    };

    return (
        <section id="projects" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
                <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '4rem'}}>Featured Projects</h2>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header" style={{background: getGradient(project.gradient)}}></div>
                            <div className="project-content">
                                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem'}}>{project.name}</h3>
                                <p style={{color: '#9ca3af', marginBottom: '1rem'}}>{project.description}</p>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{display: 'flex', gap: '1rem'}}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} style={{backgroundColor: '#2563eb', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '0.25rem'}}>{tag}</span>
                                        ))}
                                    </div>
                                    <div style={{display: 'flex', gap: '1rem'}}>
                                        <a href={project.githubUrl} style={{color: '#9ca3af'}} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}>
                                            <Github size={20} />
                                        </a>
                                        <a href={project.liveUrl} style={{color: '#9ca3af'}} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}>
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