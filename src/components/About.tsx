export default function About() {
    return (
        <section id="about" style={{
            padding: '3rem 1rem',
            backgroundColor: '#1f2937',
            color: 'white',
            maxWidth: '64rem',
            margin: '0 auto'
        }}>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center'}}>About Me</h2>
            <p style={{fontSize: '1.125rem', lineHeight: 1.7}}>
                I'm a senior-level software engineer with 15+ years of experience specializing in Ruby, React, and polyglot development.
                I enjoy building modern, maintainable web applications and learning new languages and technologies.
            </p>
        </section>
    );
}
