import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUp, Heart, Code2 } from "lucide-react";
import "./Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Achievements", href: "#achievements" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" }
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/Yash-Vyas123", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/yash-vyas123/", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "https://x.com/yash_vyas830", label: "Twitter" }
    ];

    const contactInfo = [
        { icon: <Mail size={18} />, text: "yashvyasnbh@gmail.com", href: "mailto:yashvyasnbh@gmail.com" },
        { icon: <Phone size={18} />, text: "+91 8302439864", href: "tel:+918302439864" },
        { icon: <MapPin size={18} />, text: "India", href: null }
    ];

    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-section footer-brand-section">
                        <motion.div
                            className="footer-logo"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Code2 size={32} className="logo-icon" />
                            <h3>Yash Vyas</h3>
                        </motion.div>
                        <p className="footer-tagline">
                            Crafting exceptional digital experiences with clean code and creative vision.
                        </p>
                        <div className="footer-socials">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Get in Touch</h4>
                        <ul className="footer-contact">
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    {item.href ? (
                                        <a href={item.href} className="contact-item">
                                            {item.icon}
                                            <span>{item.text}</span>
                                        </a>
                                    ) : (
                                        <div className="contact-item">
                                            {item.icon}
                                            <span>{item.text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter/CTA */}
                    <div className="footer-section">
                        <h4 className="footer-heading">Let's Connect</h4>
                        <p className="footer-cta-text">
                            Interested in working together? Let's create something amazing!
                        </p>
                        <a href="#contact" className="footer-cta-btn">
                            Start a Project
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Yash Vyas. All rights reserved.</p>
                        <p>Thanks for visiting <Heart size={15} fill="var(--primary)" color="var(--primary)" /> and Happy Coding!</p>

                    </div>
                    <motion.button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
