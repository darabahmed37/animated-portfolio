"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  FiCode, 
  FiServer, 
  FiCloud, 
  FiDatabase, 
  FiTool, 
  FiZap,
  FiGitBranch,
  FiLayers,
  FiSettings,
  FiMonitor,
  FiCpu,
  FiShield,
  FiSearch,
  FiTrendingUp,
  FiUsers,
  FiBookOpen,
  FiTarget,
  FiRefreshCw,
  FiActivity,
  FiBox,
  FiTerminal
} from 'react-icons/fi';
import { 
  FaPython, 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaJava, 
  FaGitAlt, 
  FaGithub,
  FaNodeJs,
  FaLightbulb
} from 'react-icons/fa';
import { SiDjango, SiTypescript, SiSpring, SiPostgresql, SiMongodb } from 'react-icons/si';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Skills = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const skills = [
    {
      title: "Python",
      icon: FaPython,
      level: 95,
      color: "from-yellow-400 to-green-500",
      description: "My primary language for backend development and automation.",
      frontText: "Versatile language for web development, automation, and data processing.",
      backText: "I build scalable web applications, automation scripts, data processing pipelines, and API integrations. Python's simplicity and powerful libraries make it perfect for rapid development.",
      experience: "5+ years",
      slug: "python"
    },
    {
      title: "Django/DRF",
      icon: SiDjango,
      level: 90,
      color: "from-green-600 to-blue-600",
      description: "Framework for building secure, scalable web applications.",
      frontText: "Full-stack web framework with REST API capabilities.",
      backText: "Built enterprise applications, e-commerce platforms, and financial systems. Expert in authentication, permissions, database optimization, and API design patterns.",
      experience: "4+ years",
      slug: "django"
    },
    {
      title: "React",
      icon: FaReact,
      level: 85,
      color: "from-blue-400 to-cyan-500",
      description: "Modern library for building interactive user interfaces.",
      frontText: "Component-based library for dynamic web applications.",
      backText: "Created responsive dashboards, e-commerce frontends, and real-time applications. Proficient in hooks, context, state management, and performance optimization.",
      experience: "4+ years",
      slug: "react"
    },
    {
      title: "Next.js",
      icon: FiMonitor,
      level: 80,
      color: "from-gray-700 to-gray-900",
      description: "Full-stack React framework with SSR and static generation.",
      frontText: "Production-ready React framework with built-in optimizations.",
      backText: "Built SEO-optimized websites, e-learning platforms, and portfolio sites. Expert in App Router, server components, and deployment optimization.",
      experience: "3+ years",
      slug: "nextjs"
    },
    {
      title: "AWS",
      icon: FaAws,
      level: 80,
      color: "from-orange-400 to-yellow-500",
      description: "Cloud platform for scalable application deployment.",
      frontText: "Comprehensive cloud services for modern applications.",
      backText: "Deployed applications on Lambda, S3, Elastic Beanstalk, and RDS. Implemented Cognito authentication, CloudFront CDN, and cost-optimized architectures.",
      experience: "4+ years",
      slug: "aws"
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
      level: 85,
      color: "from-blue-600 to-indigo-600",
      description: "Type-safe JavaScript for better development experience.",
      frontText: "Strongly-typed superset of JavaScript.",
      backText: "Enhanced code quality and developer productivity in React applications. Reduced runtime errors and improved code maintainability through static typing.",
      experience: "3+ years",
      slug: "typescript"
    },
    {
      title: "Java",
      icon: FaJava,
      level: 85,
      color: "from-red-500 to-orange-600",
      description: "Enterprise-grade language for robust applications.",
      frontText: "Object-oriented language for enterprise development.",
      backText: "Built Struts 2 web applications, optimized database queries, and implemented multithreaded systems. Migrated legacy codebases and enhanced performance.",
      experience: "4+ years",
      slug: "java"
    },
    {
      title: "Spring Boot",
      icon: SiSpring,
      level: 75,
      color: "from-green-500 to-teal-500",
      description: "Java framework for rapid application development.",
      frontText: "Microservices framework with auto-configuration.",
      backText: "Created REST APIs, implemented security configurations, and built microservices architectures. Streamlined development with dependency injection and auto-configuration.",
      experience: "2+ years",
      slug: "spring"
    },
    {
      title: "Docker",
      icon: FaDocker,
      level: 75,
      color: "from-blue-500 to-cyan-400",
      description: "Containerization platform for consistent deployments.",
      frontText: "Container technology for application deployment.",
      backText: "Containerized applications for consistent environments, created multi-stage builds, and orchestrated services with Docker Compose for development and production.",
      experience: "3+ years",
      slug: "docker"
    },
    {
      title: "Git/GitHub",
      icon: FaGitAlt,
      level: 90,
      color: "from-gray-600 to-gray-800",
      description: "Version control and collaborative development.",
      frontText: "Essential tools for code versioning and collaboration.",
      backText: "Managed complex branching strategies, code reviews, and CI/CD pipelines. Collaborated on large codebases with distributed teams using advanced Git workflows.",
      experience: "5+ years",
      slug: "git"
    },
    {
      title: "SQL/Databases",
      icon: FiDatabase,
      level: 85,
      color: "from-purple-500 to-pink-500",
      description: "Database design and query optimization.",
      frontText: "Relational database management and optimization.",
      backText: "Designed efficient database schemas, optimized complex queries, and implemented data migration strategies. Worked with PostgreSQL, MySQL, and MongoDB.",
      experience: "4+ years",
      slug: "sql"
    },
    {
      title: "Node.js",
      icon: FaNodeJs,
      level: 75,
      color: "from-green-400 to-emerald-500",
      description: "JavaScript runtime for server-side development.",
      frontText: "Server-side JavaScript for scalable applications.",
      backText: "Built REST APIs, real-time applications with WebSockets, and microservices. Implemented authentication systems and integrated third-party services.",
      experience: "3+ years",
      slug: "nodejs"
    },
    {
      title: "Multithreading",
      icon: FiCpu,
      level: 80,
      color: "from-red-400 to-pink-500",
      description: "Concurrent programming for high-performance applications.",
      frontText: "Parallel processing for performance optimization.",
      backText: "Implemented concurrent algorithms in Java, optimized database operations, and built high-throughput data processing systems with thread pools and async patterns.",
      experience: "3+ years",
      slug: "multithreading"
    },
    {
      title: "Struts 2",
      icon: FiLayers,
      level: 70,
      color: "from-indigo-500 to-purple-500",
      description: "Java web framework for enterprise applications.",
      frontText: "MVC framework for Java web development.",
      backText: "Built enterprise web applications with secure authentication, implemented XSS and CSRF protections, and created maintainable MVC architectures.",
      experience: "2+ years",
      slug: "struts"
    },
    {
      title: "JSP",
      icon: FiCode,
      level: 75,
      color: "from-orange-500 to-red-500",
      description: "Java Server Pages for dynamic web content.",
      frontText: "Server-side technology for dynamic web pages.",
      backText: "Created dynamic web interfaces, implemented secure user authentication flows, and built responsive layouts with JSP and JSTL for enterprise applications.",
      experience: "2+ years",
      slug: "jsp"
    },
    {
      title: "PostgreSQL",
      icon: SiPostgresql,
      level: 80,
      color: "from-blue-600 to-indigo-700",
      description: "Advanced relational database with powerful features.",
      frontText: "Enterprise-grade relational database system.",
      backText: "Designed complex schemas, implemented advanced queries with CTEs and window functions, and optimized performance for high-traffic applications.",
      experience: "4+ years",
      slug: "postgresql"
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
      level: 70,
      color: "from-green-500 to-teal-600",
      description: "NoSQL database for flexible data storage.",
      frontText: "Document-based database for modern applications.",
      backText: "Built scalable applications with flexible schemas, implemented aggregation pipelines, and designed efficient data models for real-time applications.",
      experience: "2+ years",
      slug: "mongodb"
    },
    {
      title: "jQuery",
      icon: FiZap,
      level: 75,
      color: "from-blue-400 to-purple-500",
      description: "JavaScript library for DOM manipulation and AJAX.",
      frontText: "Lightweight library for interactive web features.",
      backText: "Enhanced legacy applications with dynamic interactions, implemented AJAX functionality, and created smooth animations before modern frameworks.",
      experience: "3+ years",
      slug: "jquery"
    },
    {
      title: "Jira",
      icon: FiTarget,
      level: 85,
      color: "from-blue-500 to-cyan-500",
      description: "Project management and issue tracking tool.",
      frontText: "Agile project management and bug tracking.",
      backText: "Managed sprint planning, tracked development progress, and coordinated team workflows. Created custom workflows and automated reporting for project visibility.",
      experience: "4+ years",
      slug: "jira"
    },
    {
      title: "Problem Solving",
      icon: FaLightbulb,
      level: 95,
      color: "from-purple-400 to-pink-500",
      description: "Analytical thinking and creative solution development.",
      frontText: "Breaking down complex challenges into manageable solutions.",
      backText: "Debugged critical production issues, optimized system performance, and designed elegant solutions for complex business requirements across multiple domains.",
      experience: "5+ years",
      slug: "problem-solving"
    },
    {
      title: "Quick Learning",
      icon: FiTrendingUp,
      level: 90,
      color: "from-emerald-400 to-teal-500",
      description: "Rapid adaptation to new technologies and frameworks.",
      frontText: "Fast adaptation to emerging technologies and tools.",
      backText: "Quickly mastered new frameworks, migrated between technology stacks, and stayed current with industry trends to deliver cutting-edge solutions.",
      experience: "5+ years",
      slug: "quick-learning"
    },
    {
      title: "REST APIs",
      icon: FiServer,
      level: 90,
      color: "from-indigo-400 to-blue-500",
      description: "Design and implementation of RESTful web services.",
      frontText: "Building scalable and secure API endpoints.",
      backText: "Designed RESTful architectures, implemented authentication and authorization, and created comprehensive API documentation for multiple client integrations.",
      experience: "4+ years",
      slug: "rest-apis"
    },
    {
      title: "Redis",
      icon: FiActivity,
      level: 70,
      color: "from-red-400 to-orange-500",
      description: "In-memory data structure store for caching and sessions.",
      frontText: "High-performance caching and session management.",
      backText: "Implemented caching strategies, session storage, and real-time data synchronization. Improved application performance and reduced database load significantly.",
      experience: "2+ years",
      slug: "redis"
    },
    {
      title: "Linux/Unix",
      icon: FiTerminal,
      level: 80,
      color: "from-gray-600 to-slate-700",
      description: "Command-line proficiency and server administration.",
      frontText: "Server management and command-line operations.",
      backText: "Managed production servers, automated deployment scripts, and troubleshot system issues. Proficient in shell scripting and system administration.",
      experience: "4+ years",
      slug: "linux"
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
                Each skill represents countless hours of learning, building, and problem-solving.
                <span className="block mt-2 text-cyan-400 font-semibold">Click on any card to learn more, or visit the detail page.</span>
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const isFlipped = flippedCard === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.8 }}
                    className="h-80 cursor-pointer group"
                    style={{ perspective: '1000px' }}
                    onClick={() => handleCardClick(index)}
                  >
                    <motion.div
                      className="relative w-full h-full transition-transform duration-700"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                        <Card className="h-full flex flex-col justify-between p-6 group-hover:scale-105 transition-transform duration-300" hover={false}>
                          <div>
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            
                            <h3 className="text-lg sm:text-xl font-mono font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                              {skill.title}
                            </h3>
                            
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                              {skill.frontText}
                            </p>
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-zinc-500 font-mono">Experience</span>
                              <span className="text-xs text-cyan-400 font-semibold font-mono">{skill.experience}</span>
                            </div>
                            
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <motion.div
                                className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                            
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-zinc-500">Click to flip</span>
                              <Link 
                                href={`/skills/${skill.slug}`}
                                className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View Details →
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        <Card className="h-full flex flex-col justify-between p-6" hover={false}>
                          <div>
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            
                            <h3 className="text-lg font-mono font-bold text-zinc-100 mb-3">
                              What I Build
                            </h3>
                            
                            <p className="text-zinc-300 text-sm leading-relaxed">
                              {skill.backText}
                            </p>
                          </div>

                          <div className="flex justify-between items-center text-xs">
                            <span className="text-zinc-500">Click to flip back</span>
                            <Link 
                              href={`/skills/${skill.slug}`}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn More →
                            </Link>
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-20 text-center"
            >
              <Card className="max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-6">
                  Technology Philosophy
                </h2>
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-4">
                  I believe in choosing the right tool for the job. Whether it's Python for rapid prototyping, 
                  Java for enterprise reliability, or React for interactive experiences, each technology serves a purpose.
                </p>
                <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                  The best code is not just functional — it's maintainable, scalable, and secure.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Skills;