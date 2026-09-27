import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Layers, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  frontend: Code2,
  styling: Palette,
  integration: Layers
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = skillsData.categories.flatMap(c => c.skills.map(s => ({ ...s, category: c.id })));
  
  const displayedCategories = activeTab === 'all'
    ? skillsData.categories
    : skillsData.categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Skills, Tools & <span className="text-gradient">Core Competencies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            Over 3 years of building production-ready user interfaces with modern frontend technologies, responsive design paradigms, and API architectures.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 glass-panel p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Competencies
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedCategories.map((cat, catIdx) => {
            const IconComponent = categoryIcons[cat.id] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {cat.skills.length} Technical Proficiencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 pb-4 border-b border-white/10">
                    {cat.description}
                  </p>

                  {/* Skills List with Progress Bars */}
                  <div className="space-y-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2 font-mono">
                            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-cyan-300 border border-white/5">
                              {skill.status}
                            </span>
                            <span className="text-slate-400 text-[11px]">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + sIdx * 0.1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Tested in Production</span>
                  <span className="text-cyan-400">3+ Years Commercial</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Technologies Quick Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel p-6 rounded-2xl border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center"
        >
          <div>
            <div className="text-2xl font-bold font-display text-white">React & Next.js</div>
            <div className="text-xs text-cyan-400 font-mono">Component Architecture</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold font-display text-white">Tailwind & MUI</div>
            <div className="text-xs text-purple-400 font-mono">Design Systems & Styling</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold font-display text-white">RESTful APIs</div>
            <div className="text-xs text-emerald-400 font-mono">Real-time Data Streams</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold font-display text-white">WordPress CMS</div>
            <div className="text-xs text-amber-400 font-mono">Custom Theme Engineering</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
