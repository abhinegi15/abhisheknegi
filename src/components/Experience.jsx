import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER TRACK RECORD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Commercial <span className="text-gradient">Work Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            Over 3 years of commercial industry experience building production web applications, collaborating with cross-functional teams, and shipping scalable frontend code.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 opacity-30" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Node Point on desktop */}
                <div className="hidden md:flex absolute left-5 top-8 w-7 h-7 rounded-full bg-dark-950 border-2 border-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/50 z-10">
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.status === 'Current Position' ? 'bg-cyan-400 animate-ping' : 'bg-slate-400'}`} />
                </div>

                {/* Main Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.status === 'Current Position' && (
                          <span className="px-3 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-2 font-mono">
                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="py-6 space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">Key Tech:</span>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
