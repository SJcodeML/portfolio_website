"use client";

import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function WorkPortfolio({ projectList }) {
  // Temporary placeholders until you share her real links
  const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);
  const defaultProjects = [
    {
      id: 1,
      title: "Full-Stack Web Application",
      category: "Featured Project",
      description: "A complete web application featuring dynamic routing, responsive UI, database integration, and API services.",
      stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Backend API Engine",
      category: "API & Backend",
      description: "Scalable REST API backend designed for high performance, structured error handling, and secure database interactions.",
      stack: ["Python", "FastAPI", "Docker", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Interactive Client Dashboard",
      category: "Frontend Design",
      description: "Responsive web portal with live data displays, state management, and custom Tailind CSS UI components.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const displayProjects = projectList && projectList.length > 0 ? projectList : defaultProjects;

  return (
    <section id="portfolio" className="py-20 bg-slate-900/40 border-y border-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-950/60 border border-indigo-800/50 rounded-full px-3 py-1 text-xs text-indigo-300">
            <Code2 className="h-3.5 w-3.5 text-indigo-400" />
            <span>Work Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Explore live applications, software projects, and repository code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-950 border border-indigo-800/50 text-indigo-300 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 space-y-4 border-t border-slate-900 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-900 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl !== '#' ? project.liveUrl : '#contact'}
                  target={project.liveUrl !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold py-2.5 rounded-xl border border-slate-800 transition-all"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}