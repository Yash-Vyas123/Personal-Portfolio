import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileText } from "lucide-react";
import "./Hero.css";

const Hero = () => {
    const roles = [
        "Full-Stack Developer",
        "UI/UX Enthusiast",
        "Problem Solver",
        "Tech Innovator",
        "Code Architect"
    ];

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section" id="home">
            {/* Ambient Background Text */}
            <div className="hero-bg-text">
                FULLSTACK{"\n"}ENGINEER
            </div>

            <div className="container">
                <div className="hero-container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Sparkles size={14} /> Available for new projects
                        </motion.div>

                        <motion.div
                            className="hero-info"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="hero-name">
                                <span className="hero-name-first">YASH</span>
                                <span className="hero-name-second">VYAS</span>
                            </h1>
                            <motion.div
                                className="hero-role"
                                key={currentRole}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="role-prompt">&gt;&gt;</span>
                                <span className="role-text">{roles[currentRole]}</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="hero-description-container"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <p className="hero-description">
                                Architecting <strong>high-performance</strong> digital products
                                with a focus on <strong>scalability</strong> and <strong>immersive</strong>
                                user interfaces. Currently pushing the boundaries of Web3 and AI integration.
                            </p>
                        </motion.div>

                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a href="#projects" className="btn-primary-new">
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a href="/Yash Resume.pdf" className="btn-outline-new">
                                View Resume <FileText size={20} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="modern-terminal">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <div className="dot red"></div>
                                    <div className="dot yellow"></div>
                                    <div className="dot green"></div>
                                </div>
                                <div className="terminal-status">STATUS: OPTIMAL</div>
                            </div>
                            <div className="code-body">
                                <div className="terminal-line">
                                    <span className="t-key">const</span> <span className="t-val">skills</span> = [
                                </div>
                                <div className="terminal-line">&nbsp;&nbsp;<span className="t-str">"React"</span>, <span className="t-str">"NodeJS"</span>,</div>
                                <div className="terminal-line">&nbsp;&nbsp;<span className="t-str">"JavaScript"</span>, <span className="t-str">"git"</span></div>
                                <div className="terminal-line">];</div>
                                <div className="terminal-line" style={{ marginTop: '1rem' }}>
                                    <span className="t-key">while</span> (innovating) {'{'}
                                </div>
                                <div className="terminal-line">&nbsp;&nbsp;build_future(<span className="t-val">coffee</span> + <span className="t-val">code</span>);</div>
                                <div className="terminal-line">{'}'}</div>
                                <div className="t-comment" style={{ marginTop: '1rem' }}>// System sequences stabilized.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
