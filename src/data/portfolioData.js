export const personalInfo = {
  name: "Aziz Ullah Tarek",
  title: "MERN Stack Developer",
  subtitle: "Frontend Expert & UI/UX Enthusiast",
  stack: "MERN Stack",
  bio: "I am a curious student, building my future web world step by step through each project and regular learning – as a future MERN Stack Developer.",
  taglines: [
    "Frontend Expert",
    "MERN Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Creative Developer"
  ],
  email: "aziz@example.com",
  phone: "+880 123 456 7890",
  location: "Dhaka, Bangladesh",
  avatar: "/avatar.jpg",
  resume: "/assets/resume.pdf",
  yearsOfExperience: 3,
  projectsCompleted: 50,
  happyClients: 25
};

export const aboutMe = {
  title: "About Me",
  subtitle: "Get to know me better",
  introduction: "Hello! I'm Aziz Ullah Tarek, a passionate Frontend Developer specializing in the MERN stack. I transform ideas into beautiful, functional web experiences.",
  
  journey: {
    title: "My Programming Journey",
    content: "My journey into programming started during my university years when I built my first website using HTML and CSS. What began as a curiosity quickly turned into a passion. I was fascinated by how a few lines of code could create interactive experiences that millions could use. Over the years, I've evolved from building simple static pages to crafting complex, scalable web applications using modern frameworks like React.js, Node.js, and MongoDB. Each project taught me something new, and every challenge pushed me to become a better developer."
  },
  
  workStyle: {
    title: "What I Love To Do",
    content: "I thrive on building scalable, high-performance applications that solve real-world problems. My sweet spot is creating intuitive user interfaces that not only look stunning but also provide seamless user experiences. I'm particularly passionate about crafting responsive designs, implementing smooth animations with GSAP and Framer Motion, and optimizing performance to ensure lightning-fast load times. I love the challenge of turning complex requirements into elegant, maintainable code. Whether it's architecting robust APIs, designing modern frontends, or deploying cloud infrastructure, I deliver quality code that drives real impact."
  },
  
  interests: {
    title: "Beyond The Code",
    hobbies: [
      {
        name: "Photography",
        description: "Capturing moments and perspectives through my lens helps me see the world differently—much like problem-solving in code."
      },
      {
        name: "Football",
        description: "Playing football teaches me teamwork and strategy, skills that translate perfectly into collaborative development environments."
      },
      {
        name: "Reading Tech Blogs",
        description: "I stay updated with the latest web technologies, design patterns, and industry trends to continuously improve my craft."
      },
      {
        name: "Open Source",
        description: "Contributing to open-source projects allows me to give back to the community that helped me learn and grow."
      }
    ]
  },
  
  personality: {
    traits: [
      "Problem Solver - I love breaking down complex challenges into manageable solutions",
      "Team Player - Collaboration and knowledge sharing drive my best work",
      "Fast Learner - Always eager to adopt new technologies and best practices",
      "Detail-Oriented - I believe in pixel-perfect implementations and clean code",
      "Creative Thinker - I approach problems from unique angles to find innovative solutions"
    ]
  },
  
  currentFocus: "Currently, I'm focused on mastering advanced React patterns, exploring Web3 technologies, and building projects that make a difference in people's lives.",
  
  quote: "Code is like humor. When you have to explain it, it's bad. - Cory House"
};

