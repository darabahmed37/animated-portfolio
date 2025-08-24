"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheck, FiX } from 'react-icons/fi';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Randomly simulate success or error for demo
      setSubmitStatus(Math.random() > 0.5 ? 'success' : 'error');
      
      if (submitStatus !== 'error') {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    }, 2000);
  };

  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
                Have a project in mind? Want to collaborate? Or just want to say hello?
                <span className="block mt-2 text-cyan-400 font-semibold">I'd love to hear from you!</span>
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Card className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <FiUser className="absolute left-4 top-4 text-zinc-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <FiMail className="absolute left-4 top-4 text-zinc-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-zinc-400 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-lg text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <AnimatedButton
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className={`min-w-48 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="submitting"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center"
                          >
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Sending...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center"
                          >
                            <FiSend className="mr-2" />
                            Send Message
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </AnimatedButton>
                  </div>
                </form>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      className="mt-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center text-green-400"
                    >
                      <FiCheck className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm text-green-300 mt-1">
                          Thanks for reaching out. I'll get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={resetStatus}
                        className="ml-3 text-green-300 hover:text-green-100 transition-colors"
                      >
                        <FiX className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      className="mt-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center text-red-400"
                    >
                      <FiX className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold">Failed to send message</p>
                        <p className="text-sm text-red-300 mt-1">
                          Something went wrong. Please try again or reach out directly via email.
                        </p>
                      </div>
                      <button
                        onClick={resetStatus}
                        className="ml-3 text-red-300 hover:text-red-100 transition-colors"
                      >
                        <FiX className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>

            {/* Alternative Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 text-center"
            >
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-6">
                Or reach out directly
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="mailto:darabahmed37@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-slate-800/50 text-zinc-300 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base"
                >
                  <FiMail className="w-5 h-5" />
                  darabahmed37@gmail.com
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/darab-ahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-slate-800/50 text-zinc-300 rounded-lg border border-slate-600/50 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300 text-sm sm:text-base"
                >
                  LinkedIn Profile
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;