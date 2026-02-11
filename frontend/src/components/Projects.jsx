import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
    {
        title: "Prepfolio AI - AI Interview-prep",
        description: "Prepfolio AI helps you prepare for tech interviews smarter with AI mock interviews, resume scanning, and real-time feedback all in one platform.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Google Gemini Pro", "JWT"],
        github: "https://github.com/Yash-Vyas123/AI-Interview-prep",
        demo: "https://ai-interview-prep-coral.vercel.app/",
        image: "/prepfolio-ai.png"
    },
    {
        title: "MOVIEFY – Cinematic 3D Landing",
        description: "An immersive movie landing page featuring dynamic sliders and engaging 3D visuals, designed for a premium browsing experience.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Yash-Vyas123/Animated-and-Responsive-Movie-Website",
        demo: "#",
        image: "/project-moviefy.png"
    }
];

const Projects = () => {
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

                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">Visual experiences built with code.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card glass-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className="project-image"
                                style={{
                                    backgroundImage: `url("${project.image}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "top center"
                                }}
                            >
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noreferrer" title="View Code">
                                            <Github size={24} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            title={project.demo === "#" ? "Demo Coming Soon" : "View Live Demo"}
                                            style={project.demo === "#" ? { cursor: "not-allowed", opacity: 0.6 } : {}}
                                            onClick={project.demo === "#" ? (e) => e.preventDefault() : undefined}
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
