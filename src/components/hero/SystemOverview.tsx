"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { getProfile, getSkills, SKILLS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="perspective-1000 w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative bg-panel dark:bg-panel-highlight backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/40 dark:shadow-[0_0_40px_rgba(47,129,247,0.2)] overflow-hidden group hover:border-primary/40 dark:hover:border-primary/50 dark:hover:shadow-[0_0_60px_rgba(47,129,247,0.3)] transition-all duration-500"
            >
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content Body */}
                <div className="relative min-h-fit sm:min-h-[440px] py-4 lg:py-6 px-0 font-mono text-[10px] sm:text-xs lg:text-sm text-slate-800 dark:text-slate-200">
                    {/* Line Numbers */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 lg:w-12 border-r border-border bg-panel dark:bg-panel text-right py-4 lg:py-6 pr-1 sm:pr-2 lg:pr-3 text-muted/30 select-none hidden sm:block text-[8px] sm:text-[10px] lg:text-xs font-mono leading-5 lg:leading-6">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={i}>{(i + 1).toString().padStart(2, '0')}</div>
                        ))}
                    </div>

                    <div className="px-3 sm:pl-10 lg:pl-14 pr-2 lg:pr-4 flex flex-col relative z-10 font-medium leading-5 lg:leading-6 w-full max-w-full overflow-hidden">
                        <EnvRow label={t("system.label.user")} value={profile.name} color="text-teal-400" delay={400} />
                        <EnvRow label={t("system.label.role")} value={profile.role} color="text-blue-400" delay={700} />
                        <EnvRow label={t("system.label.loc")} value={t("system.loc")} color="text-emerald-400" delay={1000} />

                        <div className="h-4 lg:h-6 flex items-center px-2 lg:px-4"><div className="h-px bg-border/30 w-full" /></div>

                        <EnvRow label={t("system.label.dev")} value={t("system.value.dev")} color="text-yellow-400" delay={1300} />
                        <EnvRow label={t("system.label.auto")} value={t("system.value.auto")} color="text-orange-400" delay={1600} />
                        <EnvRow label={t("system.label.env")} value={t("system.value.env")} color="text-purple-400" delay={1900} />

                        <div className="h-4 lg:h-6 flex items-center px-2 lg:px-4"><div className="h-px bg-border/30 w-full" /></div>

                        {/* Status Row */}
                        <div className="flex items-center gap-2 lg:gap-3 px-1 min-h-[1.5rem] group/status cursor-pointer">
                            <span className="text-red-400 font-bold w-24 sm:w-28 lg:w-32 shrink-0 tracking-wider text-[9px] sm:text-[10px] lg:text-xs leading-5 lg:leading-6 opacity-70 truncate">{t("system.label.status")}</span>
                            <div className="flex items-center gap-2 bg-green-500/10 px-1.5 lg:px-2 h-4 lg:h-5 rounded border border-green-500/20 group-hover/status:border-green-500/50 transition-colors">
                                <span className="text-green-400 font-bold text-[8px] lg:text-[10px] uppercase tracking-tighter animate-pulse truncate">{t("system.status")}</span>
                            </div>
                        </div>

                        {profile.highlights && (
                            <>
                                <div className="h-4 lg:h-6 flex items-center px-2 lg:px-4"><div className="h-px bg-border/30 w-full" /></div>
                                <div className="flex flex-col">
                                    {profile.highlights.map((h, i) => (
                                        <EnvRow
                                            key={h.label}
                                            label={h.label === "CERT" ? t("system.label.cert") : h.label === "TECH" ? t("system.label.tech") : h.label}
                                            value={h.value}
                                            color={i === 0 ? "text-cyan-400" : i === 1 ? "text-pink-400" : "text-amber-400"}
                                            delay={2200 + (i * 300)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="h-4 lg:h-6" /> {/* Blank line to maintain rhythm */}

                        {/* Cursor Line */}
                        <div className="flex items-center gap-1.5 sm:gap-2 text-muted/30 h-5 lg:h-6 px-1 text-[9px] sm:text-[10px] lg:text-xs">
                            <span className="leading-5 lg:leading-6">{t("system.prompt")}</span>
                            <span className="animate-pulse bg-muted/50 w-1.5 lg:w-2 h-3 lg:h-4 block"></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function EnvRow({ label, value, color, delay }: { label: string, value: string, color: string, delay: number }) {
    const { t } = useLanguage();
    const scrambled = useScrambleText(value, delay);

    return (
        <div className="flex flex-row items-start lg:items-baseline gap-2 lg:gap-3 px-1 py-0.5 min-h-[1.5rem] rounded transition-colors duration-200 group/row w-full overflow-hidden">
            <span className={cn("font-bold w-24 sm:w-28 lg:w-32 shrink-0 tracking-wider text-[9px] sm:text-[10px] lg:text-xs opacity-70 group-hover/row:opacity-100 transition-opacity leading-snug sm:leading-5 lg:leading-6 truncate", color)}>{label}</span>
            <span className="text-foreground/80 font-normal tracking-wide group-hover/row:text-foreground transition-colors leading-relaxed sm:leading-5 lg:leading-6 flex-1 min-w-0 break-words whitespace-pre-wrap">
                {[t("system.label.stack"), t("system.label.dev"), t("system.label.auto"), t("system.label.env"), t("system.label.tools")].includes(label) ? (
                    <span className="text-syntax-string">{scrambled}</span>
                ) : (
                    <span>&quot;{scrambled}&quot;</span>
                )}
            </span>
        </div>
    );
}
