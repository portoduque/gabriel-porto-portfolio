"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getProfile, SKILLS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

function useScrambleText(text: string, delay: number = 0) {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayText((_current) => {
                    if (iteration >= text.length) {
                        clearInterval(interval);
                        return text;
                    }

                    return text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) return text[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("");
                });

                iteration += 1 / 2;
            }, 30);
        };

        const timeout = setTimeout(startScramble, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay]);

    return displayText;
}

export function SystemOverview() {
    const { locale, t } = useLanguage();
    const profile = getProfile(locale);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const stackDisplay = "[PHP, Python, HTML5, CSS3, Flutter]";
    const toolsDisplay = "[Linux, WordPress, RPA, Apache, Airflow, FlutterFlow, Madbuilder]";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="perspective-1000 w-full max-w-xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative bg-panel dark:bg-panel-highlight backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/40 dark:shadow-[0_0_40px_rgba(47,129,247,0.2)] overflow-hidden group hover:border-primary/40 dark:hover:border-primary/50 dark:hover:shadow-[0_0_60px_rgba(47,129,247,0.3)] transition-all duration-500"
            >
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content Body */}
                <div className="relative min-h-[500px] p-6 px-8 font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                    {/* Line Numbers */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-border bg-panel dark:bg-panel text-right py-6 pr-3 text-muted/30 select-none hidden sm:block text-xs font-mono">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <div key={i}>{(i + 1).toString().padStart(2, '0')}</div>
                        ))}
                    </div>

                    <div className="sm:pl-6 flex flex-col gap-3 relative z-10 font-medium">
                        <EnvRow label={t("system.label.user")} value={profile.name} color="text-purple-400" delay={400} />
                        <EnvRow label={t("system.label.role")} value={profile.role} color="text-blue-400" delay={700} />
                        <EnvRow label={t("system.label.loc")} value={t("system.loc")} color="text-emerald-400" delay={1000} />

                        <div className="h-px bg-border/50 w-full my-2" />

                        <EnvRow label={t("system.label.stack")} value={stackDisplay} color="text-yellow-400" delay={1300} />
                        <EnvRow label={t("system.label.tools")} value={toolsDisplay} color="text-orange-400" delay={1600} />

                        <div className="h-px bg-border/50 w-full my-2" />

                        {/* Status Row */}
                        <div className="flex items-center gap-4 group/status cursor-pointer mt-1">
                            <span className="text-red-400 font-bold w-28 shrink-0 tracking-wider text-xs">{t("system.label.status")}</span>
                            <div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded border border-green-500/20 group-hover/status:border-green-500/50 transition-colors">
                                <span className="text-green-400 font-bold text-xs animate-pulse">{t("system.status")}</span>
                            </div>
                        </div>

                        {profile.highlights && (
                            <>
                                <div className="h-px bg-border/50 w-full my-2" />
                                <div className="flex flex-col gap-2">
                                    {profile.highlights.map((h, i) => (
                                        <EnvRow
                                            key={h.label}
                                            label={h.label}
                                            value={h.value}
                                            color={i === 0 ? "text-cyan-400" : i === 1 ? "text-pink-400" : "text-amber-400"}
                                            delay={1900 + (i * 300)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Cursor Line */}
                        <div className="flex items-center gap-2 text-muted/30 mt-4 text-xs">
                            <span>{t("system.prompt")}</span>
                            <span className="animate-pulse bg-muted/50 w-2 h-4 block"></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function EnvRow({ label, value, color, delay }: { label: string, value: string, color: string, delay: number }) {
    const scrambled = useScrambleText(value, delay);

    return (
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-1 -mx-1 rounded transition-colors duration-200 group/row">
            <span className={cn("font-bold w-28 shrink-0 tracking-wider text-xs opacity-70 group-hover/row:opacity-100 transition-opacity", color)}>{label}</span>
            <span className="text-foreground/80 font-normal tracking-wide group-hover/row:text-foreground transition-colors">
                {label === "STACK" || label === "TOOLS" || label === "FERRAMENTAS" ? (
                    <span className="text-syntax-string">{scrambled}</span>
                ) : (
                    <span>&quot;{scrambled}&quot;</span>
                )}
            </span>
        </div>
    );
}
