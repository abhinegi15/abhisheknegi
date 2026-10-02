import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Download, Sparkles, Code2, MapPin, 
  ExternalLink, ChevronDown, CheckCircle2, Flame, Award, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const titles = [
  "Frontend & WordPress Developer",
  "WordPress Custom Themes",
  "Responsive Web Developer",
  "React & UI Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Available for Full-time Roles & Projects</span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" /> Chandigarh, India
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 mb-4"
            >
              <p className="text-slate-400 font-mono text-sm sm:text-base tracking-wider uppercase">
                Hello, Recruiter & Visitor 👋 I'm
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
                Abhishek <span className="text-gradient">Negi</span>
              </h1>
            </motion.div>

            {/* Dynamic Rotating Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2 text-xl sm:text-3xl font-display font-bold text-slate-200"
                >
                  <span className="text-cyan-400 font-mono">&gt;</span>
                  <span className="text-gradient-cyan">{titles[titleIndex]}</span>
                  <span className="animate-pulse text-cyan-400 font-mono">_</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Impact Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
            >
              Frontend & WordPress Developer with <span className="text-white font-semibold underline decoration-cyan-500/50 decoration-2 underline-offset-4">3+ years of professional experience</span> building clean, responsive websites. Experienced in <span className="text-cyan-300 font-medium">WordPress Custom Themes, HTML5, CSS3, JavaScript, Tailwind CSS, and React</span> with cross-browser compatibility and dependable performance.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                download="Abhishek_Negi_Resume.pdf"
                onClick={triggerConfetti}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 glass-panel hover:bg-white/10 border border-white/15 hover:border-cyan-500/40 hover:text-white transition-all duration-300 active:scale-95 shadow-lg"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download CV / Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                <span>Contact Me</span>
                <span className="text-cyan-400">→</span>
              </a>
            </motion.div>

            {/* Tech Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-white/10"
            >
              <span className="text-xs font-mono text-slate-400 mr-2 uppercase tracking-wider">Core Skills:</span>
              {["WordPress Custom Themes", "HTML5 & CSS3", "JavaScript", "Tailwind CSS", "React.js", "Next.js", "Bootstrap", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Abhishek's Photo & Hologram Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-72 sm:w-80 md:w-96"
            >
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-2xl opacity-70 animate-pulse-glow" />
              
              {/* Card Container */}
              <div className="relative glass-panel rounded-3xl p-3 border border-white/20 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl">
                {/* Photo Aspect Frame */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-dark-950 border border-white/10 flex items-end justify-center">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Abhishek Negi - Frontend & WordPress Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                  />
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent pointer-events-none" />

                  {/* Overlay text at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <p className="font-display font-bold text-lg text-white">Abhishek Negi</p>
                    <p className="text-xs font-mono text-cyan-300">Frontend & WordPress Developer • 3+ Yrs</p>
                  </div>
                </div>

                {/* Floating Badge 1: Experience */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-6 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-500/30 shadow-xl flex items-center gap-2.5 backdrop-blur-xl"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono leading-none">Experience</div>
                    <div className="text-sm font-bold text-white leading-tight">3+ Years</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: WordPress Focus */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-6 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/30 shadow-xl flex items-center gap-2.5 backdrop-blur-xl"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono leading-none">WordPress & Web</div>
                    <div className="text-sm font-bold text-white leading-tight">Custom Themes</div>
                  </div>
                </motion.div>

                {/* Floating Badge 3: Completed Projects */}
                <motion.div
                  animate={{ x: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="hidden sm:flex absolute top-1/2 -right-10 glass-panel px-3 py-1.5 rounded-xl border border-emerald-500/30 shadow-xl items-center gap-2 backdrop-blur-xl"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-emerald-300">25+ Web Projects</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Hero Bottom Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10"
        >
          {personalInfo.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-cyan-400/80 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                {stat.change}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Prompt */}
        <div className="flex justify-center mt-12">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-mono"
            aria-label="Scroll down to content"
          >
            <span>DISCOVER MORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
