"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-purple-500/25',
    secondary: 'bg-slate-800 text-zinc-100 hover:bg-slate-700 border border-slate-700',
    outline: 'border-2 border-gradient-to-r from-indigo-500 to-cyan-400 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const MotionComponent = motion.button;

  const buttonProps = {
    className: classes,
    whileHover: disabled ? {} : { scale: 1.05, y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
    onClick,
    type,
    disabled,
  };

  if (href) {
    return (
      <Link href={href}>
        <MotionComponent {...buttonProps}>
          <span className="relative z-10">{children}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </MotionComponent>
      </Link>
    );
  }

  return (
    <MotionComponent {...buttonProps}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </MotionComponent>
  );
};

export default AnimatedButton;