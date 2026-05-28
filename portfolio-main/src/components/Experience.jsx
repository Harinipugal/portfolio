import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Mic, Users, GitBranch, Zap } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { useTheme } from '../context/ThemeContext';

const icons = {
    "Hackathon Participant": Award,
    "Webinar Speaker": Mic,
    "Open Source Contributor": GitBranch
};

const Experience = memo(() => {
    const { isDark } = useTheme();

    return (
        <section id="experience" className={`section-padding relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950' : 'bg-gradient-to-b from-white via-slate-50/95 to-white'}`}>
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <>
                        <div className="absolute top-[-10%] right-[-15%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] mix-blend-screen" />
                        <div className="absolute bottom-[-15%] left-[5%] w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[100px] mix-blend-screen" />
                        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen opacity-50" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-10%] right-[-15%] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] mix-blend-overlay" />
                        <div className="absolute bottom-[-15%] left-[5%] w-[450px] h-[450px] bg-cyan-400/30 rounded-full blur-[100px] mix-blend-overlay" />
                        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-purple-400/25 rounded-full blur-[80px] mix-blend-overlay opacity-60" />
                    </>
                )}
            </div>
            
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <span className={`font-medium tracking-wider uppercase mb-2 text-sm flex items-center gap-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        <Zap size={16} />
                        Timeline
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Journey & <span className={isDark ? 'text-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600'}>Achievements</span>
                    </h2>
                    <p className={`text-lg max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                        A timeline of milestones, contributions, and continuous learning in my professional journey.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Timeline Line */}
                    <div className={`absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 ${isDark ? 'bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent' : 'bg-gradient-to-b from-cyan-400/50 via-purple-500/50 to-transparent'}`} />

                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, index) => {
                            const Icon = icons[exp.title] || Users;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-[11px] md:left-1/2 top-0 md:top-1/2 w-[18px] h-[18px] rounded-full border-[3px] z-20 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(34,211,238,0.5)] ${isDark ? 'bg-slate-950 border-cyan-400' : 'bg-white border-cyan-500'}`} />

                                    {/* Spacer for desktop layout */}
                                    <div className="hidden md:block w-5/12" />

                                    {/* Content Card */}
                                    <div className="w-full md:w-5/12 pl-12 md:pl-0">
                                        <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] group relative overflow-hidden ${isDark ? 'glass-panel border-white/5 hover:border-cyan-500/30' : 'bg-white/50 border-slate-200/50 hover:border-cyan-400/40'}`}>
                                            {/* Decorative gradient blur */}
                                            <div className={`absolute top-0 right-0 w-24 h-24 blur-[40px] rounded-full -mr-10 -mt-10 transition-all ${isDark ? 'bg-cyan-500/10 group-hover:bg-cyan-500/20' : 'bg-cyan-400/15 group-hover:bg-cyan-400/25'}`} />

                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`p-3 rounded-lg border shadow-inner ${isDark ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-white/5 text-cyan-400' : 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border-cyan-400/30 text-cyan-600'}`}>
                                                    <Icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-slate-900/50 border border-white/5 text-slate-400' : 'bg-slate-200/40 border border-slate-300/40 text-slate-700'}`}>
                                                    <Calendar size={12} />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>

                                            <h3 className={`text-xl md:text-2xl font-bold font-display mb-3 transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'}`}>
                                                {exp.title}
                                            </h3>

                                            {Array.isArray(exp.description) ? (
                                                <ul className={`text-sm md:text-base leading-relaxed list-none space-y-2.5 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2.5">
                                                            <span className={`mt-2 shrink-0 w-1.5 h-1.5 rounded-full ${isDark ? 'bg-cyan-500' : 'bg-cyan-500'}`} />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                                                    {exp.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
