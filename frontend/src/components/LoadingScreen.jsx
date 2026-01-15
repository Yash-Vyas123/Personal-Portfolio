import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("X#9@P$");
    const finalWord = "YASH.";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return finalWord[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= finalWord.length) {
                clearInterval(interval);
                setTimeout(onComplete, 1000);
            }

            iteration += 1 / 3; // Slows down the lock-in effect
        }, 60);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="loader-cyber">
            <div className="cyber-content">
                <div className="decode-text" data-value={text}>
                    {text}
                </div>

                <div className="cyber-lines">
                    <motion.div
                        className="scan-line"
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="loader-info">
                    <span>SYSTEM_ID: Y-2026</span>
                    <span className="blink">&gt; DECRYPTING...</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
