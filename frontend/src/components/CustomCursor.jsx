import React, { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    // Position state for LERP
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const requestRef = useRef();

    useEffect(() => {
        const moveCursor = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Move dot instantly
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const animate = () => {
            // LERP for smooth following (Linear Interpolation)
            // Lower the multiplier (0.1) for smoother "lag", higher for tighter following
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        const handleMouseDown = () => {
            setHovered(true); // Shrink effect or similar
        };

        const handleMouseUp = () => {
            setHovered(false);
        };

        const handleLinkHoverEvents = () => {
            const clickables = document.querySelectorAll('a, button, input, textarea, .clickable, .item-details');
            clickables.forEach((el) => {
                el.onmouseenter = () => setHovered(true);
                el.onmouseleave = () => setHovered(false);
            });
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        requestRef.current = requestAnimationFrame(animate);

        // Initial attach
        handleLinkHoverEvents();

        // Re-attach listeners when DOM changes
        const observer = new MutationObserver(handleLinkHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            cancelAnimationFrame(requestRef.current);
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
