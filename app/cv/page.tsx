"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ThemeProvider } from '@/contexts/ThemeContext';

const CV = () => {
  const handleDownloadPDF = () => {
    // PDF generation logic would go here
    alert('PDF download functionality would be implemented here');
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Remote, Lahore",
      period: "June 2024 – Present",
      location: "Remote",
      responsibilities: [
        "Enhanced database performance by optimizing SQL queries in a Struts 2 web application",
        "Migrated codebase from Java 8 to Java 21",
        "Developed Struts 2 web app from scratch with XSS & CSRF protections",
        "Designed secure UI with JSP"
      ]
    },
    {
      title: "Software Engineer",
      company: "Devsinc, Lahore",
      period: "March 2020 – June 2024",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Boosted client's web server speed by 60% (AWS Lambda → EBS)",
        "Migrated .NET app to Django for functionality improvements",
        "Developed financial web app (Django Rest Framework, AWS Elastic Beanstalk, AWS Cognito)",
        "Used AWS Amplify for front-end deployment"
      ]
    },
    {
      title: "Intern",
      company: "Arbisoft, Lahore",
      period: "July 2018 – September 2019",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Worked with Django Rest Framework and React (TypeScript)",
        "Improved professional communication skills"
      ]
    },
    {
      title: "Fellowship",
      company: "Qasim Ali Shah Foundation, Lahore",
      period: "April 2017 – March 2018",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Learned Python & Django",
        "Developed projects using Django and ReactJS"
      ]
    }
  ];

  const education = [
    {
      degree: "BS Computer Science",
      school: "Government College University Lahore",
      period: "Oct 2016 – Dec 2020",
      details: "Strong in C++ and Java for Data Structures & Algorithms. Gold badges on HackerRank. Applied theoretical skills in small projects."
    }
  ];

  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen py-20" id="cv-content">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Curriculum Vitae
              </h1>
              <AnimatedButton onClick={handleDownloadPDF} className="mb-8">
                <FiDownload className="mr-2" />
                Download as PDF
              </AnimatedButton>
            </motion.div>

            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <Card>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-zinc-100 mb-4">
                    Darab Ahmed
                  </h2>
                  <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-6">
                    Software Developer — Lahore, Pakistan
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-zinc-400">
                    <div className="flex items-center gap-2">
                      <FiMail className="w-4 h-4" />
                      <span>darabahmed37@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone className="w-4 h-4" />
                      <span>+(92) 313-4895584</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>Lahore, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiLinkedin className="w-4 h-4" />
                      <a href="https://www.linkedin.com/in/darab-ahmed/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                        linkedin.com/in/darab-ahmed
                      </a>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-zinc-100 mb-4">Skills</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Python, Django/DRF, React, Next.js, AWS, Docker, TypeScript, Git, GitHub, Java, JSP, Tomcat, 
                    SQL, Databases, Multithreading, jQuery, Jira, Problem solving, Quick learning
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-mono font-bold text-zinc-100 mb-8 flex items-center">
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded w-12 mr-4"></div>
                Professional Experience
              </h2>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  >
                    <Card>
                      <div className="mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-zinc-400 mb-2">
                          <span className="font-semibold text-zinc-300">{exp.company}</span>
                          <span>{exp.period}</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 + respIndex * 0.05 }}
                            className="text-zinc-300 flex items-start"
                          >
                            <span className="text-cyan-400 mr-2 mt-1">▶</span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-mono font-bold text-zinc-100 mb-8 flex items-center">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-12 mr-4"></div>
                Education
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                  >
                    <Card>
                      <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-zinc-400 mb-2">
                        <span className="font-semibold text-zinc-300">{edu.school}</span>
                        <span>{edu.period}</span>
                      </div>
                      {edu.details && (
                        <p className="text-zinc-300 text-sm leading-relaxed mt-2">{edu.details}</p>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-mono font-bold text-zinc-100 mb-8 flex items-center">
                <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-12 mr-4"></div>
                Certifications
              </h2>
              
              <Card>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-bold text-cyan-400">HackerRank Profile:</h3>
                    <a 
                      href="https://www.hackerrank.com/profile/darabahmed37" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-cyan-400 transition-colors underline"
                    >
                      https://www.hackerrank.com/profile/darabahmed37
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-bold text-cyan-400">Algorithm Toolbox (Coursera):</h3>
                    <span className="text-zinc-300">Certificate Link</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default CV;