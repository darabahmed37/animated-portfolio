"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiCode, FiTool } from 'react-icons/fi';
import { 
  FaPython, 
  FaReact, 
  FaAws, 
  FiTool,
  FiDatabase
  FaJava, 
  FaGitAlt, 
  FaNodeJs,
  FaLightbulb
} from 'react-icons/fa';
import { SiDjango, SiTypescript, SiSpring, SiPostgresql, SiMongodb } from 'react-icons/si';
import Layout from '@/components/Layout';
import Card from '@/components/ui/Card';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ThemeProvider } from '@/contexts/ThemeContext';

const SkillDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const skillsData: Record<string, any> = {
    python: {
      title: "Python",
      icon: FaPython,
      color: "from-yellow-400 to-green-500",
      description: "Python is my primary programming language for backend development, automation, and data processing. Its clean syntax and extensive ecosystem make it perfect for rapid development and complex problem-solving.",
      whatIBuild: [
        "REST APIs with Django and FastAPI",
        "Data processing pipelines and ETL systems",
        "Automation scripts for deployment and monitoring",
        "Machine learning models and data analysis tools",
        "Web scraping and API integration services"
      ],
      technologies: ["Django", "FastAPI", "Flask", "Pandas", "NumPy", "Requests", "Celery", "SQLAlchemy"],
      projects: [
        {
          name: "GourmetHub Backend",
          description: "Django REST API serving 10,000+ daily users with real-time order tracking"
        },
        {
          name: "Data Migration Tool",
          description: "Python script that migrated 2M+ records between databases with zero downtime"
        },
        {
          name: "AWS Lambda Functions",
          description: "Serverless Python functions for image processing and notification systems"
        }
      ],
      experience: "5+ years",
      proficiency: 95
    },
    django: {
      title: "Django/DRF",
      icon: SiDjango,
      color: "from-green-600 to-blue-600",
      description: "Django and Django REST Framework are my go-to tools for building secure, scalable web applications. The framework's 'batteries included' philosophy and robust security features make it ideal for enterprise applications.",
      whatIBuild: [
        "Secure REST APIs with authentication and permissions",
        "E-commerce platforms with payment integration",
        "Content management systems with admin interfaces",
        "Financial applications with audit trails",
        "Multi-tenant SaaS applications"
      ],
      technologies: ["Django", "Django REST Framework", "Celery", "Redis", "PostgreSQL", "JWT", "OAuth2"],
      projects: [
        {
          name: "FinNova Backend",
          description: "Fintech API handling secure transactions and user financial data"
        },
        {
          name: "CSRConnect Platform",
          description: "Corporate social responsibility portal with complex reporting features"
        },
        {
          name: "E-commerce API",
          description: "Multi-vendor marketplace with real-time inventory and order management"
        }
      ],
      experience: "4+ years",
      proficiency: 90
    },
    react: {
      title: "React",
      icon: FaReact,
      color: "from-blue-400 to-cyan-500",
      description: "React is my preferred library for building interactive user interfaces. Its component-based architecture and rich ecosystem enable me to create maintainable, performant applications.",
      whatIBuild: [
        "Interactive dashboards with real-time data",
        "E-commerce frontends with smooth UX",
        "Admin panels with complex data visualization",
        "Progressive web applications (PWAs)",
        "Component libraries and design systems"
      ],
      technologies: ["React", "React Router", "Redux", "Context API", "React Query", "Styled Components", "Material-UI"],
      projects: [
        {
          name: "FinTrack Admin Dashboard",
          description: "Real-time financial monitoring dashboard with interactive charts"
        },
        {
          name: "TaskForge Interface",
          description: "Project management tool with drag-and-drop Kanban boards"
        },
        {
          name: "ShopSphere Frontend",
          description: "E-commerce platform with AR try-on features and real-time inventory"
        }
      ],
      experience: "4+ years",
      proficiency: 85
    },
    nextjs: {
      title: "Next.js",
      icon: FiCode,
      color: "from-gray-700 to-gray-900",
      description: "Next.js is my framework of choice for production-ready React applications. Its built-in optimizations, SSR capabilities, and developer experience make it perfect for modern web development.",
      whatIBuild: [
        "SEO-optimized marketing websites",
        "Full-stack applications with API routes",
        "Static sites with dynamic content",
        "Portfolio and business websites",
        "E-learning platforms with course management"
      ],
      technologies: ["Next.js", "App Router", "Server Components", "Vercel", "Static Generation", "API Routes"],
      projects: [
        {
          name: "EduVerse Platform",
          description: "E-learning platform with personalized course recommendations"
        },
        {
          name: "Portfolio Website",
          description: "This very portfolio showcasing modern web development practices"
        },
        {
          name: "Corporate Landing Pages",
          description: "High-converting landing pages with optimal performance scores"
        }
      ],
      experience: "3+ years",
      proficiency: 80
    },
    aws: {
      title: "AWS",
      icon: FaAws,
      color: "from-orange-400 to-yellow-500",
      description: "Amazon Web Services is my cloud platform of choice for deploying scalable, reliable applications. I leverage various AWS services to build cost-effective, high-performance solutions.",
      whatIBuild: [
        "Serverless applications with Lambda and API Gateway",
        "Scalable web apps on Elastic Beanstalk",
        "Static sites with S3 and CloudFront",
        "Database solutions with RDS and DynamoDB",
        "Authentication systems with Cognito"
      ],
      technologies: ["Lambda", "S3", "Elastic Beanstalk", "RDS", "DynamoDB", "Cognito", "CloudFront", "API Gateway"],
      projects: [
        {
          name: "Serverless File Sharing",
          description: "AWS Lambda-powered file sharing with automatic expiration"
        },
        {
          name: "Scalable E-commerce Backend",
          description: "Elastic Beanstalk deployment handling thousands of concurrent users"
        },
        {
          name: "Global CDN Implementation",
          description: "CloudFront distribution reducing page load times by 60%"
        }
      ],
      experience: "4+ years",
      proficiency: 80
    },
    typescript: {
      title: "TypeScript",
      icon: SiTypescript,
      color: "from-blue-600 to-indigo-600",
      description: "TypeScript enhances my JavaScript development with static typing, catching errors early and improving code maintainability. It's essential for large-scale applications.",
      whatIBuild: [
        "Type-safe React applications",
        "Node.js APIs with strong typing",
        "Component libraries with proper interfaces",
        "Complex data models and validation",
        "Enterprise applications with team collaboration"
      ],
      technologies: ["TypeScript", "TSConfig", "Type Guards", "Generics", "Decorators", "Interfaces"],
      projects: [
        {
          name: "FinNova Frontend",
          description: "Type-safe fintech application with complex financial calculations"
        },
        {
          name: "API Client Libraries",
          description: "Strongly-typed SDK for third-party service integration"
        },
        {
          name: "Component Design System",
          description: "Reusable UI components with comprehensive type definitions"
        }
      ],
      experience: "3+ years",
      proficiency: 85
    },
    java: {
      title: "Java",
      icon: FaJava,
      color: "from-red-500 to-orange-600",
      description: "Java is my choice for enterprise-grade applications requiring high performance and reliability. Its strong typing and mature ecosystem make it perfect for complex business logic.",
      whatIBuild: [
        "Enterprise web applications with Struts 2",
        "High-performance multithreaded systems",
        "Database-driven business applications",
        "RESTful web services and APIs",
        "Legacy system modernization projects"
      ],
      technologies: ["Java 8-21", "Struts 2", "Spring Boot", "JDBC", "JSP", "Servlets", "Maven", "JUnit"],
      projects: [
        {
          name: "Stock Analysis System",
          description: "Multithreaded application processing real-time market data"
        },
        {
          name: "Internal ERP System",
          description: "Struts 2 application managing HR, inventory, and finance operations"
        },
        {
          name: "CardControl Backend",
          description: "Banking card management system with enterprise security"
        }
      ],
      experience: "4+ years",
      proficiency: 85
    },
    spring: {
      title: "Spring Boot",
      icon: SiSpring,
      color: "from-green-500 to-teal-500",
      description: "Spring Boot accelerates Java development with auto-configuration and production-ready features. It's my framework for building robust microservices and REST APIs.",
      whatIBuild: [
        "Microservices architectures",
        "RESTful APIs with security",
        "Database-driven applications",
        "Integration services and middleware",
        "Enterprise application backends"
      ],
      technologies: ["Spring Boot", "Spring Security", "Spring Data JPA", "Spring Web", "Actuator", "Maven"],
      projects: [
        {
          name: "CardControl API",
          description: "Banking card management microservice with Spring Security"
        },
        {
          name: "Payment Processing Service",
          description: "Secure payment gateway integration with comprehensive logging"
        },
        {
          name: "User Management System",
          description: "Authentication and authorization service for multiple applications"
        }
      ],
      experience: "2+ years",
      proficiency: 75
    },
    docker: {
      title: "Docker",
      icon: FaDocker,
      color: "from-blue-500 to-cyan-400",
      description: "Docker ensures consistent environments across development, testing, and production. I use containerization to simplify deployments and improve scalability.",
      whatIBuild: [
        "Containerized web applications",
        "Multi-service development environments",
        "CI/CD pipeline integrations",
        "Microservices deployments",
        "Database and cache containers"
      ],
      technologies: ["Docker", "Docker Compose", "Dockerfile", "Multi-stage builds", "Container orchestration"],
      projects: [
        {
          name: "Development Environment Setup",
          description: "Docker Compose configuration for full-stack development"
        },
        {
          name: "Production Deployment",
          description: "Containerized Django application with Redis and PostgreSQL"
        },
        {
          name: "Microservices Architecture",
          description: "Multi-container system with service discovery and load balancing"
        }
      ],
      experience: "3+ years",
      proficiency: 75
    },
    git: {
      title: "Git/GitHub",
      icon: FaGitAlt,
      color: "from-gray-600 to-gray-800",
      description: "Git is essential for version control and collaborative development. I use advanced Git workflows and GitHub features to manage complex projects and team collaboration.",
      whatIBuild: [
        "Branching strategies for team development",
        "CI/CD pipelines with GitHub Actions",
        "Code review processes and workflows",
        "Release management and versioning",
        "Open source project contributions"
      ],
      technologies: ["Git", "GitHub", "GitHub Actions", "Pull Requests", "Branching", "Merging", "Rebasing"],
      projects: [
        {
          name: "Team Workflow Setup",
          description: "Git flow implementation for 10+ developer team collaboration"
        },
        {
          name: "Automated Deployment",
          description: "GitHub Actions pipeline for automated testing and deployment"
        },
        {
          name: "Code Quality Gates",
          description: "Pre-commit hooks and automated code review processes"
        }
      ],
      experience: "5+ years",
      proficiency: 90
    },
    sql: {
      title: "SQL/Databases",
      icon: FiDatabase,
      color: "from-purple-500 to-pink-500",
      description: "Database design and SQL optimization are crucial for application performance. I design efficient schemas and write optimized queries for high-traffic applications.",
      whatIBuild: [
        "Optimized database schemas",
        "Complex analytical queries",
        "Data migration scripts",
        "Performance monitoring solutions",
        "Backup and recovery strategies"
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Optimization", "Indexing", "Migrations"],
      projects: [
        {
          name: "Database Performance Optimization",
          description: "Reduced query execution time by 70% through index optimization"
        },
        {
          name: "Data Migration System",
          description: "Migrated 5M+ records between different database systems"
        },
        {
          name: "Analytics Dashboard Backend",
          description: "Complex queries powering real-time business intelligence"
        }
      ],
      experience: "4+ years",
      proficiency: 85
    },
    nodejs: {
      title: "Node.js",
      icon: FaNodeJs,
      color: "from-green-400 to-emerald-500",
      description: "Node.js enables me to build fast, scalable server-side applications using JavaScript. Its event-driven architecture is perfect for real-time applications and APIs.",
      whatIBuild: [
        "Real-time applications with WebSockets",
        "RESTful APIs and microservices",
        "IoT data processing systems",
        "File upload and processing services",
        "Integration middleware and proxies"
      ],
      technologies: ["Node.js", "Express.js", "Socket.io", "Mongoose", "Passport.js", "Multer", "Nodemailer"],
      projects: [
        {
          name: "IoT Monitoring Dashboard",
          description: "Real-time device monitoring with WebSocket connections"
        },
        {
          name: "File Processing API",
          description: "Scalable file upload and processing service with queue management"
        },
        {
          name: "Chat Application Backend",
          description: "Real-time messaging system supporting thousands of concurrent users"
        }
      ],
      experience: "3+ years",
      proficiency: 75
    },
    multithreading: {
      title: "Multithreading",
      icon: FiTool,
      color: "from-red-400 to-pink-500",
      description: "Multithreading and concurrent programming allow me to build high-performance applications that efficiently utilize system resources and handle multiple operations simultaneously.",
      whatIBuild: [
        "High-throughput data processing systems",
        "Real-time stock analysis applications",
        "Concurrent web scrapers",
        "Parallel computation algorithms",
        "Thread-safe caching systems"
      ],
      technologies: ["Java Concurrency", "Thread Pools", "Executors", "Synchronization", "Atomic Operations", "CompletableFuture"],
      projects: [
        {
          name: "Stock Market Analyzer",
          description: "Multithreaded Java application processing real-time market data"
        },
        {
          name: "Parallel Data Processor",
          description: "Concurrent system processing millions of records efficiently"
        },
        {
          name: "Real-time Analytics Engine",
          description: "Thread-safe system aggregating data from multiple sources"
        }
      ],
      experience: "3+ years",
      proficiency: 80
    },
    struts: {
      title: "Struts 2",
      icon: FiCode,
      color: "from-indigo-500 to-purple-500",
      description: "Struts 2 is a mature Java web framework that I use for building enterprise applications. Its MVC architecture and extensive plugin ecosystem make it suitable for complex business applications.",
      whatIBuild: [
        "Enterprise web applications",
        "Internal business tools and ERP systems",
        "Secure admin interfaces",
        "Form-heavy applications with validation",
        "Legacy system modernization"
      ],
      technologies: ["Struts 2", "JSP", "JSTL", "Tiles", "Interceptors", "OGNL", "Validation Framework"],
      projects: [
        {
          name: "Internal ERP System",
          description: "Comprehensive business management system with HR, inventory, and finance modules"
        },
        {
          name: "Document Management Portal",
          description: "Secure document upload and approval workflow system"
        },
        {
          name: "Employee Management System",
          description: "HR application with role-based access and reporting features"
        }
      ],
      experience: "2+ years",
      proficiency: 70
    },
    jsp: {
      title: "JSP",
      icon: FiCode,
      color: "from-orange-500 to-red-500",
      description: "JavaServer Pages (JSP) technology allows me to create dynamic web content by embedding Java code in HTML. I use JSP for building server-side rendered web applications.",
      whatIBuild: [
        "Dynamic web pages with server-side logic",
        "Form processing and validation interfaces",
        "Template-based content management",
        "Enterprise web application frontends",
        "Custom tag libraries for reusable components"
      ],
      technologies: ["JSP", "JSTL", "EL (Expression Language)", "Custom Tags", "Servlets", "JavaBeans"],
      projects: [
        {
          name: "Corporate Intranet",
          description: "Employee portal with dynamic content and role-based views"
        },
        {
          name: "Reporting Dashboard",
          description: "Business intelligence interface with dynamic chart generation"
        },
        {
          name: "Content Management Interface",
          description: "Admin panel for managing website content and user permissions"
        }
      ],
      experience: "2+ years",
      proficiency: 75
    },
    postgresql: {
      title: "PostgreSQL",
      icon: SiPostgresql,
      color: "from-blue-600 to-indigo-700",
      description: "PostgreSQL is my preferred relational database for its advanced features, reliability, and performance. I leverage its powerful query capabilities and extensions for complex applications.",
      whatIBuild: [
        "High-performance database schemas",
        "Complex analytical queries with CTEs",
        "Full-text search implementations",
        "Data warehousing solutions",
        "Multi-tenant database architectures"
      ],
      technologies: ["PostgreSQL", "PL/pgSQL", "Indexes", "Views", "Triggers", "JSON/JSONB", "Full-text Search"],
      projects: [
        {
          name: "Financial Data Warehouse",
          description: "Complex schema handling millions of transactions with sub-second queries"
        },
        {
          name: "Search Engine Backend",
          description: "Full-text search implementation with ranking and filtering"
        },
        {
          name: "Analytics Database",
          description: "Time-series data storage with efficient aggregation queries"
        }
      ],
      experience: "4+ years",
      proficiency: 80
    },
    mongodb: {
      title: "MongoDB",
      icon: SiMongodb,
      color: "from-green-500 to-teal-600",
      description: "MongoDB provides flexibility for applications with evolving data structures. I use it for content management, real-time applications, and scenarios requiring horizontal scaling.",
      whatIBuild: [
        "Content management systems",
        "Real-time chat applications",
        "IoT data collection systems",
        "Product catalog databases",
        "User activity tracking systems"
      ],
      technologies: ["MongoDB", "Mongoose", "Aggregation Pipeline", "GridFS", "Sharding", "Replica Sets"],
      projects: [
        {
          name: "FleetTrack Database",
          description: "Vehicle tracking system storing millions of GPS coordinates"
        },
        {
          name: "Content Management Backend",
          description: "Flexible CMS supporting various content types and structures"
        },
        {
          name: "Real-time Analytics",
          description: "Event tracking system with complex aggregation pipelines"
        }
      ],
      experience: "2+ years",
      proficiency: 70
    },
    jquery: {
      title: "jQuery",
      icon: FiZap,
      color: "from-blue-400 to-purple-500",
      description: "jQuery was instrumental in my early web development journey and remains useful for enhancing legacy applications and adding interactive features quickly.",
      whatIBuild: [
        "Interactive form enhancements",
        "Legacy application improvements",
        "Quick prototypes and demos",
        "AJAX-powered dynamic content",
        "Animation and UI effects"
      ],
      technologies: ["jQuery", "jQuery UI", "AJAX", "DOM Manipulation", "Event Handling", "Plugins"],
      projects: [
        {
          name: "Legacy System Enhancement",
          description: "Added modern interactions to existing enterprise applications"
        },
        {
          name: "Dynamic Form Builder",
          description: "Interactive form creation tool with drag-and-drop functionality"
        },
        {
          name: "Dashboard Widgets",
          description: "Reusable UI components for business intelligence dashboards"
        }
      ],
      experience: "3+ years",
      proficiency: 75
    },
    jira: {
      title: "Jira",
      icon: FiTarget,
      color: "from-blue-500 to-cyan-500",
      description: "Jira is my project management tool of choice for agile development. I use it to track progress, manage sprints, and coordinate team workflows effectively.",
      whatIBuild: [
        "Agile sprint planning and tracking",
        "Custom workflows for development processes",
        "Bug tracking and resolution systems",
        "Project reporting and analytics",
        "Team collaboration frameworks"
      ],
      technologies: ["Jira", "Agile/Scrum", "Kanban", "Custom Workflows", "JQL", "Reporting", "Integrations"],
      projects: [
        {
          name: "Development Workflow Setup",
          description: "Implemented agile processes for 15+ developer teams"
        },
        {
          name: "Bug Tracking System",
          description: "Custom Jira configuration reducing bug resolution time by 40%"
        },
        {
          name: "Project Analytics Dashboard",
          description: "Automated reporting system for project managers and stakeholders"
        }
      ],
      experience: "4+ years",
      proficiency: 85
    },
    "problem-solving": {
      title: "Problem Solving",
      icon: FaLightbulb,
      color: "from-purple-400 to-pink-500",
      description: "Problem-solving is at the core of software development. I approach challenges systematically, breaking complex problems into manageable components and finding elegant solutions.",
      whatIBuild: [
        "Debugging strategies for complex issues",
        "Performance optimization solutions",
        "Architecture decisions for scalability",
        "Creative workarounds for technical limitations",
        "Process improvements for development efficiency"
      ],
      technologies: ["Analytical Thinking", "Debugging", "Performance Profiling", "Architecture Design", "Root Cause Analysis"],
      projects: [
        {
          name: "Performance Optimization",
          description: "Improved application response time by 60% through systematic analysis"
        },
        {
          name: "Legacy System Migration",
          description: "Successfully migrated critical business system with zero downtime"
        },
        {
          name: "Scalability Solution",
          description: "Redesigned architecture to handle 10x traffic increase"
        }
      ],
      experience: "5+ years",
      proficiency: 95
    },
    "quick-learning": {
      title: "Quick Learning",
      icon: FiTrendingUp,
      color: "from-emerald-400 to-teal-500",
      description: "The tech industry evolves rapidly, and I pride myself on quickly adapting to new technologies, frameworks, and methodologies to stay current and effective.",
      whatIBuild: [
        "Rapid prototypes with new technologies",
        "Migration strategies for framework updates",
        "Integration solutions for emerging tools",
        "Knowledge transfer and documentation",
        "Technology evaluation and adoption plans"
      ],
      technologies: ["Continuous Learning", "Technology Evaluation", "Rapid Prototyping", "Documentation", "Knowledge Sharing"],
      projects: [
        {
          name: "Framework Migration",
          description: "Successfully migrated team from legacy framework to modern stack in 3 months"
        },
        {
          name: "New Technology Integration",
          description: "Evaluated and integrated 5 new tools improving development efficiency by 30%"
        },
        {
          name: "Learning Documentation",
          description: "Created comprehensive guides helping team adopt new technologies faster"
        }
      ],
      experience: "5+ years",
      proficiency: 90
    },
    "rest-apis": {
      title: "REST APIs",
      icon: FiServer,
      color: "from-indigo-400 to-blue-500",
      description: "RESTful API design and implementation is central to modern web development. I create well-documented, secure, and scalable APIs that serve as the backbone of applications.",
      whatIBuild: [
        "Scalable REST API architectures",
        "Authentication and authorization systems",
        "API documentation and testing suites",
        "Rate limiting and security implementations",
        "Third-party service integrations"
      ],
      technologies: ["REST", "OpenAPI/Swagger", "JWT", "OAuth2", "API Gateway", "Rate Limiting", "CORS"],
      projects: [
        {
          name: "E-commerce API",
          description: "Comprehensive REST API serving mobile and web applications"
        },
        {
          name: "Financial Services API",
          description: "Secure banking API with comprehensive audit trails"
        },
        {
          name: "Integration Platform",
          description: "API gateway connecting multiple internal and external services"
        }
      ],
      experience: "4+ years",
      proficiency: 90
    },
    redis: {
      title: "Redis",
      icon: FiActivity,
      color: "from-red-400 to-orange-500",
      description: "Redis serves as my go-to solution for caching, session management, and real-time data storage. Its speed and versatility make it perfect for performance optimization.",
      whatIBuild: [
        "High-performance caching layers",
        "Session storage systems",
        "Real-time data synchronization",
        "Message queuing systems",
        "Rate limiting implementations"
      ],
      technologies: ["Redis", "Redis Cluster", "Pub/Sub", "Lua Scripts", "Redis Streams", "Caching Strategies"],
      projects: [
        {
          name: "Caching Implementation",
          description: "Redis caching layer reducing database load by 80%"
        },
        {
          name: "Real-time Notifications",
          description: "Pub/Sub system delivering instant updates to thousands of users"
        },
        {
          name: "Session Management",
          description: "Distributed session storage for load-balanced applications"
        }
      ],
      experience: "2+ years",
      proficiency: 70
    },
    linux: {
      title: "Linux/Unix",
      icon: FiTerminal,
      color: "from-gray-600 to-slate-700",
      description: "Linux proficiency is essential for server management and deployment. I'm comfortable with command-line operations, system administration, and automation scripting.",
      whatIBuild: [
        "Server deployment and configuration",
        "Automation scripts for system tasks",
        "Monitoring and logging solutions",
        "Security hardening implementations",
        "CI/CD pipeline configurations"
      ],
      technologies: ["Linux", "Bash", "SSH", "Cron", "Systemd", "Nginx", "Apache", "System Administration"],
      projects: [
        {
          name: "Server Infrastructure",
          description: "Configured and maintained production servers for high-traffic applications"
        },
        {
          name: "Deployment Automation",
          description: "Bash scripts automating deployment processes and reducing errors"
        },
        {
          name: "Monitoring Setup",
          description: "Comprehensive logging and alerting system for production environments"
        }
      ],
      experience: "4+ years",
      proficiency: 80
    }
  };

  const currentSkill = skillsData[slug];

  if (!currentSkill) {
    return (
      <ThemeProvider>
        <Layout>
          <div className="min-h-screen py-20 flex items-center justify-center">
            <Card className="text-center max-w-md">
              <h1 className="text-2xl font-mono font-bold text-zinc-100 mb-4">Skill Not Found</h1>
              <p className="text-zinc-400 mb-6">The skill you're looking for doesn't exist.</p>
              <Link href="/skills">
                <AnimatedButton>
                  <FiArrowLeft className="mr-2" />
                  Back to Skills
                </AnimatedButton>
              </Link>
            </Card>
          </div>
        </Layout>
      </ThemeProvider>
    );
  }

  const Icon = currentSkill.icon;

  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/skills">
                <motion.div
                  whileHover={{ x: -5 }}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  <span className="font-mono">Back to Skills</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${currentSkill.color} mb-6`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {currentSkill.title}
              </h1>
              
              <div className="flex justify-center items-center gap-4 mb-6">
                <span className="text-zinc-400 font-mono text-sm">Experience:</span>
                <span className="text-cyan-400 font-bold font-mono">{currentSkill.experience}</span>
                <span className="text-zinc-400 font-mono text-sm">Proficiency:</span>
                <span className="text-cyan-400 font-bold font-mono">{currentSkill.proficiency}%</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <Card>
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-4">Overview</h2>
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                  {currentSkill.description}
                </p>
              </Card>
            </motion.div>

            {/* What I Build */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-12"
            >
              <Card>
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-6">What I Build</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentSkill.whatIBuild.map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50"
                    >
                      <FiCode className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12"
            >
              <Card>
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-6">Related Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {currentSkill.technologies.map((tech: string, index: number) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 text-xs sm:text-sm font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Example Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-12"
            >
              <Card>
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-zinc-100 mb-6">Example Projects</h2>
                <div className="space-y-4">
                  {currentSkill.projects.map((project: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <h3 className="text-lg font-mono font-bold text-cyan-400 mb-2">{project.name}</h3>
                      <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-center"
            >
              <Card>
                <h3 className="text-xl font-mono font-bold text-zinc-100 mb-4">
                  Want to see {currentSkill.title} in action?
                </h3>
                <p className="text-zinc-400 mb-6 text-sm sm:text-base">
                  Let's discuss how I can apply this skill to solve your specific challenges.
                </p>
                <Link href="/contact">
                  <AnimatedButton>
                    <FiExternalLink className="mr-2" />
                    Get In Touch
                  </AnimatedButton>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default SkillDetail;