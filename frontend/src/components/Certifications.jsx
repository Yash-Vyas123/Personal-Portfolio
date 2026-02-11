import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "Micro-Certification - Welcome to ServiceNow",
            issuer: "ServiceNow",
            date: "Dec 2025",
            link: "https://learning.servicenow.com/now/lxp/learning-dashboard",
            icon: <Award size={32} />,
            image: "/servicenow.png"
        },
        {
            title: "Artificial Intelligence Fundamentals",
            issuer: "IBM SkillsBuild",
            date: "Jan 2025",
            link: "https://www.credly.com/badges/21f70ce1-5a35-453d-8c4f-deda38c43b96/public_url",
            icon: <Award size={32} />,
            image: "/ibm2.png"
        },
        {
            title: "Data Fundamentals",
            issuer: "IBM SkillsBuild",
            date: "Jan 2025",
            link: "https://www.credly.com/badges/0348df73-356b-41dd-8155-6313e15a403c/public_url",
            icon: <Award size={32} />,
            image: "/ibm1.png"
        }
    ];

    return (
        <section className="certifications-section" id="certifications">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-metadata">
                        <div className="metadata-line">AUTH: <span className="metadata-val">SECURE</span></div>
                        <div className="metadata-line">TOKEN: <span className="metadata-val">VALID_AUTH</span></div>
                    </div>

                    <h2 className="section-title">
                        My <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle">Verified professional expertise and continuous learning</p>
                </motion.div>

                <div className="certs-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="cert-image-container">
                                <img src={cert.image} alt={cert.title} className="cert-image" />
                                <div className="cert-overlay">
                                    <div className="cert-icon-wrapper">
                                        {cert.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <span className="issuer">{cert.issuer}</span>
                                <div className="cert-details">
                                    <div className="cert-date">
                                        <Calendar size={14} />
                                        {cert.date}
                                    </div>
                                    <div className="cert-date">
                                        <CheckCircle size={14} />
                                        Verified Certificate
                                    </div>
                                </div>
                                <a href={cert.link} className="cert-link">
                                    View Certificate <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
