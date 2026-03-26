import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
    {
        title: "NutriAI",
        description: "NutriAI is an AI-powered web application that generates personalized diet plans based on user health data and fitness goals.",
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT (Authentication)", "bcrypt"],
        github: "https://github.com/Yash-Vyas123/NutriAI",
        demo: "https://nutriai-1-zvwu.onrender.com/",
        image: "/nutriai.png",
        category: "AI",
        featured: true
    },
    {
        title: "Loopify - Premium Video Calling",
        description: "A high-performance real-time communication platform featuring video calling, instant messaging, and secure user authentication with a sleek modern interface.",
        tech: ["React", "Node.js", "Stream Video API", "Express", "JWT", "Tailwind CSS", "MongoDB"],
        github: "https://github.com/Yash-Vyas123/Loopify",
        demo: "https://loopify-qetn.onrender.com/",
        image: "/Chat App.png",
        category: "Full Stack",
        featured: true
    },
    {
        title: "Prepfolio AI - AI Interview-prep",
        description: "Prepfolio AI helps you prepare for tech interviews smarter with AI mock interviews, resume scanning, and real-time feedback all in one platform.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Google Gemini Pro", "JWT"],
        github: "https://github.com/Yash-Vyas123/AI-Interview-prep",
        demo: "https://ai-interview-prep-coral.vercel.app/",
        image: "/prepfolio-ai.png",
        category: "AI",
        featured: true
    },
    {
        title: "MOVIEFY – Cinematic 3D Landing",
        description: "An immersive movie landing page featuring dynamic sliders and engaging 3D visuals, designed for a premium browsing experience.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Yash-Vyas123/Animated-and-Responsive-Movie-Website",
        demo: "#",
        image: "/project-moviefy.png",
        category: "Frontend",
        featured: false
    },
    {
        title: "Notara - Secure Note-Taking Solution",
        description: "A full-stack MERN application designed for productivity, featuring secure JWT authentication, real-time note management, and a clean, responsive user interface.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        github: "https://github.com/Yash-Vyas123/Notara",
        demo: "https://notara-d96u.onrender.com/",
        image: "/notara-logo.png",
        category: "Full Stack",
        featured: false
    }
];

const categories = ["All", "Full Stack", "AI", "Frontend"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredProjects = projects.filter(project =>
        activeCategory === "All" ? true : project.category === activeCategory
    );

    return (
        <section className="section-padding" id="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-metadata">
                        <div className="metadata-line">REPO: <span className="metadata-val">ACCESSIBLE</span></div>
                        <div className="metadata-line">BUILD: <span className="metadata-val">STABLE_V1</span></div>
                    </div>

                    <h2 className="section-title">Latest <span className="gradient-text">Creations</span></h2>
                    <p className="section-subtitle">A collection of digital solutions and immersive experiences.</p>
                </motion.div>

                {/* Filter Bar */}
                <div className="filter-bar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="projects-grid"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                className="project-card-container"
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="project-card glass-card">
                                    <div className="project-image-wrapper">
                                        <div
                                            className="project-image"
                                            style={{
                                                backgroundImage: `url("${project.image}")`,
                                            }}
                                        />
                                        <div className="project-badge">
                                            {project.category}
                                        </div>
                                        <div className="project-overlay">
                                            <div className="project-links">
                                                <a href={project.github} target="_blank" rel="noreferrer" title="Source Code">
                                                    <Github size={20} />
                                                </a>
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    title={project.demo === "#" ? "Demo Coming Soon" : "Live Demo"}
                                                    className={project.demo === "#" ? "disabled" : ""}
                                                    onClick={project.demo === "#" ? (e) => e.preventDefault() : undefined}
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-content">
                                        <div className="project-header-meta">
                                            <span className="project-index">0{index + 1}</span>
                                            {project.featured && <span className="featured-tag">Featured</span>}
                                        </div>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-desc">{project.description}</p>
                                        <div className="project-tech">
                                            {project.tech.slice(0, 4).map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="tech-tag-more">+{project.tech.length - 4}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="projects-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="https://github.com/Yash-Vyas123"
                        target="_blank"
                        rel="noreferrer"
                        className="view-more-btn"
                    >
                        <span>View All on GitHub</span>
                        <Github size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
