import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings, Terminal } from "lucide-react";
import "./Skills.css";

const skillsData = [
    {
        category: "Programming Languages",
        icon: <Code2 size={32} />,
        skills: [
            { name: "Java", icon: "devicon-java-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "C++", icon: "devicon-cplusplus-plain" }
        ]
    },
    {
        category: "Frontend",
        icon: <Layout size={32} />,
        skills: [
            { name: "React", icon: "devicon-react-original" },
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "Tailwind", icon: "devicon-tailwindcss-original" },
            { name: "Framer Motion", icon: "devicon-framermotion-original" }
        ]
    },
    {
        category: "Backend",
        icon: <Server size={32} />,
        skills: [
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express", icon: "devicon-express-original" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
        ]
    },
    {
        category: "Tools & DevOps",
        icon: <Settings size={32} />,
        skills: [
            { name: "Git", icon: "devicon-git-plain" },
            { name: "Figma", icon: "devicon-figma-plain" }
        ]
    }
];

const Skills = () => {
    return (
        <section className="section-padding" id="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-metadata">
                        <div className="metadata-line">SYSTEM: <span className="metadata-val">OPERATIONAL</span></div>
                        <div className="metadata-line">STACK: <span className="metadata-val">MODERN_V3</span></div>
                    </div>

                    <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
                    <p className="section-subtitle">Tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="skill-category glass-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="category-header">
                                <div className="icon-box">{category.icon}</div>
                                <h3>{category.category}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div className="skill-item" key={i}>
                                        <i className={`${skill.icon} colored skill-icon`}></i>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
