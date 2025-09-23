import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'Idlewild',
        description: 'An incremental idle game built with React featuring resource management, automation systems, and progression mechanics. Demonstrates modern React patterns, state management, and game development concepts in a web environment.',
        gradient: 'from-green-500 to-purple-600',
        tags: ['React', 'TypeScript', 'Game Dev'],
        githubUrl: 'https://github.com/erniebrodeur/idlewild',
        liveUrl: 'https://erniebrodeur.github.io/idlewild/'
    },
    {
        id: 2,
        name: 'cts-mpx-aci',
        description: 'Enterprise CI/CD automation that eliminated manual deployment errors for Comcast\'s video platform teams. Reduced deployment time from hours to minutes while adding dependency resolution and automated rollbacks. Saved the company approximately $300,000 annually through operational efficiency.',
        gradient: 'from-purple-600 to-blue-800',
        tags: ['Ruby', 'Enterprise', 'CI/CD', 'Video Platform'],
        githubUrl: 'https://github.com/erniebrodeur/cts-mpx-aci',
        liveUrl: 'https://github.com/erniebrodeur/cts-mpx-aci'
    },
    {
        id: 3,
        name: 'cts-mpx',
        description: 'The official Ruby SDK that development teams at Comcast use to manage their video assets. Powers multiple internal applications, handles millions of API calls daily, and provides the foundation for enterprise video workflow systems.',
        gradient: 'from-red-600 to-purple-700',
        tags: ['Ruby', 'SDK', 'Enterprise', 'Video API'],
        githubUrl: 'https://github.com/Comcast/cts-mpx',
        liveUrl: 'https://github.com/Comcast/cts-mpx'
    },
    {
        id: 4,
        name: 'pushover',
        description: 'Production-ready notification system with both CLI and API interfaces. Used by development teams for deployment alerts, monitoring notifications, and automated status updates.',
        gradient: 'from-red-500 to-pink-600',
        tags: ['Ruby', 'API', 'CLI'],
        githubUrl: 'https://github.com/erniebrodeur/pushover',
        liveUrl: 'http://erniebrodeur.github.io/pushover/'
    },
    {
        id: 5,
        name: 'goprompt',
        description: 'High-performance shell prompt built with Go concurrency patterns. Provides instant responsiveness even in large repositories by running git status checks asynchronously, eliminating the common problem of slow shell prompts.',
        gradient: 'from-blue-500 to-cyan-600',
        tags: ['Go', 'CLI', 'Shell'],
        githubUrl: 'https://github.com/erniebrodeur/goprompt',
        liveUrl: 'https://github.com/erniebrodeur/goprompt'
    },
    {
        id: 6,
        name: 'ruby-beautify',
        description: 'Code formatting tool that standardizes Ruby code style across development teams. Features configurable indentation rules and integrates with existing development workflows.',
        gradient: 'from-red-600 to-orange-500',
        tags: ['Ruby', 'CLI', 'Formatter'],
        githubUrl: 'https://github.com/erniebrodeur/ruby-beautify',
        liveUrl: 'https://github.com/erniebrodeur/ruby-beautify'
    },
    {
        id: 7,
        name: 'mcp-grep',
        description: 'Model Context Protocol server that bridges traditional Unix tools with modern AI workflows. Enables natural language queries against codebases and demonstrates next-generation developer tool integration patterns.',
        gradient: 'from-green-500 to-blue-600',
        tags: ['Python', 'MCP', 'CLI'],
        githubUrl: 'https://github.com/erniebrodeur/mcp-grep',
        liveUrl: 'https://smithery.ai/server/@erniebrodeur/mcp-grep'
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
            'blue-800': '#1e40af',
            'cyan-600': '#0891b2',
            'orange-500': '#f97316',
            'orange-600': '#ea580c',
            'green-500': '#10b981',
            'green-600': '#059669',
            'purple-500': '#a855f7',
            'purple-600': '#9333ea',
            'purple-700': '#7c3aed',
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
                                        {project.tags.slice(0, 3).map((tag) => (
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