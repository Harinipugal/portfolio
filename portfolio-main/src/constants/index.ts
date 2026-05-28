import {
    Code2,
    Globe,
    Server,
    Database,
    Terminal,
    Layers,
    Shield,
    Smartphone,
    Zap,
    GitBranch,
    Lightbulb,
    type LucideIcon,
} from 'lucide-react';

// Type Definitions
export interface NavLink {
    title: string;
    href: 'home' | 'about' | 'skills' | 'projects' | 'contact';
}

export interface HeroContent {
    headline: string;
    subHeadline: string;
    ctaViewWork: string;
    ctaResume: string;
    resumeLink: string;
}

export interface AboutContent {
    bio: string;
}

export interface Skill {
    name: string;
    icon: LucideIcon;
    category: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
    isPrivate: boolean;
    category: "Personal Project" | "Client Work";
}

export interface Experience {
    title: string;
    period: string;
    description: string;
}

// Constants
export const NAV_LINKS: NavLink[] = [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Skills', href: 'skills' },
    { title: 'Projects', href: 'projects' },
    { title: 'Contact', href: 'contact' },
];

export const HERO_CONTENT: HeroContent = {
    headline: "Building Scalable, Full-Stack & Real-World Products.",
    subHeadline: "Specializing in MERN stack web apps, REST APIs, and production-grade UIs that solve real problems and ship fast.",
    ctaViewWork: "View Work",
    ctaResume: "Download Resume",
    resumeLink: "./Guru_Surya_Raja_Resume.pdf",
};

export const ABOUT_CONTENT: AboutContent = {
    bio: "Proactive and detail-oriented MERN Stack Developer and final-year B.Tech IT student at Mohammed Sathak Engineering College. Strong expertise in React.js, Node.js, Express, MongoDB, and REST API integration. Experienced in building responsive, production-grade web applications — from client freelance projects to full-stack SaaS platforms. Passionate about shipping real products, solving complex UI/UX challenges, and collaborating in fast-paced environments.",
};

export const SKILLS: Skill[] = [
    // Frontend
    { name: "HTML5", icon: Code2, category: "Frontend" },
    { name: "CSS3", icon: Code2, category: "Frontend" },
    { name: "JavaScript (ES6+)", icon: Code2, category: "Frontend" },
    { name: "React.js", icon: Globe, category: "Frontend" },
    { name: "Vite", icon: Zap, category: "Frontend" },
    { name: "Bootstrap", icon: Layers, category: "Frontend" },
    { name: "Tailwind CSS", icon: Code2, category: "Frontend" },
    { name: "Responsive Design", icon: Smartphone, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "Python", icon: Terminal, category: "Backend" },

    // Database
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "SQLite", icon: Database, category: "Database" },
    { name: "Firebase Firestore", icon: Database, category: "Database" },

    // Tools & Platforms
    { name: "Git", icon: GitBranch, category: "Tools & Platforms" },
    { name: "GitHub", icon: GitBranch, category: "Tools & Platforms" },
    { name: "VS Code", icon: Code2, category: "Tools & Platforms" },
    { name: "Power BI", icon: Database, category: "Tools & Platforms" },
    { name: "Firebase", icon: Database, category: "Tools & Platforms" },
    { name: "Vercel", icon: Server, category: "Tools & Platforms" },
    { name: "Render", icon: Server, category: "Tools & Platforms" },
    { name: "Cloudinary", icon: Database, category: "Tools & Platforms" },
    { name: "Stripe", icon: Zap, category: "Tools & Platforms" },
    { name: "Razorpay", icon: Zap, category: "Tools & Platforms" },

    // Core Skills
    { name: "API Integration", icon: Zap, category: "Core Skills" },
    { name: "REST APIs", icon: Globe, category: "Core Skills" },
    { name: "Firebase Auth", icon: Shield, category: "Core Skills" },
    { name: "Google OAuth", icon: Shield, category: "Core Skills" },
    { name: "Debugging", icon: Lightbulb, category: "Core Skills" },
    { name: "Agile", icon: Zap, category: "Core Skills" },
    { name: "Workflow Optimization", icon: Layers, category: "Core Skills" },
    { name: "Prompt Engineering", icon: Lightbulb, category: "Core Skills" },
];

export const PROJECTS: Project[] = [
    {
        title: "ElitePath — Premium Recruitment Portal",
        description: "A comprehensive full-stack job board and recruitment platform. Features intelligent job matching, applicant tracking, recruiter dashboards, and real-time live activity tracking.",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "/assets/elitepath.png",
        liveUrl: "https://mern-job-portal-plum.vercel.app/",
        githubUrl: "https://github.com/Guru-Surya-Raja-J",
        isPrivate: true,
        category: "Personal Project"
    },
    {
        title: "LabLink — Anonymous Collaboration Platform",
        description: "Full-stack anonymous platform for instant private sharing of ideas and files. Ephemeral rooms with auto-delete after timeout for security.",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "CSS3", "Bootstrap"],
        image: "/assets/lab-link.png",
        liveUrl: "https://lablink.live/",
        githubUrl: "https://github.com/Guru-Surya-Raja-J",
        isPrivate: false,
        category: "Personal Project"
    },
    {
        title: "Nexus — B2B SaaS Project Management",
        description: "Full-stack B2B SaaS platform competing with Jira/ClickUp. Features task management, team collaboration, and a full landing page with pricing, testimonials, and comparison tables.",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "Redux", "Vite", "Pure CSS"],
        image: "/assets/nexus.png",
        liveUrl: "https://nexus-governance.vercel.app/",
        githubUrl: "https://github.com/Guru-Surya-Raja-J",
        isPrivate: true,
        category: "Client Work"
    },
    {
        title: "MSEC IT Department Website",
        description: "Responsive student-staff communication platform with integrated AI chatbot for FAQ automation, improving query resolution by 25%.",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Cloudinary", "Firebase"],
        image: "/assets/msec.png",
        liveUrl: "https://msec-it-cc.web.app",
        githubUrl: "https://github.com/Guru-Surya-Raja-J",
        isPrivate: true,
        category: "Client Work"
    },
];

export const EXPERIENCE: Experience[] = [
    {
    title: "SendNow — Software Developer Intern",
    period: "July 2025 – September 2025",
    description:
        "Enhanced application responsiveness across multiple screen sizes and improved overall user experience. Resolved critical production-level bugs and optimized frontend functionality for better performance. Designed and implemented a scalable document conversion workflow (DOCX → PDF) using React.js, Node.js, LibreOffice Docker, and CloudConvert APIs. Collaborated with the development team in an Agile environment, contributing to feature delivery, testing, and deployment using Git-based workflows. Remote."
},
    {
    title: "Xyzon Innovations — MERN Stack Developer (Freelance/Associate)",
    period: "2026 – Present",
    description:
        "Developed and maintained EdTech products including a Certificate Generator, AI-powered Pitch Deck Generator, Admin Panel, and Mentor Management Workflow using the MERN stack. Built responsive user interfaces with React.js and scalable backend services using Node.js, Express.js, and MongoDB. Implemented API integrations, dynamic PDF certificate generation, role-based admin controls, mentor onboarding workflows, and automated product management features. Contributed to end-to-end product development and feature enhancements. Remote,Tamil Nadu", 
},
];