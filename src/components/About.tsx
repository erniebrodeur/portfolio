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
            <div style={{display: 'grid', gap: '1.5rem'}}>
                <p style={{fontSize: '1.125rem', lineHeight: 1.7}}>
                    I'm a systems architect with 15+ years building enterprise integration platforms that companies bet their business on. 
                    My work has directly saved organizations hundreds of thousands of dollars annually through automation, 
                    developer productivity tools, and bulletproof deployment systems.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem'}}>
                    <div>
                        <h3 style={{fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa'}}>Enterprise Scale</h3>
                        <p style={{color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6}}>
                            Built the official Ruby SDK for Comcast's video platform, handling millions of assets and powering multiple internal applications.
                        </p>
                    </div>
                    <div>
                        <h3 style={{fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa'}}>Developer Tools</h3>
                        <p style={{color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6}}>
                            Created CLI tools and automation systems that engineering teams use daily to ship faster and more reliably.
                        </p>
                    </div>
                    <div>
                        <h3 style={{fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa'}}>Modern Integration</h3>
                        <p style={{color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6}}>
                            Pioneering AI-enhanced developer workflows with Model Context Protocol integrations and cross-platform tooling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
