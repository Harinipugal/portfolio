import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = memo(() => {
    const { isDark } = useTheme();

    return (
        <section id="contact" className={`section-padding relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950' : 'bg-gradient-to-b from-white via-slate-50/95 to-white'}`}>
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <>
                        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] mix-blend-screen" />
                        <div className="absolute bottom-[-10%] right-[-15%] w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[100px] mix-blend-screen" />
                        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen opacity-50" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] mix-blend-overlay" />
                        <div className="absolute bottom-[-10%] right-[-15%] w-[450px] h-[450px] bg-cyan-400/30 rounded-full blur-[100px] mix-blend-overlay" />
                        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-purple-400/25 rounded-full blur-[80px] mix-blend-overlay opacity-60" />
                    </>
                )}
            </div>
            
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <span className={`font-medium tracking-wider uppercase mb-2 text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Get In Touch</span>
                    <h2 className={`text-3xl md:text-5xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Let's <span className={isDark ? 'text-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600'}>Connect</span>
                    </h2>
                    <p className={`text-lg mt-4 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team. Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                >
                    {/* Email Card */}
                    <motion.a
                        href="mailto:harini.pug@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <div className={`p-8 rounded-2xl border transition-all h-full hover:-translate-y-2 flex flex-col items-center text-center ${isDark ? 'glass-panel border-white/5 hover:border-blue-500/30' : 'bg-white/50 border-slate-200/50 hover:border-blue-400/40'}`}>
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400' : 'bg-gradient-to-br from-blue-400/30 to-indigo-400/30 text-blue-600'}`}>
                                <Mail size={28} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Email</h3>
                            <p className={`text-sm mb-4 break-all ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>harini.pug@gmail.com</p>
                            <p className={`text-xs mt-auto ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Click to send an email</p>
                        </div>
                    </motion.a>

                    {/* GitHub Card */}
                    <motion.a
                        href="https://github.com/Harinipugal"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group"
                    >
                        <div className={`p-8 rounded-2xl border transition-all h-full hover:-translate-y-2 flex flex-col items-center text-center ${isDark ? 'glass-panel border-white/5 hover:border-slate-500/30' : 'bg-white/50 border-slate-200/50 hover:border-slate-400/40'}`}>
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDark ? 'bg-gradient-to-br from-slate-500/20 to-gray-500/20 text-slate-300' : 'bg-gradient-to-br from-slate-400/30 to-gray-400/30 text-slate-700'}`}>
                                <Github size={28} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>GitHub</h3>
                            <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>View my repositories</p>
                            <p className={`text-xs mt-auto ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>@Harinipugal</p>
                        </div>
                    </motion.a>

                    {/* LinkedIn Card */}
                    <motion.a
                        href="https://www.linkedin.com/in/harini--p/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group"
                    >
                        <div className={`p-8 rounded-2xl border transition-all h-full hover:-translate-y-2 flex flex-col items-center text-center ${isDark ? 'glass-panel border-white/5 hover:border-indigo-500/30' : 'bg-white/50 border-slate-200/50 hover:border-indigo-400/40'}`}>
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDark ? 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20 text-indigo-400' : 'bg-gradient-to-br from-indigo-400/30 to-blue-400/30 text-indigo-600'}`}>
                                <Linkedin size={28} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>LinkedIn</h3>
                            <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>Connect with me</p>
                            <p className={`text-xs mt-auto ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>harini--p</p>
                        </div>
                    </motion.a>


                </motion.div>
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact;
