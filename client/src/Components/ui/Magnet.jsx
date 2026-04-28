import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnet = ({ children, padding = 50, disabled = false, magnetStrength = 5, className = "" }) => {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const magnetRef = useRef(null);

    const handleMouseMove = (e) => {
        if (disabled || !magnetRef.current) return;

        const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);
        
        // If within padding area
        if (distX < width / 2 + padding && distY < height / 2 + padding) {
            setIsActive(true);
            const offsetX = (e.clientX - centerX);
            const offsetY = (e.clientY - centerY);
            setPosition({
                x: (offsetX * magnetStrength) / 10,
                y: (offsetY * magnetStrength) / 10
            });
        } else {
            setIsActive(false);
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={magnetRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Magnet;
