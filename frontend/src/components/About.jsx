import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import "./About.css";

const About = () => {
    const summaryCards = [
        { label: "Experience", value: "Fresher" },
        { label: "Specialty", value: "Full Stack" },
        { label: "Focus", value: "Scalability & UX" }
    ];

    return (
        <section className="about-v3" id="about">
            <div className="container">
                <div className="about-content-v3">
                    {/* Left side: Image with Halo Glow */}
                    <motion.div
                        className="about-left-column"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-image-wrapper">
                            <div className="image-halo"></div>
                            <img src="/ar1.jpeg" alt="Profile" className="profile-img-v3" />
                        </div>
                        
                        <div className="about-socials-v3">
                            <a href="https://github.com/Yash-Vyas123" target="_blank" rel="noreferrer" className="social-link-v3 gray">
                                <Github size={20} />
                            </a>
                            <a href="https://twitter.com/Yashvyas_12" target="_blank" rel="noreferrer" className="social-link-v3 blue">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com/in/yash-vyas-" target="_blank" rel="noreferrer" className="social-link-v3 azure">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right side: Information */}
                    <motion.div
                        className="about-info-v3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="section-metadata">
                            <div className="metadata-line">LOCATION: <span className="metadata-val">BHOPAL, INDIA</span></div>
                            <div className="metadata-line">STATUS: <span className="metadata-val">AVAILABLE</span></div>
                        </div>
                        <h2 className="about-name-v3">Yash Vyas</h2>
                        <h3 className="about-title-v3">Full-Stack Developer</h3>

                        <p className="about-desc-v3">
                            I build scalable, modern applications with a strong focus on clean
                            architecture, performance, and delightful UX. My toolkit spans
                            <strong> React, Node.js, MongoDB, and System Design</strong> -
                            bringing ideas to life with robust APIs and pixel-perfect interfaces.
                            I lead and represent my team in technical hackathons and innovation summits.
                        </p>

                        <div className="summary-cards-v3">
                            {summaryCards.map((card, index) => (
                                <div key={index} className="summary-card-v3">
                                    <span className="card-label-v3">{card.label}</span>
                                    <span className="card-value-v3">{card.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="about-btns-v3">
                            <a href="#projects" className="btn-v3-fill">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn-v3-outline">
                                Get in Touch <Mail size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
