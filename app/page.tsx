"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud, FiShield, FiZap, FiHeart } from 'react-icons/fi';
import Layout from '@/components/Layout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Card from '@/components/ui/Card';
import TypingAnimation from '@/components/TypingAnimation';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Home = () => {
  const highlights = [
    { icon: FiCode, text: '4+ years coding professionally', delay: 0.1 },
    { icon: FiServer, text: 'Backend expertise in Python, Django, and Java', delay: 0.2 },
    { icon: FiCode, text: 'Frontend development with React & Next.js', delay: 0.3 },
    { icon: FiCloud, text: 'Cloud deployments on AWS that scale without drama', delay: 0.4 },
    { icon: FiShield, text: 'Focus on security, performance, and user experience', delay: 0.5 },
  ];

  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Hero Section */}
          <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono font-bold mb-6">
                  <span className="text-zinc-100">Hey there, I'm </span>
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Darab Ahmed
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl"> 👋</span>
                </h1>
                
                <div className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto">
                  <TypingAnimation
                    text="A software developer from Lahore, Pakistan who loves solving real problems with clean code."
                    speed={30}
                    className="block mb-4"
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="mb-4"
                  >
                    I specialize in Python, Django, React, and AWS to build scalable web applications that deliver real business value.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                    className="text-cyan-400 font-semibold"
                  >
                    If it's a challenge, I'll find a way to make it happen.
                  </motion.p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 0.8 }}
                className="mb-16"
              >
                <AnimatedButton href="/contact" size="lg" className="text-lg px-8 py-4">
                  <FiHeart className="mr-2" />
                  Let's Build Something Great
                </AnimatedButton>
              </motion.div>
            </div>

            {/* Quick Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6, duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-mono font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Quick Highlights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 6.5 + highlight.delay, duration: 0.6 }}
                    >
                      <Card className="text-center h-full flex flex-col items-center justify-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="mb-4"
                        >
                          <Icon className="w-8 h-8 text-cyan-400 mx-auto" />
                        </motion.div>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                          {highlight.text}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-500 rounded-full opacity-60"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-40"
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-80"
              animate={{ scale: [1, 2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </section>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;