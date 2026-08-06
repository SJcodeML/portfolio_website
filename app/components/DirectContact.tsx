"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function DirectContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('idle');

  // Paste your Formspree ID here when ready
  const FORMSPREE_ID = "YOUR_FORMSPREE_FORM_ID";

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
    <section id="contact" className="py-20 bg-slate-900/40 border-t border-slate-900 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
        <p className="text-slate-400 text-sm">Have a question or project idea? Send a direct message below.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto shadow-2xl">
        {contactStatus === 'success' ? (
          <div className="bg-emerald-950/60 border border-emerald-800/50 rounded-xl p-6 text-center space-y-3">
            <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
            <h4 className="text-white font-semibold">Message Sent Successfully!</h4>
            <p className="text-xs text-slate-300">Thank you for reaching out. I will get back to you shortly.</p>
            <button
              onClick={() => setContactStatus('idle')}
              className="mt-2 text-xs text-indigo-400 hover:underline font-medium"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Email</label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Hi! I saw your portfolio and would like to get in touch..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {contactStatus === 'error' && (
              <div className="flex items-center space-x-2 text-rose-400 text-xs bg-rose-950/40 border border-rose-900/50 rounded-lg p-3">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Failed to send message. Please try again.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={contactStatus === 'loading'}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {contactStatus === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}