"use client";

import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import Link from "next/link";

const CONTAINER_META = [
    { status: "running" },
    { status: "running" },
    { status: "running" },
    { status: "running" },
    { status: "exited" },
    { status: "running" },
    { status: "exited" },
];

export function DockerComposeView() {
    const { locale, t } = useLanguage();
    const projects = getProjects(locale);
    const [expanded, setExpanded] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<"all" | "running" | "exited">("all");

    const enriched = projects.map((p, i) => {
        const containerMeta = CONTAINER_META[i % CONTAINER_META.length];

        // Use 'exited' status for visual "In Development" state if the project is marked as such
        const isDev = p.status === "Em Desenvolvimento" || p.status === "In Development";
        const isActive = p.status === "Ativo" || p.status === "Active";

        let status = containerMeta.status;

        if (isDev) {
            status = "exited";
        }

        if (isActive) {
            status = "running";
        }

        return {
            ...p,
            status
        };
    });

    const filtered = filterStatus === "all"
        ? enriched
        : enriched.filter(c => c.status === filterStatus);

    const runningCount = enriched.filter(c => c.status === "running").length;
    const exitedCount = enriched.filter(c => c.status === "exited").length;

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-32 sm:pb-24">
            {/* Header — Docker style */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
            >
                {/* File indicator - Hidden on mobile */}
                <div className="hidden sm:block font-[family-name:var(--font-mono)] text-xs text-muted/50 mb-2">
                    version: &apos;3.8&apos;
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#1D63ED]/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#1D63ED] text-xl">deployed_code</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">
                                {t("docker.title")}
                            </h1>
                            <p className="text-xs text-muted font-[family-name:var(--font-mono)]">
                                {t("docker.subtitle")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Summary bar */}
                <div className="bg-panel/60 dark:bg-panel-highlight/80 backdrop-blur-sm border border-border/50 dark:border-border rounded-xl p-2 sm:p-3.5 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6">
                    <button
                        onClick={() => setFilterStatus("all")}
                        className={`flex flex-col sm:flex-row items-center sm:gap-2 px-2 py-1 rounded-lg transition-all cursor-pointer ${filterStatus === "all" ? "bg-primary/10 border border-primary/30" : "hover:bg-panel/80"}`}
                    >
                        <span className="material-symbols-outlined text-primary text-base mb-1 sm:mb-0">widgets</span>
                        <div className="text-center sm:text-left">
                            <p className="text-[9px] sm:text-[10px] text-muted font-[family-name:var(--font-mono)]">{t("docker.total")}</p>
                            <p className="text-xs sm:text-sm font-bold text-foreground">{enriched.length}</p>
                        </div>
                    </button>
                    <div className="w-px h-8 bg-border/40 hidden sm:block" />
                    <button
                        onClick={() => setFilterStatus("running")}
                        className={`flex flex-col sm:flex-row items-center sm:gap-2 px-2 py-1 rounded-lg transition-all cursor-pointer ${filterStatus === "running" ? "bg-neon-green/10 border border-neon-green/30" : "hover:bg-panel/80"}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse mb-1 sm:mb-0" />
                        <div className="text-center sm:text-left">
                            <p className="text-[9px] sm:text-[10px] text-muted font-[family-name:var(--font-mono)]">{t("docker.status.running")}</p>
                            <p className="text-xs sm:text-sm font-bold text-neon-green">{runningCount}</p>
                        </div>
                    </button>
                    <div className="w-px h-8 bg-border/40 hidden sm:block" />
                    <button
                        onClick={() => setFilterStatus("exited")}
                        className={`flex flex-col sm:flex-row items-center sm:gap-2 px-2 py-1 rounded-lg transition-all cursor-pointer ${filterStatus === "exited" ? "bg-neon-orange/10 border border-neon-orange/30" : "hover:bg-panel/80"}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-orange/70 mb-1 sm:mb-0" />
                        <div className="text-center sm:text-left">
                            <p className="text-[9px] sm:text-[10px] text-muted font-[family-name:var(--font-mono)]">{t("docker.status.exited")}</p>
                            <p className="text-xs sm:text-sm font-bold text-neon-orange">{exitedCount}</p>
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Container list */}
            <div className="space-y-3">
                {filtered.map((container, index) => {
                    const isRunning = container.status === "running";
                    const isExpanded = expanded === container.id;

                    // Logic to limit tech tags on mobile
                    const mobileTechLimit = 3;

                    return (
                        <motion.div
                            key={container.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 + index * 0.06, duration: 0.35 }}
                            className="group"
                        >
                            <div
                                onClick={() => setExpanded(isExpanded ? null : container.id)}
                                className={`relative rounded-xl border overflow-hidden cursor-pointer transition-all duration-300 ${isRunning
                                    ? "border-neon-green/20 hover:border-neon-green/40 hover:shadow-lg hover:shadow-neon-green/5"
                                    : "border-neon-orange/20 hover:border-neon-orange/40 hover:shadow-lg hover:shadow-neon-orange/5"
                                    } bg-panel/60 dark:bg-panel-highlight/80 w-full overflow-hidden`}
                            >
                                {/* Left accent */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isRunning ? "bg-neon-green" : "bg-neon-orange/70"}`} />

                                <div className="p-3 lg:p-5 pl-3 sm:pl-5 lg:pl-7">
                                    {/* Top row */}
                                    <div className="flex flex-row sm:items-start justify-between gap-3 mb-2 w-full">
                                        <div className="flex items-start gap-3 flex-1 min-w-0">
                                            <span className={`material-symbols-outlined text-lg mt-1 ${isRunning ? "text-neon-green" : "text-neon-orange/70"}`}>
                                                {isRunning ? "play_circle" : "stop_circle"}
                                            </span>

                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                                        {container.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-auto self-start">

                                            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-md whitespace-nowrap ${isRunning
                                                ? "bg-neon-green/10 text-neon-green border border-neon-green/20"
                                                : "bg-neon-orange/10 text-neon-orange border border-neon-orange/20"
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? "bg-neon-green animate-pulse" : "bg-neon-orange/70"}`} />
                                                {isRunning ? t("docker.badge.running") : t("docker.badge.exited")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted leading-relaxed mb-4 ml-0 sm:ml-12 pr-2 mt-2 sm:mt-0 line-clamp-2 sm:line-clamp-none">
                                        {container.description}
                                    </p>

                                    {/* Meta row: ports + tech */}
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 ml-0 sm:ml-12 mt-4 sm:mt-0">
                                        {/* Tech tags - Limited on Mobile */}
                                        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                                            {/* Desktop: Show all */}
                                            <div className="hidden sm:contents">
                                                {container.tech.map(tech => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-md text-[11px] font-bold font-[family-name:var(--font-mono)] bg-primary/15 text-primary border border-primary/30 uppercase tracking-wider hover:bg-primary/25 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Mobile: Show limited */}
                                            <div className="contents sm:hidden">
                                                {container.tech.slice(0, mobileTechLimit).map(tech => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-md text-[10px] font-bold font-[family-name:var(--font-mono)] bg-primary/15 text-primary border border-primary/30 uppercase tracking-wider"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {container.tech.length > mobileTechLimit && (
                                                    <span className="px-2 py-1 rounded-md text-[10px] font-bold font-[family-name:var(--font-mono)] bg-muted/10 text-muted border border-border/50">
                                                        +{container.tech.length - mobileTechLimit}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Expand icon */}
                                        <span className="material-symbols-outlined text-muted/40 text-sm ml-auto sm:ml-auto transition-transform duration-300"
                                            style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}
                                        >
                                            expand_more
                                        </span>
                                    </div>
                                </div>

                                {/* Expanded: Logs + Highlight */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden w-full"
                                        >
                                            <div className="border-t border-border/30 bg-background/60 dark:bg-panel/80 p-3 sm:p-5 pl-4 sm:pl-7">
                                                {/* Meta: Role & Date */}
                                                {(container.role || container.date) && (
                                                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5 mt-1">
                                                        {container.role && (
                                                            <div className="flex flex-col">
                                                                <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/60 uppercase tracking-widest">{t("project.details.role")}</span>
                                                                <span className="text-xs font-medium text-foreground/90 mt-0.5">{container.role}</span>
                                                            </div>
                                                        )}
                                                        {container.date && (
                                                            <div className="flex flex-col">
                                                                <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/60 uppercase tracking-widest">{t("project.details.year")}</span>
                                                                <span className="text-xs font-medium text-foreground/90 mt-0.5">{container.date}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Highlight */}
                                                <div className="mb-5">
                                                    <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted uppercase tracking-wider">{t("docker.highlight")}</span>
                                                    <p className="text-sm text-foreground/80 mt-1.5 font-[family-name:var(--font-mono)] border-l-2 border-primary/40 pl-3 py-0.5 leading-relaxed bg-primary/5 rounded-r-lg">
                                                        {container.highlight}
                                                    </p>
                                                </div>

                                                {/* Impact Selection */}
                                                {container.impact && (
                                                    <div className="mb-5">
                                                        <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted uppercase tracking-wider">{t("project.details.impact")}</span>
                                                        <p className="text-sm text-muted mt-1.5 leading-relaxed italic">
                                                            &ldquo;{container.impact}&rdquo;
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Metrics Grid */}
                                                {container.metrics && container.metrics.length > 0 && (
                                                    <div className="mb-6">
                                                        <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted uppercase tracking-wider">{t("project.details.metrics")}</span>
                                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2.5">
                                                            {container.metrics.map((metric, i) => (
                                                                <div key={i} className="bg-panel-highlight/40 dark:bg-panel/40 border border-border/40 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors shadow-sm">
                                                                    {metric.icon && <span className="material-symbols-outlined text-primary text-base mb-1.5">{metric.icon}</span>}
                                                                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider mb-0.5">{metric.label}</span>
                                                                    <span className="text-xs font-bold text-foreground">{metric.value}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* External Links & Action */}
                                                <div className="pt-4 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                                                    <div className="flex items-center gap-4">
                                                        {container.repoUrl && (
                                                            <a
                                                                href={container.repoUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-1.5 text-[11px] font-bold font-[family-name:var(--font-mono)] text-muted/70 hover:text-primary transition-colors px-1 py-1"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <span className="material-symbols-outlined text-lg">code</span>
                                                                {t("project.details.repo")}
                                                            </a>
                                                        )}
                                                        {container.liveUrl && (
                                                            <a
                                                                href={container.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-1.5 text-[11px] font-bold font-[family-name:var(--font-mono)] text-muted/70 hover:text-primary transition-colors px-1 py-1"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <span className="material-symbols-outlined text-lg">language</span>
                                                                {t("project.details.live")}
                                                            </a>
                                                        )}
                                                    </div>

                                                    <Link
                                                        href={`/projetos/${container.id}`}
                                                        className="flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 sm:py-2 rounded-lg text-xs font-bold font-[family-name:var(--font-mono)] text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-tight shadow-sm active:scale-95"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {t("docker.action.details")}
                                                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 font-[family-name:var(--font-mono)] text-xs text-muted/40 flex items-center gap-2"
            >
                <span className="text-neon-green">$</span> docker compose ps <span className="text-syntax-string">&quot;{enriched.length} {t("docker.footer")}&quot;</span>
            </motion.div>
        </div>
    );
}
