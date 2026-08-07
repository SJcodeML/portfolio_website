"use client";

import React, { useState } from 'react';
import { 
  Terminal, 
  Heart, 
  ExternalLink, 
  Code2, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  ShieldCheck,
  Sun,
  Moon,
  Sparkles,
  Cloud,
  Layout,
  Database,
  FileText,
  Download,
  X,
  Star,
  Quote,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('idle');

  // Replace this with your actual Formspree Form ID connected to your Gmail
  const FORMSPREE_ID = "xvkpgonk";

  const projects = [
    {
      id: 1,
      title: "Full-Stack E-Commerce Portal",
      category: "frontend",
      categoryLabel: "Frontend",
      description: "Responsive Next.js & React storefront with Tailwind CSS styling, client-side state management, and optimized asset loading.",
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "#"
    },
    {
      id: 2,
      title: "REST & GraphQL API Engine",
      category: "backend",
      categoryLabel: "Backend",
      description: "High-throughput API built with Python, FastAPI, and PostgreSQL featuring JWT authentication and structured query indexing.",
      stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Cloud Microservices Deployment",
      category: "cloud",
      categoryLabel: "Cloud",
      description: "Containerized application deployment using Docker and Kubernetes orchestration with automated CI/CD deployment pipelines.",
      stack: ["Docker", "Kubernetes", "Linux", "CI/CD"],
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Interactive Client Dashboard UI",
      category: "frontend",
      categoryLabel: "Frontend",
      description: "Modern analytics dashboard with real-time chart rendering, dark mode UI support, and accessible state components.",
      stack: ["React", "Tailwind CSS", "Recharts"],
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Database Relational Schema Design",
      category: "backend",
      categoryLabel: "Backend",
      description: "Optimized relational database schema architecture with custom query migrations and connection pooling.",
      stack: ["PostgreSQL", "Node.js", "Express", "Prisma"],
      liveUrl: "#"
    },
    {
      id: 6,
      title: "Serverless Cloud Infrastructure",
      category: "cloud",
      categoryLabel: "Cloud",
      description: "Scalable cloud deployment leveraging serverless functions, container registries, and edge network delivery.",
      stack: ["Docker", "AWS / Cloud", "Node.js"],
      liveUrl: "#"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "SaaS Founder & Agency Client",
      type: "Agency Project",
      comment: "Delivered our Next.js web portal refactor on schedule. API response times improved drastically, and the UI layout is crisp and accessible.",
      rating: 5,
      icon: Briefcase
    },
    {
      id: 2,
      name: "Hamza Malik",
      role: "Backend Student / Mentee",
      type: "Mentorship",
      comment: "Clear, step-by-step guidance on Python FastAPI backend design, Docker containerization, and PostgreSQL schemas. Helped me crack complex engineering concepts.",
      rating: 5,
      icon: GraduationCap
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Full-Stack Engineer",
      type: "Code Audit",
      comment: "Extremely detailed code review and architecture check. Showed us exactly where our database query bottlenecks were occurring.",
      rating: 5,
      icon: Briefcase
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    setContactStatus('loading');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        }),
      });

      if (res.ok) {
        setContactStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setContactStatus('error');
      }
    } catch (err) {
      setContactStatus('error');
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 relative ${
      isDarkMode 
        ? 'bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-white' 
        : 'bg-white text-slate-900 selection:bg-blue-600 selection:text-white'
    }`}>
      {/* Navigation */}
      <nav className={`border-b fixed top-0 w-full z-40 backdrop-blur-md transition-colors duration-300 ${
        isDarkMode 
          ? 'border-zinc-800/80 bg-zinc-950/80' 
          : 'border-slate-200/80 bg-white/90 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-1.5 rounded-lg ${isDarkMode ? 'bg-zinc-900' : 'bg-slate-100'}`}>
              <Terminal className={`h-5 w-5 ${isDarkMode ? 'text-emerald-400' : 'text-blue-600'}`} />
            </div>
            <span className="font-bold text-lg tracking-tight">Full-Stack Dev</span>
            
            <span className={`hidden md:inline-flex items-center space-x-1.5 border px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              isDarkMode 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
              <span>Built by <strong className={isDarkMode ? 'text-emerald-400' : 'text-blue-600'}>SyedBalaj</strong></span>
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-sm font-semibold">
            <a href="#about" className="hover:opacity-80 transition-opacity hidden sm:block">About</a>
            <a href="#portfolio" className="hover:opacity-80 transition-opacity hidden sm:block">Projects</a>
            <a href="#testimonials" className="hover:opacity-80 transition-opacity hidden sm:block">Reviews</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity hidden sm:block">Contact</a>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl border transition-all flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800' 
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a 
              href="#contact" 
              className={`px-4 py-2 rounded-xl font-bold transition-all shadow-md ${
                isDarkMode 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20' 
                  : 'bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className={`inline-flex items-center space-x-2 border rounded-full px-3.5 py-1 text-xs font-semibold ${
              isDarkMode 
                ? 'bg-emerald-950/60 border-emerald-800/50 text-emerald-300' 
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <Sparkles className="h-3.5 w-3.5" />
              <span>Available for Full-Stack Projects & Mentorship</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Full-Stack Engineer & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkMode ? 'from-emerald-400 to-teal-300' : 'from-blue-600 to-indigo-600'
              }`}>Technical Instructor</span>
            </h1>
            
            <p className={`text-lg max-w-2xl leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Building production-ready web applications, performant REST APIs, scalable cloud infrastructure, and mentoring software developers.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="#portfolio" 
                className={`inline-flex items-center justify-center space-x-2 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all ${
                  isDarkMode 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Resume Modal Trigger Button */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className={`inline-flex items-center justify-center space-x-2 border font-bold px-5 py-3.5 rounded-xl transition-all ${
                  isDarkMode 
                    ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-200' 
                    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                }`}
              >
                <FileText className="h-4 w-4 text-blue-500" />
                <span>View CV / Resume</span>
              </button>
            </div>

            <div className={`pt-6 flex flex-wrap items-center gap-6 text-xs font-medium border-t ${
              isDarkMode ? 'text-zinc-400 border-zinc-900' : 'text-slate-600 border-slate-200'
            }`}>
              <div className="flex items-center space-x-2">
                <ShieldCheck className={`h-4 w-4 ${isDarkMode ? 'text-emerald-400' : 'text-blue-600'}`} />
                <span>Production-Ready Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className={`h-4 w-4 ${isDarkMode ? 'text-emerald-400' : 'text-blue-600'}`} />
                <span>Frontend, Backend & Cloud</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className={`border rounded-2xl p-6 space-y-6 shadow-xl transition-all ${
              isDarkMode 
                ? 'bg-zinc-900 border-zinc-800' 
                : 'bg-white border-slate-200/80 shadow-slate-200/50'
            }`}>
              <div className="flex items-center space-x-4">
                <div className={`h-16 w-16 rounded-2xl border-2 flex items-center justify-center text-xl font-bold shadow-md ${
                  isDarkMode 
                    ? 'bg-zinc-950 border-emerald-500 text-emerald-400' 
                    : 'bg-slate-900 border-blue-600 text-white'
                }`}>
                  DEV
                </div>
                <div>
                  <h3 className="text-lg font-bold">Software Developer</h3>
                  <p className={`text-sm font-semibold ${isDarkMode ? 'text-emerald-400' : 'text-blue-600'}`}>Full-Stack Engineering</p>
                </div>
              </div>

              <div className={`border-t pt-4 ${isDarkMode ? 'border-zinc-800' : 'border-slate-100'}`}>
                <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
                  isDarkMode ? 'text-zinc-400' : 'text-slate-500'
                }`}>Core Stack</span>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'].map((tech, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs px-3 py-1 rounded-lg font-semibold border ${
                        isDarkMode 
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-300' 
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Categories */}
      <section id="portfolio" className={`py-20 border-y px-4 sm:px-6 lg:px-8 transition-colors ${
        isDarkMode ? 'bg-zinc-900/50 border-zinc-900' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold">Featured Projects</h2>
            <p className={`text-sm max-w-xl mx-auto font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Filter projects by domain to explore frontend builds, backend architecture, and cloud setups.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Projects', icon: Code2 },
              { id: 'frontend', label: 'Frontend', icon: Layout },
              { id: 'backend', label: 'Backend', icon: Database },
              { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud }
            ].map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    isActive
                      ? isDarkMode 
                        ? 'bg-emerald-600 border-emerald-500 text-white shadow-md' 
                        : 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : isDarkMode
                        ? 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <IconComp className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`border rounded-2xl p-6 flex flex-col justify-between transition-all group shadow-md hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-zinc-950 border-zinc-800 hover:border-emerald-500/50' 
                    : 'bg-white border-slate-200/80 hover:border-blue-500 hover:shadow-xl'
                }`}
              >
                <div className="space-y-3">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider border px-2.5 py-1 rounded-md inline-block ${
                    isDarkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-emerald-400' 
                      : 'bg-blue-50 border-blue-200 text-blue-700'
                  }`}>
                    {project.categoryLabel}
                  </span>
                  <h3 className={`text-lg font-bold transition-colors ${
                    isDarkMode ? 'group-hover:text-emerald-400' : 'group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs leading-relaxed font-normal ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                </div>
                <div className={`pt-6 border-t mt-6 flex items-center justify-between ${
                  isDarkMode ? 'border-zinc-900' : 'border-slate-100'
                }`}>
                  <div className={`flex flex-wrap gap-1 text-[11px] font-medium ${isDarkMode ? 'text-zinc-500' : 'text-slate-500'}`}>
                    {project.stack.slice(0, 3).map((s, idx) => (
                      <span key={idx}>{s}{idx < 2 ? ' • ' : ''}</span>
                    ))}
                  </div>
                  <a 
                    href="#contact" 
                    className={`font-bold text-xs inline-flex items-center space-x-1 hover:underline shrink-0 ${
                      isDarkMode ? 'text-emerald-400' : 'text-blue-600'
                    }`}
                  >
                    <span>View</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Recommendations & Mentorship Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <div className={`inline-flex items-center space-x-2 border rounded-full px-3.5 py-1 text-xs font-semibold ${
              isDarkMode 
                ? 'bg-emerald-950/60 border-emerald-800/50 text-emerald-300' 
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <Quote className="h-3.5 w-3.5" />
              <span>Social Proof & Endorsements</span>
            </div>
            <h2 className="text-3xl font-extrabold">Client & Mentorship Feedback</h2>
            <p className={`text-sm max-w-xl mx-auto font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Endorsements from software agency clients, code review participants, and students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  className={`border rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-md transition-all ${
                    isDarkMode 
                      ? 'bg-zinc-900 border-zinc-800' 
                      : 'bg-white border-slate-200/80 shadow-slate-200/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400 space-x-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider border px-2 py-0.5 rounded-md inline-flex items-center space-x-1 ${
                        isDarkMode 
                          ? 'bg-zinc-950 border-zinc-800 text-emerald-400' 
                          : 'bg-slate-100 border-slate-200 text-blue-600'
                      }`}>
                        <IconComp className="h-3 w-3 mr-1" />
                        <span>{item.type}</span>
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed italic ${isDarkMode ? 'text-zinc-300' : 'text-slate-600'}`}>
                      "{item.comment}"
                    </p>
                  </div>

                  <div className={`pt-4 border-t ${isDarkMode ? 'border-zinc-800' : 'border-slate-100'}`}>
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>{item.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className={`py-20 border-t px-4 sm:px-6 lg:px-8 max-w-xl mx-auto transition-colors ${
        isDarkMode ? 'border-zinc-900' : 'border-slate-200'
      }`}>
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-extrabold">Send a Message</h2>
          <p className={`text-sm font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            Messages submitted here go directly to my Gmail inbox.
          </p>
        </div>

        <div className={`border rounded-2xl p-6 sm:p-8 shadow-xl transition-all ${
          isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200/80 shadow-slate-200/50'
        }`}>
          {contactStatus === 'success' ? (
            <div className="text-center py-6 space-y-2">
              <CheckCircle2 className={`h-10 w-10 mx-auto ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h4 className="font-bold text-lg">Message Delivered!</h4>
              <p className={`text-xs font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                Thank you for reaching out. I have received your message in my inbox and will reply shortly.
              </p>
              <button
                onClick={() => setContactStatus('idle')}
                className={`mt-2 text-xs font-bold hover:underline ${isDarkMode ? 'text-emerald-400' : 'text-blue-600'}`}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-bold mb-1.5 ${isDarkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-all ${
                    isDarkMode 
                      ? 'bg-zinc-950 border-zinc-800 text-white focus:border-emerald-500' 
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600 focus:bg-white'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${isDarkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none transition-all ${
                    isDarkMode 
                      ? 'bg-zinc-950 border-zinc-800 text-white focus:border-emerald-500' 
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600 focus:bg-white'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${isDarkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi, I saw your portfolio and would like to connect..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full border rounded-xl p-4 text-sm font-medium focus:outline-none resize-none transition-all ${
                    isDarkMode 
                      ? 'bg-zinc-950 border-zinc-800 text-white focus:border-emerald-500' 
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-blue-600 focus:bg-white'
                  }`}
                />
              </div>

              {contactStatus === 'error' && (
                <div className="flex items-center space-x-2 text-rose-500 text-xs bg-rose-50 border border-rose-200 rounded-lg p-3 font-medium">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Failed to send message. Please check your Formspree ID and try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={contactStatus === 'loading'}
                className={`w-full font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 ${
                  isDarkMode 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                }`}
              >
                {contactStatus === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span>Send Direct Message</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Resume Preview Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className={`relative w-full max-w-2xl border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-zinc-800">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <h3 className="font-bold text-lg">Curriculum Vitae / Resume</h3>
              </div>
              <button 
                onClick={() => setIsResumeOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Resume Content Summary */}
            <div className="space-y-4 text-xs leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-blue-500">Full-Stack Software Engineer</h4>
                <p className="font-medium opacity-80">Specializing in Python Backend Systems, Next.js, and Cloud Infrastructure</p>
              </div>

              <div className="border-t pt-3 space-y-2 border-slate-100 dark:border-zinc-800">
                <h5 className="font-bold uppercase tracking-wider text-[10px] opacity-60">Technical Summary</h5>
                <p>• Experienced in architecting RESTful APIs with Python FastAPI and Node.js.</p>
                <p>• Proficient in modern frontend development using React, Next.js App Router, and Tailwind CSS.</p>
                <p>• Hands-on experience with Docker containerization, Kubernetes orchestration, and PostgreSQL database optimization.</p>
              </div>

              <div className="border-t pt-3 space-y-2 border-slate-100 dark:border-zinc-800">
                <h5 className="font-bold uppercase tracking-wider text-[10px] opacity-60">Core Competencies</h5>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Python', 'FastAPI', 'Next.js', 'React', 'PostgreSQL', 'Docker', 'Kubernetes', 'Tailwind CSS'].map((s, idx) => (
                    <span key={idx} className="bg-slate-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md font-semibold text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setIsResumeOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Close Preview
              </button>
              <a
                href="/resume.pdf"
                download="Developer_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`border-t py-8 text-center text-xs font-medium transition-colors ${
        isDarkMode 
          ? 'border-zinc-800 bg-zinc-950 text-zinc-500' 
          : 'border-slate-200 bg-slate-50 text-slate-500'
      }`}>
        <p>© {new Date().getFullYear()} Developer Portfolio. Built by <strong className={isDarkMode ? 'text-emerald-400' : 'text-blue-600'}>SyedBalaj</strong>.</p>
      </footer>
    </div>
  );
}