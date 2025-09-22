export default function AboutPage() {
    return (
        <section style={{
            paddingTop: '3rem', 
            paddingBottom: '3rem', 
            backgroundColor: '#1f2937',
            borderTop: '1px solid #374151'
        }}>
            <div style={{
                maxWidth: '1000px', 
                margin: '0 auto', 
                padding: '0 1rem'
            }}>
                <h3 style={{
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    marginBottom: '2rem',
                    color: '#e5e7eb',
                    textAlign: 'center'
                }}>
                    What I'm Known For
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.5rem'
                }}>
                    <div style={{
                        padding: '1.5rem',
                        backgroundColor: '#374151',
                        borderRadius: '0.5rem',
                        border: '1px solid #4b5563'
                    }}>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#60a5fa',
                            marginBottom: '0.75rem'
                        }}>
                            Enterprise Video Platform Architecture
                        </h4>
                        <p style={{
                            color: '#d1d5db',
                            fontSize: '0.9rem',
                            lineHeight: '1.5'
                        }}>
                            Built and maintained critical infrastructure for Comcast's video platform, including the official Ruby SDK and deployment automation that saves $300K+ annually.
                        </p>
                    </div>
                    <div style={{
                        padding: '1.5rem',
                        backgroundColor: '#374151',
                        borderRadius: '0.5rem',
                        border: '1px solid #4b5563'
                    }}>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#10b981',
                            marginBottom: '0.75rem'
                        }}>
                            Developer Productivity Tools
                        </h4>
                        <p style={{
                            color: '#d1d5db',
                            fontSize: '0.9rem',
                            lineHeight: '1.5'
                        }}>
                            Created CLI tools and libraries that engineering teams rely on daily for code formatting, shell responsiveness, and notification systems.
                        </p>
                    </div>
                    <div style={{
                        padding: '1.5rem',
                        backgroundColor: '#374151',
                        borderRadius: '0.5rem',
                        border: '1px solid #4b5563'
                    }}>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#f59e0b',
                            marginBottom: '0.75rem'
                        }}>
                            Cross-Platform Integration Systems
                        </h4>
                        <p style={{
                            color: '#d1d5db',
                            fontSize: '0.9rem',
                            lineHeight: '1.5'
                        }}>
                            Architect solutions across Ruby, Go, and Python ecosystems, choosing the right tool for each problem while maintaining operational consistency.
                        </p>
                    </div>
                    <div style={{
                        padding: '1.5rem',
                        backgroundColor: '#374151',
                        borderRadius: '0.5rem',
                        border: '1px solid #4b5563'
                    }}>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#8b5cf6',
                            marginBottom: '0.75rem'
                        }}>
                            AI-Enhanced Development Workflows
                        </h4>
                        <p style={{
                            color: '#d1d5db',
                            fontSize: '0.9rem',
                            lineHeight: '1.5'
                        }}>
                            Pioneering next-generation developer tools with Model Context Protocol integrations that bridge traditional Unix tools with modern AI workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}