export const socialLinks = {
  github: "https://github.com/azizullahtarek",
  linkedin: "https://linkedin.com/in/azizullahtarek",
  twitter: "https://twitter.com/azizullahtarek",
  portfolio: "https://azizullahtarek.com"
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 80 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "REST API", level: 85 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Responsive Design", level: 92 },
      { name: "GSAP/Animations", level: 75 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
    fullDescription: "A comprehensive e-commerce solution built with the MERN stack, featuring a modern shopping experience with real-time inventory management, secure payment processing through Stripe, advanced product filtering, shopping cart functionality, and an intuitive admin dashboard for managing products, orders, and customers.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT", "Redux", "Tailwind CSS"],
    techStack: {
      frontend: ["React.js", "Redux", "Tailwind CSS", "Axios"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      other: ["Stripe API", "JWT Authentication", "Cloudinary", "Nodemailer"]
    },
    github: "https://github.com/azizullahtarek/ecommerce-client",
    live: "https://ecommerce-demo.com",
    category: "Full Stack",
    challenges: [
      "Implementing secure payment gateway integration with proper error handling",
      "Managing complex state for cart functionality across multiple pages",
      "Optimizing image uploads and storage for product listings",
      "Handling concurrent user sessions and inventory management"
    ],
    futureImprovements: [
      "Add wishlist and product comparison features",
      "Implement advanced recommendation system using ML",
      "Add multi-language and multi-currency support",
      "Integrate live chat support for customer service",
      "Implement progressive web app (PWA) features"
    ]
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    shortDescription: "Analytics dashboard for social media management with real-time data visualization.",
    fullDescription: "A powerful analytics dashboard designed for social media managers and marketers to track performance metrics across multiple platforms. Features real-time data visualization, customizable widgets, export capabilities, and automated reporting. Built with React and Chart.js for dynamic, interactive charts and graphs.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "Chart.js", "Tailwind CSS", "Redux", "Firebase", "REST API"],
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Chart.js", "Tailwind CSS"],
      backend: ["Firebase", "REST API Integration"],
      other: ["Social Media APIs", "Data Analytics", "CSV Export"]
    },
    github: "https://github.com/azizullahtarek/dashboard-client",
    live: "https://dashboard-demo.com",
    category: "Frontend",
    challenges: [
      "Processing and visualizing large datasets efficiently",
      "Integrating multiple social media APIs with different rate limits",
      "Creating responsive and interactive chart components",
      "Implementing real-time data updates without performance degradation"
    ],
    futureImprovements: [
      "Add AI-powered insights and recommendations",
      "Implement team collaboration features",
      "Add automated scheduling for social media posts",
      "Create mobile app version using React Native",
      "Add white-label solution for agencies"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    shortDescription: "Collaborative task management application with drag-and-drop functionality.",
    fullDescription: "A modern project management solution inspired by Trello and Asana, featuring real-time collaboration, drag-and-drop task boards, team workspaces, and progress tracking. Built with React, Node.js, and Socket.io for real-time synchronization across multiple users.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT"],
    techStack: {
      frontend: ["React.js", "React DnD", "Tailwind CSS", "Socket.io Client"],
      backend: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Mongoose"],
      other: ["JWT Authentication", "Real-time Sync", "File Upload", "Email Notifications"]
    },
    github: "https://github.com/azizullahtarek/taskmanager-client",
    live: "https://taskmanager-demo.com",
    category: "Full Stack",
    challenges: [
      "Implementing smooth drag-and-drop with proper collision detection",
      "Maintaining data consistency during real-time collaborative editing",
      "Handling offline mode and conflict resolution",
      "Optimizing WebSocket connections for scalability"
    ],
    futureImprovements: [
      "Add Kanban, Calendar, and Timeline views",
      "Implement time tracking and productivity analytics",
      "Add integration with GitHub, Slack, and Google Calendar",
      "Create desktop app using Electron",
      "Add advanced automation and custom workflows"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription: "Modern portfolio website with smooth animations and responsive design.",
    fullDescription: "A stunning personal portfolio website showcasing projects, skills, and experience with beautiful animations and modern UI/UX design. Built with React, GSAP, and Framer Motion for fluid animations and transitions. Features dark theme, responsive design, and optimized performance.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "GSAP", "Framer Motion", "Tailwind CSS", "Vite"],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
      backend: ["Static Site"],
      other: ["Vite", "AOS", "Responsive Design", "SEO Optimization"]
    },
    github: "https://github.com/azizullahtarek/portfolio-client",
    live: "https://azizullahtarek.com",
    category: "Frontend",
    challenges: [
      "Creating smooth animations without impacting performance",
      "Ensuring cross-browser compatibility for complex animations",
      "Optimizing bundle size while using multiple animation libraries",
      "Implementing accessibility features with custom animations"
    ],
    futureImprovements: [
      "Add dark/light theme toggle",
      "Implement blog section with CMS integration",
      "Add 3D elements using Three.js",
      "Create admin panel for content management",
      "Add analytics dashboard to track visitor engagement"
    ]
  }
];

