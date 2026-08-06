import React from 'react';
import { ShieldCheck, Clock, ArrowRight, Code2 } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-indigo-950/60 border border-indigo-800/50 rounded-full px-3 py-1 text-xs text-indigo-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Full-Stack Projects & Collaboration</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Full-Stack Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Web Developer</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            I build modern web applications, scalable backend APIs, and responsive user interfaces. Explore my recent projects and codebase repositories below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#portfolio" className="inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 transition-all">
              <span>View My Projects</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold px-6 py-3.5 rounded-xl transition-all">
              Send a Message
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-900">
            <div className="flex items-center space-x-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /><span>Production-Ready Code</span></div>
            <div className="flex items-center space-x-2"><Code2 className="h-4 w-4 text-indigo-400" /><span>Modern Frameworks</span></div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-30"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-indigo-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-300 text-xl font-bold">
                DEV
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Software Engineer</h3>
                <p className="text-sm text-indigo-400">Full-Stack Specialist</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Specializing in production APIs, responsive web design, database architecture, and full-stack JavaScript and Python applications.
            </p>

            <div className="border-t border-slate-800 pt-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">Core Stack</span>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'].map((tech, idx) => (
                  <span key={idx} className="bg-slate-950 border border-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}