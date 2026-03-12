import type { WorkType } from '@/types/work';

export const works: WorkType[] = [
  { 
    id: 'wts',
    title: 'wts', 
    img: '/works/wts/main.webp', 
    description: 'Professional management platform for tracking project hours, leave requests, and business expenses.', 
    width: 1280, 
    height: 665, 
    color: 'gray',
    role: 'Development only',
    longDescription: 'WTS is an internal company platform developed during my internship. The application was designed to help employees track the hours spent on different company projects and manage daily work activities. Through the platform, users could log their working hours, submit business expenses, and review personal statistics related to their productivity and time distribution across projects. The system was integrated with the company’s backend infrastructure and database, allowing project managers to monitor resource allocation and overall work progress. My role focused on developing the frontend interface using Angular, ensuring that the platform was intuitive, efficient, and suitable for daily use by employees.',
    images: ['/works/wts/main.webp', '/works/wts/1.webp', '/works/wts/2.webp', '/works/wts/3.webp', '/works/wts/4.webp', '/works/wts/5.webp'],
    techStack: {
      frontEnd: ['angular', 'css', 'tailwind'],
      backEnd: ['sap'],
      database: ['sqlServer']
    },
    keyFeatures: {
      'Work Hours Tracking': 'Employees could log and organize the hours spent on different company projects.',
      'Personal Statistics Dashboard': 'Users could view summaries and insights about their worked hours and project distribution.',
      'Expense Submission': 'Ability to register and manage company-related expenses directly within the platform.',
      'Project-based Time Management': 'Hours were categorized by project, allowing better tracking of company resources.',
      'Enterprise Integration': 'Connected to the company backend and database infrastructure for centralized data management.'
    }
  },{
    id: 'userManagment',
    title: 'user managment', 
    img: '/works/userManagment/main.webp', 
    description: 'A role-based CRUD application for managing user requests across multiple product categories.', 
    width: 1280, 
    height: 665, 
    color: 'red',
    role: 'Full build',
    longDescription: 'User Management is a full-stack application developed as part of my final exam project. The platform allows administrators and standard users to manage and request different types of resources through a structured system. Users can create requests for specific items belonging to different categories, while administrators have extended permissions to review, approve, or reject those requests. The application implements a role-based architecture with protected routes and authentication mechanisms to ensure secure access. The project demonstrates a complete CRUD workflow, covering user management, request handling, and data validation both on the client and server side. The project follows a modular architecture and integrates real-time features via Socket.IO.',
    images: ['/works/userManagment/main.webp', '/works/userManagment/1.webp', '/works/userManagment/2.webp', '/works/userManagment/3.webp', '/works/userManagment/4.webp', '/works/userManagment/5.webp', '/works/userManagment/6.webp', '/works/userManagment/7.webp'],
    techStack: {
      frontEnd: ['react', 'vite', 'css'],
      backEnd: ['node'],
      database: ['mongodb'],
      design: ['figma'],
    },
    keyFeatures: {
        'Real-time Data Updates': 'See changes instantly without refreshing the page',
        'Authentication System': 'Secure user registration and login flow with password encryption and secure token handling',
        'Authorization Levels': 'Role-based access control (Admin/User) and protected routes based on user permissions',
        'Token-based Authentication': 'JWT implementation for secure API access',
        'Form Validation': 'Client and server-side validation for data integrity'
    }
  },{
    id: 'scriptorium',
    title: 'scriptorium', 
    img: '/works/scriptorium/main.webp', 
    description: 'A web-based code organizer to manage folders and programming files in one place.', 
    width: 1280, 
    height: 665, 
    color: 'light-red',
    role: 'Full build',
    longDescription: 'Scriptorium is a web-based code and text management platform designed to store and organize small scripts and notes in a structured way. The application allows users to create personal folders where they can save programming snippets or text files for future reference. Built using PHP and server-side rendering, the platform focuses on simplicity and speed while maintaining a clear organizational structure. The project was inspired by the need for a lightweight alternative to larger platforms when storing quick code snippets or personal scripts.',
    images: ['/works/scriptorium/main.webp', '/works/scriptorium/1.webp', '/works/scriptorium/2.webp', '/works/scriptorium/3.webp', '/works/scriptorium/4.webp', '/works/scriptorium/5.webp', '/works/scriptorium/6.webp', '/works/scriptorium/7.webp', '/works/scriptorium/8.webp'],
    techStack: {
      frontEnd: ['html', 'javascript' , 'css'],
      backEnd: ['php'],
      database: ['mysql']
    },
    keyFeatures: {
      'User Authentication': 'Secure login system allowing users to manage their personal content.',
      'Folder Organization': 'Users can create folders to structure and organize their scripts.',
      'Code Snippet Storage': 'Ability to store and manage programming snippets and text files.',
      'Server-side Rendering': 'PHP-based SSR architecture for faster content delivery.',
      'Personal Code Library': 'Users can maintain their own collection of reusable scripts.'
    }
  },{
    id: 'polveriSottili',
    title: 'polveri sottili', 
    img: '/works/polveriSottili/main.webp', 
    description: 'An environmental monitoring tool that tracks air quality and pollution levels.', 
    width: 1280, 
    height: 665, 
    color: 'gray',
    role: 'Full build',
    longDescription: 'Polveri Sottili is an educational web project developed for a school assignment combining civic education and computer science. The platform aims to raise awareness about air pollution and the health risks related to particulate matter such as PM2.5 and PM10. The website provides educational content explaining the dangers of air pollution and includes an interactive section where users can check pollution levels from different monitoring stations located in the province of Verona. Using Chart.js, the application visualizes pollution data through dynamic charts, allowing users to compare air quality across different locations.',
    images: ['/works/polveriSottili/main.webp', '/works/polveriSottili/1.webp', '/works/polveriSottili/2.webp', '/works/polveriSottili/3.webp', '/works/polveriSottili/4.webp', '/works/polveriSottili/5.webp', '/works/polveriSottili/6.webp', '/works/polveriSottili/7.webp'],
    techStack: {
      frontEnd: ['html', 'javascript', 'css', 'jquery'],
      backEnd: ['php'],
      database: ['xml', 'mysql']
    },
    keyFeatures: {
      'Educational Content': 'Informational pages explaining the risks of particulate pollution.',
      'Air Quality Monitoring': 'Users can check pollution levels from multiple monitoring stations.',
      'Station Comparison': 'Ability to view data from a single station or compare multiple stations together.',
      'Interactive Data Visualization': 'Charts built with Chart.js to display pollution levels over time.',
      'Environmental Awareness Tool': 'Designed to help users better understand air quality in their area.'
    }
  },{
    id: 'mentecorpo',
    title: 'mente corpo', 
    img: '/works/mentecorpo/main.webp', 
    description: 'Minimal and calming showcase website designed for a professional psychologist.',
    width: 1280, 
    height: 665, 
    color: 'light-red',
    role: 'Full build',
    longDescription: 'Mente Corpo is a minimal showcase website developed for a professional psychologist. The project focuses on creating a calm and welcoming online presence, with a clean design that reflects the nature of the profession. The website presents information about the services offered, professional background, and contact details in a clear and accessible way. Particular attention was given to performance and search engine visibility by implementing caching strategies and proper SEO configurations such as robots.txt and structured metadata.',
    images: ['/works/mentecorpo/main.webp', '/works/mentecorpo/1.webp', '/works/mentecorpo/2.webp', '/works/mentecorpo/3.webp', '/works/mentecorpo/4.webp'],
    techStack: {
      frontEnd: ['html', 'javascript', 'css'],
      design: ['illustrator'],
    },
    keyFeatures: {
      'Professional Showcase Website': 'Designed to present services and professional information clearly.',
      'Performance Optimization': 'Caching strategies implemented to improve page loading speed.',
      'SEO Optimization': 'Robots.txt configuration and search engine friendly structure.',
      'Responsive Design': 'Optimized layout for both desktop and mobile devices.',
      'Clean and Calming UI': 'Minimal design tailored for a psychology practice.'
    }
  },{
    id: 'donisi',
    title: 'donisi', 
    img: '/works/donisi/main.webp', 
    description: 'Modern landing page design for a professional plumbing company.',
    width: 1280, 
    height: 665, 
    color: 'red',
    role: 'Design',
    longDescription: 'Donisi is a modern landing page design created for a plumbing company. The goal of the project was to design a visually appealing and responsive interface that could effectively showcase the company’s services and professional identity. The design focuses on clarity, strong visual hierarchy, and accessibility across devices. Although the final website was not developed by me, the project involved creating a complete visual concept and responsive layout ready for implementation.',
    images: ['/works/donisi/main.webp', '/works/donisi/1.webp', '/works/donisi/2.webp', '/works/donisi/3.webp', '/works/donisi/4.webp'],
    techStack: {
      design: ['figma', 'illustrator'],
    },
    keyFeatures: {
      'Responsive UI Design': 'Layout designed to adapt seamlessly across different screen sizes.',
      'Service-focused Structure': 'Clear sections highlighting the company’s services and expertise.',
      'Modern Visual Identity': 'Bold colors and typography to strengthen brand recognition.',
      'User-friendly Navigation': 'Simple navigation structure for easy browsing.',
      'Design-ready Layout': 'Prepared for development with organized design components.'
    }
  }
]