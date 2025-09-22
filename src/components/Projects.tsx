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
    }
]

export default function Projects() {
    return (
        <section id="projects" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
                <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '4rem'}}>Featured Projects</h2>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header" style={{background: `linear-gradient(to right, #10b981, #2563eb)`}}></div>
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