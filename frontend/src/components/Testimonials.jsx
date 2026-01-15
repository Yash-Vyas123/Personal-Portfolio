import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Yash is an exceptional developer who brings creativity and discipline to every project he touches. His eye for detail is unmatched.",
        author: "Tech Solutions Inc.",
        role: "Senior Partner"
    },
    {
        quote: "Continuously helping and guiding the students and tech enthusiasts. A true leader in the developer community.",
        author: "Drone Society",
        role: "Executive Board"
    },
    {
        quote: "Organized a successful hackathon and workshop with great leadership and execution. The technical depth was impressive.",
        author: "Student Council",
        role: "Event Lead"
    },
    {
        quote: "A dedicated innovator who consistently contributes to the developer ecosystem with high-quality code and vision.",
        author: "MLH Community",
        role: "Volunteer"
    },
    {
        quote: "The interface he built for our enterprise dashboard was both stunning and efficient. Highly recommend his work.",
        author: "Creative Agency",
        role: "Design Lead"
    }
];

const Testimonials = () => {
    // Duplicate the array for seamless infinite loop
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Valued <span className="gradient-text">Testimonials</span></h2>
                    <p className="section-subtitle">What others say about working with me.</p>
                </motion.div>
            </div>

            <div className="marquee-container">
                <motion.div
                    className="marquee-content"
                    animate={{
                        x: [0, -1500], // Adjust based on card width + gap
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {doubledTestimonials.map((item, index) => (
                        <div className="testimonial-card glass-card" key={index}>
                            <Quote size={24} className="quote-icon" />
                            <p className="quote-text">"{item.quote}"</p>
                            <div className="quote-footer">
                                <span className="quote-author">/ {item.author}</span>
                                <span className="quote-role">{item.role}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
