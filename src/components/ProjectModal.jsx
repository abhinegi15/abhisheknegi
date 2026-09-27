import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Zap, Layers, Sparkles, Info } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 bg-dark-900/95"
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-dark-950/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Banner */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  CASE {project.caseNumber}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/10 text-slate-200">
                  {project.categoryBadge}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Customizable Placeholder Note */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                Placeholder Case Study: When you provide your project repositories, we can instantly update the screenshots, live domain, and architecture details.
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Performance Stats */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                {Object.entries(project.stats).map(([key, val]) => (
                  <div key={key} className="text-center">
                    <div className="text-[11px] uppercase tracking-wider font-mono text-slate-400">{key}</div>
                    <div className="text-base sm:text-lg font-bold text-cyan-400">{val}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Architectural Features */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                Key Architectural Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Technologies & Tools Deployed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-slate-400 font-mono">
                * Production tested codebase
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel hover:bg-white/10 text-slate-200 border border-white/15 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
