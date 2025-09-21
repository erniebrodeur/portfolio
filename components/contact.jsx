import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
                <div className="bg-gray-900 rounded-lg p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
                            <p className="text-gray-400 mb-6">
                                I'm always interested in new opportunities and exciting projects.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail size={20} className="text-blue-400" />
                                    <span>your.email@example.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Github size={20} className="text-blue-400" />
                                    <span>github.com/yourusername</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Linkedin size={20} className="text-blue-400" />
                                    <span>linkedin.com/in/yourprofile</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}