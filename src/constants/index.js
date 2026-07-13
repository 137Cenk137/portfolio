import { er, hashked } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    pricewise,
    react,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const aboutBio = {
    headline: "Electrical & Electronics Engineering student building full-stack software systems.",
    summary:
        "I'm a 21-year-old engineer with an intermediate-to-advanced full-stack foundation. I build and ship web and mobile products—from backend architecture and React/Next.js frontends to Flutter apps, DevOps pipelines, observability stacks, and AI-powered features.",
};

export const highlightedSkills = [
    { imageUrl: typescript, name: "TypeScript" },
    { imageUrl: javascript, name: "JavaScript" },
    { imageUrl: react, name: "React" },
    { imageUrl: nextjs, name: "Next.js" },
    { imageUrl: nodejs, name: "Node.js" },
    { imageUrl: html, name: "HTML" },
    { imageUrl: css, name: "CSS" },
    { imageUrl: tailwindcss, name: "Tailwind CSS" },
    { imageUrl: mongodb, name: "MongoDB" },
    { imageUrl: git, name: "Git" },
    { imageUrl: github, name: "GitHub" },
    { imageUrl: motion, name: "Framer Motion" },
];

export const skillCategories = [
    {
        id: "languages",
        title: "Languages",
        skills: ["C#", "TypeScript", "JavaScript", "Dart", "Swift", "SQL", "Basic C/C++"],
    },
    {
        id: "backend",
        title: "Backend",
        skills: [
            ".NET",
            "Hono.js",
            "REST API Development",
            "JWT / Auth Systems",
            "BetterAuth",
            "Clean Architecture",
            "Repository & Unit of Work",
            "Dependency Injection",
            "Background Jobs",
            "API Design",
        ],
    },
    {
        id: "frontend",
        title: "Frontend",
        skills: ["React", "Next.js", "React Native", "Flutter", "HTML/CSS", "Responsive UI"],
    },
    {
        id: "mobile",
        title: "Mobile Development",
        skills: [
            "Flutter",
            "React Native",
            "Swift (macOS/iOS)",
            "Firebase Authentication",
            "Google Sign-In",
            "RevenueCat",
            "Adapty",
            "Play Store Deployment",
        ],
    },
    {
        id: "databases",
        title: "Databases",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "Drizzle ORM",
            "Redis",
            "Vector Databases & Embeddings",
        ],
    },
    {
        id: "devops",
        title: "DevOps & Infrastructure",
        skills: [
            "Linux",
            "Docker",
            "Coolify",
            "Hetzner VPS",
            "Cloudflare",
            "SSH Keys",
            "Server Security",
            "CI/CD",
            "Domain & DNS Management",
        ],
    },
    {
        id: "messaging",
        title: "Messaging & Distributed Systems",
        skills: ["RabbitMQ", "MQTT", "MassTransit", "Event-Driven Architecture"],
    },
    {
        id: "storage",
        title: "Object Storage",
        skills: ["MinIO", "Cloudflare R2"],
    },
    {
        id: "observability",
        title: "Observability",
        skills: [
            "Logging",
            "Monitoring",
            "Prometheus",
            "Grafana",
            "Sentry",
            "PostHog",
            "Amplitude",
        ],
    },
    {
        id: "ai",
        title: "AI",
        skills: [
            "OpenAI APIs",
            "Prompt Engineering",
            "RAG",
            "Embeddings",
            "AI Product Integration",
            "LLM Application Development",
        ],
    },
    {
        id: "product",
        title: "Product & Startup",
        skills: [
            "SaaS MVP Development",
            "Subscription Businesses",
            "Paywalls & Freemium",
            "Product Validation",
            "B2B Customer Discovery",
            "Market Research",
            "SEO Basics",
            "AdSense & Affiliate Marketing",
        ],
    },
    {
        id: "engineering",
        title: "Electrical & Electronics",
        skills: [
            "Analog Electronics",
            "Digital Electronics",
            "Circuit Analysis",
            "Signal Processing",
            "Electromagnetics",
            "Control Systems",
            "Embedded Systems",
            "Firmware",
            "FPGA",
            "AI Infrastructure",
        ],
    },
    {
        id: "business",
        title: "Business & Marketing",
        skills: [
            "SaaS Marketing",
            "Positioning",
            "Product Marketing",
            "Growth",
            "Customer Acquisition",
            "Monetization",
            "Pricing Strategies",
        ],
    },
    {
        id: "improving",
        title: "Currently Improving",
        skills: [
            "Advanced Kubernetes",
            "AWS / GCP / Azure",
            "Distributed Systems at Scale",
            "Advanced Observability",
            "Advanced Networking",
            "Embedded / Firmware Development",
            "FPGA Design",
            "AI Infrastructure Engineering",
            "Low-Level Systems Programming",
        ],
    },
];

