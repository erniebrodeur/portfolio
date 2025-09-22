import { Mail, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" style={{
            padding: '3rem 1rem',
            backgroundColor: '#1f2937',
            color: 'white'
        }}>
            <div style={{
                maxWidth: '64rem',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem'}}>Get In Touch</h2>
                <p style={{fontSize: '1.125rem', marginBottom: '2rem', color: '#d1d5db'}}>
                    I'm always interested in new opportunities and interesting projects.
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="mailto:ebrodeur@ujami.net"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#2563eb',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            color: 'white',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                    <a
                        href="https://github.com/erniebrodeur"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#374151',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            color: 'white',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4b5563'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#374151'}
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
