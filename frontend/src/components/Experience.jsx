import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import "./Experience.css";

const experiences = [
    {
        role: "Microsoft Student Ambassador",
        company: "Microsoft",
        date: "2025 - Present",
        description: "Empowering students with technical skills, organizing workshops on Microsoft technologies, and building a community of student developers."
    },
    {
        role: "Secretary",
        company: "Student Council Drone Society",
        date: "2025 - Present",
        description: "Managing society operations, coordinating drone building workshops, and leading initiatives to promote drone technology awareness on campus."
    }
];

const Experience = () => {
    return (
        <section className="section-padding" id="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Career <span className="gradient-text">Timeline</span></h2>
                    <p className="section-subtitle">My professional journey so far.</p>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <div className="role-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company"><Briefcase size={14} /> {exp.company}</span>
                                </div>
                                <div className="date-badge">
                                    <Calendar size={14} /> {exp.date}
                                </div>
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
