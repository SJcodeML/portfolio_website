import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div className="flex items-center space-x-2 text-white">
          <Terminal className="h-5 w-5 text-indigo-400" />
          <span className="font-bold text-slate-300">Developer Portfolio</span>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-xl text-xs">
          <span>Built by</span>
          <strong className="text-indigo-400">SyedBalaj</strong>
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 animate-pulse" />
        </div>
      </div>
    </footer>
  );
}