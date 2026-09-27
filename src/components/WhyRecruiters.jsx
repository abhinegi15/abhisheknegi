import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { valuePillars } from '../data/portfolioData';

export default function WhyRecruiters() {
  return (
    <section className="py-24 relative z-10 border-y border-white/5 bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>FOR HIRING MANAGERS & RECRUITERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Why Abhishek Is The <span className="text-gradient">Right Frontend Hire</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            Blending creative design sensibilities with dependable, scalable frontend engineering to deliver measurable impact from day one.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/40"
            >
              <div>
                <div className="font-mono text-3xl font-extrabold text-cyan-500/40 group-hover:text-cyan-400 transition-colors mb-4">
                  {pillar.number}
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recruiter Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-dark-900 to-indigo-950/60 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              ⚡ Available for Immediate Placement
            </span>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Looking for a Frontend Developer with 3+ years experience?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Skilled in React, Next.js, Material UI, and Tailwind CSS. Based in Chandigarh, ready for hybrid, on-site, or remote setups.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all whitespace-nowrap active:scale-95"
          >
            <span>Initiate Interview</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
