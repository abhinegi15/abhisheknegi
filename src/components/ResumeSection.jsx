import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, GraduationCap, Eye, Sparkles, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationData } from '../data/portfolioData';

export default function ResumeSection() {
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    confetti({
      particleCount: 100,
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
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>RESUME & EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Resume & <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            Professional background, technical skills, and downloadable PDF resume.
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Resume Download Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Abhishek Negi CV</h3>
                    <p className="text-xs font-mono text-cyan-300">Format: PDF Document</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  Updated 2026
                </span>
              </div>

              {/* Bio snippet */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">Professional Profile</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Key Highlights list */}
              <div className="space-y-2.5">
                {[
                  "3+ Years of Professional Experience in Web Development",
                  "WordPress Custom Themes, HTML, CSS, JavaScript & React",
                  "Over 25+ completed projects delivered on time",
                  "100% Cross-Browser and Responsive design across all screens",
                  "Available for full-time positions and projects"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumePdfUrl}
                download="Abhishek_Negi_Resume.pdf"
                onClick={handleDownload}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-semibold text-sm glass-panel hover:bg-white/10 text-slate-200 border border-white/15 transition-colors"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Online</span>
              </a>
            </div>

            {downloadCount > 0 && (
              <div className="mt-3 text-center text-xs font-mono text-emerald-400">
                🎉 Download started! Thank you for reviewing my resume.
              </div>
            )}
          </motion.div>

          {/* Right Column: Education & Academic Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Education & Academics</h3>
                  <p className="text-xs font-mono text-indigo-300">Formal Degrees & Certifications</p>
                </div>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-indigo-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                      <span>{edu.location}</span>
                      <span className="text-emerald-400">{edu.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Relocation notice */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase font-mono text-cyan-400 font-semibold">Location & Mobility</div>
                <div className="text-sm font-bold text-white mt-1">Based in Chandigarh, India</div>
                <p className="text-xs text-slate-400 mt-0.5">Open to onsite, hybrid in Tricity/NCR, and remote global positions.</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
