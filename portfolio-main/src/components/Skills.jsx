import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { Monitor, Server, Database, Wrench, Star } from 'lucide-react';

const CATEGORY_META = {
    'Frontend': {
        icon: Monitor,
        desc: 'Building pixel-perfect, responsive and performance-optimized user interfaces.',
    },
    'Backend': {
        icon: Server,
        desc: 'Building robust APIs and server-side applications for seamless functionality.',
    },
    'Database': {
        icon: Database,
        desc: 'Managing and optimizing data storage solutions for speed and reliability.',
    },
    'Tools & Platforms': {
        icon: Wrench,
        desc: 'Development tools and platforms that streamline workflows and deployments.',
    },
    'Core Skills': {
        icon: Star,
        desc: 'Fundamental practices for delivering high-quality, scalable software solutions.',
    },
};

const Skills = memo(() => {
    const { isDark } = useTheme();
    const categories = [...new Set(SKILLS.map(s => s.category))];

    return (
        <section id="skills" className={`section-padding relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950' : 'bg-gradient-to-b from-white via-indigo-50/20 to-white'}`}>
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <>
                        <div className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[130px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/12 rounded-full blur-[110px]" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[130px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[110px]" />
                    </>
                )}
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-14 text-center"
                >
                    <span className={`font-medium tracking-wider uppercase mb-2 text-sm ${isDark ? 'text-blue-400' : 'text-indigo-600'}`}>Expertise</span>
                    <h2 className={`text-3xl md:text-5xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Technical{' '}
                        <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
                            Arsenal
                        </span>
                    </h2>
                    <p className={`text-base max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        A comprehensive toolkit of technologies and frameworks I've mastered to deliver exceptional solutions
                    </p>
                </motion.div>

                {/* Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {categories.map((category, catIndex) => {
                        const meta = CATEGORY_META[category] || CATEGORY_META['Frontend'];
                        const CategoryIcon = meta.icon;
                        const skills = SKILLS.filter(s => s.category === category);

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.08 }}
                                className={`relative rounded-2xl p-6 transition-all group overflow-hidden
                                    ${isDark
                                        ? 'bg-slate-900/50 border border-white/[0.07] hover:border-blue-500/25 backdrop-blur-sm'
                                        : 'bg-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                {/* Top gradient bar — unified blue/indigo */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500" />

                                {/* Card header */}
                                <div className="flex items-start gap-4 mb-5">
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                        <CategoryIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className={`text-base font-bold leading-tight mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            {category}
                                        </h3>
                                        <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                            {meta.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className={`mb-4 h-px ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />

                                {/* Skill pills — unified blue/indigo */}
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.88 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: catIndex * 0.05 + i * 0.04 }}
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all
                                                ${isDark
                                                    ? 'bg-blue-500/8 border-blue-500/20 text-blue-300 hover:bg-blue-500/15'
                                                    : 'bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100'
                                                }`}
                                        >
                                            <skill.icon size={11} />
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

Skills.displayName = 'Skills';

export default Skills;
