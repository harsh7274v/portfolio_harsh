export const projectsData = [
  {
    id: 'anaquest',
    title: 'AnaQuest',
    description: 'AI-powered analytical practice & feedback platform for competitive exams and placements. Personalized quizzes, AI explanations, and adaptive learning.',
    longDescription: 'AnaQuest is a smart EdTech platform that empowers students to practice analytical questions for competitive exams and placements with real-time feedback and adaptive learning. It delivers personalized quizzes, AI-generated explanations, and dynamic performance summaries. Built with Next.js, Tailwind CSS, MongoDB, and OpenAI GPT API.',
    image: '/anaquest.png',
    categories: ['web', 'fullstack', 'ai'],
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'OpenAI GPT API'],
    features: [
      'Dynamic question bank by exam type, topic, and difficulty',
      'Custom quiz builder',
      'AI-powered question and explanation generation',
      'Performance dashboard and adaptive recommendations',
      'Leaderboard and secure authentication'
    ],
    challenges: [
      'Real-time feedback and adaptive quiz logic',
      'Integrating LLMs for question/explanation generation',
      'Personalized analytics and recommendations'
    ],
    solutions: [
      'Used OpenAI GPT API for dynamic content',
      'Built adaptive quiz engine with React/Next.js',
      'Integrated MongoDB for scalable data storage'
    ],
    githubUrl: 'https://github.com/harsh7274v/anaquest/tree/main',
    liveUrl: 'https://anaquest-ixfp.vercel.app',
    date: '2025',
    featured: true
  },
  {
    id: 'indago-job-tracking',
    title: 'Indago Job Tracking',
    description: 'A web-based job tracking application for job seekers to organize and monitor their job search progress.',
    longDescription: 'Indago is a web-based job tracking application that allows job seekers to easily keep track of their job search progress. Users can add jobs, track application status, and receive updates. Features include authentication, CRUD for job listings, status pipeline, Cloudinary uploads, and data visualization with Recharts. Built with React, Redux Toolkit, TailwindCSS, Node.js, Express, and MongoDB.',
    image: '/indago_job_tracking.png',
    categories: ['web', 'productivity'],
    technologies: ['React', 'Redux Toolkit', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    features: [
      'User authentication and authorization with JWT',
      'Create, read, update, and delete job listings',
      'Track job application status with a custom pipeline',
      'Upload job listing images using Cloudinary',
      'Visualize application data with Recharts',
      'Responsive design'
    ],
    challenges: [
      'Managing job status updates and notifications',
      'Integrating image uploads and data visualization',
      'Ensuring secure authentication and data storage'
    ],
    solutions: [
      'Used Redux Toolkit for state management',
      'Integrated Cloudinary for media uploads',
      'Implemented JWT for secure authentication'
    ],
    githubUrl: 'https://github.com/harsh7274v/indago_job_tracking',
    liveUrl: 'https://indago-job.netlify.app/landing',
    date: '2025',
    featured: true
  },
  {
    id: 'gemini-ai',
    title: 'Gemini AI',
    description: 'An interactive web app for chatting with Google Gemini Pro AI, featuring authentication and modern UI.',
    longDescription: 'Gemini AI is an innovative web application that brings an interactive chat experience with the help of Google Gemini Pro API. Users can chat with Gemini AI, with different features for authenticated and non-authenticated users. Built with Node.js, React.js, MongoDB, and Redux Toolkit, it supports Google OAuth V2, chat history, and a clean, modern interface.',
    image: '/gemini_ai.png',
    categories: ['web', 'ai'],
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Google OAuth'],
    features: [
      'Interactive chat with Gemini AI',
      'Google OAuth V2 authentication',
      'Limited and unlimited chat for different user types',
      'Chat history management',
      'Modern, responsive UI',
      'Location tracking features'
    ],
    challenges: [
      'Integrating Google Gemini Pro API',
      'Managing authentication and user sessions',
      'Handling chat history and user limits'
    ],
    solutions: [
      'Used Redux Toolkit for state management',
      'Implemented Google OAuth for secure login',
      'Built scalable backend with Node.js and MongoDB'
    ],
    githubUrl: 'https://github.com/harsh7274v/gemini_ai',
    liveUrl: 'https://geminichatai.netlify.app/',
    date: '2025',
    featured: true
  },
  {
    id: 'readme-generator',
    title: 'README Generator',
    description: 'AI-powered web app to generate professional README files for GitHub repositories using Google Gemini AI.',
    longDescription: 'README Generator is a web application that generates professional README files for GitHub repositories using Google\'s Gemini AI. Features include markdown preview, copy/download functionality, and a beautiful UI built with Next.js, TypeScript, and Tailwind CSS.',
    image: '/readme_generator.png',
    categories: ['web', 'ai', 'productivity'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Gemini AI', 'React Markdown'],
    features: [
      'Generate README files from GitHub URLs',
      'Markdown preview and editing',
      'Copy to clipboard and download as README.md',
      'Modern, responsive UI',
      'Powered by Google Gemini AI'
    ],
    challenges: [
      'Integrating Gemini AI for content generation',
      'Parsing and validating GitHub URLs',
      'Ensuring markdown compatibility and preview'
    ],
    solutions: [
      'Used Google Gemini AI API for README generation',
      'Implemented robust URL validation and error handling',
      'Used React Markdown for live preview'
    ],
    githubUrl: 'https://github.com/harsh7274v/readme-generator',
    liveUrl: 'https://readme-generator-ru75.vercel.app',
    date: '2025',
    featured: true
  },
  {
    id: 'language-learning-app',
    title: 'Language Learning App',
    description: 'An interactive application that helps users learn new languages through spaced repetition and gamification.',
    image: '/languagelearning.jpg',
    categories: ['web', 'mobile', 'education'],
    technologies: ['React Native', 'Firebase', 'Redux', 'TensorFlow.js', 'i18n'],
    features: [
      'Spaced repetition algorithm for optimized learning',
      'Speech recognition for pronunciation practice',
      'Gamified learning experience with points and levels',
      'Progress tracking and personalized learning paths',
      'Offline learning support'
    ],
    githubUrl: 'https://github.com/yourusername/language-learning-app',
    liveUrl: 'https://language-learning-app-demo.com',
    date: 'February 2025'
  },
  {
    id: 'project-management-tool',
    title: 'Project Management Tool',
    description: 'A collaborative project management application with task tracking, team communication, and resource allocation.',
    image: '/project.jpg',
    categories: ['web', 'productivity'],
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    features: [
      'Kanban and Gantt chart views for task management',
      'Real-time collaboration and commenting',
      'File sharing and document management',
      'Time tracking and reporting',
      'Integration with popular tools (GitHub, Slack, etc.)'
    ],
    githubUrl: 'https://github.com/yourusername/project-management-tool',
    liveUrl: 'https://project-management-tool-demo.com',
    date: 'November 2024'
  }
]