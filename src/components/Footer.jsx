import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = memo(() => {
    const { isDark } = useTheme();

    return (
        <footer className={`relative border-t ${isDark ? 'border-white/5 bg-gradient-to-b from-slate-950/50 to-slate-950' : 'border-slate-200/50 bg-gradient-to-b from-white to-indigo-50/40'}`}>
            <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-t from-blue-500/5 to-transparent' : 'bg-gradient-to-t from-blue-100/30 to-transparent'}`} />

            <div className="container-custom relative z-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className={`text-2xl font-bold font-display flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            <Code size={24} strokeWidth={4} className={isDark ? 'text-blue-400' : 'text-indigo-600'} aria-hidden="true" />
                            P. Harini
                        </h3>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Frontend Developer & Full-Stack Enthusiast crafting responsive, intelligent, and scalable web solutions.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {['home', 'about', 'skills', 'projects', 'contact'].map(link => (
                                <a
                                    key={link}
                                    href={`#${link}`}
                                    className={`capitalize transition-colors text-sm ${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-indigo-600'}`}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h4>
                        <div className="flex gap-3">
                            <a
                                href="mailto:harini.pug@gmail.com"
                                className={`p-2.5 rounded-lg border transition-all ${isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'}`}
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                            <a
                                href="https://github.com/Harinipugal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-lg border transition-all ${isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-slate-500/10 hover:border-slate-400/30 hover:text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:border-slate-400 hover:text-slate-900'}`}
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harini--p/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-lg border transition-all ${isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600'}`}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            harini.pug@gmail.com
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r ${isDark ? 'from-transparent via-white/10 to-transparent' : 'from-transparent via-slate-300/50 to-transparent'} mb-8`} />

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
                >
                    <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        © {new Date().getFullYear()} P. Harini. All rights reserved.
                    </p>
                    <p className={`text-sm flex items-center justify-center gap-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        Built with <Heart size={14} className={isDark ? 'text-blue-400' : 'text-indigo-500'} /> using React &amp; Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