export const experiences = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Tech Solutions Ltd.",
    duration: "2024 - Present",
    description: "Developing responsive web applications using React.js and modern frontend technologies.",
    achievements: [
      "Built 5+ production-ready web applications",
      "Improved website performance by 40%",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    id: 2,
    position: "Junior Web Developer",
    company: "Creative Agency",
    duration: "2023 - 2024",
    description: "Worked on various client projects focusing on frontend development and UI/UX implementation.",
    achievements: [
      "Delivered 10+ client projects on time",
      "Implemented responsive designs across all devices",
      "Mentored junior developers"
    ]
  }
];

export const education = [ 
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Dhaka",
    duration: "2019 - 2023",
    description: "Focused on web technologies, algorithms, and software engineering principles."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Project Manager",
    company: "Tech Solutions Ltd.",
    message: "Aziz is an excellent developer with great attention to detail. His work on our projects has been outstanding.",
    avatar: "/testimonials/john.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Smith",
    position: "CEO",
    company: "Creative Agency",
    message: "Working with Aziz was a pleasure. He delivered high-quality work and always met deadlines.",
    avatar: "/testimonials/sarah.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Senior Developer",
    company: "StartupHub Inc.",
    message: "Aziz's frontend skills are exceptional. His React components are clean, reusable, and performant. A true professional!",
    avatar: "/testimonials/michael.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Product Designer",
    company: "DesignCo",
    message: "Collaborating with Aziz was amazing. He perfectly translated our designs into pixel-perfect, responsive interfaces.",
    avatar: "/testimonials/emily.jpg",
    rating: 5
  }
];

// Stats for homepage
export const stats = [
  {
    id: 1,
    value: "3+",
    label: "Years Experience",
    icon: "💼"
  },
  {
    id: 2,
    value: "50+",
    label: "Projects Completed",
    icon: "🚀"
  },
  {
    id: 3,
    value: "25+",
    label: "Happy Clients",
    icon: "😊"
  },
  {
    id: 4,
    value: "15+",
    label: "Technologies Mastered",
    icon: "⚡"
  }
];

