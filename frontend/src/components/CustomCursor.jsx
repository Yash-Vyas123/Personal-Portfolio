import React, { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            // Move dot instantly
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
            // Move ring with slight delay (animation usually handled by CSS transition on left/top or via JS for smoother lag)
            // For simple lag, we can use keyframes or just update it here. 
            // Better physics often requires requestAnimationFrame, but simplistic approach:
            if (ringRef.current) {
                // Using animate to create a smooth trail effect
                ringRef.current.animate({
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        const handleMouseDown = () => {
            if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(0.8)";
        };

        const handleMouseUp = () => {
            if (ringRef.current) ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        };

        // Add hover expanding effect for clickable elements
        const handleLinkHoverEvents = () => {
            const clickables = document.querySelectorAll('a, button, input, textarea, .clickable');
            clickables.forEach((el) => {
                el.addEventListener('mouseenter', () => setHovered(true));
                el.addEventListener('mouseleave', () => setHovered(false));
            });
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Initial attach
        handleLinkHoverEvents();

        // Re-attach listeners when DOM changes (simple observer)
        const observer = new MutationObserver(handleLinkHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={ringRef} className={`cursor-ring ${hovered ? "active" : ""}`}></div>
        </>
    );
};

export default CustomCursor;
