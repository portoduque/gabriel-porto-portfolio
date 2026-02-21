"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompetenceCardProps {
    title: string;
    icon: string; // Material symbol name
    comment: string;
    code: React.ReactNode;
    color: string; // neon color name (blue, emerald, green, orange, cyan, yellow)
    index: number;
}

export function CompetenceCard({
    title,
    icon,
    comment,
    code,
    color,
    index
}: CompetenceCardProps) {
    const colorMap: Record<string, string> = {
        blue: "var(--color-neon-blue)",
        emerald: "var(--color-neon-emerald)",
        green: "var(--color-neon-green)",
        orange: "var(--color-neon-orange)",
        cyan: "var(--color-neon-cyan)",
        yellow: "var(--color-neon-yellow)",
    };

    const accentColor = colorMap[color] || "var(--color-primary)";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group relative border border-border bg-panel dark:bg-panel-highlight overflow-hidden transition-all duration-500",
                "hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-primary/5",
                "border-r border-b" // For the grid feel
            )}
            style={{
                "--accent-color": accentColor,
            } as React.CSSProperties}
        >
            {/* Ambient Background Glow - Subtle in light mode */}
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,var(--accent-color)_0%,transparent_70%)] opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />

            {/* Terminal-style Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background/80 dark:bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_2px_rgba(255,95,86,0.3)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_2px_rgba(255,189,46,0.3)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_2px_rgba(39,201,63,0.3)]" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted/60 dark:text-muted/50 uppercase tracking-widest font-bold">{color}.exe</span>
                </div>
            </div>

            <div className="p-6 sm:p-8 bg-white dark:bg-transparent">
                {/* Content Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div
                        className="w-12 h-12 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500"
                        style={{ color: accentColor }}
                    >
                        <div className="absolute inset-0 bg-[var(--accent-color)] opacity-10 dark:opacity-20 rounded-lg blur-sm group-hover:blur-md transition-all" />
                        <span className="material-symbols-outlined text-3xl transition-all duration-300 drop-shadow-[0_0_12px_var(--accent-color)]">
                            {icon}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--accent-color)]">
                            {title}
                        </h3>
                        <div className="flex items-center gap-1 mt-0.5">
                            <span className="w-1 h-1 rounded-full bg-[var(--accent-color)] animate-pulse" />
                            <span className="text-[10px] font-mono text-muted/70 dark:text-muted/60 uppercase tracking-tighter">System.Process_Active</span>
                        </div>
                    </div>
                </div>

                {/* Code Block area */}
                <div className="relative">
                    {/* Shadow for depth */}
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/40 rounded-lg translate-y-1 group-hover:translate-y-0 transition-transform duration-500" />

                    <div className="relative bg-panel-highlight/50 dark:bg-black/60 p-5 rounded-lg border border-border/50 dark:border-white/5 backdrop-blur-md font-mono text-xs leading-relaxed overflow-hidden group-hover:border-[var(--accent-color)]/40 transition-colors duration-500 shadow-sm dark:shadow-xl">
                        {/* Scanning line animation */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-40 group-hover:top-full transition-all duration-[2000ms] ease-in-out pointer-events-none" />

                        <div className="mb-2 italic text-syntax-comment selection:bg-[var(--accent-color)]/30">
                            {comment}
                        </div>
                        <div className="text-foreground selection:bg-[var(--accent-color)]/30 flex items-center flex-wrap gap-x-1">
                            {code}
                            <span className="inline-block w-1.5 h-4 bg-[var(--accent-color)] ml-1 animate-blink shadow-[0_0_8px_var(--accent-color)]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Accent */}
            <div
                className="absolute bottom-0 right-0 w-12 h-12 opacity-[0.05] dark:opacity-10 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{
                    background: `linear-gradient(135deg, transparent 50%, var(--accent-color) 100%)`
                }}
            />
        </motion.div>
    );
}
