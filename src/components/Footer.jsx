import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/Aziz-Ullah-Tarek', color: 'hover:text-white' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aziz-ullah-tarek/', color: 'hover:text-cyan-400' },
        { icon: FaFacebook, href: 'https://www.facebook.com/share/17NZg5CjPb/', color: 'hover:text-blue-400' },
        { icon: FaDiscord, href: 'https://discord.com', color: 'hover:text-purple-400' },
    ];

    return (
        <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800/50 py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo and Name */}
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-cyan-400/30">
                                <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    AUT
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Aziz Ullah Tarek</p>
                            <p className="text-gray-500 text-xs">© {currentYear} All rights reserved</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-2 bg-slate-800/50 text-gray-400 ${social.color} rounded-lg transition-colors duration-300`}
                            >
                                <social.icon className="text-lg" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;