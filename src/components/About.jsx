import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, aboutMe, skills } from '../data/portfolioData';

const About = () => {
    const [activeTab, setActiveTab] = useState('introduction');

    const tabs = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'skills', label: 'Skills' },
        { id: 'hobbies', label: 'Hobbies' },
    ];

    // Animated website previews for laptop screen
    const websiteImages = [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', // E-commerce
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // Dashboard
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', // Social Media
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', // Portfolio
    ];

    const websitePreview = [
        { type: 'E-Commerce', image: websiteImages[0] },
        { type: 'Dashboard', image: websiteImages[1] },
        { type: 'Social Media', image: websiteImages[2] },
        { type: 'Portfolio', image: websiteImages[3] },
    ];

    const [currentWebsite, setCurrentWebsite] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWebsite((prev) => (prev + 1) % websitePreview.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'introduction':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                                {personalInfo.name.split(' ')[0]}
                            </span>
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                            — a{' '}
                            <span className="text-cyan-400 font-semibold">frontend developer</span>{' '}
                            who loves building{' '}
                            <span className="text-cyan-400 font-semibold">smooth, clean web experiences</span>{' '}
                            and learning through challenges. Alongside web development, I've also explored{' '}
                            <span className="text-cyan-400 font-semibold">competitive programming</span>, which
                            helped me grow{' '}
                            <span className="text-cyan-400 font-semibold">
                                strong problem-solving habits and a deeper understanding of code
                            </span>
                            . I'm currently expanding my skills with the goal of becoming a{' '}
                            <span className="text-cyan-400 font-semibold">full stack developer</span>.
                        </p>
                    </motion.div>
                );

            case 'skills':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                                Technical Skills
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    HTML, CSS, JavaScript
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    React.js, Tailwind CSS
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    Git & GitHub
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    Basic Node.js & REST APIs
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                                Soft Skills
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    Problem-solving and analytical thinking
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    Creative eye for design and UI/UX
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    Strong communication and collaboration
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    Growth mindset and adaptability
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                );

            case 'hobbies':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                            Hobbies & Interests
                        </h3>
                        
                        <p className="text-gray-300 text-lg mb-4">Besides coding I enjoy :</p>
                        
                        <ul className="space-y-3 text-gray-300 text-lg">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                Reading books that expand perspective and spark curiosity
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                Learning new things that help me grow personally and creatively
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                Sketching and journaling as a form of quiet expression
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                Exploring calming and cozy visual aesthetics
                            </li>
                        </ul>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Laptop with Animated Screen */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

                        {/* Laptop Frame */}
                        <div className="relative z-10">
                            {/* Laptop Screen */}
                            <div className="relative bg-slate-800 rounded-t-2xl border-4 border-slate-700 p-3 shadow-2xl">
                                {/* Screen Content */}
                                <div className="bg-slate-900 rounded-lg overflow-hidden aspect-video relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentWebsite}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            {/* Website Image */}
                                            <img
                                                src={websitePreview[currentWebsite].image}
                                                alt={websitePreview[currentWebsite].type}
                                                className="w-full h-full object-cover"
                                            />
                                            
                                            {/* Overlay with gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                                            {/* Website Type Label */}
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-400/30">
                                                    <TypeAnimation
                                                        sequence={[websitePreview[currentWebsite].type, 2500]}
                                                        wrapper="span"
                                                        speed={50}
                                                        className="text-cyan-400 font-bold text-lg"
                                                        cursor={false}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Laptop Base */}
                            <div className="relative">
                                <div className="h-4 bg-slate-700 rounded-b-2xl"></div>
                                <div className="h-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-3xl mx-8"></div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-0 right-0 text-4xl"
                        >
                            ⚡
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            className="absolute bottom-0 left-0 text-4xl"
                        >
                            💻
                        </motion.div>
                    </motion.div>

                    {/* Right - Content with Tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Tabs */}
                        <div className="flex gap-4 mb-8 border-b border-slate-700">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                                        activeTab === tab.id
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-gray-300'
                                    }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <AnimatePresence mode="wait">
                            <div className="min-h-[400px]">{renderContent()}</div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;