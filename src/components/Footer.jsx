import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
                            Made with 
                            <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <FaHeart className="text-red-500" />
                            </motion.span>
                            by <span className="text-cyan-400 font-semibold">Aziz Ullah Tarek</span>
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            © {currentYear} All rights reserved.
                        </p>
                    </motion.div>

                    {/* Right - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                    >
                        <motion.a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white rounded-lg transition-colors duration-300"
                        >
                            <FaGithub className="text-xl" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors duration-300"
                        >
                            <FaLinkedin className="text-xl" />
                        </motion.a>
                        <motion.a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-blue-400 rounded-lg transition-colors duration-300"
                        >
                            <FaFacebook className="text-xl" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;