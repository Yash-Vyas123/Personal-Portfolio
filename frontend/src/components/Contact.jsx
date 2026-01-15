import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const [formState, setFormState] = useState({ name: "", email: "", title: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // NOTE: You need to replace these placeholders with your actual EmailJS credentials
            // Service ID, Template ID, and Public Key from https://dashboard.emailjs.com/

            await emailjs.sendForm(
                'service_io3a0qa',
                'template_h3buces',
                form.current,
                'SBjcSWLgkk3lWhE9L'
            );

            setIsSubmitting(false);
            alert("Thank you! Your message has been sent successfully.");
            setFormState({ name: "", email: "", title: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setIsSubmitting(false);
            // detailed error for debugging
            alert(`Failed to send email. Error: ${error.text || JSON.stringify(error)}`);
            // Keep the form state so user doesn't lose their message on error
            // setFormState({ name: "", email: "", title: "", message: "" });
        }
    };

    const contactDetails = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "yashvyasnbh@gmail.com",
            href: "mailto:yashvyasnbh@gmail.com"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone",
            value: "+91 8302439864",
            href: "tel:+918302439864"
        },
        {
            icon: <MapPin size={24} />,
            label: "Location",
            value: "India",
            href: null
        }
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/Yash-Vyas123", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/yash-vyas123/", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "https://x.com/yash_vyas830", label: "Twitter" }
    ];

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">Let's collaborate on your next big project</p>
                </motion.div>

                <div className="contact-wrapper">
                    {/* Contact Info Column */}
                    <motion.div
                        className="contact-info-column"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-card">
                            <div className="card-top">
                                <MessageSquare size={32} className="card-icon" />
                                <h3>Contact Information</h3>
                                <p>Feel free to reach out. I'm always open to new opportunities and collaborations.</p>
                            </div>

                            <div className="contact-list">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="contact-item-new">
                                        <div className="item-icon">{item.icon}</div>
                                        <div className="item-details">
                                            <span className="item-label">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} className="item-value">{item.value}</a>
                                            ) : (
                                                <span className="item-value">{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="contact-social-wrap">
                                <h4>Follow Me</h4>
                                <div className="social-grid-new">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="social-icon-btn"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        className="contact-form-column"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form ref={form} className="modern-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group-modern">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group-modern">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group-modern">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Project Inquiry"
                                    value={formState.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group-modern">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Tell me more about your project..."
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`submit-btn-modern ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                <span className="btn-text">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </span>
                                {!isSubmitting && <Send size={20} />}
                                {isSubmitting && <div className="btn-loader"></div>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
