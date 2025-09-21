import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="pt-16 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Ernie Brodeur
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Full Stack Developer & Designer
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Building exceptional digital experiences with modern technologies
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={28} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={28} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}