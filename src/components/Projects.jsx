import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Sparkles, Lock, Briefcase, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = memo(({ project, index, isDark }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full"
            >
        {isDark ? (
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-3xl group-hover:opacity-100 transition duration-700 blur opacity-0" />
        ) : null}
        <div className={`relative rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group/card ${isDark ? 'glass-panel border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]' : 'bg-white border border-slate-200/80 hover:border-cyan-400 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)]'} hover:-translate-y-3`}>
            {/* Project Image */}
            {project.image && (
                <div className={`relative w-full h-64 overflow-hidden border-b flex items-center justify-center p-6 ${isDark ? 'border-white/10 bg-gradient-to-br from-slate-800 to-slate-900' : 'border-slate-100 bg-gradient-to-br from-slate-100 to-slate-200'}`}>
                    <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover/card:scale-110 group-hover/card:-translate-y-1 transition-all duration-700 ease-out drop-shadow-2xl"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            )}

            <div className="p-6 flex flex-col h-fit">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl border transition-all ${isDark ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 border-white/5 group-hover/card:from-cyan-500/30 group-hover/card:to-blue-500/30' : 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20 text-cyan-600 border-cyan-400/30 group-hover/card:from-cyan-400/30 group-hover/card:to-blue-400/30'}`}>
                        <Code2 size={24} />
                    </div>
                    <div className="flex gap-2">
                        {project.isPrivate ? (
                            <button onClick={() => setShowModal(true)} className={`p-2 rounded-lg border transition-all cursor-pointer ${isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-red-400 hover:border-red-500/50' : 'bg-slate-200/30 border-slate-300/40 text-slate-600 hover:text-red-600 hover:border-red-400/50'}`} title="Private Repository">
                                <Github size={18} />
                            </button>
                        ) : (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-white/5 border-white/5 text-slate-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400' : 'bg-slate-200/30 border-slate-300/40 text-slate-700 hover:bg-cyan-200/30 hover:border-cyan-400/40 hover:text-cyan-600'}`} title="View Code">
                                <Github size={18} />
                            </a>
                        )}
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-white/5 border-white/5 text-slate-400 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400' : 'bg-slate-200/30 border-slate-300/40 text-slate-700 hover:bg-purple-200/30 hover:border-purple-400/40 hover:text-purple-600'}`} title="Live Demo">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <h3 className={`text-xl font-bold font-display mb-3 transition-colors ${isDark ? 'text-white group-hover/card:text-cyan-400' : 'text-slate-900 group-hover/card:text-cyan-600'}`}>
                        {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className={`text-xs font-medium px-2.5 py-1 rounded-full border ${isDark ? 'bg-white/5 text-slate-300 border-white/5' : 'bg-slate-200/40 text-slate-700 border-slate-300/40'}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>

    <AnimatePresence>
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        className={`absolute inset-0 backdrop-blur-sm ${isDark ? 'bg-slate-950/80' : 'bg-slate-900/40'}`}
                        onClick={() => setShowModal(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-sm p-8 rounded-3xl shadow-2xl border overflow-hidden z-10 ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}
                    >
                        <button 
                            onClick={() => setShowModal(false)}
                            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isDark ? 'text-slate-400 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                        >
                            <X size={20} />
                        </button>
                        
                        <div className="flex flex-col items-center text-center mt-2">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-inner ${isDark ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-400' : 'bg-gradient-to-br from-red-100 to-orange-100 text-red-600'}`}>
                                <Lock size={32} />
                            </div>
                            <h3 className={`text-2xl font-bold font-display mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Private Repository
                            </h3>
                            <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                This repository is closed source due to confidential client information and proprietary code.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40' : 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md hover:shadow-lg'}`}
                            >
                                Understood
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
        </>
    );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = memo(() => {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('client'); // 'client' or 'personal'

    return (
        <section id="projects" className={`section-padding relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950' : 'bg-gradient-to-b from-white via-slate-50/95 to-white'}`}>
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <>
                        <div className="absolute top-[-15%] right-[-15%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[120px] mix-blend-screen" />
                        <div className="absolute bottom-[-20%] left-[-15%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] mix-blend-screen" />
                        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px] mix-blend-screen opacity-50" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-15%] right-[-15%] w-[600px] h-[600px] bg-cyan-400/30 rounded-full blur-[120px] mix-blend-overlay" />
                        <div className="absolute bottom-[-20%] left-[-15%] w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[100px] mix-blend-overlay" />
                        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-blue-400/25 rounded-full blur-[80px] mix-blend-overlay opacity-60" />
                    </>
                )}
            </div>
            
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12 text-center"
                >
                    <span className={`font-medium tracking-wider uppercase mb-2 text-sm flex items-center gap-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        <Sparkles size={16} />
                        Portfolio
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Featured <span className={isDark ? 'text-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600'}>Work</span>
                    </h2>
                    <p className={`text-lg max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>Showcasing innovative projects built with cutting-edge technologies and best practices</p>
                </motion.div>

                {/* Tabs Section */}
                <div className="flex justify-center mb-16">
                    <div className={`inline-flex p-1.5 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-100/80 border border-slate-200/50 backdrop-blur-md'}`}>
                        <button
                            onClick={() => setActiveTab('client')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                activeTab === 'client' 
                                ? (isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-white text-cyan-700 shadow-md border border-slate-200/50') 
                                : (isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50')
                            }`}
                        >
                            <Briefcase size={18} />
                            Client Works
                        </button>
                        <button
                            onClick={() => setActiveTab('personal')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                activeTab === 'personal' 
                                ? (isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' : 'bg-white text-purple-700 shadow-md border border-slate-200/50') 
                                : (isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50')
                            }`}
                        >
                            <Code2 size={18} />
                            Personal Projects
                        </button>
                    </div>
                </div>

                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'client' && (
                            <motion.div
                                key="client-projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                <div className={`flex items-center gap-4 mb-8 pb-4 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br shadow-lg ${isDark ? 'from-cyan-500/20 to-blue-500/20 shadow-cyan-500/10' : 'from-cyan-400/20 to-blue-400/20 shadow-cyan-500/5'}`}>
                                        <Briefcase size={28} className={isDark ? 'text-cyan-400' : 'text-cyan-600'} />
                                    </div>
                                    <h3 className={`text-3xl md:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        Client Works
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {PROJECTS.filter(p => p.category === 'Client Work').map((project, index) => (
                                        <ProjectCard key={`client-${index}`} project={project} index={index} isDark={isDark} />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'personal' && (
                            <motion.div
                                key="personal-projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                <div className={`flex items-center gap-4 mb-8 pb-4 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br shadow-lg ${isDark ? 'from-purple-500/20 to-pink-500/20 shadow-purple-500/10' : 'from-purple-400/20 to-pink-400/20 shadow-purple-500/5'}`}>
                                        <Code2 size={28} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                                    </div>
                                    <h3 className={`text-3xl md:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        Personal Projects
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {PROJECTS.filter(p => p.category === 'Personal Project').map((project, index) => (
                                        <ProjectCard key={`personal-${index}`} project={project} index={index} isDark={isDark} />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
