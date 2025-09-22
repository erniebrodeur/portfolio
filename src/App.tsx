import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutPage from './components/AboutPage';

export default function App() {
    return (
        <div style={{minHeight: '100vh'}}>
            <Header />
            <Hero />
            <About />
            <Projects />
            <AboutPage />
            <Contact />

            <footer style={{paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center', color: '#9ca3af'}}>
                <p>&copy; 2025 Ernie Brodeur. All rights reserved.</p>
            </footer>
        </div>
    );
}