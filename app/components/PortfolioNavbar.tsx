import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function PortfolioNavbar() {
  return (
    <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md fixed top-0 w-full z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Terminal className="h-6 w-6 text-indigo-400" />
          <span className="font-bold text-lg tracking-tight text-white">Full-Stack Dev</span>
          <span className="hidden md:inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-full text-xs">
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            <span>Built by <strong className="text-indigo-400">SyedBalaj</strong></span>
          </span>
        </div>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-400 transition-colors hidden sm:block">About</a>
          <a href="#portfolio" className="hover:text-indigo-400 transition-colors hidden sm:block">Projects</a>
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/20">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}