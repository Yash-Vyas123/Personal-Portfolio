import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
    // Enable scrolling when menu is closed
    document.body.style.overflow = "unset";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    const handleNavbarEffect = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleNavbarEffect);
    return () => {
      window.removeEventListener("scroll", handleNavbarEffect);
      observer.disconnect();
    };
  }, []);

  // Framer Motion Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.15,
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    opened: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const listVariants = {
    closed: {
      y: 20,
      opacity: 0
    },
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  };

  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-pill">
        {/* Brand/Logo */}
        <div className="nav-logo" onClick={(e) => handleScroll(e, "#home")}>
          <Terminal size={16} className="brand-icon" />
          <span className="brand-text">YASH</span>
        </div>

        {/* Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-item ${activeTab === link.href.replace('#', '') ? "active" : ""}`}
              onClick={(e) => handleScroll(e, link.href)}
            >
              <span className="nav-dot">·</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-mobile-overlay"
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
          >
            <div className="mobile-menu-header">
              <span className="nav-label">NAVIGATION</span>
              <button className="close-btn" onClick={toggleMenu}>
                <X size={32} />
              </button>
            </div>

            <motion.div
              className="nav-mobile-list-fullscreen"
              variants={listVariants}
            >
              {navLinks.map((link, index) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link-v2 ${activeTab === link.href.replace('#', '') ? "active" : ""}`}
                    onClick={(e) => handleScroll(e, link.href)}
                  >
                    <span className="link-number">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="link-text">{link.name.toUpperCase()}</span>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mobile-footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#contact" className="work-together-btn" onClick={(e) => handleScroll(e, "#contact")}>
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
