import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, 
  ExternalLink, Sparkles, CheckCircle2, Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-3"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Get In Touch & <span className="text-gradient">Start a Conversation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4"
          >
            Looking to hire a skilled Frontend Developer, discuss a freelance opportunity, or just want to connect? My inbox and phone are always open.
          </motion.p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] font-mono text-emerald-400 mt-2 pl-16">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone & WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-indigo-300 transition-colors block mt-0.5"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href="https://wa.me/918077874185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {copiedPhone && (
                <div className="text-[11px] font-mono text-emerald-400 mt-2 pl-16">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-base font-bold text-white mt-0.5">Daria, Chandigarh, India</div>
                  <div className="text-xs text-slate-400">Tricity Region (Chandigarh, Mohali, Panchkula)</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Response Time:
                </span>
                <span className="text-emerald-400 font-semibold">Within 1-2 Hours</span>
              </div>
            </div>

            {/* Quick Action WhatsApp Button */}
            <a
              href="https://wa.me/918077874185?text=Hi%20Abhishek,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your message has been noted, and Abhishek will respond to <span className="text-cyan-400 font-semibold">{formData.email}</span> shortly!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-white">Send Abhishek a Message</h3>
                  <p className="text-xs text-slate-400">Fill in the form below to initiate contact directly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Sarah Tech"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hiring@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. TechCorp Solutions"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Message / Job Requirement *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, questions, or invite to interview..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
