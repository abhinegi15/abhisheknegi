export const personalInfo = {
  name: "Abhishek Negi",
  title: "Frontend Developer",
  roleHeadline: "Creative Frontend Developer & UI Craftsman",
  tagline: "Transforming ideas into high-performance, visually stunning web experiences with React, Next.js & Tailwind CSS.",
  experienceYears: "3+",
  email: "negiabhi254@gmail.com",
  phone: "+91 8077874185",
  location: "Chandigarh, India",
  availableForHire: true,
  statusBadge: "Available for Full-time Roles & High-Impact Projects",
  bio: "Frontend-focused Web Designer and Developer with 3+ years of professional experience building responsive websites and high-performance web applications. Specialized in React.js, Next.js, Material UI, Tailwind CSS, and REST API integrations, with an unwavering commitment to clean UI, seamless motion, responsive design, and maintainable code.",
  resumePdfUrl: "/Abhishek_Negi_Resume.pdf",
  profilePhoto: "/abhishek.jpg",
  stats: [
    { label: "Commercial Experience", value: "3+", suffix: "Years" },
    { label: "Delivered Web Projects", value: "25+", suffix: "Shipped" },
    { label: "Cross-Browser Compatibility", value: "100%", suffix: "Tested" },
    { label: "Performance & UI Polish", value: "60", suffix: "FPS" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "Linkedin" },
    { name: "Email", url: "mailto:negiabhi254@gmail.com", icon: "Mail" },
    { name: "WhatsApp", url: "https://wa.me/918077874185", icon: "Phone" }
  ]
};

export const marqueeItems = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Material UI (MUI)",
  "Framer Motion",
  "Responsive Design",
  "Figma to Code",
  "REST APIs",
  "WordPress Custom Themes",
  "HTML5 Semantic",
  "CSS3 & PostCSS",
  "Bootstrap",
  "Git & GitHub",
  "Cross-Browser Testing"
];

export const skillsCategories = [
  {
    id: "frontend",
    title: "Core Frontend & Frameworks",
    icon: "Code2",
    description: "Modern JavaScript and React ecosystem for building responsive, accessible, and fast web applications.",
    skills: [
      { name: "React.js", level: 94, tag: "Expert", experience: "3+ Years" },
      { name: "Next.js", level: 88, tag: "Advanced", experience: "2+ Years" },
      { name: "JavaScript (ES6+)", level: 92, tag: "Expert", experience: "3+ Years" },
      { name: "HTML5 Semantic", level: 96, tag: "Master", experience: "3+ Years" },
      { name: "CSS3 / Modern CSS", level: 95, tag: "Master", experience: "3+ Years" },
      { name: "jQuery", level: 85, tag: "Proficient", experience: "2+ Years" }
    ]
  },
  {
    id: "styling",
    title: "UI Design Systems & Styling",
    icon: "Palette",
    description: "Creating responsive, pixel-perfect interfaces with cutting-edge CSS frameworks and micro-interactions.",
    skills: [
      { name: "Tailwind CSS", level: 95, tag: "Expert", experience: "3+ Years" },
      { name: "Material UI (MUI)", level: 90, tag: "Expert", experience: "2+ Years" },
      { name: "Responsive Web Design", level: 96, tag: "Master", experience: "3+ Years" },
      { name: "Bootstrap 5", level: 90, tag: "Advanced", experience: "3+ Years" },
      { name: "Figma to Code", level: 92, tag: "Expert", experience: "3+ Years" },
      { name: "Framer Motion Animations", level: 88, tag: "Advanced", experience: "2+ Years" }
    ]
  },
  {
    id: "architecture",
    title: "APIs, CMS & Architecture",
    icon: "Layers",
    description: "Bridging backend services, third-party REST APIs, and CMS platforms into performant frontends.",
    skills: [
      { name: "RESTful API Integration", level: 92, tag: "Expert", experience: "3+ Years" },
      { name: "WordPress Custom Themes", level: 88, tag: "Advanced", experience: "2.5+ Years" },
      { name: "JSON Data Handling", level: 94, tag: "Expert", experience: "3+ Years" },
      { name: "Cross-Browser QA", level: 96, tag: "Master", experience: "3+ Years" },
      { name: "Git & Version Control", level: 90, tag: "Advanced", experience: "3+ Years" },
      { name: "Build Tooling (Vite / NPM)", level: 88, tag: "Advanced", experience: "2+ Years" }
    ]
  }
];

