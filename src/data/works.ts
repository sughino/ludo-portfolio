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
    longDescription: '',
    images: ['/works/wts/main.webp', '/works/wts/1.webp', '/works/wts/2.webp', '/works/wts/3.webp', '/works/wts/4.webp', '/works/wts/5.webp'],
    techStack: {
      frontEnd: ['angular', 'css', 'tailwind'],
      backEnd: ['sap'],
      database: ['sqlServer']
    },
    keyFeatures: {
      '': ''
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
    longDescription: 'This full-stack web application provides a modern, responsive interface and a robust backend infrastructure designed for scalability and performance. Built using React, Node.js, MongoDB, and Vite, the project follows a modular architecture and integrates real-time features via Socket.IO.',
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
    longDescription: '',
    images: ['/works/scriptorium/main.webp', '/works/scriptorium/1.webp', '/works/scriptorium/2.webp', '/works/scriptorium/3.webp', '/works/scriptorium/4.webp', '/works/scriptorium/5.webp', '/works/scriptorium/6.webp', '/works/scriptorium/7.webp', '/works/scriptorium/8.webp'],
    techStack: {
      frontEnd: ['html', 'javascript' , 'css'],
      backEnd: ['php'],
      database: ['mysql']
    },
    keyFeatures: {
      '': ''
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
    longDescription: '',
    images: ['/works/polveriSottili/main.webp', '/works/polveriSottili/1.webp', '/works/polveriSottili/2.webp', '/works/polveriSottili/3.webp', '/works/polveriSottili/4.webp', '/works/polveriSottili/5.webp', '/works/polveriSottili/6.webp', '/works/polveriSottili/7.webp'],
    techStack: {
      frontEnd: ['html', 'javascript', 'css', 'jquery'],
      backEnd: ['php'],
      database: ['xml', 'mysql']
    },
    keyFeatures: {
      '': ''
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
    longDescription: '',
    images: ['/works/mentecorpo/main.webp', '/works/mentecorpo/1.webp', '/works/mentecorpo/2.webp', '/works/mentecorpo/3.webp', '/works/mentecorpo/4.webp'],
    techStack: {
      frontEnd: ['html', 'javascript', 'css'],
      design: ['illustrator'],
    },
    keyFeatures: {
      '': ''
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
    longDescription: '',
    images: ['/works/donisi/main.webp', '/works/donisi/1.webp', '/works/donisi/2.webp', '/works/donisi/3.webp', '/works/donisi/4.webp'],
    techStack: {
      design: ['figma', 'illustrator'],
    },
    keyFeatures: {
      '': ''
    }
  }
]