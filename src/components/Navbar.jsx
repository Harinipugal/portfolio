import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Code } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { themeClass } from '../utils/themeClass';

const Navbar = memo(() => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? isDark 
                        ? 'glass-nav py-4 border-b border-white/5' 
                        : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-200/50'
                    : isDark
                        ? 'bg-transparent py-6'
                        : 'bg-transparent py-6'
            }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    className={`cursor-pointer group relative ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                    <span className="flex items-center gap-3">
                        <Code size={26} strokeWidth={4} className={`${isDark ? 'text-blue-400' : 'text-indigo-600'} transition-colors`} aria-hidden="true" />
                        <span className={`text-2xl font-bold font-display tracking-tighter`}>
                            P.<span className={`${isDark ? 'text-blue-400 group-hover:text-indigo-400' : 'text-indigo-600 group-hover:text-blue-600'} transition-colors`}> Harini</span>
                        </span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.title}
                            to={link.href}
                            smooth={true}
                            offset={-80}
                            className={`text-sm font-medium transition-colors cursor-pointer relative group ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
                        >
                            {link.title}
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-cyan-600 to-purple-600'} group-hover:w-full transition-all duration-300`}></span>
                        </Link>
                    ))}
                </div>

                {/* Socials / CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://github.com/Harinipugal" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isDark ? 'bg-white/5 border border-white/10 text-slate-400 hover:bg-slate-500/10 hover:border-slate-500/30 hover:text-slate-200' : 'bg-slate-200/30 border border-slate-300/50 text-slate-600 hover:bg-slate-300/30 hover:border-slate-400 hover:text-slate-900'}`} aria-label="Visit GitHub profile">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/harini--p/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isDark ? 'bg-white/5 border border-white/10 text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400' : 'bg-slate-200/30 border border-slate-300/50 text-slate-600 hover:bg-blue-200/50 hover:border-blue-400/50 hover:text-blue-700'}`} aria-label="Visit LinkedIn profile">
                        <Linkedin size={18} />
                    </a>


                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-all ${isDark ? 'bg-white/5 border border-white/10 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/30' : 'bg-slate-200/30 border border-slate-300/50 text-amber-600 hover:bg-amber-200/50 hover:border-amber-400/50'}`}
                        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Link to="contact" smooth={true} offset={-80}>
                        <button className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${isDark ? 'border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50 text-blue-400' : 'border border-indigo-500/40 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-500 text-indigo-700 hover:text-indigo-800'}`}>
                            Let's Talk
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isDark ? 'text-slate-100' : 'text-slate-900'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden overflow-hidden ${isDark ? 'glass-nav border-b border-white/10' : 'bg-white/70 backdrop-blur-md border-b border-slate-200/50'}`}
                        role="navigation"
                        aria-label="Mobile navigation"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.href}
                                    smooth={true}
                                    offset={-80}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
                                >
                                    {link.title}
                                </Link>
                            ))}
                            <div className="flex gap-6 mt-4">
                                <a href="https://github.com/Harinipugal" target="_blank" rel="noopener noreferrer">
                                    <Github className={isDark ? 'text-slate-400' : 'text-slate-600'} size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/harini--p/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className={isDark ? 'text-slate-400' : 'text-slate-600'} size={20} />
                                </a>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