// Services offered
export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive, performant, and beautiful user interfaces using React, Next.js, and modern CSS frameworks.",
    icon: "💻",
    features: [
      "React.js & Next.js Development",
      "Responsive Web Design",
      "State Management (Redux, Context API)",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ]
  },
  {
    id: 2,
    title: "Full Stack Development",
    description: "End-to-end web application development with MERN stack, from database design to deployment.",
    icon: "🔧",
    features: [
      "MERN Stack Development",
      "RESTful API Development",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Cloud Deployment (AWS, Vercel, Heroku)"
    ]
  },
  {
    id: 3,
    title: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, interactive web experiences with smooth animations.",
    icon: "🎨",
    features: [
      "Figma/Adobe XD to Code",
      "GSAP & Framer Motion Animations",
      "Interactive UI Components",
      "Design System Implementation",
      "Accessibility (WCAG) Compliance"
    ]
  },
  {
    id: 4,
    title: "Web Performance",
    description: "Optimizing web applications for speed, SEO, and user experience.",
    icon: "⚡",
    features: [
      "Performance Auditing",
      "Code Splitting & Lazy Loading",
      "SEO Optimization",
      "Lighthouse Score Improvement",
      "Bundle Size Optimization"
    ]
  }
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2024",
    credential: "ABC123XYZ",
    link: "https://coursera.org/verify/ABC123XYZ",
    image: "/certificates/meta-frontend.jpg"
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    issuer: "Udemy",
    date: "2023",
    credential: "UC-XXYYZZAA",
    link: "https://udemy.com/certificate/UC-XXYYZZAA",
    image: "/certificates/react-redux.jpg"
  },
  {
    id: 3,
    title: "Complete Web Development Bootcamp",
    issuer: "Angela Yu - Udemy",
    date: "2022",
    credential: "UC-AABBCCDD",
    link: "https://udemy.com/certificate/UC-AABBCCDD",
    image: "/certificates/webdev.jpg"
  },
  {
    id: 4,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credential: "fcc-js-algo-2023",
    link: "https://freecodecamp.org/certification/aziz/javascript-algorithms",
    image: "/certificates/freecodecamp-js.jpg"
  },
  {
    id: 5,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    credential: "fcc-rwd-2022",
    link: "https://freecodecamp.org/certification/aziz/responsive-web-design",
    image: "/certificates/freecodecamp-rwd.jpg"
  }
];

// Blog posts
export const blogPosts = [
  {
    id: 1,
    title: "Building Performant React Applications: Best Practices",
    slug: "performant-react-apps-best-practices",
    excerpt: "Learn how to optimize your React applications for maximum performance using code splitting, lazy loading, and memoization techniques.",
    content: "Full blog content here...",
    coverImage: "/blog/react-performance.jpg",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Best Practices"],
    readTime: "8 min read",
    publishedDate: "2024-12-15",
    author: "Aziz Ullah Tarek",
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "Mastering GSAP Animations in React",
    slug: "mastering-gsap-animations-react",
    excerpt: "A comprehensive guide to creating stunning animations in React using GSAP, from basics to advanced techniques.",
    content: "Full blog content here...",
    coverImage: "/blog/gsap-react.jpg",
    category: "Animation",
    tags: ["GSAP", "React", "Animation", "Frontend"],
    readTime: "12 min read",
    publishedDate: "2024-11-20",
    author: "Aziz Ullah Tarek",
    views: 2100,
    likes: 145
  },
  {
    id: 3,
    title: "Tailwind CSS: From Zero to Hero",
    slug: "tailwind-css-zero-to-hero",
    excerpt: "Everything you need to know about Tailwind CSS, from setup to advanced customization and best practices.",
    content: "Full blog content here...",
    coverImage: "/blog/tailwind.jpg",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Styling", "Frontend"],
    readTime: "10 min read",
    publishedDate: "2024-10-05",
    author: "Aziz Ullah Tarek",
    views: 3400,
    likes: 221
  },
  {
    id: 4,
    title: "State Management in React: Redux vs Context API",
    slug: "redux-vs-context-api",
    excerpt: "An in-depth comparison of Redux and Context API to help you choose the right state management solution.",
    content: "Full blog content here...",
    coverImage: "/blog/state-management.jpg",
    category: "React",
    tags: ["React", "Redux", "Context API", "State Management"],
    readTime: "15 min read",
    publishedDate: "2024-09-12",
    author: "Aziz Ullah Tarek",
    views: 2800,
    likes: 178
  },
  {
    id: 5,
    title: "Building REST APIs with Node.js and Express",
    slug: "building-rest-apis-nodejs-express",
    excerpt: "Learn how to build scalable and secure REST APIs using Node.js, Express, and MongoDB.",
    content: "Full blog content here...",
    coverImage: "/blog/nodejs-api.jpg",
    category: "Backend",
    tags: ["Node.js", "Express", "REST API", "Backend"],
    readTime: "14 min read",
    publishedDate: "2024-08-28",
    author: "Aziz Ullah Tarek",
    views: 1900,
    likes: 132
  },
  {
    id: 6,
    title: "Modern JavaScript ES6+ Features You Should Know",
    slug: "modern-javascript-es6-features",
    excerpt: "Explore the essential ES6+ features that every JavaScript developer should master in 2024.",
    content: "Full blog content here...",
    coverImage: "/blog/javascript-es6.jpg",
    category: "JavaScript",
    tags: ["JavaScript", "ES6", "Programming", "Web Development"],
    readTime: "11 min read",
    publishedDate: "2024-07-15",
    author: "Aziz Ullah Tarek",
    views: 4200,
    likes: 298
  }
];

