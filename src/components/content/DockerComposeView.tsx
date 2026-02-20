"use client";

import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";

function generateHash() {
    return Math.random().toString(16).slice(2, 14);
}

function generatePort() {
    return (3000 + Math.floor(Math.random() * 6000));
}

const CONTAINER_META = [
    { status: "running", uptime: "3d 14h", port: 8080, internalPort: 80 },
    { status: "running", uptime: "7d 2h", port: 3001, internalPort: 3000 },
    { status: "running", uptime: "12d 8h", port: 5000, internalPort: 443 },
    { status: "running", uptime: "1d 6h", port: 8081, internalPort: 3000 },
    { status: "exited", uptime: "—", port: 4200, internalPort: 80 },
    { status: "running", uptime: "5d 19h", port: 8082, internalPort: 80 },
    { status: "exited", uptime: "—", port: 8083, internalPort: 443 },
];

function getLogLines(locale: string) {
    if (locale === "en") {
        return [
            "✓ Health check passed",
            "GET /api/v1/status 200 OK",
            "POST /webhook 201 Created",
            "INFO: Worker listening on :3000",
            "✓ Database connected",
            "INFO: Cache hit ratio: 94.2%",
            "GET /health 200 OK (2ms)",
        ];
    }
    return [
        "✓ Verificação de saúde aprovada",
        "GET /api/v1/status 200 OK",
        "POST /webhook 201 Criado",
        "INFO: Worker escutando em :3000",
        "✓ Banco de dados conectado",
        "INFO: Taxa de cache: 94.2%",
        "GET /health 200 OK (2ms)",
    ];
}

