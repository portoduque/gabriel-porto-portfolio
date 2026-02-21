"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    borderColor?: string;
    glowColor?: string;
}

export function BentoCard({
    children,
    className,
    borderColor = "primary",
    glowColor = "rgba(6, 123, 249, 0.15)"
}: BentoCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring transition for smooth spotlight movement
    const springConfig = { damping: 20, stiffness: 150 };
    const spotlightX = useSpring(mouseX, springConfig);
    const spotlightY = useSpring(mouseY, springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            ref={containerRef}
            aria-label="Bento Card Profile"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                "--glow-color": glowColor,
                "--border-color": `var(--color-neon-${borderColor}, var(--color-primary))`,
            } as React.CSSProperties}
            className={cn(
                "relative rounded-none border border-border border-2 dark:border-border bg-panel dark:bg-panel-highlight  overflow-hidden group transition-all duration-500",
                `hover:border-neon-${borderColor}/50`,
                className
            )}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-none opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [spotlightX, spotlightY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, var(--glow-color), transparent 40%)`
                    ),
                }}
            />

            {/* Content wrapper */}
            <div className="relative z-10 h-full">
                {children}
            </div>

            {/* Subtle border beam effect on hover */}
            <div
                className={cn(
                    "absolute inset-0 border border-transparent rounded-none transition-opacity duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                )}
                style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--border-color) 0%, transparent 40%, transparent 60%, var(--border-color) 100%)`,
                    maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
                    maskClip: `content-box, border-box`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `destination-out`,
                    padding: '1px'
                }}
            />
        </motion.div>
    );
}
