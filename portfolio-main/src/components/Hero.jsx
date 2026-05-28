import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Terminal } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

// Inline SVG tech icons
const ReactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
);

const MongoIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#4DB33D">
        <path d="M12 2C12 2 7 8.5 7 13.5a5 5 0 0 0 4.5 4.97V22h1v-3.53A5 5 0 0 0 17 13.5C17 8.5 12 2 12 2z" />
    </svg>
);

const JsIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <polygon points="12,2 21,7.2 21,17.8 12,23 3,17.8 3,7.2" fill="#339933" />
        <text x="12" y="15.5" fill="#ffffff" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">JS</text>
    </svg>
);

const PythonIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 2C8.5 2 8 3.5 8 5v2h4v1H6C4 8 2.5 9.5 2 12s.5 5 2 6h2v-2.5C6 14 7 13 8.5 13H14c1.5 0 2.5-1 2.5-2.5V6C16.5 3.5 15 2 12 2zm-1.5 2c.8 0 1.5.7 1.5 1.5S11.3 7 10.5 7 9 6.3 9 5.5 9.7 4 10.5 4z" fill="#3776AB"/>
        <path d="M12 22c3.5 0 4-1.5 4-3v-2h-4v-1h6c2 0 3.5-1.5 4-4s-.5-5-2-6h-2v2.5C18 10 17 11 15.5 11H9.5C8 11 7 12 7 13.5V18c0 2.5 1.5 4 5 4zm1.5-2c-.8 0-1.5-.7-1.5-1.5S12.7 17 13.5 17s1.5.7 1.5 1.5S14.3 20 13.5 20z" fill="#FFD43B"/>
    </svg>
);

const FloatingIcon = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.6 }}
        className={`absolute w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center ${className}`}
        style={{ boxShadow: '0 8px 32px rgba(99,102,241,0.15)' }}
    >
        {children}
    </motion.div>
);

const Sparkle = ({ className }) => (
    <div className={`absolute ${className}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L9 7H16L10 11L12 16L8 12L4 16L6 11L0 7H7L8 0Z" fill="#6366F1" fillOpacity="0.5" />
        </svg>
    </div>
);

const Hero = memo(() => {
    const { isDark } = useTheme();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-10">
            {/* Background */}
            <div className={`absolute inset-0 z-0 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-indigo-50 via-white to-blue-50'}`} />

            {/* Soft blob accents */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <>
                        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob" />
                        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
                        <div className="absolute bottom-[-10%] left-[25%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[100px] animate-blob" />
                        <div className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
                        <div className="absolute bottom-[-5%] left-[20%] w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
                    </>
                )}
            </div>

            {/* Floating Tech Icons — Left */}
            <div className="hidden lg:block">
                <FloatingIcon className="left-[8%] top-[30%]" delay={0.3}>
                    <ReactIcon />
                </FloatingIcon>
                <FloatingIcon className="left-[12%] top-[58%]" delay={0.5}>
                    <JsIcon />
                </FloatingIcon>
            </div>

            {/* Floating Tech Icons — Right */}
            <div className="hidden lg:block">
                <FloatingIcon className="right-[8%] top-[28%]" delay={0.4}>
                    <MongoIcon />
                </FloatingIcon>
                <FloatingIcon className="right-[12%] top-[58%]" delay={0.6}>
                    <PythonIcon />
                </FloatingIcon>
            </div>

            {/* Sparkle decorations */}
            <Sparkle className="left-[22%] top-[22%]" />
            <Sparkle className="right-[22%] top-[20%]" />
            <div className={`absolute left-[18%] top-[52%] w-3 h-3 rounded-full ${isDark ? 'bg-blue-400/50' : 'bg-indigo-400/60'}`} />
            <div className={`absolute right-[20%] top-[55%] w-2 h-2 rounded-full ${isDark ? 'bg-indigo-400/50' : 'bg-blue-400/60'}`} />
            <div className={`absolute left-[38%] top-[15%] w-2 h-2 rounded-full ${isDark ? 'bg-violet-400/50' : 'bg-violet-400/50'}`} />
            <div className={`absolute right-[35%] top-[80%] w-3 h-3 rounded-full ${isDark ? 'bg-blue-400/40' : 'bg-blue-300/60'}`} />

            {/* Main Content */}
            <div className="container-custom relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <div className={`mb-6 inline-flex items-center gap-2 py-2 px-5 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-md transition-all ${isDark ? 'bg-blue-950/40 border border-blue-500/30 text-blue-400' : 'bg-white/70 border border-indigo-300/60 text-indigo-600'}`}>
                        <Terminal size={13} />
                        <span>MERN Stack Developer</span>
                    </div>

                    {/* Greeting */}
                    <span className={`text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-3 ${isDark ? 'text-blue-400' : 'text-indigo-500'}`}>
                        HI, I'M
                    </span>

                    {/* Name — large gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-display tracking-tight mb-8 leading-none ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600'}`}
                    >
                        P. Harini
                    </motion.h1>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className={`text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl mx-auto mb-6 leading-snug ${isDark ? 'text-slate-200' : 'text-slate-800'}`}
                    >
                        Building Intelligent, Scalable &amp;{' '}
                        <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
                            Efficient Web Solutions.
                        </span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        I build modern{' '}
                        <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>web applications</span>{' '}
                        and{' '}
                        <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>AI solutions</span>{' '}
                        that solve real-world problems with{' '}
                        <span className={`font-medium ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>clean code</span>{' '}
                        and{' '}
                        <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>great user experiences</span>.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                    >
                        <Link to="projects" smooth={true} offset={-80} className="w-full sm:w-auto">
                            <button className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer ${isDark ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white shadow-[0_0_24px_rgba(99,102,241,0.4)]' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_24px_rgba(99,102,241,0.3)]'}`}>
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <a href={HERO_CONTENT.resumeLink} download="Harini_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className={`w-full sm:w-auto px-8 py-4 rounded-full font-medium text-base transition-all flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-1 ${isDark ? 'bg-white/5 border border-white/15 hover:bg-blue-500/10 hover:border-blue-400/30 text-slate-200' : 'bg-white/80 border border-slate-300/60 hover:bg-white hover:border-indigo-400/50 text-slate-700'}`}>
                                <Download size={18} className={`transition-colors ${isDark ? 'group-hover:text-blue-400' : 'group-hover:text-indigo-600'}`} />
                                Download Resume
                            </button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