export const strengths = [
    "Full-stack development",
    "Mobile development",
    "Backend architecture",
    "Learning new technologies quickly",
    "System design fundamentals",
    "Product thinking",
    "DevOps fundamentals",
    "Strong curiosity and deep learning mindset",
];

export const notableProjects = [
    "Cibik — .NET 9 plant-growing platform (Er Eğitim)",
    "Truth or Dare AI — mobile app",
    "Prompt Sharper - AI Prompt Engineering Tool",
    "Agno Calculator",
    "Smart Plant Monitoring System",
    "Knitting Engine",
    "Multiple SaaS MVP ideas",
    "Full-stack boilerplate architecture",
];

/** @deprecated Use highlightedSkills instead */
export const skills = highlightedSkills;

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "Hashked",
        icon: hashked,
        iconBg: "#accbe1",  
        date: "January 2025 - February 2025",
        points: [
            "Developed a Node.js/Express backend for a clothing e-commerce platform with a RESTful API.",
            "Modeled and persisted catalog, cart, and order data in MongoDB.",
        ],
    },
    {
        title: "Full-Stack Developer & co-founder",
        company_name: "Er Egitim Sistemleri Teknoloji A.Ş.",
        icon: er,
        iconBg: "#b7e4c7",
        date: "March 2025 - Present",
        points: [
            "Architected and developed Cibik, a .NET 9 backend for a plant-growing education platform — catalog, personal plant management, IoT telemetry, AI chat, subscriptions, notifications, and gamification.",
            "Structured the solution into Domain, Infrastructure, Presentation.WebApi, and Game.WebApi layers using ASP.NET Core Minimal APIs, EF Core 9 on PostgreSQL, and Marten event store for IoT ingest streams.",
            "Built event-driven workflows with RabbitMQ and MassTransit: outbox/inbox persistence, domain-event dispatch, MQTT telemetry ingestion (LWT), and EF Core-backed saga orchestration for plant analytics.",
            "Implemented personal plant onboarding, growth-path task lifecycle, admin catalog APIs, and en/tr localization with JWT auth and role-based authorization.",
            "Integrated Semantic Kernel + OpenAI chatbot (kernel plugins, structured JSON), hybrid pgvector + FTS plant search, Firebase FCM, Adapty subscriptions, Hangfire jobs, Redis cache, and SignalR.",
            "Established integration testing with xUnit, WebApplicationFactory, Testcontainers (PostgreSQL, RabbitMQ, MinIO), Respawn database resets, and MassTransit test harness.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: er,
        theme: 'btn-back-green',
        name: 'Cibik',
        description:
            'A .NET 9 plant-growing platform for Er Eğitim — IoT telemetry over MQTT, event-driven workflows with RabbitMQ/MassTransit, Semantic Kernel AI chatbot, PostgreSQL, subscriptions, and gamification.',
    },
    {
        iconUrl: motion,
        theme: 'btn-back-pink',
        name: 'Truth or Dare AI',
        description:
            'A cross-platform mobile app that generates AI-powered truth or dare prompts, with Firebase auth, subscription flows via RevenueCat/Adapty, and Play Store deployment.',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'PromptSharper',
        description:
            'An AI prompt engineering tool focused on crafting, refining, and structuring prompts for LLM workflows and product integrations.',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Agno Calculator',
        description:
            'A calculator application built as part of exploring agent-oriented and structured computation workflows.',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'Smart Plant Monitoring System',
        description:
            'An IoT-oriented plant monitoring project combining sensor data ingestion, telemetry processing, and plant health insights.',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-black',
        name: 'Knitting Engine',
        description:
            'A pattern and workflow engine project exploring structured generation logic for knitting-related use cases.',
    },
];
