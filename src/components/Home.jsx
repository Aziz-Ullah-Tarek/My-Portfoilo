import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';
import profilePic from '../assets/profile-pic.jpg';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const socialIcons = [
        { Icon: HiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:bg-cyan-500' },
        { Icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
        { Icon: FaGithub, href: socialLinks.github, label: 'GitHub', color: 'hover:bg-gray-700' },
        { Icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
    ];

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left space-y-6"
                    >
                        {/* Animated Title */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                                <TypeAnimation
                                    sequence={[
                                        'MERN Stack',
                                        1500,
                                        'Frontend',
                                        1500,
                                        'Full Stack',
                                        1500,
                                        'React',
                                        1500,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent"
                                    repeat={Infinity}
                                />
                                {' '}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Developer
                                </span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
                        >
                            I build scalable, high-performance web applications using{' '}
                            <span className="text-cyan-400 font-semibold">MongoDB</span>,{' '}
                            <span className="text-cyan-400 font-semibold">Express.js</span>,{' '}
                            <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
                            <span className="text-cyan-400 font-semibold">Node.js</span>, and modern frontend technologies.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
                        >
                            From crafting intuitive frontends to designing robust REST APIs and database architectures,
                            I deliver quality code that drives real impact.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
                        >
                            Passionate about solving complex challenges in fast-paced, collaborative environments.
                            Ready to build something exceptional together
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4 pt-4"
                        >
                            {socialIcons.map(({ Icon, href, label, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-3 bg-slate-800 rounded-lg text-gray-300 transition-all duration-300 ${color} hover:text-white hover:shadow-lg`}
                                    aria-label={label}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                        
                        {/* Image Container */}
                        <div className="relative z-10">
                            {/* Glowing Border Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                            
                            {/* Image */}
                            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                                <img
                                    src={profilePic}
                                    alt={personalInfo.name}
                                    className="w-full max-w-md h-auto object-cover"
                                />
                            </div>

                            {/* Floating Decorative Dots */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-sm"
                            ></motion.div>
                            
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 rounded-full blur-sm"
                            ></motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Home;