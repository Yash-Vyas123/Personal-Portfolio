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
    { name: "Wins", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Builds", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Reviews", href: "#testimonials" },
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

        {/* Mobile Toggle */}
        <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="nav-mobile-list"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`mobile-nav-link ${activeTab === link.href.replace('#', '') ? "active" : ""}`}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  <span className={`mobile-nav-text ${activeTab === link.href.replace('#', '') ? "active" : ""}`}>
                    {link.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
