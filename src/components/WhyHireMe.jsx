import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Smartphone, Layers, CheckCircle2, ShieldCheck, HeartHandshake, Rocket } from 'lucide-react';
import { whyHirePoints } from '../data/portfolioData';

const iconMap = {
  Zap: Zap,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Layers: Layers
};

export default function WhyHireMe() {
  return (
    <section className="py-24 relative z-10 bg-dark-900/40 border-y border-white/5">
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
            <span>FOR RECRUITERS & HIRING MANAGERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Why Hire <span className="text-gradient">Abhishek Negi?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            A high-velocity frontend engineer who bridges the gap between intricate design mockups and rock-solid, production-grade web performance.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyHirePoints.map((point, index) => {
            const IconComponent = iconMap[point.icon] || Zap;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {point.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guaranteed Quality</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recruiter Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-300 font-semibold text-sm">
              <Rocket className="w-4 h-4" />
              <span>Ready for Immediate Deployment</span>
            </div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Need someone who delivers clean, fast code from day one?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              Equipped with 3+ years of commercial development experience, strong team collaboration, and a relentless focus on user experience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all active:scale-95 whitespace-nowrap"
            >
              Schedule Interview
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
