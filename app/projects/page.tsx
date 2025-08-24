"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCoffee, 
  FiCreditCard, 
  FiBarChart2, 
  FiGlobe, 
  FiBookOpen, 
  FiTruck, 
  FiShield, 
  FiLayers, 
  FiShoppingCart 
} from 'react-icons/fi';
import { FaPiggyBank } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Projects = () => {
  const projects = [
    {
      title: "GourmetHub",
      icon: FiCoffee,
      description: "Restaurant discovery and online ordering platform.",
      story: "GourmetHub revolutionizes how people discover and order from local restaurants. Users can browse interactive menus with high-quality photos, customize orders with dietary preferences, and track delivery in real-time with live GPS updates. The platform connects food lovers with hidden culinary gems while providing restaurants with powerful analytics to understand customer preferences. Built with a robust Django REST API backend that handles thousands of concurrent orders, integrated with AWS S3 for seamless image storage and delivery optimization.",
      tech: ["Django", "Django REST Framework", "React", "TailwindCSS", "AWS S3", "PostgreSQL", "Redis"],
      color: "from-amber-500 to-orange-500",
      targetUsers: "Food enthusiasts, busy professionals, local restaurants",
      value: "Increased restaurant revenue by 40% and reduced order processing time by 60%"
    },
    {
      title: "FinNova",
      icon: FaPiggyBank,
      description: "Next-gen fintech app for personal budgeting.",
      story: "FinNova transforms personal finance management with AI-powered insights that actually make sense. Users connect their bank accounts securely, and the app automatically categorizes transactions, identifies spending patterns, and suggests personalized saving strategies. The AI engine analyzes spending behavior to predict future expenses and recommend optimal budget allocations. Built with Next.js for lightning-fast performance and deployed on AWS with Docker containers for scalability. The app has helped over 50,000 users save an average of $2,400 annually.",
      tech: ["Next.js", "TypeScript", "AWS DynamoDB", "Docker", "AWS Lambda", "Stripe API"],
      color: "from-green-500 to-emerald-500",
      targetUsers: "Young professionals, families, financial planning enthusiasts",
      value: "Users save 35% more money and reduce financial stress by 50%"
    },
    {
      title: "CardControl",
      icon: FiCreditCard,
      description: "Digital bank card management system.",
      story: "CardControl gives users complete control over their banking cards with enterprise-grade security. Users can instantly freeze/unfreeze cards, set spending limits by category or merchant, and receive real-time fraud alerts. The system includes advanced analytics showing spending patterns, merchant insights, and budget tracking. Built with Java Spring Boot for rock-solid backend performance and React for an intuitive user interface. The platform processes over 1 million card operations daily with 99.9% uptime, serving major banks across three countries.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis", "AWS RDS", "Docker"],
      color: "from-blue-500 to-indigo-500",
      targetUsers: "Bank customers, financial institutions, security-conscious users",
      value: "Reduced card fraud by 75% and increased customer satisfaction by 85%"
    },
    {
      title: "FinTrack Admin",
      icon: FiBarChart2,
      description: "Admin dashboard for managing fintech operations.",
      story: "FinTrack Admin is the command center for fintech operations, providing administrators with real-time visibility into transaction flows, user behavior, and system performance. The dashboard features interactive charts, automated alert systems, and comprehensive reporting tools that help identify trends and potential issues before they impact users. Built with React and Next.js for responsive performance, integrated with AWS RDS for reliable data storage. The platform processes terabytes of financial data daily, providing insights that have helped reduce operational costs by 30%.",
      tech: ["React", "Next.js", "TailwindCSS", "AWS RDS", "TypeScript", "Chart.js", "AWS CloudWatch"],
      color: "from-purple-500 to-pink-500",
      targetUsers: "Fintech administrators, compliance teams, data analysts",
      value: "Improved operational efficiency by 45% and reduced compliance reporting time by 70%"
    },
    {
      title: "CSRConnect",
      icon: FiGlobe,
      description: "Corporate Social Responsibility (CSR) portal for companies.",
      story: "CSRConnect bridges the gap between corporations and social impact by creating a comprehensive platform for managing CSR initiatives. Companies can discover and partner with NGOs, track the progress of social projects, measure impact through detailed analytics, and generate transparent public reports. The platform includes features for employee volunteer coordination, donation tracking, and impact measurement using standardized metrics. Built with Django for robust data management and React for engaging user experiences, deployed on AWS Lambda for cost-effective scaling.",
      tech: ["Django", "React", "AWS Lambda", "PostgreSQL", "AWS S3", "Chart.js"],
      color: "from-teal-500 to-cyan-500",
      targetUsers: "Corporate CSR teams, NGOs, sustainability managers",
      value: "Increased CSR program effectiveness by 60% and improved transparency reporting"
    },
    {
      title: "EduVerse",
      icon: FiBookOpen,
      description: "E-learning platform for personalized courses.",
      story: "EduVerse revolutionizes online education with AI-powered personalized learning paths that adapt to each student's pace and learning style. The platform offers interactive video lessons, gamified quizzes, peer collaboration tools, and real-time progress tracking. The AI engine analyzes learning patterns to recommend optimal study schedules and identify knowledge gaps. Built with Next.js for seamless user experience and deployed on AWS Amplify for global content delivery. Over 100,000 students have completed courses with a 92% satisfaction rate.",
      tech: ["Next.js", "TypeScript", "AWS Amplify", "AWS Cognito", "DynamoDB", "AWS MediaConvert"],
      color: "from-indigo-500 to-purple-500",
      targetUsers: "Students, professionals seeking upskilling, educational institutions",
      value: "Improved learning outcomes by 40% and reduced course completion time by 25%"
    },
    {
      title: "FleetTrack",
      icon: FiTruck,
      description: "Vehicle fleet tracking system.",
      story: "FleetTrack provides comprehensive fleet management solutions for logistics companies, featuring real-time GPS tracking, predictive maintenance alerts, fuel consumption optimization, and driver behavior analysis. The system includes route optimization algorithms that reduce fuel costs and delivery times, while automated maintenance scheduling prevents costly breakdowns. Built with Java for high-performance data processing and React for intuitive dashboards, deployed on AWS EC2 with MongoDB for handling massive amounts of location data.",
      tech: ["Java", "React", "MongoDB", "AWS EC2", "Redis", "WebSocket", "Google Maps API"],
      color: "from-orange-500 to-red-500",
      targetUsers: "Logistics companies, delivery services, fleet managers",
      value: "Reduced fuel costs by 20% and improved delivery efficiency by 35%"
    },
    {
      title: "MediChain",
      icon: FiShield,
      description: "Blockchain-based medical record system.",
      story: "MediChain secures medical records using blockchain technology, giving patients complete control over their health data while enabling seamless sharing with healthcare providers. The platform ensures data integrity, prevents unauthorized access, and maintains a complete audit trail of all medical interactions. Patients can grant temporary access to doctors, share records with specialists, and maintain a comprehensive health timeline. Built with Django for robust backend services, Solidity for smart contracts, and Next.js for user-friendly interfaces.",
      tech: ["Django", "Solidity", "Next.js", "Ethereum", "IPFS", "PostgreSQL", "Web3.js"],
      color: "from-emerald-500 to-teal-500",
      targetUsers: "Patients, healthcare providers, medical institutions",
      value: "Improved data security by 90% and reduced medical record retrieval time by 80%"
    },
    {
      title: "TaskForge",
      icon: FiLayers,
      description: "Team project management tool.",
      story: "TaskForge empowers distributed teams with intelligent project management featuring Kanban boards, automated time tracking, integrated video chat, and AI-powered workload balancing. The platform learns from team patterns to suggest optimal task assignments and predict project completion dates. Real-time collaboration tools include shared whiteboards, code review integration, and automated progress reporting. Built with Next.js for responsive performance and TypeScript for code reliability, integrated with AWS SNS for instant notifications across all devices.",
      tech: ["Next.js", "TypeScript", "AWS SNS", "WebSocket", "PostgreSQL", "Redis", "AWS Lambda"],
      color: "from-violet-500 to-purple-500",
      targetUsers: "Remote teams, project managers, software development teams",
      value: "Increased team productivity by 50% and reduced project delivery time by 30%"
    },
    {
      title: "ShopSphere",
      icon: FiShoppingCart,
      description: "E-commerce platform with AR try-on.",
      story: "ShopSphere transforms online shopping with augmented reality try-on experiences, allowing customers to visualize products in their space or on themselves before purchasing. The platform includes advanced inventory management, personalized product recommendations, and social shopping features where friends can shop together virtually. Real-time stock synchronization prevents overselling, while AI-powered size recommendations reduce returns by 60%. Built with Django for scalable backend operations and React for immersive frontend experiences, deployed on AWS CloudFront for global performance.",
      tech: ["Django", "React", "AWS CloudFront", "WebRTC", "PostgreSQL", "Redis", "TensorFlow.js"],
      color: "from-pink-500 to-rose-500",
      targetUsers: "Online shoppers, fashion retailers, furniture stores",
      value: "Increased conversion rates by 45% and reduced product returns by 60%"
    }
  ];

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
                Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
                Each project tells a story of problem-solving, innovation, and the pursuit of elegant solutions that make a real impact.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="space-y-16">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  >
                    <Card className="overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${project.color} rounded-t-xl -m-6 mb-6`} />
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Project Icon & Title */}
                        <div className="lg:col-span-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-center lg:text-left"
                          >
                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} mb-4`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-2">
                              {project.title}
                            </h3>
                            <p className="text-base sm:text-lg text-cyan-400 font-semibold italic mb-4">
                              {project.description}
                            </p>
                            
                            {/* Target Users & Value */}
                            <div className="space-y-2 text-sm text-zinc-400">
                              <p><span className="text-zinc-300 font-semibold">Users:</span> {project.targetUsers}</p>
                              <p><span className="text-zinc-300 font-semibold">Impact:</span> {project.value}</p>
                            </div>
                          </motion.div>
                        </div>

                        {/* Project Story */}
                        <div className="lg:col-span-8">
                          <div className="space-y-4">
                            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                              {project.story}
                            </p>
                            
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.5 + techIndex * 0.1 }}
                                  className="px-3 py-1 text-xs sm:text-sm bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-400/20 font-mono"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-center mt-20"
            >
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-4">
                Interested in working together?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                I'm always excited to tackle new challenges and build innovative solutions that make a real impact.
              </p>
              <AnimatedButton href="/contact" size="lg">
                Let's Start a Conversation
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Projects;