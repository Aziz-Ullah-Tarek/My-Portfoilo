import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll effect and active section detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Detect which section is currently in view
            const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Left - Logo "AUT" */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                        <div className="relative group cursor-pointer">
                            {/* Glowing background effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                            
                            {/* Logo */}
                            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-300">
                                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    AUT
                                </span>
                            </div>

                            {/* Decorative dots */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                        </div>
                    </motion.div>

                    {/* Center - Navigation Menu (Desktop) */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => {
                            const sectionId = item.href.replace('#', '');
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg
                                        ${isActive
                                            ? 'text-cyan-400 bg-slate-800/50' 
                                            : 'text-gray-300 hover:text-cyan-400'
                                        } hover:bg-slate-800/50`}
                                >
                                    {item.name}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Right - Resume Button (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <a
                            href="/Resume.pdf"
                            download="Aziz-Ullah-Tarek-Resume.pdf"
                            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                            <span>Resume</span>
                            <HiDownload className="text-xl group-hover:animate-bounce" />
                        </a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors duration-300"
                    >
                        {isOpen ? (
                            <HiX className="w-7 h-7" />
                        ) : (
                            <HiMenuAlt3 className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-slate-900/98 backdrop-blur-md"
            >
                <div className="px-4 py-6 space-y-3">
                    {navItems.map((item) => {
                        const sectionId = item.href.replace('#', '');
                        const isActive = activeSection === sectionId;
                        
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300
                                    ${isActive
                                        ? 'text-cyan-400 bg-slate-800/50'
                                        : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                                    }`}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                    
                    {/* Mobile Resume Button */}
                    <a
                        href="/Resume.pdf"
                        download="Aziz-Ullah-Tarek-Resume.pdf"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300"
                    >
                        <span>Resume</span>
                        <HiDownload className="text-xl" />
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;