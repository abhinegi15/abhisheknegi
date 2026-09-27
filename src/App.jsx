import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutBento from './components/AboutBento';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import WhyRecruiters from './components/WhyRecruiters';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        {/* Top Scroll Spring Progress Bar */}
        <ScrollProgress />

        {/* Ambient Glowing Orbs & Interactive Spotlight */}
        <BackgroundEffect />

        {/* Floating Glass Island Navbar */}
        <Navbar />

        {/* Main Portfolio Sections */}
        <main className="relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Drifting Infinite Tech Stack Marquee */}
          <Marquee />

          {/* About Abhishek: Interactive Bento Grid & CV */}
          <AboutBento />

          {/* Technical Skills & Capabilities */}
          <Skills />

          {/* Curated Projects & Case Studies (Placeholder Ready) */}
          <Projects />

          {/* Commercial Work Experience Timeline */}
          <Experience />

          {/* Why Recruiters Choose Abhishek */}
          <WhyRecruiters />

          {/* Direct Contact Channels & Interactive Form */}
          <Contact />
        </main>

        {/* Footer with India Local Time & Quick Links */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
