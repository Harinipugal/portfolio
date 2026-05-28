import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants';
import { Code, MapPin, GraduationCap, Briefcase, Globe, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const StatCard = ({ icon: Icon, value, label, sub, delay, iconColor, isDark }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform ${isDark ? 'glass-panel border border-white/5' : 'bg-white/70 border border-slate-200/60 shadow-sm'}`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${iconColor}`}>
            <Icon size={22} />
        </div>
        <h4 className={`text-2xl font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</h4>
        <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{label}</p>
        {sub && <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{sub}</p>}
    </motion.div>
);

const About = memo(() => {
    const { isDark } = useTheme();

    return (
        <section id="about" className={`section-padding relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950' : 'bg-gradient-to-b from-white via-indigo-50/30 to-white'}`}>
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <>
                        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-300/25 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-indigo-300/25 rounded-full blur-[100px]" />
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
                    <span className={`font-medium tracking-wider uppercase mb-2 text-sm ${isDark ? 'text-blue-400' : 'text-indigo-600'}`}>Bit about me</span>
                    <h2 className={`text-3xl md:text-5xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        About <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>Myself?</span>
                    </h2>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* Left — Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`p-8 rounded-2xl relative group transition-colors ${isDark ? 'glass-panel border border-white/5 hover:border-blue-500/20' : 'bg-white/70 border border-slate-200/60 hover:border-blue-400/40 shadow-sm'}`}
                    >
                        <div className={`absolute top-0 right-0 p-5 transition-opacity ${isDark ? 'opacity-5 group-hover:opacity-10' : 'opacity-8 group-hover:opacity-15'}`}>
                            <Code size={52} className={isDark ? 'text-blue-400' : 'text-indigo-500'} />
                        </div>

                        {/* Role badge */}
                        <span className={`inline-block mb-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${isDark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-indigo-100 text-indigo-600 border border-indigo-200'}`}>
                            Frontend Developer &amp; Full-Stack Enthusiast
                        </span>

                        <h3 className={`text-2xl font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>P. Harini</h3>

                        <p className={`leading-relaxed mb-6 font-light text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {ABOUT_CONTENT.bio}
                        </p>

                        {/* Info rows */}
                        <div className="flex flex-col gap-3 mt-4">
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className={isDark ? 'text-blue-400 shrink-0' : 'text-indigo-500 shrink-0'} />
                                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Thanjavur, Tamil Nadu <span className={`text-xs ml-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>(Open to relocation)</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <GraduationCap size={16} className={isDark ? 'text-blue-400 shrink-0' : 'text-indigo-500 shrink-0'} />
                                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>B.Tech IT — Mohammad Sathak Engineering College</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase size={16} className={isDark ? 'text-blue-400 shrink-0' : 'text-indigo-500 shrink-0'} />
                                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>MERN Stack Developer Intern — SendNow (2025)</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Stats Grid */}
                    <div className="grid grid-cols-2 gap-5">
                        <StatCard
                            icon={GraduationCap}
                            value="8.6"
                            label="CGPA"
                            sub="B.Tech IT · 2022–2026"
                            delay={0.2}
                            iconColor={isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}
                            isDark={isDark}
                        />
                        <StatCard
                            icon={Smartphone}
                            value="100%"
                            label="Responsive"
                            sub="Mobile-first UIs"
                            delay={0.3}
                            iconColor={isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}
                            isDark={isDark}
                        />
                        <StatCard
                            icon={Briefcase}
                            value="2+"
                            label="Live Projects"
                            sub="Real-world deployed"
                            delay={0.4}
                            iconColor={isDark ? 'bg-violet-500/10 text-violet-400' : 'bg-violet-100 text-violet-600'}
                            isDark={isDark}
                        />
                        <StatCard
                            icon={Globe}
                            value="25%"
                            label="FAQ Automation"
                            sub="AI chatbot efficiency"
                            delay={0.5}
                            iconColor={isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}
                            isDark={isDark}
                        />

                        {/* Full-width card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className={`col-span-2 p-6 rounded-2xl flex items-start gap-5 transition-colors ${isDark ? 'glass-panel border border-white/5 hover:border-blue-500/20' : 'bg-white/70 border border-slate-200/60 hover:border-blue-400/40 shadow-sm'}`}
                        >
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                                <Code size={20} />
                            </div>
                            <div>
                                <h4 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Agile &amp; Collaborative</h4>
                                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Experienced in Agile workflows, Git version control, and shipping features end-to-end — from testing to production deployment.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;