// Contact form structure
export const contactInfo = {
  email: "aziz@example.com",
  phone: "+880 123 456 7890",
  address: "Dhaka, Bangladesh",
  availability: "Available for freelance projects",
  responseTime: "Within 24 hours",
  workingHours: "9:00 AM - 6:00 PM (GMT+6)",
  formFields: [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      placeholder: "John Doe",
      required: true,
      validation: "min:3|max:50"
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "john@example.com",
      required: true,
      validation: "email"
    },
    {
      name: "subject",
      type: "text",
      label: "Subject",
      placeholder: "Project Inquiry",
      required: true,
      validation: "min:5|max:100"
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Tell me about your project...",
      required: true,
      validation: "min:20|max:500",
      rows: 6
    }
  ]
};

// More detailed projects
export const additionalProjects = [
  {
    id: 5,
    title: "Real-Time Chat Application",
    shortDescription: "WebSocket-based chat app with private messaging, group chats, and file sharing.",
    fullDescription: "A modern real-time chat application built with Socket.io, featuring instant messaging, group conversations, file sharing, typing indicators, read receipts, and emoji support. Includes user authentication, online status tracking, and message history with MongoDB.",
    image: "/projects/chat-app.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express.js", "Redis"],
    techStack: {
      frontend: ["React.js", "Socket.io Client", "Tailwind CSS", "Emoji Picker"],
      backend: ["Node.js", "Express.js", "Socket.io", "MongoDB", "Redis"],
      other: ["JWT Authentication", "File Upload", "Real-time Notifications"]
    },
    github: "https://github.com/azizullahtarek/chat-app",
    live: "https://chat-app-demo.com",
    category: "Full Stack",
    featured: true,
    challenges: [
      "Implementing scalable WebSocket connections",
      "Handling message delivery and read receipts reliably",
      "Managing state synchronization across multiple tabs",
      "Optimizing database queries for message history"
    ],
    futureImprovements: [
      "Add voice and video calling features",
      "Implement end-to-end encryption",
      "Add message translation for multilingual support",
      "Create mobile app using React Native"
    ]
  },
  {
    id: 6,
    title: "Food Delivery Platform",
    shortDescription: "Full-featured food ordering system with restaurant management and delivery tracking.",
    fullDescription: "A comprehensive food delivery platform similar to Uber Eats, featuring restaurant listings, menu management, cart functionality, order tracking, payment integration, and real-time delivery tracking with Google Maps API. Includes separate dashboards for customers, restaurants, and delivery partners.",
    image: "/projects/food-delivery.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "Google Maps API"],
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Google Maps"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      other: ["Stripe Payment", "JWT", "Cloudinary", "SMS Notifications", "Email Service"]
    },
    github: "https://github.com/azizullahtarek/food-delivery",
    live: "https://food-delivery-demo.com",
    category: "Full Stack",
    featured: true,
    challenges: [
      "Implementing real-time order tracking with live location updates",
      "Managing complex order states and workflows",
      "Handling multiple user roles with different permissions",
      "Optimizing search and filtering for large restaurant datasets"
    ],
    futureImprovements: [
      "Add AI-based food recommendations",
      "Implement subscription-based delivery passes",
      "Add loyalty points and rewards system",
      "Create native mobile apps for iOS and Android"
    ]
  },
  {
    id: 7,
    title: "AI Image Generator",
    shortDescription: "AI-powered image generation tool using DALL-E API with community gallery.",
    fullDescription: "An innovative AI image generator that leverages OpenAI's DALL-E API to create stunning images from text prompts. Features include prompt suggestions, image variations, upscaling, community gallery, likes/comments system, and user collections. Built with modern React and styled with Tailwind CSS.",
    image: "/projects/ai-image.jpg",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Cloudinary"],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "MongoDB", "OpenAI API"],
      other: ["Cloudinary", "Image Processing", "Rate Limiting"]
    },
    github: "https://github.com/azizullahtarek/ai-image-generator",
    live: "https://ai-image-demo.com",
    category: "Full Stack",
    featured: true,
    challenges: [
      "Managing API rate limits and costs effectively",
      "Implementing efficient image storage and delivery",
      "Creating intuitive UI for complex AI parameters",
      "Handling long-running AI generation requests"
    ],
    futureImprovements: [
      "Add image-to-image generation",
      "Implement custom model fine-tuning",
      "Add video generation capabilities",
      "Create API for developers"
    ]
  },
  {
    id: 8,
    title: "Crypto Portfolio Tracker",
    shortDescription: "Real-time cryptocurrency portfolio tracking with price alerts and analytics.",
    fullDescription: "A comprehensive crypto portfolio tracker that helps users monitor their cryptocurrency investments across multiple exchanges. Features include real-time price updates, portfolio analytics, price alerts, historical data visualization, and profit/loss tracking. Integrates with CoinGecko API for market data.",
    image: "/projects/crypto-tracker.jpg",
    technologies: ["React", "Node.js", "CoinGecko API", "Chart.js", "MongoDB"],
    techStack: {
      frontend: ["React.js", "Redux", "Chart.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
      other: ["CoinGecko API", "Price Alerts", "Email Notifications"]
    },
    github: "https://github.com/azizullahtarek/crypto-tracker",
    live: "https://crypto-tracker-demo.com",
    category: "Full Stack",
    featured: false,
    challenges: [
      "Handling real-time price updates efficiently",
      "Managing multiple API integrations with different rate limits",
      "Creating responsive and interactive charts",
      "Implementing accurate profit/loss calculations"
    ],
    futureImprovements: [
      "Add exchange API integration for automatic portfolio sync",
      "Implement trading signals and technical analysis",
      "Add tax reporting features",
      "Create mobile app version"
    ]
  },
  {
    id: 9,
    title: "Learning Management System",
    shortDescription: "Educational platform with course management, video streaming, and progress tracking.",
    fullDescription: "A complete LMS platform for online education featuring course creation, video content delivery, quizzes, assignments, progress tracking, certificates, and discussion forums. Includes separate dashboards for students and instructors with role-based access control.",
    image: "/projects/lms.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS S3", "Stripe"],
    techStack: {
      frontend: ["React.js", "Redux", "Video.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      other: ["AWS S3", "Stripe", "JWT", "Video Streaming", "PDF Generation"]
    },
    github: "https://github.com/azizullahtarek/lms-platform",
    live: "https://lms-demo.com",
    category: "Full Stack",
    featured: true,
    challenges: [
      "Implementing secure video streaming with DRM",
      "Managing large file uploads and processing",
      "Creating flexible quiz and assignment system",
      "Handling concurrent users during live sessions"
    ],
    futureImprovements: [
      "Add live streaming for webinars",
      "Implement AI-powered course recommendations",
      "Add gamification features (badges, leaderboards)",
      "Create mobile apps for offline learning"
    ]
  },
  {
    id: 10,
    title: "Weather Dashboard",
    shortDescription: "Beautiful weather app with forecasts, maps, and location-based alerts.",
    fullDescription: "An elegant weather application providing current conditions, hourly and weekly forecasts, interactive weather maps, and severe weather alerts. Features beautiful data visualization, location search, favorites, and weather history. Built with React and multiple weather APIs.",
    image: "/projects/weather.jpg",
    technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "Tailwind CSS"],
    techStack: {
      frontend: ["React.js", "Chart.js", "Mapbox GL", "Tailwind CSS", "Framer Motion"],
      backend: ["Static Site / Serverless Functions"],
      other: ["OpenWeather API", "Geolocation API", "Local Storage"]
    },
    github: "https://github.com/azizullahtarek/weather-dashboard",
    live: "https://weather-demo.com",
    category: "Frontend",
    featured: false,
    challenges: [
      "Creating smooth animations for weather transitions",
      "Handling different units and localization",
      "Implementing interactive weather maps",
      "Managing API rate limits efficiently"
    ],
    futureImprovements: [
      "Add weather widgets for websites",
      "Implement weather-based activity suggestions",
      "Add air quality monitoring",
      "Create PWA with offline support"
    ]
  }
];