export function DockerComposeView() {
    const { locale, t } = useLanguage();
    const projects = getProjects(locale);
    const [expanded, setExpanded] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<"all" | "running" | "exited">("all");
    const logLines = getLogLines(locale);

    const enriched = projects.map((p, i) => ({
        ...p,
        containerId: generateHash(),
        ...CONTAINER_META[i % CONTAINER_META.length],
    }));

    const filtered = filterStatus === "all"
        ? enriched
        : enriched.filter(c => c.status === filterStatus);

    const runningCount = enriched.filter(c => c.status === "running").length;
    const exitedCount = enriched.filter(c => c.status === "exited").length;

    return (
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 pt-8 pb-24">
            {/* Header — Docker style */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
            >
                {/* File indicator */}
                <div className="font-[family-name:var(--font-mono)] text-xs text-muted/50 mb-2">
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
                <div className="bg-panel/60 dark:bg-panel-highlight/80 backdrop-blur-sm border border-border/50 dark:border-border rounded-xl p-3.5 flex flex-wrap items-center gap-4 lg:gap-6">
                    <button
                        onClick={() => setFilterStatus("all")}
                        className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-all cursor-pointer ${filterStatus === "all" ? "bg-primary/10 border border-primary/30" : "hover:bg-panel/80"}`}
                    >
                        <span className="material-symbols-outlined text-primary text-base">widgets</span>
                        <div className="text-left">
                            <p className="text-[10px] text-muted font-[family-name:var(--font-mono)]">{t("docker.total")}</p>
                            <p className="text-sm font-bold text-foreground">{enriched.length}</p>
                        </div>
                    </button>
                    <div className="w-px h-8 bg-border/40 hidden sm:block" />
                    <button
                        onClick={() => setFilterStatus("running")}
                        className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-all cursor-pointer ${filterStatus === "running" ? "bg-neon-green/10 border border-neon-green/30" : "hover:bg-panel/80"}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                        <div className="text-left">
                            <p className="text-[10px] text-muted font-[family-name:var(--font-mono)]">{t("docker.status.running")}</p>
                            <p className="text-sm font-bold text-neon-green">{runningCount}</p>
                        </div>
                    </button>
                    <div className="w-px h-8 bg-border/40 hidden sm:block" />
                    <button
                        onClick={() => setFilterStatus("exited")}
                        className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-all cursor-pointer ${filterStatus === "exited" ? "bg-neon-orange/10 border border-neon-orange/30" : "hover:bg-panel/80"}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-orange/70" />
                        <div className="text-left">
                            <p className="text-[10px] text-muted font-[family-name:var(--font-mono)]">{t("docker.status.exited")}</p>
                            <p className="text-sm font-bold text-neon-orange">{exitedCount}</p>
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Container list */}
            <div className="space-y-3">
                {filtered.map((container, index) => {
                    const isRunning = container.status === "running";
                    const isExpanded = expanded === container.id;

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
                                    } bg-panel/60 dark:bg-panel-highlight/80`}
                            >
                                {/* Left accent */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isRunning ? "bg-neon-green" : "bg-neon-orange/70"}`} />

                                <div className="p-4 lg:p-5 pl-5 lg:pl-7">
                                    {/* Top row */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className={`material-symbols-outlined text-lg ${isRunning ? "text-neon-green" : "text-red-400/60"}`}>
                                                {isRunning ? "play_circle" : "stop_circle"}
                                            </span>
                                            <div>
                                                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {container.name}
                                                </h3>
                                                <p className="text-[11px] font-[family-name:var(--font-mono)] text-muted/60">
                                                    {container.containerId}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Status + uptime */}
                                        <div className="flex items-center gap-3">
                                            {isRunning && (
                                                <span className="text-xs font-[family-name:var(--font-mono)] text-muted">
                                                    ↑ {container.uptime}
                                                </span>
                                            )}
                                            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-md ${isRunning
                                                ? "bg-neon-green/10 text-neon-green border border-neon-green/20"
                                                : "bg-neon-orange/10 text-neon-orange border border-neon-orange/20"
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? "bg-neon-green animate-pulse" : "bg-neon-orange/70"}`} />
                                                {isRunning ? t("docker.badge.running") : t("docker.badge.exited")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted leading-relaxed mb-3 ml-8">
                                        {container.description}
                                    </p>

                                    {/* Meta row: visibility + ports + tech */}
                                    <div className="flex flex-wrap items-center gap-3 ml-8">
                                        {/* Visibility badge with material icon */}
                                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold font-[family-name:var(--font-mono)] px-2.5 py-0.5 rounded-full border ${container.visibility === "public"
                                                ? "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/25"
                                                : "bg-muted/10 text-muted/70 border-border/60"
                                            }`}>
                                            <span className="material-symbols-outlined text-[11px] leading-none">
                                                {container.visibility === "public" ? "public" : "lock"}
                                            </span>
                                            {t(`docker.visibility.${container.visibility}`)}
                                        </span>

                                        {/* Port mapping */}
                                        <span className="text-[11px] font-[family-name:var(--font-mono)] text-muted/50 bg-background/80 dark:bg-panel px-2 py-0.5 rounded border border-border/40">
                                            {container.port}:{container.internalPort}
                                        </span>

                                        {/* Separator */}
                                        <span className="text-border/50">|</span>

                                        {/* Tech tags — prominent */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {container.tech.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 rounded-md text-[11px] font-bold font-[family-name:var(--font-mono)] bg-primary/15 text-primary border border-primary/30 uppercase tracking-wider hover:bg-primary/25 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Expand icon */}
                                        <span className="material-symbols-outlined text-muted/40 text-sm ml-auto transition-transform duration-300"
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
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-border/30 bg-background/60 dark:bg-panel/80 p-4 pl-7">
                                                {/* Highlight */}
                                                <div className="mb-3">
                                                    <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted uppercase tracking-wider">{t("docker.highlight")}</span>
                                                    <p className="text-sm text-foreground/80 mt-1 font-[family-name:var(--font-mono)]">
                                                        → {container.highlight}
                                                    </p>
                                                </div>

                                                {/* Simulated logs */}
                                                {isRunning && (
                                                    <div>
                                                        <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted uppercase tracking-wider">{t("docker.logs")}</span>
                                                        <div className="mt-1 bg-[#0d1117] rounded-lg p-3 border border-border/30 overflow-hidden">
                                                            {logLines.slice(0, 4).map((line, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: i * 0.15 }}
                                                                    className="font-[family-name:var(--font-mono)] text-[11px] text-neon-green/70 leading-5"
                                                                >
                                                                    <span className="text-muted/30">[{new Date().toISOString().slice(11, 19)}]</span>{" "}
                                                                    {line}
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
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