export const skillsData = {
  categories: skillsCategories
};

export const workExperience = [
  {
    id: 1,
    role: "Web Designer / Frontend Developer",
    company: "Netscape Labs Pvt. Ltd.",
    location: "Mohali, Punjab",
    period: "Sep 2024 - Present",
    current: true,
    highlights: [
      "Designed and developed responsive WordPress and static HTML websites ensuring strict cross-browser compatibility.",
      "Built interactive React web applications using reusable component hierarchies and integrated REST APIs for dynamic data rendering.",
      "Utilized Material UI (MUI) and Tailwind CSS to implement modern, consistent, and user-friendly web interfaces.",
      "Collaborated with designers and backend developers to deliver optimized, scalable, and visually appealing solutions."
    ],
    tech: ["React.js", "Material UI", "Tailwind CSS", "REST APIs", "WordPress", "JavaScript (ES6+)"]
  },
  {
    id: 2,
    role: "Website Developer",
    company: "Shaurya Software Pvt. Ltd.",
    location: "Zirakpur, Punjab",
    period: "Sep 2023 - Aug 2024",
    current: false,
    highlights: [
      "Developed and maintained user-facing web pages and web applications using HTML, CSS, JavaScript, and jQuery.",
      "Created custom responsive designs that optimized website layouts for mobile, tablet, and high-resolution desktop screens.",
      "Tested cross-browser compatibility of web applications in multiple browsers (Chrome, Safari, Firefox, Edge) and operating systems.",
      "Worked closely with product owners, designers, and other stakeholders throughout the development lifecycle."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Responsive Layouts"]
  },
  {
    id: 3,
    role: "Web Designer",
    company: "Wavy Informatics",
    location: "Panchkula, Haryana",
    period: "Dec 2022 - July 2023",
    current: false,
    highlights: [
      "Developed wireframes, user journeys, and user flows for responsive web applications.",
      "Integrated semantic HTML, CSS styling, and JavaScript logic to transform prototypes into functional web pages.",
      "Collaborated with developers to ensure design specifications and responsive breakpoints were faithfully implemented.",
      "Researched contemporary trends in web design and usability to inform new client projects."
    ],
    tech: ["Figma", "Wireframing", "HTML5", "CSS3", "JavaScript", "UI/UX Design"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Arts (BA)",
    institution: "Pt. Lalit Mohan Sharma Govt. PG College",
    location: "Rishikesh, Uttarakhand",
    period: "2021 - 2024",
    badge: "Degree Conferred"
  },
  {
    degree: "Diploma in Computer Application (DCA)",
    institution: "Elite Computer Education",
    location: "Rishikesh, India",
    period: "2021 - 2022",
    badge: "Technical Diploma"
  }
];

// Curated Project Placeholders (Ready to be easily customized with Abhishek's projects later)
export const projectsData = [
  {
    id: "project-1",
    caseNumber: "01",
    title: "Apex Creative Web Application",
    category: "React & Next.js",
    categoryBadge: "Web App",
    isPlaceholder: true,
    tagline: "A high-performance modern web application featuring dynamic state, smooth micro-interactions, and responsive layout systems.",
    image: "/projects/dashboard.jpg",
    stats: { performance: "99/100", animations: "60 FPS", responsiveness: "100%" },
    tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "REST APIs"],
    description: "Designed and engineered as a modern interactive web application. Focused on silky smooth transitions, modular component architecture, and lightning-fast API responses.",
    features: [
      "Modular React component design with clear separation of concerns.",
      "Integrated dynamic REST endpoints with optimized client-side state.",
      "Flawlessly responsive across mobile, tablet, and desktop screens.",
      "Custom micro-animations and hover effects implemented with Framer Motion."
    ],
    demoUrl: "https://example.com/demo-1",
    githubUrl: "https://github.com/example/project-one"
  },
  {
    id: "project-2",
    caseNumber: "02",
    title: "Studio.AI Neural Creative Platform",
    category: "React & Next.js",
    categoryBadge: "Creative UI",
    isPlaceholder: true,
    tagline: "An interactive creative studio interface with floating toolbars, responsive canvas viewport, and glassmorphic aesthetic.",
    image: "/projects/ai_studio.jpg",
    stats: { uiPolish: "Awwwards-tier", renderSpeed: "<16ms", tools: "12+ Tools" },
    tech: ["Next.js", "Tailwind CSS", "Material UI", "Framer Motion", "Lucide"],
    description: "A state-of-the-art interactive creative studio UI with sleek dark aesthetics, floating glassmorphic panels, and intuitive controls.",
    features: [
      "Custom floating dock with glassmorphism filters and smooth hover gestures.",
      "Hardware-accelerated animations powered by Framer Motion.",
      "Fully accessible keyboard controls and intuitive layout structure.",
      "Optimized DOM rendering with zero layout shift during transitions."
    ],
    demoUrl: "https://example.com/demo-2",
    githubUrl: "https://github.com/example/project-two"
  },
  {
    id: "project-3",
    caseNumber: "03",
    title: "Aurora High-End Digital Experience",
    category: "UI & E-Commerce",
    categoryBadge: "Digital Product",
    isPlaceholder: true,
    tagline: "A next-generation storefront experience featuring neon accent lighting, smooth product sliders, and dynamic shopping interactions.",
    image: "/projects/ecommerce.jpg",
    stats: { conversionRate: "+42%", pageLoad: "0.7s", mobileScore: "100" },
    tech: ["React.js", "Tailwind CSS", "Context API", "Responsive Design"],
    description: "An ultra-modern luxury digital product platform designed with dark minimalist aesthetics, glowing accents, and mobile-first responsiveness.",
    features: [
      "Slide-over interactive cart drawer with instant state recalculations.",
      "Fluid responsive layout tailored from 320px mobile screens to 4K displays.",
      "Micro-interactions on buttons, product cards, and navigation links.",
      "Cross-browser tested across Safari, Chrome, Firefox, and mobile browsers."
    ],
    demoUrl: "https://example.com/demo-3",
    githubUrl: "https://github.com/example/project-three"
  },
  {
    id: "project-4",
    caseNumber: "04",
    title: "FinPulse Real-Time Financial Tracker",
    category: "React & Next.js",
    categoryBadge: "Fintech",
    isPlaceholder: true,
    tagline: "A real-time asset tracking interface with interactive chart components, transaction feeds, and live data synchronization.",
    image: "/projects/fintech.jpg",
    stats: { latency: "<80ms", dataFreshness: "Real-time", uptime: "99.9%" },
    tech: ["React.js", "Material UI", "Tailwind CSS", "REST APIs", "CSS Grid"],
    description: "A sophisticated financial analytics web interface built with React and Tailwind CSS, featuring live data updates and interactive chart representations.",
    features: [
      "Live updating asset allocation doughnut and sparkline charts.",
      "Responsive tabular view with real-time transaction sorting and filtering.",
      "Strict cross-browser compatibility and zero visual discrepancies.",
      "Clean, scalable codebase ready for team collaboration."
    ],
    demoUrl: "https://example.com/demo-4",
    githubUrl: "https://github.com/example/project-four"
  }
];

export const valuePillars = [
  {
    number: "01",
    title: "Pixel-Perfect Design Fidelity",
    description: "Translating wireframes and complex Figma prototypes into clean, responsive React & Tailwind components with zero visual compromises."
  },
  {
    number: "02",
    title: "Silky Smooth 60 FPS Motion",
    description: "Crafting fluid scroll transitions and micro-interactions that elevate user delight while maintaining top Core Web Vitals scores."
  },
  {
    number: "03",
    title: "100% Cross-Browser Tested",
    description: "Tested across Safari, Chrome, Firefox, Edge, iOS, and Android to guarantee zero layout shifts and seamless touch gestures."
  },
  {
    number: "04",
    title: "Clean, Maintainable Code",
    description: "Writing modular, scalable React architecture with reusable component patterns, clear documentation, and efficient API handling."
  }
];