// Combined projects array
export const allProjects = [...projects, ...additionalProjects];

// Animation presets for Lottie/GSAP
export const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
};

// Lottie animation URLs (you can use LottieFiles)
export const lottieAnimations = {
  hero: "https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json", // Coding animation
  skills: "https://assets2.lottiefiles.com/packages/lf20_9wpyhdzo.json", // Skills animation
  success: "https://assets9.lottiefiles.com/packages/lf20_jbrw3hcz.json", // Success checkmark
  loading: "https://assets4.lottiefiles.com/packages/lf20_p8bfn5to.json", // Loading spinner
  contact: "https://assets1.lottiefiles.com/packages/lf20_u25cckyh.json", // Email animation
  notFound: "https://assets10.lottiefiles.com/packages/lf20_kcsr6fcp.json" // 404 animation
};

// GitHub stats (for social proof)
export const githubStats = {
  username: "azizullahtarek",
  totalRepos: 42,
  totalStars: 158,
  totalForks: 34,
  totalContributions: 892,
  currentStreak: 45,
  longestStreak: 127,
  languages: [
    { name: "JavaScript", percentage: 45, color: "#f1e05a" },
    { name: "TypeScript", percentage: 25, color: "#2b7489" },
    { name: "CSS", percentage: 15, color: "#563d7c" },
    { name: "HTML", percentage: 10, color: "#e34c26" },
    { name: "Other", percentage: 5, color: "#8257e5" }
  ]
};

