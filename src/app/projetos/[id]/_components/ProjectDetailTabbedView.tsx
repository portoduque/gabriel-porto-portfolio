"use client";

import { Project, ProjectMedia } from "@/lib/data";
import { useState } from "react";
import { IconType } from "react-icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiPython, SiSelenium, SiNextdotjs, SiReact,
    SiTailwindcss, SiTypescript, SiJavascript,
    SiDocker, SiPostgresql, SiSqlite, SiGithub,
    SiOpenai, SiPandas, SiNumpy, SiFastapi, SiFlask, SiVite,
    SiBootstrap, SiMariadb, SiWhatsapp, SiPhp,
    SiHtml5, SiCss3, SiFlutter, SiDart, SiFirebase,
    SiWordpress, SiElementor, SiDotnet
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscJson, VscRocket } from "react-icons/vsc";


const techIcons: Record<string, IconType> = {
    php: SiPhp,
    python: SiPython,
    selenium: SiSelenium,
    nextjs: SiNextdotjs,
    react: SiReact,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
    javascript: SiJavascript,
    docker: SiDocker,
    postgresql: SiPostgresql,
    sqlite: SiSqlite,
    openai: SiOpenai,
    pandas: SiPandas,
    numpy: SiNumpy,
    fastapi: SiFastapi,
    flask: SiFlask,
    vite: SiVite,
    bootstrap: SiBootstrap,
    mariadb: SiMariadb,
    "whatsapp api": SiWhatsapp,
    html5: SiHtml5,
    css3: SiCss3,
    "javascript vanilla": SiJavascript,
    "vanilla javascript": SiJavascript,
    "css grid/flexbox": SiCss3,
    "c#": TbBrandCSharp,
    ".net": SiDotnet,
    flutter: SiFlutter,
    "flutter & dart": SiFlutter,
    flutterflow: SiFlutter,
    dart: SiDart,
    firebase: SiFirebase,
    "api rest": VscJson,
    "rest api": VscJson,
    madbuilder: SiPhp,
    wordpress: SiWordpress,
    elementor: SiElementor,
    jetengine: VscRocket
};

interface Props {
    project: Project;
    locale: string;
}

type TabId = "readme" | "gallery" | "metrics";

function renderContent(text: string) {
    const parseInline = (line: string) => {
        const parts = line.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g).filter(Boolean);
        return parts.map((part, idx) => {
            if (part.startsWith('[') && part.includes('](')) {
                const m = part.match(/\[(.*?)\]\((.*?)\)/);
                if (m) return (
                    <a key={idx} href={m[2]} target="_blank" rel="noopener noreferrer"
                        className="text-primary hover:underline font-bold transition-all decoration-primary/30 underline-offset-4">
                        {m[1]}
                    </a>
                );
            }
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={idx} className="text-foreground/90 font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return text.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('# ')) return null;
        if (trimmed.startsWith('## ')) return (
            <h2 key={i} className="text-xl font-bold mt-10 mb-4 text-foreground/80 border-b border-border/50 pb-2">
                {parseInline(line.replace('## ', ''))}
            </h2>
        );
        if (trimmed.startsWith('- ')) {
            const content = line.replace('- ', '');
            return <li key={i} className="ml-4 list-disc mb-2 text-muted/90 leading-relaxed">{parseInline(content)}</li>;
        }
        if (trimmed === '') return <div key={i} className="h-4" />;
        return <p key={i} className="mb-4 text-muted leading-relaxed">{parseInline(line)}</p>;
    });
}

