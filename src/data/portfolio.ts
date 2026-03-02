import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  facebook: "https://facebook.com/yourusername",
};

export const skills = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 78 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MongoDB", level: 72 },
    { name: "REST APIs", level: 88 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 65 },
    { name: "Figma", level: 70 },
    { name: "VS Code", level: 95 },
    { name: "Linux", level: 68 },
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Northern University of Business and Technology,Khulna",
    year: "2022 – 2026",
    description: "Focused on software engineering, data structures, and web technologies. Graduated with honors.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "kcc women's college,Khulna",
    year: "2018 – 2020",
    description: "Science major.",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2024 – Present",
    description: "Building responsive web applications using React, TypeScript, and modern CSS. Collaborating with design and backend teams to deliver seamless user experiences.",
  },
  {
    role: "Web Development Intern",
    company: "Aqren.dev",
    period: "Jan 2026 present",
    description: "Contributed to building internal dashboards and client-facing landing pages. Gained experience in agile development and code reviews.",
  },
];

export interface Project {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
  techStack: string[];
  description: string;
  liveLink: string;
  githubLink: string;
  challenges: string;
  futurePlans: string;
}

export const projects: Project[] = [
  


{
  id: "etutionbd",
  name: "EtutionBD – Online Learning Platform",
  image: project1,
  shortDesc: "A full-stack online learning and course management platform.",
  techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  description:
    "EtutionBD is a modern online learning platform where students can enroll in courses, access structured lessons, and track their learning progress. The platform includes authentication, role-based dashboards (admin/student), and secure API integration.",
  liveLink: "https://charming-ganache-90c834.netlify.app/",
  githubLink: "https://github.com/jsyaii/assi11_etution_bd_client",
  challenges:
    "Designing secure authentication with JWT, managing protected routes, and structuring scalable backend APIs. Also optimized frontend performance using lazy loading and reusable components.",
  futurePlans:
    "Add live class integration, payment gateway system, certificate generation, and instructor analytics dashboard.",
},


{
  id: "krishilink",
  name: "Krishilink – Agriculture Marketplace",
  image: project2,
  shortDesc: "A digital marketplace connecting farmers directly with buyers.",
  techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
  description:
    "Krishilink is an agriculture-focused marketplace platform that connects farmers with customers and wholesalers. It allows product listing, real-time order tracking, and direct communication between users.",
  liveLink: "https://charming-ganache-90c834.netlify.app/",
  githubLink: "https://github.com/jsyaii/asi10-krishilink-client",
  challenges:
    "Handling real-time communication using Socket.io and managing scalable order processing. Implemented secure role-based access control for farmers and buyers.",
  futurePlans:
    "Add AI-based crop price prediction, mobile app version, and integrated logistics tracking system.",
},
{
  id: "hero-app",
  name: "Hero App – Modern E-commerce Platform",
  image: project3,
  shortDesc: "A high-performance full-stack e-commerce application with secure payments and scalable architecture.",
  techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
  description:
    "Hero App is a production-ready full-stack e-commerce platform built with Next.js and TypeScript. It features secure Stripe payment integration, dynamic product management, server-side rendering for performance, and a fully responsive modern UI. The architecture is designed to be scalable, maintainable, and optimized for real-world deployment.",
  liveLink: "https://aquamarine-rolypoly-0c40d8.netlify.app/",
  githubLink: "https://github.com/jsyaii/assi8-hero-app",
  challenges:
    "Implementing a secure end-to-end Stripe checkout flow, handling server-side rendering with optimized data fetching, and structuring the database schema using Prisma for scalability and performance.",
  futurePlans:
    "Integrate AI-powered product recommendations, advanced analytics dashboard, inventory automation, and multi-vendor marketplace support.",
}

];
