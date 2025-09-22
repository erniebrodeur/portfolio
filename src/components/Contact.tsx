import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="px-4 py-12 bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-lg mb-8 text-gray-300">
                    I'm always interested in new opportunities and interesting projects.
                </p>
                <div className="flex justify-center gap-8 flex-wrap">
                    <a
                        href="mailto:you@example.com"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                    <a
                        href="https://github.com/erniebrodeur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
                    >
                        <Github size={20} />
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg transition-colors"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}