
"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";

export function ContactView() {
    return (
        <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center relative min-h-[60vh]">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-panel/80 backdrop-blur-xl border border-border rounded-xl overflow-hidden shadow-2xl relative z-10"
            >
                {/* Terminal Header */}
                <div className="bg-background/90 border-b border-border px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="font-[family-name:var(--font-mono)] text-xs text-muted">
                        contact.sh — bash — 80x24
                    </div>
                    <div className="w-4" /> {/* Spacer */}
                </div>

                {/* Terminal Body */}
                <div className="p-8 font-[family-name:var(--font-mono)] text-sm md:text-base leading-relaxed text-foreground space-y-6">
                    <div className="text-muted">
                        <span className="text-green-500">guest@portfolio</span>
                        <span className="text-foreground">:</span>
                        <span className="text-blue-500">~</span>
                        <span className="text-foreground">$ ./contact.sh --method=all</span>
                    </div>

                    <div className="space-y-4 text-foreground/90 pl-4 border-l-2 border-primary/20">
                        <div>
                            <span className="text-blue-400 font-bold">Email:</span>{" "}
                            <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors hover:underline">
                                {PROFILE.email}
                            </a>
                        </div>

                        <div>
                            <span className="text-green-400 font-bold">WhatsApp:</span>{" "}
                            <span className="select-all">{PROFILE.phone}</span>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <span className="text-yellow-400 font-bold">Social Links:</span>
                            <ul className="list-none pl-4 space-y-2">
                                <li>
                                    <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors group">
                                        <span className="text-muted/60 group-hover:text-primary">- </span>
                                        LinkedIn: /in/portoduque
                                        <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors group">
                                        <span className="text-muted/60 group-hover:text-primary">- </span>
                                        GitHub: /portoduque
                                        <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-muted animate-pulse">
                        <span className="text-green-500">guest@portfolio</span>
                        <span className="text-foreground">:</span>
                        <span className="text-blue-500">~</span>
                        <span className="text-foreground">$ </span>
                        <span className="inline-block w-2.5 h-5 bg-foreground/50 align-middle ml-1" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
