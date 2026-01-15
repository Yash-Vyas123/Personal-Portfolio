import React from "react";
import { motion } from "framer-motion";
import { Trophy, Briefcase, Heart, Award, Users, Zap } from "lucide-react";
import "./Achievements.css";

const Achievements = () => {
    const achievements = [
        {
            icon: <Trophy size={28} />,
            title: "Microsoft Student Ambassador",
            organization: "Microsoft",
            description: "Cultivating a global community of students passionate about technology, empowering them with resources to develop skills and make a meaningful impact.",
            color: "purple"
        },
        {
            icon: <Briefcase size={28} />,
            title: "Secretary - Drone Society",
            organization: "Student Council, TIT",
            description: "Leading the student council's drone initiatives and coordinating technical workshops",
            color: "teal"
        },
        {
            icon: <Heart size={28} />,
            title: "Campus Events Volunteer",
            organization: "Student Council, TIT",
            description: "Active volunteer in hackathons, campus drives, and student council events",
            color: "purple"
        }
    ];

    const stats = [
        { icon: <Award size={24} />, number: "3+", label: "Leadership Roles" },
        { icon: <Users size={24} />, number: "10+", label: "Events Organized" },
        { icon: <Zap size={24} />, number: "100+", label: "Students Impacted" }
    ];

    return (
        <section className="achievements-section" id="achievements">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Achievements & <span className="gradient-text">Leadership</span>
                    </h2>
                    <p className="section-subtitle">
                        Making an impact beyond code through community leadership and innovation
                    </p>
                </motion.div>

                {/* Stats Row */}
                <div className="achievements-stats">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="achievement-stat"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievement Cards */}
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className={`achievement-card ${achievement.color}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="achievement-header">
                                <div className="achievement-icon-box">
                                    {achievement.icon}
                                </div>
                                <div className="achievement-badge">
                                    {achievement.organization}
                                </div>
                            </div>
                            <div className="achievement-body">
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-description">{achievement.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
