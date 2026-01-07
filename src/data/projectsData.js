export const projectsData = [
    {
        id: 1,
        title: "ScholarStream",
        shortDescription: "A comprehensive scholarship management platform that connects students with global scholarship opportunities. The platform streamlines the scholarship search, application, and management process while providing robust admin tools for scholarship management.",
        technologies: ["React", "MongoDB", "Firebase", "Express.js", "Node.js", "JWT Auth", "Stripe", "Tailwind CSS", "DaisyUI", "Framer Motion"],
        images: [
            "https://i.ibb.co/277F6wV9/Screenshot-2026-01-07-184946.png",
            "https://i.ibb.co.com/CsSW1TGD/Screenshot-2026-01-07-185010.png",
            "https://i.ibb.co.com/7dnmSzHT/Screenshot-2026-01-07-185028.png",
            "https://i.ibb.co.com/Nd2ZXqht/Screenshot-2026-01-07-185059.png",
            "https://i.ibb.co.com/CpdQ3n44/Screenshot-2026-01-07-185145.png"
        ],
        liveDemo: "https://scholarstream-client36.vercel.app",
        github: "https://github.com/Aziz-Ullah-Tarek/ScholarStream-Client",
        about: "ScholarStream is a comprehensive scholarship management platform designed to simplify the scholarship discovery and application process. It provides a centralized platform for scholarship listings from universities worldwide, enabling students to search, filter, and apply for scholarships seamlessly. The platform features secure payment processing for application fees, personalized dashboards for tracking applications, and comprehensive admin tools for scholarship management and analytics.",
        challenges: [
            "Implementing secure JWT authentication with Firebase integration for user management",
            "Building advanced search and filtering system with multiple parameters (university, country, subject, degree level)",
            "Integrating Stripe payment gateway for secure application fee processing",
            "Developing real-time application tracking system with multiple status stages",
            "Creating role-based access control for admin and user functionalities",
            "Optimizing database queries for fast scholarship searches with pagination"
        ],
        improvements: [
            "Add AI-powered scholarship recommendations based on student profile",
            "Implement notification system for application deadlines and status updates",
            "Add document upload and management system for application materials",
            "Create mobile app version for iOS and Android",
            "Integrate with university APIs for real-time scholarship data",
            "Add multi-language support for international students",
            "Implement advanced analytics dashboard with data visualization"
        ]
    },
    {
        id: 2,
        title: "HomeNest",
        shortDescription: "A modern, full-stack real estate property listing platform that connects property seekers with their dream homes. Built with the MERN stack, it offers a seamless experience for browsing, searching, and managing property listings.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Vite", "Swiper.js", "SweetAlert2"],
        images: [
            "https://i.ibb.co.com/zVrDTFR5/Screenshot-2026-01-07-190841.png",
            "https://i.ibb.co.com/k2RN51ZY/Screenshot-2026-01-07-191031.png",
            "https://i.ibb.co.com/JjN07Ptw/Screenshot-2026-01-07-191316.png",
            "https://i.ibb.co.com/38dJfvJ/Screenshot-2026-01-07-191408.png",
            "https://i.ibb.co.com/nsPSzz3H/Screenshot-2026-01-07-191452.png"
        ],
        liveDemo: "https://homenest-client36.netlify.app/",
        github: "https://github.com/Aziz-Ullah-Tarek/HomeNest-Client",
        about: "HomeNest is a comprehensive real estate platform designed to connect property seekers with their dream homes. The platform features secure Firebase authentication with Google login, dark/light theme toggle with localStorage persistence, and fully responsive design with mobile-first approach. Users can search and filter properties by name, category (House, Apartment, Studio, Villa), and sort by multiple parameters. The platform includes a complete rating and review system, property management dashboard with CRUD operations, and user dashboard for tracking owned properties and submitted reviews.",
        challenges: [
            "Implementing Firebase authentication with persistent login sessions and protected routes",
            "Building advanced search and filtering system with real-time updates and multi-parameter sorting",
            "Creating dark/light theme toggle with smooth transitions and localStorage persistence across all pages",
            "Developing rating and review system with average calculations and user-specific review management",
            "Implementing property management dashboard with complete CRUD operations and instant UI updates",
            "Optimizing MongoDB queries with aggregation for backend sorting and efficient data retrieval",
            "Ensuring data security with email-based ownership validation and protected API endpoints"
        ],
        improvements: [
            "Add AI-powered property recommendations based on user preferences and search history",
            "Implement virtual tour feature with 360° images and video walkthroughs",
            "Add real-time chat system for direct communication between buyers and property owners",
            "Integrate map view with location-based search and nearby amenities",
            "Implement advanced analytics for property owners to track views and inquiries",
            "Add mortgage calculator and financing options integration",
            "Create mobile native apps for iOS and Android with push notifications"
        ]
    },
    {
        id: 3,
        title: "GreenNest Plant Store",
        shortDescription: "A modern, feature-rich e-commerce web application for plant enthusiasts. Browse, discover, and purchase indoor plants while receiving expert plant care advice and consultation services.",
        technologies: ["React", "Firebase", "Tailwind CSS", "React Router", "Google OAuth", "JSON", "Vite"],
        images: [
            "https://i.ibb.co.com/1YHH7Wph/Screenshot-2026-01-07-193934.png",
            "https://i.ibb.co.com/kgTdr4bf/Screenshot-2026-01-07-194007.png",
            "https://i.ibb.co.com/W77pMmX/Screenshot-2026-01-07-194046.png",
            "https://i.ibb.co.com/kVmdXP1R/Screenshot-2026-01-07-194107.png",
            "https://i.ibb.co.com/1YHH7Wph/Screenshot-2026-01-07-193934.png"
        ],
        liveDemo: "https://greennest-36.netlify.app/",
        github: "https://github.com/Aziz-Ullah-Tarek/GreenNest-Client",
        about: "GreenNest is a comprehensive e-commerce platform designed for plant enthusiasts to discover, browse, and purchase indoor plants. The application features secure Firebase authentication with both email/password and Google OAuth integration, allowing users to create accounts and manage their profiles. The platform showcases a dynamic plant catalog with category filtering, detailed plant information pages, and expert consultation booking services. Users can browse top-rated plants, explore the featured 'Plant of the Week', and access plant care tips from certified experts. The responsive design ensures seamless experience across all devices, with features like hero sliders, newsletter subscriptions, and eco-friendly decor ideas.",
        challenges: [
            "Implementing Firebase authentication with both email/password and Google OAuth integration",
            "Building dynamic profile management with real-time updates without page reloads",
            "Creating category-based filtering system for extensive plant catalog",
            "Developing consultation booking system integrated with plant details",
            "Implementing password reset functionality with email-based recovery",
            "Designing responsive UI with hero sliders and auto-play features",
            "Managing dynamic data loading from JSON files with custom loaders",
            "Building SEO-optimized pages with custom 404 error handling"
        ],
        improvements: [
            "Add shopping cart and checkout system with payment gateway integration",
            "Implement wishlist functionality for saving favorite plants",
            "Add plant care reminder notifications and watering schedules",
            "Create admin dashboard for inventory and order management",
            "Integrate AI-powered plant recommendation based on user preferences and environment",
            "Add augmented reality (AR) feature to visualize plants in user's space",
            "Implement review and rating system for purchased plants",
            "Create mobile app version with plant identification using camera",
            "Add live chat support for instant plant care advice"
        ]
    }
];
