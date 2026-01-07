import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);

    // Initialize current image index for each project
    useEffect(() => {
        const initialIndexes = {};
        projectsData.forEach(project => {
            initialIndexes[project.id] = 0;
        });
        setCurrentImageIndex(initialIndexes);
    }, []);

    // Auto-slide images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => {
                const newIndexes = { ...prev };
                projectsData.forEach(project => {
                    newIndexes[project.id] = 
                        (prev[project.id] + 1) % project.images.length;
                });
                return newIndexes;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevImage = (projectId, e) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: prev[projectId] === 0 
                ? projectsData.find(p => p.id === projectId).images.length - 1 
                : prev[projectId] - 1
        }));
    };

    const handleNextImage = (projectId, e) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % 
                projectsData.find(p => p.id === projectId).images.length
        }));
    };

    return (
        <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore my latest work and side projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 relative"
                        >
                            {/* Decorative gradient orbs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                            
                            <div className="relative z-10 md:flex md:items-center gap-6 p-6">
                                {/* Image Carousel */}
                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                    className="relative md:w-1/2 h-80 md:h-96 overflow-hidden rounded-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/30 transition-all duration-500"
                                >
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex[project.id]}
                                            src={project.images[currentImageIndex[project.id] || 0]}
                                            alt={`${project.title} screenshot ${currentImageIndex[project.id] + 1}`}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.7 }}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </AnimatePresence>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                                    {/* Image Navigation Arrows */}
                                    <motion.button
                                        onClick={(e) => handlePrevImage(project.id, e)}
                                        whileHover={{ scale: 1.1, x: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-cyan-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg"
                                    >
                                        <FaChevronLeft />
                                    </motion.button>
                                    <motion.button
                                        onClick={(e) => handleNextImage(project.id, e)}
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-cyan-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg"
                                    >
                                        <FaChevronRight />
                                    </motion.button>

                                    {/* Image Indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/70 backdrop-blur-sm px-4 py-2 rounded-full">
                                        {project.images.map((_, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ scale: 0.8 }}
                                                animate={{ 
                                                    scale: idx === (currentImageIndex[project.id] || 0) ? 1 : 0.8,
                                                }}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    idx === (currentImageIndex[project.id] || 0)
                                                        ? 'w-10 bg-cyan-400 shadow-lg shadow-cyan-400/50'
                                                        : 'w-2 bg-gray-400/50'
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Project number badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.5 }}
                                        className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-400/50"
                                    >
                                        {index + 1}
                                    </motion.div>
                                </motion.div>

                                {/* Project Info */}
                                <div className="md:w-1/2 mt-6 md:mt-0">
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.4 }}
                                        className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.5 }}
                                        className="text-gray-300 text-base mb-6 leading-relaxed"
                                    >
                                        {project.shortDescription}
                                    </motion.p>

                                    {/* Technologies */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.6 }}
                                        className="mb-8"
                                    >
                                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.2 + 0.7 + idx * 0.05 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-4 py-2 bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-cyan-300 text-sm rounded-lg border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/30 cursor-default"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.8 }}
                                        className="flex flex-wrap gap-3"
                                    >
                                        <motion.button
                                            onClick={() => setSelectedProject(project)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 group/btn shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
                                        >
                                            <span>Explore Details</span>
                                            <HiArrowRight className="text-xl group-hover/btn:translate-x-2 transition-transform duration-300" />
                                        </motion.button>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-6 py-3 bg-slate-700/80 hover:bg-slate-600 text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border border-slate-600 hover:border-cyan-400/50"
                                            title="View Code"
                                        >
                                            <FaGithub className="text-xl" />
                                            <span className="hidden sm:inline">Code</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, rotate: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-6 py-3 bg-slate-700/80 hover:bg-slate-600 text-white font-medium rounded-xl transition-all duration-300 backdrop-blur-sm border border-slate-600 hover:border-cyan-400/50"
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt className="text-lg" />
                                            <span className="hidden sm:inline">Live</span>
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-gradient-to-b from-slate-900 to-slate-800 z-50 overflow-y-auto shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-red-500 text-white rounded-full transition-all duration-300 z-10"
                            >
                                <FaTimes className="text-xl" />
                            </button>

                            <div className="p-8">
                                {/* Project Title */}
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    {selectedProject.title}
                                </h2>

                                {/* About Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">About</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {selectedProject.about}
                                    </p>
                                </div>

                                {/* Technologies Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg border border-cyan-400/30 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Challenges</h3>
                                    <ul className="space-y-3">
                                        {selectedProject.challenges.map((challenge, idx) => (
                                            <li key={idx} className="flex gap-3 text-gray-300">
                                                <span className="text-cyan-400 mt-1">•</span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Improvements Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Improvements</h3>
                                    <ul className="space-y-3">
                                        {selectedProject.improvements.map((improvement, idx) => (
                                            <li key={idx} className="flex gap-3 text-gray-300">
                                                <span className="text-cyan-400 mt-1">•</span>
                                                <span>{improvement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
                                    >
                                        <FaGithub className="text-xl" />
                                        <span>View Code</span>
                                    </a>
                                    <a
                                        href={selectedProject.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;