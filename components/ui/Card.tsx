"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)',
        boxShadow: '0 8px 32px 0 rgba(79, 70, 229, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;