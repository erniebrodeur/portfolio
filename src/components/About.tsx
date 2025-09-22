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
                I'm an expert Ruby developer and backend engineer with 15+ years of experience building robust SaaS platforms and scalable web applications.
                I specialize in server-side architecture, API design, and creating maintainable backend systems that power modern businesses.
            </p>
        </section>
    );
}
