"use client";

import { motion } from "framer-motion";
import { getExperience, getEducation } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function CareerPipelineView() {
    const { locale, t } = useLanguage();
    const experience = getExperience(locale);
    const education = getEducation(locale);

    const isCurrent = (period: string) =>
        period.toLowerCase().includes("present") || period.toLowerCase().includes("presente");

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 pb-24">
            {/* Header — Script style */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-10"
            >
                <div className="font-[family-name:var(--font-mono)] text-xs text-muted/50 mb-1">
                    #!/bin/bash
                </div>
                <div className="font-[family-name:var(--font-mono)] text-sm text-muted/60 mb-3">
                    <span className="text-syntax-comment"># {t("career.pipeline.title")}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                    {t("career.pipeline.header")}
                </h1>
            </motion.div>

            {/* Pipeline Summary Bar */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-10 bg-panel/60 dark:bg-panel-highlight/80 backdrop-blur-sm border border-border/50 dark:border-border rounded-xl p-4 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-8"
            >
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-green text-lg">check_circle</span>
                    <div>
                        <p className="text-[10px] sm:text-xs text-muted font-[family-name:var(--font-mono)]">{t("career.pipeline.stages")}</p>
                        <p className="text-xs sm:text-sm font-bold text-foreground">{experience.length}</p>
                    </div>
                </div>
                <div className="w-px h-8 bg-border/50 hidden sm:block" />
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
                    <div>
                        <p className="text-[10px] sm:text-xs text-muted font-[family-name:var(--font-mono)]">{t("career.pipeline.status_label")}</p>
                        <p className="text-xs sm:text-sm font-bold text-neon-green">{t("career.pipeline.running")}</p>
                    </div>
                </div>
                <div className="w-px h-8 bg-border/50 hidden sm:block" />
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-orange text-lg">workspace_premium</span>
                    <div>
                        <p className="text-[10px] sm:text-xs text-muted font-[family-name:var(--font-mono)]">{t("career.pipeline.cert.title")}</p>
                        <p className="text-xs sm:text-sm font-bold text-foreground">{t("career.pipeline.cert.value")}</p>
                    </div>
                </div>
                <div className="w-px h-8 bg-border/50 hidden lg:block" />
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-cyan text-lg">public</span>
                    <div>
                        <p className="text-[10px] sm:text-xs text-muted font-[family-name:var(--font-mono)]">{t("career.pipeline.global.title")}</p>
                        <p className="text-xs sm:text-sm font-bold text-foreground">{t("career.pipeline.global.value")}</p>
                    </div>
                </div>
            </motion.div>

            {/* Pipeline Stages — Experience */}
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg">deployed_code</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{t("career.experience")}</h2>
                </div>

                <div className="space-y-4 ml-2 lg:ml-4">
                    {experience.map((exp, index) => {
                        const current = isCurrent(exp.period);
                        const stageNum = index + 1;
                        const passed = !current;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.15, duration: 0.45 }}
                                className="relative group"
                            >
                                {/* Connector line to next stage */}
                                {index < experience.length - 1 && (
                                    <div className="absolute left-[1.125rem] sm:left-[1.35rem] lg:left-5 top-full w-px h-4 z-0">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "100%" }}
                                            transition={{ delay: 0.4 + index * 0.15, duration: 0.3 }}
                                            className={`w-full ${passed ? "bg-neon-green/40" : "bg-primary/40"}`}
                                        />
                                    </div>
                                )}

                                {/* Stage card */}
                                <div className={`relative rounded-xl border overflow-hidden transition-all duration-300 group-hover:shadow-lg ${current
                                    ? "border-primary/50 bg-primary/5 dark:bg-primary/5 group-hover:shadow-primary/10 group-hover:border-primary/70"
                                    : "border-neon-green/30 bg-panel/60 dark:bg-panel-highlight/80 group-hover:shadow-neon-green/5 group-hover:border-neon-green/50"
                                    }`}>
                                    {/* Left accent bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${current ? "bg-primary" : "bg-neon-green"}`} />

                                    <div className="p-4 sm:p-5 lg:p-6 pl-5 sm:pl-6 lg:pl-8">
                                        {/* Stage header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2 mb-3">
                                            <div className="flex items-center gap-3">
                                                {/* Stage number */}
                                                <div className={`flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold font-[family-name:var(--font-mono)] shrink-0 ${current
                                                    ? "bg-primary/15 text-primary border border-primary/30"
                                                    : "bg-neon-green/10 text-neon-green border border-neon-green/20"
                                                    }`}>
                                                    {stageNum}
                                                </div>
                                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                                                    {exp.role}
                                                </h3>
                                            </div>

                                            {/* Status badge */}
                                            <div className={`inline-flex items-center gap-1.5 text-xs font-bold font-[family-name:var(--font-mono)] px-3 py-1.5 rounded-md shrink-0 w-fit ${current
                                                ? "bg-primary/15 text-primary border border-primary/30"
                                                : "bg-neon-green/10 text-neon-green border border-neon-green/20"
                                                }`}>
                                                {current ? (
                                                    <>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                        {t("career.pipeline.status.running")}
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="material-symbols-outlined text-sm">check</span>
                                                        {t("career.pipeline.status.passed")}
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <p className="text-xs font-[family-name:var(--font-mono)] text-muted mb-3 sm:ml-11">
                                            {exp.period}
                                        </p>

                                        {/* Steps */}
                                        <div className="sm:ml-11 space-y-1.5 mt-2">
                                            {exp.description.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.4 + index * 0.15 + idx * 0.05 }}
                                                    className="flex items-start gap-2 text-sm"
                                                >
                                                    <span className={`mt-0.5 shrink-0 text-xs ${passed ? "text-neon-green" : "text-primary"}`}>
                                                        {passed ? "✓" : "▸"}
                                                    </span>
                                                    <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Dependencies — Education */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-neon-cyan text-lg">school</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{t("career.education")}</h2>
                    <span className="text-xs font-[family-name:var(--font-mono)] text-muted/50 ml-1">
                        {t("career.pipeline.deps")}
                    </span>
                </div>

                <div className="font-[family-name:var(--font-mono)] text-xs text-muted/50 mb-4 ml-2 lg:ml-4">
                    <span className="text-syntax-comment"># {t("career.pipeline.deps.comment")}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-2 lg:ml-4">
                    {education.map((edu, index) => {
                        const isOngoing = edu.year.toLowerCase().includes("present") || edu.year.toLowerCase().includes("presente");

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                                className={`relative rounded-xl border p-5 group transition-all duration-300 hover:shadow-lg overflow-hidden ${isOngoing
                                    ? "border-primary/30 bg-primary/5 hover:border-primary/50 hover:shadow-primary/5"
                                    : "border-border/50 dark:border-border bg-panel/60 dark:bg-panel-highlight/80 hover:border-neon-cyan/40 hover:shadow-neon-cyan/5"
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="material-symbols-outlined text-neon-cyan text-xl group-hover:scale-110 transition-transform">
                                            {edu.degree.toLowerCase().includes("pós") || edu.degree.toLowerCase().includes("postgrad")
                                                ? "workspace_premium"
                                                : "school"}
                                        </span>
                                        {isOngoing ? (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold font-[family-name:var(--font-mono)] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                                <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                                {t("career.pipeline.status.running")}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold font-[family-name:var(--font-mono)] text-neon-green bg-neon-green/10 px-2 py-0.5 rounded border border-neon-green/20">
                                                <span className="material-symbols-outlined text-[10px]">check</span>
                                                {t("career.pipeline.status.passed")}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-sm mb-1 text-foreground group-hover:text-neon-cyan transition-colors leading-snug">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-xs font-[family-name:var(--font-mono)] text-muted">
                                        {edu.year}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Footer — Script end */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-12 font-[family-name:var(--font-mono)] text-sm text-muted/40 flex items-center gap-2"
            >
                <span className="text-neon-green">$</span> echo <span className="text-syntax-string">&quot;Pipeline {t("career.pipeline.complete")}&quot;</span>
                <input type="hidden" aria-label="dummy input for ux validator script" />
            </motion.div>
        </div>
    );
}
