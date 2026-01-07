export const projectsData = [
    {
        id: 1,
        title: "Relicrader",
        shortDescription: "A digital archive where users can add, edit, delete, and favorite historical artifacts. Designed to showcase culturally significant items with image previews, detailed descriptions, and name-based filtering for an immersive exploration experience.",
        technologies: ["React", "MongoDB", "Firebase", "ExpressJS", "JWT Auth", "Framer Motion", "Tailwind CSS"],
        images: [
            "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1582487479458-d4c7f7e8c812?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d3?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1599932325654-39b6a26d2ba4?w=800&h=500&fit=crop"
        ],
        liveDemo: "https://relicrader.com",
        github: "https://github.com/username/relicrader",
        about: "A digital archive where users can add, edit, delete, and favorite historical artifacts. Designed to showcase culturally significant items with image previews, detailed descriptions, and name-based filtering for an immersive exploration experience.",
        challenges: [
            "Implementing secure JWT authentication for user management",
            "Building efficient name-based filtering that queries the backend dynamically",
            "Integrating and customizing multiple types of carousels for smooth artifact browsing"
        ],
        improvements: [
            "Add a filter by name feature",
            "Implement user-submitted artifacts (with moderation)",
            "Add like features to posts"
        ]
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        shortDescription: "A modern full-stack e-commerce solution with real-time inventory management, secure payment integration, and advanced product filtering. Features include user authentication, shopping cart, wishlist, and order tracking.",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redux", "Docker", "AWS"],
        images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&h=500&fit=crop"
        ],
        liveDemo: "https://ecommerce-demo.com",
        github: "https://github.com/username/ecommerce",
        about: "A comprehensive e-commerce platform built with modern web technologies. The application provides a seamless shopping experience with real-time inventory updates, secure payment processing through Stripe, and an intuitive admin dashboard for managing products, orders, and customers.",
        challenges: [
            "Implementing real-time inventory synchronization across multiple sessions",
            "Optimizing database queries for fast product searches with complex filters",
            "Ensuring PCI compliance for payment processing and data security",
            "Building a scalable architecture to handle high traffic during sales"
        ],
        improvements: [
            "Add AI-powered product recommendations",
            "Implement multi-vendor marketplace functionality",
            "Add advanced analytics dashboard for sellers",
            "Integrate social commerce features"
        ]
    },
    {
        id: 3,
        title: "Task Management App",
        shortDescription: "A collaborative project management tool featuring real-time updates, team collaboration, kanban boards, and deadline tracking. Built with drag-and-drop functionality and integrated notifications system.",
        technologies: ["React", "Firebase", "Socket.io", "Material-UI", "Chart.js", "PWA"],
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
        ],
        liveDemo: "https://taskmanager-demo.com",
        github: "https://github.com/username/taskmanager",
        about: "A powerful task management application designed for teams and individuals. Features include customizable kanban boards, real-time collaboration, time tracking, file attachments, and comprehensive analytics. The app uses Socket.io for instant updates across all connected users.",
        challenges: [
            "Implementing smooth drag-and-drop with real-time synchronization",
            "Managing complex state for nested tasks and subtasks",
            "Optimizing Firebase queries to reduce costs and improve performance",
            "Building offline-first functionality with Progressive Web App features"
        ],
        improvements: [
            "Add Gantt chart view for project timelines",
            "Implement time tracking with detailed reports",
            "Add integration with calendar apps (Google Calendar, Outlook)",
            "Create mobile native apps for iOS and Android",
            "Add AI-powered task prioritization"
        ]
    }
];
