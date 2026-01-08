import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiMail, HiPhone } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaGithub, FaDiscord, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        // EmailJS configuration
        const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
        const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
        const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
        
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'azizullaht2002@gmail.com'
                },
                publicKey
            );
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const socialLinks = [
        { 
            icon: FaFacebook, 
            href: 'https://www.facebook.com/share/17NZg5CjPb/', 
            color: 'from-red-500 to-red-600',
            delay: 0.2 
        },
        { 
            icon: FaLinkedin, 
            href: 'https://www.linkedin.com/in/aziz-ullah-tarek/', 
            color: 'from-blue-500 to-blue-600',
            delay: 0.3 
        },
        { 
            icon: FaDiscord, 
            href: 'https://discord.com', 
            color: 'from-cyan-500 to-teal-500',
            delay: 0.4 
        },
        { 
            icon: FaGithub, 
            href: 'https://github.com/Aziz-Ullah-Tarek', 
            color: 'from-purple-500 to-pink-500',
            delay: 0.5 
        },
    ];

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                />
                {/* Floating stars */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2 
                        className="text-5xl md:text-6xl font-bold mb-4"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundImage: 'linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa, #22d3ee)',
                            backgroundSize: '200% 200%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Contact Me
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                        viewport={{ once: true }}
                    >
                        {/* Let's Connect */}
                        <motion.div 
                            className="mb-12"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                Let's Connect
                                <motion.span
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-4xl"
                                >
                                    ✨
                                </motion.span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                I'd love to hear from you! Whether you have a question, a project idea, 
                                or just want to say hello, feel free to reach out using the form or via 
                                the contact details provided.
                            </p>
                        </motion.div>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-12">
                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                whileHover={{ x: 10, scale: 1.05 }}
                                className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                                >
                                    <HiHome className="text-2xl" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-1">Address:</h4>
                                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                whileHover={{ x: 10, scale: 1.05 }}
                                className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                                >
                                    <HiMail className="text-2xl" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-1">My Email:</h4>
                                    <a href="mailto:azizullaht2002@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                        azizullaht2002@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                whileHover={{ x: 10, scale: 1.05 }}
                                className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                            >
                                <motion.div 
                                    whileHover={{ rotate: [0, -15, 15, -15, 15, 0], scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                                >
                                    <HiPhone className="text-2xl" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-1">Call Me Now:</h4>
                                    <a href="tel:+8801643884854" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                        +8801643884854
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links - Simple design */}
                        <div className="flex justify-center gap-6 mt-8">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} p-0.5 shadow-lg hover:scale-110 transition-transform duration-300`}
                                >
                                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-900 transition-colors">
                                        <social.icon className="text-2xl text-white" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                        viewport={{ once: true }}
                    >
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Name Input */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02, borderColor: '#22d3ee' }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                                />
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02, borderColor: '#22d3ee' }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                                />
                            </motion.div>

                            {/* Message Textarea */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02, borderColor: '#22d3ee' }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="6"
                                    required
                                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none backdrop-blur-sm"
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ 
                                    scale: isSubmitting ? 1 : 1.05,
                                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)'
                                }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-400/30 flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <motion.span
                                    animate={{
                                        x: isSubmitting ? 0 : [0, 5, 0],
                                        rotate: isSubmitting ? 360 : 0,
                                    }}
                                    transition={{
                                        duration: isSubmitting ? 1 : 1.5,
                                        repeat: isSubmitting ? Infinity : Infinity,
                                    }}
                                >
                                    <FaPaperPlane className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                                </motion.span>
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            </motion.button>
                            
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center"
                                >
                                    ✗ Failed to send message. Please try again or email me directly.
                                </motion.div>
                            )}
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