export default function ProjectDetailTabbedView({ project, locale }: Props) {
    const [activeTab, setActiveTab] = useState<TabId>("readme");
    const [activeMedia, setActiveMedia] = useState<ProjectMedia | null>(null);

    const hasMedia = project.media && project.media.length > 0;
    const hasMetrics = project.metrics && project.metrics.length > 0;

    const tabs: { id: TabId; label: string; icon: string; show: boolean }[] = [
        { id: "readme", label: "README.md", icon: "description", show: true },
        { id: "gallery", label: locale === "en" ? "gallery/" : "galeria/", icon: "photo_library", show: !!hasMedia },
        { id: "metrics", label: locale === "en" ? "metrics.json" : "metricas.json", icon: "monitoring", show: !!hasMetrics },
    ];

    return (
        <>
            <div className="flex-1 overflow-y-auto relative custom-scrollbar flex">
                {/* Line Numbers Sidebar */}
                <div className="hidden md:flex flex-col items-end w-12 lg:w-16 py-8 pr-4 border-r border-border shrink-0 text-muted/30 font-mono text-xs lg:text-sm select-none bg-panel h-full min-h-max">
                    {Array.from({ length: 120 }).map((_, i) => (
                        <div key={i} className="leading-6 lg:leading-7">{i + 1}</div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col relative w-full pb-24 px-4 sm:px-6 md:px-12 py-4 sm:py-8 min-w-0 font-light">
                    {/* Project Header (single, no duplicate) */}
                    <div className="mb-4 max-w-4xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight break-words">
                            {project.name}
                        </h1>
                        <p className="text-lg text-muted/80 font-light mb-8 leading-relaxed max-w-2xl">
                            {project.description}
                        </p>

                        {/* Meta Row: Tech + Links */}
                        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-8 py-6 border-y border-border/30 mb-8">
                            {/* Tech Stack */}
                            <div className="flex flex-col gap-3 flex-1 min-w-[280px]">
                                <div className="flex items-center gap-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-[0.2em] mb-1">
                                    <span className="material-symbols-outlined text-[14px] text-primary/70">terminal</span>
                                    <span>{locale === "en" ? "Tech Stack" : "Tecnologias"}</span>
                                </div>
                                <div className="flex flex-wrap gap-2.5 items-center">
                                    {project.tech.map((t: string) => {
                                        const Icon = techIcons[t.toLowerCase()];
                                        return (
                                            <div key={t} className="flex items-center gap-2 group cursor-default px-3 py-1.5 rounded-md bg-white dark:bg-[#0d1117] border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm translate-y-0 hover:-translate-y-0.5">
                                                {Icon && <Icon className="text-muted/70 group-hover:text-primary transition-colors" size={14} />}
                                                <span className="text-[11px] font-bold font-[family-name:var(--font-mono)] text-foreground/70 group-hover:text-foreground uppercase tracking-widest mt-[1px]">
                                                    {t}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center shrink-0 w-full xl:w-auto">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                        className="group relative flex justify-center w-full sm:w-auto items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary border border-primary/50 hover:bg-primary/90 text-white transition-all shadow-sm hover:shadow-md">
                                        <span className="material-symbols-outlined text-[18px] relative z-10">language</span>
                                        <span className="text-xs font-bold font-[family-name:var(--font-mono)] uppercase tracking-wider relative z-10">
                                            {locale === "en" ? "Live Demo" : "Acessar Site"}
                                        </span>
                                        <span className="material-symbols-outlined text-[16px] relative z-10 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
                                    </a>
                                )}

                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                                        className="group relative flex justify-center w-full sm:w-auto items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-panel border border-border/50 hover:border-foreground/30 hover:bg-foreground hover:text-background transition-all overflow-hidden shadow-sm hover:shadow-md">
                                        <SiGithub size={18} className="relative z-10" />
                                        <span className="text-xs font-bold font-[family-name:var(--font-mono)] uppercase tracking-wider relative z-10">
                                            {locale === "en" ? "Source Code" : "Ver no GitHub"}
                                        </span>
                                        <span className="material-symbols-outlined text-[16px] relative z-10 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Internal Tab Bar (file explorer style) */}
                    <div className="max-w-4xl mb-6">
                        <div className="flex items-end border-b border-border/50 overflow-x-auto no-scrollbar">
                            {tabs.filter(t => t.show).map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-[family-name:var(--font-mono)] transition-all cursor-pointer shrink-0 border-b-2 ${activeTab === tab.id
                                        ? "text-primary border-primary bg-primary/5 font-bold"
                                        : "text-muted/60 border-transparent hover:text-foreground/80 hover:bg-panel/50"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[14px]">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="max-w-4xl">
                        <AnimatePresence mode="wait">
                            {activeTab === "readme" && (
                                <motion.div
                                    key="readme"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-foreground font-light text-base lg:text-lg break-words"
                                >
                                    {project.content ? renderContent(project.content) : (
                                        <div className="w-full p-8 border border-dashed border-border/50 text-center rounded-xl bg-panel/30">
                                            <p className="text-muted italic font-[family-name:var(--font-mono)] text-sm">
                                                {locale === "en" ? "# README is empty." : "# README vazio."}
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === "gallery" && hasMedia && (
                                <motion.div
                                    key="gallery"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    {/* Videos */}
                                    {project.media!.filter(m => m.type === 'video').length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-widest mb-4">
                                                <span className="material-symbols-outlined text-[14px]">videocam</span>
                                                {locale === "en" ? "VIDEOS" : "VÍDEOS"}
                                            </div>
                                            <div className="space-y-4">
                                                {project.media!.filter(m => m.type === 'video').map((item, idx) => (
                                                    <div key={idx}
                                                        className="w-full rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] shadow-xl shadow-background/50">
                                                        <div className="h-9 bg-panel border-b border-border/50 flex items-center px-4 gap-2 shrink-0">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/10" />
                                                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/10" />
                                                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/10" />
                                                            <div className="flex-1 flex justify-center text-[10px] font-[family-name:var(--font-mono)] text-muted/40 font-bold">
                                                                {item.alt || `demo-${idx + 1}.mp4`}
                                                            </div>
                                                            <div className="w-[42px]" />
                                                        </div>
                                                        <div className="relative aspect-video w-full overflow-hidden">
                                                            <video src={item.url} controls muted loop playsInline
                                                                className="w-full h-full object-cover" />
                                                        </div>
                                                        {item.alt && (
                                                            <div className="px-4 py-2 text-[11px] text-muted/50 font-[family-name:var(--font-mono)] border-t border-border/30">
                                                                {item.alt}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Images */}
                                    {project.media!.filter(m => m.type === 'image').length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-widest mb-4">
                                                <span className="material-symbols-outlined text-[14px]">photo_library</span>
                                                {locale === "en" ? "SCREENSHOTS" : "CAPTURAS"}
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {project.media!.filter(m => m.type === 'image').map((item, idx) => (
                                                    <div key={idx} onClick={() => setActiveMedia(item)}
                                                        className="rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] cursor-zoom-in group hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
                                                        <div className="h-8 bg-panel border-b border-border/30 flex items-center px-3 gap-1.5 shrink-0">
                                                            <div className="w-2 h-2 rounded-full bg-[#FF5F56]/50" />
                                                            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/50" />
                                                            <div className="w-2 h-2 rounded-full bg-[#27C93F]/50" />
                                                        </div>
                                                        <div className="relative aspect-video w-full overflow-hidden">
                                                            <Image src={item.url} alt={item.alt || ""} fill
                                                                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                                                sizes="(max-width: 640px) 100vw, 50vw" unoptimized />
                                                        </div>
                                                        {item.alt && (
                                                            <div className="px-3 py-1.5 text-[10px] text-muted/50 font-[family-name:var(--font-mono)] truncate">
                                                                {item.alt}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === "metrics" && hasMetrics && (
                                <motion.div
                                    key="metrics"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-8"
                                >
                                    {/* Impact Statement */}
                                    {project.impact && (
                                        <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl">
                                            <div className="flex items-center gap-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-primary/60 uppercase tracking-widest mb-3">
                                                <span className="material-symbols-outlined text-[14px]">bolt</span>
                                                {locale === "en" ? "IMPACT" : "IMPACTO"}
                                            </div>
                                            <p className="text-foreground/80 leading-relaxed italic">
                                                &quot;{project.impact}&quot;
                                            </p>
                                        </div>
                                    )}

                                    {/* Metrics Grid */}
                                    <div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-widest mb-4">
                                            <span className="material-symbols-outlined text-[14px]">monitoring</span>
                                            {locale === "en" ? "KEY METRICS" : "MÉTRICAS CHAVE"}
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {project.metrics!.map((m, i) => (
                                                <div key={i} className="bg-panel border border-border/30 rounded-xl p-5 text-center hover:border-primary/20 transition-colors group flex flex-col items-center justify-center">
                                                    <span className="material-symbols-outlined text-[28px] text-primary/60 block mb-2 group-hover:scale-110 transition-transform shrink-0">{m.icon}</span>
                                                    <div className={`font-bold text-foreground/90 mb-1 leading-tight w-full ${m.value.length > 12 ? "text-lg md:text-xl" : "text-2xl"}`}>
                                                        {m.value}
                                                    </div>
                                                    <div className="text-[10px] font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-wider">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Meta */}
                                    <div className="border border-border/30 rounded-xl overflow-hidden">
                                        <div className="px-5 py-3 bg-panel/50 border-b border-border/30">
                                            <div className="flex items-center gap-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-[14px]">info</span>
                                                {locale === "en" ? "PROJECT DETAILS" : "DETALHES DO PROJETO"}
                                            </div>
                                        </div>
                                        <div className="divide-y divide-border/20">
                                            {project.role && (
                                                <div className="flex items-center justify-between px-5 py-3">
                                                    <span className="text-xs text-muted/60 font-[family-name:var(--font-mono)]">{locale === "en" ? "role" : "cargo"}</span>
                                                    <span className="text-sm text-foreground/80 font-medium">{project.role}</span>
                                                </div>
                                            )}
                                            {project.date && (
                                                <div className="flex items-center justify-between px-5 py-3">
                                                    <span className="text-xs text-muted/60 font-[family-name:var(--font-mono)]">{locale === "en" ? "year" : "ano"}</span>
                                                    <span className="text-sm text-foreground/80 font-medium">{project.date}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center justify-between px-5 py-3">
                                                <span className="text-xs text-muted/60 font-[family-name:var(--font-mono)]">status</span>
                                                <span className={`text-sm font-medium ${project.status === "In Development" || project.status === "Em Desenvolvimento"
                                                    ? "text-neon-blue animate-pulse"
                                                    : project.visibility === "public"
                                                        ? "text-neon-green"
                                                        : "text-neon-orange"
                                                    }`}>
                                                    {project.status || (
                                                        project.visibility === "public"
                                                            ? (locale === "en" ? "Public" : "Público")
                                                            : (locale === "en" ? "Private" : "Privado")
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between px-5 py-3">
                                                <span className="text-xs text-muted/60 font-[family-name:var(--font-mono)]">tech</span>
                                                <div className="flex flex-wrap gap-1 justify-end">
                                                    {project.tech.map(t => (
                                                        <span key={t} className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary font-bold font-[family-name:var(--font-mono)] uppercase">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {activeMedia && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setActiveMedia(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-border/50 bg-[#0d1117] cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="h-9 bg-panel border-b border-border/50 flex items-center px-4 gap-2.5 shrink-0">
                                <button onClick={() => setActiveMedia(null)}
                                    className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center group/close cursor-pointer">
                                    <span className="material-symbols-outlined text-[8px] text-black/50 opacity-0 group-hover/close:opacity-100">close</span>
                                </button>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
                                <div className="flex-1 flex justify-center text-[10px] font-[family-name:var(--font-mono)] text-muted/60 font-bold">
                                    {activeMedia.alt || `${project.id}-preview`}
                                </div>
                                <div className="w-[42px]" />
                            </div>
                            <div className="relative w-full h-[calc(100%-2.25rem)]">
                                {activeMedia.type === 'image' ? (
                                    <Image src={activeMedia.url} alt={activeMedia.alt || ""} fill
                                        className="object-contain bg-[#0d1117]" unoptimized />
                                ) : (
                                    <video src={activeMedia.url} controls autoPlay className="w-full h-full bg-[#0d1117]" />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
