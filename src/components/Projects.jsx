import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Sparkles, Layers, ArrowUpRight, Zap, Info, Code2 } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'React & Next.js', 'UI & E-Commerce'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3"
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>SELECTED CASE STUDIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Featured <span className="text-gradient">Work & Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            A showcase of web applications and interactive interfaces engineered with React, Next.js, and modern CSS. Each case study demonstrates clean architecture, responsive layouts, and performance.
          </motion.p>

          {/* Placeholder Notification Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-cyan-500/30 text-slate-300 text-xs font-mono"
          >
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Placeholder Projects Active: Easily swapped with your real GitHub repos and screenshots anytime.</span>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8 glass-panel p-1.5 rounded-2xl border border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="projectActiveCategory"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid: Editorial Portfolio Case Studies */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />

                  {/* Top Bar on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-dark-950/90 backdrop-blur-md text-cyan-300 border border-white/15">
                        CASE {project.caseNumber}
                      </span>
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-dark-950/80 backdrop-blur-md text-slate-300 border border-white/10">
                        {project.categoryBadge}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-xl bg-dark-950/80 backdrop-blur-md text-slate-300 hover:text-white hover:bg-cyan-500/30 border border-white/15 transition-all group/btn"
                      title="Inspect Case Study Architecture"
                    >
                      <Eye className="w-4 h-4 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Bottom Stats Badge on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-dark-950/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>60 FPS Motion</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-dark-950/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300">
                      100% Responsive
                    </span>
                    <span className="ml-auto px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-400">
                      Placeholder
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
