export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-64 h-64 mx-auto bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                            EB
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-300 mb-6">
                            I'm a passionate developer with expertise in modern web technologies.
                            I love creating innovative solutions and turning ideas into reality.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Frontend</h3>
                                <p className="text-gray-300 text-sm">React, Vue, TypeScript</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Backend</h3>
                                <p className="text-gray-300 text-sm">Node.js, Python, Go</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}