// Frequently Asked Questions
export const faqs = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) with a strong focus on frontend development. I'm also proficient in modern tools like Next.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion."
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and requirements. A simple landing page might take 1-2 weeks, while a full-stack application could take 1-3 months. I always provide realistic timelines during our initial consultation."
  },
  {
    id: 3,
    question: "Do you work with clients remotely?",
    answer: "Yes! I work with clients from around the world remotely. I'm comfortable with various communication tools like Slack, Discord, Zoom, and Google Meet to ensure smooth collaboration."
  },
  {
    id: 4,
    question: "What is your development process?",
    answer: "My process includes: 1) Requirement gathering and planning, 2) Design mockup approval, 3) Development with regular updates, 4) Testing and quality assurance, 5) Deployment and training, 6) Post-launch support."
  },
  {
    id: 5,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I offer ongoing maintenance and support packages. I also provide a warranty period after project delivery to fix any bugs or issues that may arise."
  },
  {
    id: 6,
    question: "Can you help with existing projects?",
    answer: "Absolutely! I can help with debugging, adding new features, performance optimization, or complete redesigns of existing applications."
  }
];

// Quick links for footer
export const quickLinks = {
  main: [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" }
  ],
  resources: [
    { name: "Blog", path: "#blog" },
    { name: "Resume", path: "/assets/resume.pdf" },
    { name: "Certificates", path: "#certificates" },
    { name: "GitHub", path: "https://github.com/azizullahtarek" }
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ]
};

