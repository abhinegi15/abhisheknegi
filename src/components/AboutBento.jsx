import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Code2, GraduationCap, MapPin, Download, 
  Eye, CheckCircle2, Award, ArrowUpRight, Heart, Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationData } from '../data/portfolioData';

export default function AboutBento() {
  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            About Abhishek & <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            A frontend and WordPress developer creating clean, responsive websites and custom themes.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Primary Bio & Craftsmanship (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-panel rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Frontend & WordPress</span>
                  <h3 className="font-display font-bold text-xl text-white">Building Clean & Responsive Websites</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With over <span className="text-white font-semibold underline decoration-cyan-500/60 decoration-2 underline-offset-4">3+ years of professional experience</span>, I specialize in building responsive websites, custom WordPress themes, and clean user interfaces with <span className="text-cyan-300 font-medium">WordPress, HTML5, CSS3, JavaScript, Tailwind CSS, and React</span>. I focus on turning designs into clean, fast, and easy-to-use websites.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Whether creating custom WordPress themes from scratch or building interactive frontend components, I write well-organized code and ensure full responsiveness across all mobile, tablet, and desktop screens.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="font-display font-extrabold text-2xl text-white">3+ Yrs</div>
                  <div className="text-[11px] font-mono text-slate-400">Experience</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="font-display font-extrabold text-2xl text-white">25+</div>
                  <div className="text-[11px] font-mono text-slate-400">Completed Projects</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="font-display font-extrabold text-2xl text-cyan-400">100%</div>
                  <div className="text-[11px] font-mono text-slate-400">Responsive</div>
                </div>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 2: Resume Download Card (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 glass-panel rounded-3xl p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  Resume
                </span>
                <span className="text-xs font-mono text-slate-400">PDF Document</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-white">Curriculum Vitae / Resume</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Complete work history, technical skills, projects, and contact details.
                </p>
              </div>

              <div className="space-y-2 py-2">
                {[
                  "3+ Years Professional Experience",
                  "WordPress Custom Themes & Frontend",
                  "Available for Full-time Roles & Projects",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href={personalInfo.resumePdfUrl}
                download="Abhishek_Negi_Resume.pdf"
                onClick={triggerDownloadConfetti}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download CV / Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 hover:text-white glass-panel hover:bg-white/5 border border-white/10 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quick View in Browser</span>
              </a>
            </div>
          </motion.div>

          {/* Bento Card 3: Education & Academic Credentials (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-7 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Formal Education</span>
                <h3 className="font-display font-bold text-lg text-white">Academic Qualifications</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-indigo-300">{edu.period}</span>
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30">{edu.badge}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">{edu.degree}</h4>
                  <p className="text-xs text-slate-300">{edu.institution}</p>
                  <p className="text-[11px] font-mono text-slate-400">{edu.location}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 4: Location & Work Mobility (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Location & Availability</span>
                    <h3 className="font-display font-bold text-lg text-white">Chandigarh, India (Tricity)</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Work</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Available for full-time opportunities across Chandigarh, Mohali, Panchkula, Delhi NCR, and remote projects. Dedicated to writing clean code and collaborating effectively.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                Response Time: &lt; 2 Hours
              </span>
              <a href="#contact" className="hover:text-white transition-colors underline decoration-cyan-500/40">
                Get in touch &rarr;
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
