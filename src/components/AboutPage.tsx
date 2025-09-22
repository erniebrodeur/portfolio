export default function AboutPage() {
    return (
        <section style={{
            paddingTop: '3rem', 
            paddingBottom: '3rem', 
            backgroundColor: '#1f2937',
            borderTop: '1px solid #374151'
        }}>
            <div style={{
                maxWidth: '800px', 
                margin: '0 auto', 
                padding: '0 1rem',
                textAlign: 'center'
            }}>
                <h3 style={{
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#e5e7eb'
                }}>
                    About This Page
                </h3>
                <p style={{
                    color: '#9ca3af', 
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    This portfolio was crafted with the assistance of Claude Sonnet and built through what some might call 
                    "vibe coding" – an intuitive, iterative approach to development that prioritizes feel and flow over 
                    rigid planning. The result is a clean, responsive showcase built with React and TypeScript.
                </p>
            </div>
        </section>
    );
}