import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Play, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const initialHistory = [
  {
    command: 'whoami',
    output: `{\n  "name": "Abhishek Negi",\n  "role": "Frontend & WordPress Developer",\n  "experience": "3+ Years Professional Experience",\n  "location": "Chandigarh, India",\n  "status": "Available for Full-time Roles & Projects",\n  "core_stack": ["WordPress Custom Themes", "HTML5 & CSS3", "JavaScript", "Tailwind CSS", "React.js"]\n}`
  }
];

export default function TechTerminal() {
  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const commandResponses = {
    whoami: `{\n  "name": "Abhishek Negi",\n  "role": "Frontend & WordPress Developer",\n  "status": "Available for Work",\n  "location": "Chandigarh, India"\n}`,
    skills: `CMS & Web: WordPress Custom Themes, PHP Basics, Responsive Web Design\nFrontend: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Material UI, Tailwind CSS, Bootstrap 5, jQuery\nAPIs & Tools: RESTful APIs, Git/GitHub, Vite, Cross-Browser Testing`,
    experience: `[1] Netscape Labs Pvt. Ltd. (Mohali) - Web Designer/Frontend Dev (Sep 2024 - Present)\n    • WordPress Custom Themes, Responsive Web UI, REST APIs, Tailwind CSS\n[2] Shaurya Software Pvt. Ltd. (Zirakpur) - Website Developer (Sep 2023 - Aug 2024)\n    • React.js, Material UI, Responsive Layouts, Cross-Browser Compatibility, JS/HTML/CSS\n[3] Wavy Informatics (Panchkula) - Web Designer (Dec 2022 - July 2023)\n    • Figma UI Design, Independent Frontend Web Development, HTML/CSS/JS`,
    contact: `Email:    negiabhi254@gmail.com\nPhone:    +91 8077874185\nLocation: Daria, Chandigarh, India\nStatus:   Available for Full-time Roles & Projects`,
    help: `Available commands: whoami, skills, experience, contact, clear`,
  };

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const response = commandResponses[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" for a list of available commands.`;
    setHistory(prev => [...prev, { command: cmd, output: response }]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const copyTerminal = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl shadow-cyan-950/40"
      >
        {/* Terminal Header */}
        <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              abhishek@developer:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyTerminal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-xs flex items-center gap-1"
              title="Copy Terminal Logs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={() => setHistory(initialHistory)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Reset Terminal"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Action Badges */}
        <div className="bg-slate-950/70 px-4 py-2 border-b border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-slate-500">Quick run:</span>
          {['whoami', 'skills', 'experience', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-white/5 hover:border-cyan-500/40 transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm bg-dark-950/80 max-h-80 overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-emerald-400">➜</span>
                <span className="text-slate-400">~</span>
                <span>{item.command}</span>
              </div>
              <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-cyan-500/30 overflow-x-auto">
                {item.output}
              </pre>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="text-emerald-400">➜</span>
            <span className="text-slate-400">~</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'skills', 'experience') and hit Enter..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
            />
            <button
              type="submit"
              className="p-1 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40"
              title="Execute Command"
            >
              <Play className="w-3 h-3 fill-current" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
