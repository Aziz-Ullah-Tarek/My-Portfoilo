import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            id: 1,
            period: "2022 - 2026",
            degree: "Bachelor of Science in Computer Science",
            institution: "Jagannath University",
            description: "Focused on software engineering, web development, and AI research. Graduated with honors.",
            icon: "🎓"
        },
        {
            id: 2,
            period: "2018 - 2020",
            degree: "Higher Secondary Certificate",
            institution: "Hazigonj Degree College",
            description: "Specialized in Science stream with strong emphasis on mathematics and physics.",
            icon: "📚"
        },
        {
            id: 3,
            period: "2016 - 2018",
            degree: "Secondary School Certificate",
            institution: "Kamranga High School and College",
            description: "Completed secondary education with distinction in science subjects.",
            icon: "🏫"
        }
    ];

    return (
        <section id="education" className="relative py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Animated Background decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 30, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    y: [0, 40, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
            ></motion.div>
            {/* Floating Educational Icons */}
            {['📖', '🎓', '📚', '🏆', '✏️'].map((icon, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -35, 0],
                        x: [0, Math.sin(i) * 15, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4.5 + i * 1.2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut"
                    }}
                    className="absolute text-4xl"
                    style={{
                        left: `${12 + i * 19}%`,
                        top: `${15 + i * 10}%`,
                    }}
                >
                    {icon}
                </motion.div>
            ))}

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-3"
                    >
                        Education
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg"
                    >
                        My academic journey and qualifications
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated Timeline Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500 hidden md:block"
                    ></motion.div>

                    {/* Education Items */}
                    <div className="space-y-8">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col`}
                            >
                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.03, 
                                        y: -8,
                                        rotateY: index % 2 === 0 ? 2 : -2
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`w-full md:w-5/12 ${
                                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                    }`}
                                >
                                    <div className="relative bg-slate-800/60 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-5 shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group overflow-hidden">
                                        {/* Animated gradient overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
                                            animate={{
                                                x: ['-100%', '100%'],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        ></motion.div>

                                        <div className="relative z-10">
                                            {/* Period Badge */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                                                viewport={{ once: true }}
                                                className="flex items-center gap-2 mb-3"
                                            >
                                                <motion.span
                                                    animate={{ rotate: [0, 10, -10, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                                    className="text-3xl"
                                                >
                                                    {item.icon}
                                                </motion.span>
                                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                                                    {item.period}
                                                </span>
                                            </motion.div>

                                            {/* Degree */}
                                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 mb-2 group-hover:from-cyan-300 group-hover:to-cyan-200 transition-all">
                                                {item.degree}
                                            </h3>

                                            {/* Institution */}
                                            <p className="text-cyan-400/80 font-medium mb-2 flex items-center gap-2 text-sm">
                                                <motion.svg
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </motion.svg>
                                                {item.institution}
                                            </p>

                                            {/* Description */}
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Animated Timeline Dot */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.15 + 0.2,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            boxShadow: [
                                                "0 0 10px rgba(34, 211, 238, 0.5)",
                                                "0 0 20px rgba(34, 211, 238, 0.8)",
                                                "0 0 10px rgba(34, 211, 238, 0.5)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.5
                                        }}
                                        className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-900"
                                    ></motion.div>
                                </motion.div>

                                {/* Spacer for alternating layout */}
                                <div className="w-full md:w-5/12 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;