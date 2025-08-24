"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiHome, FiBriefcase, FiCode, FiFileText, FiMail } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '/', label: 'Home', icon: FiHome },
    { href: '/projects', label: 'Projects', icon: FiBriefcase },
    { href: '/skills', label: 'Skills', icon: FiCode },
    { href: '/cv', label: 'CV', icon: FiFileText },
    { href: '/contact', label: 'Contact', icon: FiMail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-zinc-100 transition-all duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              Darab Ahmed
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-cyan-400'
                          : 'text-zinc-300 hover:text-cyan-400 hover:bg-slate-800/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-purple-400" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-purple-500/20 z-50">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 ${
                    isActive ? 'text-cyan-400' : 'text-zinc-400 hover:text-cyan-400'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;