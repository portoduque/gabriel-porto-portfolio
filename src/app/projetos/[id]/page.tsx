"use client";

import { useParams, useRouter } from "next/navigation";
import { getProjects, Project, ProjectMedia } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import {
    VscTerminal,
    VscSettingsGear,
    VscMail,
    VscGitCommit
} from "react-icons/vsc";
import { SiPython, SiDocker } from "react-icons/si";

export default function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const { locale, t } = useLanguage();
    const [activeMedia, setActiveMedia] = useState<ProjectMedia | null>(null);

    const projectId = Array.isArray(params?.id) ? params.id[0] : params?.id;
    const project = projectId ? getProjects(locale).find(p => p.id === projectId) : null;

    if (!project) return (
        <div className="flex flex-col h-screen w-full relative font-[family-name:var(--font-display)] bg-background text-foreground items-center justify-center">
            <span className="animate-pulse">carregando...</span>
        </div>
    );

    const renderContent = (text: string) => {
        return text.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold mt-10 mb-6 text-foreground/90">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-10 mb-4 text-foreground/80 border-b border-border/50 pb-2">{line.replace('## ', '')}</h2>;
            if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
                if (match) return <li key={i} className="ml-4 list-disc mb-2 text-muted/90 leading-relaxed"><strong className="text-foreground/90">{match[1]}</strong>: {match[2]}</li>;
            }
            if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc mb-2 text-muted/90 leading-relaxed">{line.replace('- ', '')}</li>;
            if (line.trim() === '') return <div key={i} className="h-4" />;
            return <p key={i} className="mb-4 text-muted leading-relaxed">{line}</p>;
        });
    };

    return (
        <div className="flex flex-col h-screen w-full relative font-[family-name:var(--font-display)]">
            {/* Dot pattern background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-dot-pattern" />

            {/* ========== MAIN AREA ========== */}
            <div className="flex flex-1 overflow-hidden z-10 w-full relative">

                {/* ===== SIDEBAR ===== */}
                <aside className="w-12 bg-background border-r border-border hidden md:flex flex-col items-center py-4 gap-6 shrink-0">
                    <button onClick={() => router.push("/?tab=main.py")} className="text-muted hover:text-foreground transition-colors cursor-pointer" title="Home (main.py)">
                        <SiPython size={24} />
                    </button>
                    <button onClick={() => router.push("/?tab=projetos.yml")} className="text-foreground group relative transition-colors cursor-pointer" title="Projetos (projetos.yml)">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />
                        <SiDocker size={24} />
                    </button>
                    <button onClick={() => router.push("/?tab=carreira.sh")} className="text-muted hover:text-foreground transition-colors cursor-pointer" title="Experiência (carreira.sh)">
                        <VscTerminal size={24} />
                    </button>
                    <div className="flex-1" />
                    <button onClick={() => router.push("/?tab=contact.yaml")} className="pb-4 text-muted hover:text-foreground transition-colors cursor-pointer" title="Contato">
                        <VscMail size={24} />
                    </button>
                </aside>

                {/* ===== EDITOR PANEL ===== */}
                <div className="flex-1 flex flex-col bg-panel min-w-0">
                    {/* Tab bar (navbar) */}
                    <div className="flex items-end bg-panel border-b border-border overflow-x-auto no-scrollbar h-10 shrink-0">
                        {/* Tab 1 — projetos.yml */}
                        <div
                            onClick={() => router.push("/?tab=projetos.yml")}
                            className="flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-pointer group transition-colors select-none bg-panel text-muted hover:bg-background dark:hover:bg-panel-highlight border-t-[2px] border-t-transparent"
                        >
                            <SiDocker size={16} className="text-[#1D63ED]" />
                            <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.projects")}</span>
                        </div>
                        {/* Tab 2 — Active Project */}
                        <div className="flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-default group transition-colors select-none bg-background border-t-[2px] border-t-primary text-foreground">
                            <span className="material-symbols-outlined text-[16px] text-neon-blue">markdown</span>
                            <span className="text-xs font-[family-name:var(--font-mono)] text-primary font-bold italic truncate max-w-[120px]">{project.id}.md</span>
                            <span onClick={() => router.push("/?tab=projetos.yml")} className="material-symbols-outlined text-[14px] ml-auto text-muted hover:text-red-400 cursor-pointer">close</span>
                        </div>
                    </div>

                    {/* Editor content area (With scroll) */}
                    <div className="flex-1 overflow-y-auto relative custom-scrollbar flex">
                        {/* Line Numbers Sidebar */}
                        <div className="hidden md:flex flex-col items-end w-12 lg:w-16 py-8 pr-4 border-r border-border shrink-0 text-muted/30 font-mono text-xs lg:text-sm select-none bg-panel h-full min-h-max">
                            {Array.from({ length: 150 }).map((_, i) => (
                                <div key={i} className="leading-6 lg:leading-7">{i + 1}</div>
                            ))}
                        </div>

                        {/* Project MD Visual Content */}
                        <div className="flex-1 flex flex-col relative w-full pb-24 px-6 md:px-12 py-8 min-w-0 font-light">
                            {/* Back Button inside Content */}
                            <button
                                onClick={() => router.push("/")}
                                className="group flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-muted hover:text-primary transition-colors mb-10 mt-2 cursor-pointer w-fit"
                            >
                                <span className="text-primary group-hover:animate-pulse">&gt;</span> cd ..
                            </button>

                            {/* Project Info Header */}
                            <div className="mb-12 max-w-4xl">
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                                    {project.name}
                                </h1>
                                <p className="text-lg text-muted/80 font-light mb-8 leading-relaxed max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t: string) => (
                                        <span key={t} className="px-3 py-1 rounded-md text-[11px] font-bold font-[family-name:var(--font-mono)] bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider backdrop-blur-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* RENDERED MARKDOWN CONTENT */}
                            <div className="max-w-4xl text-foreground font-light text-base lg:text-lg">
                                {/* If there's content from DB, render it, else show a placeholder */}
                                {project.content ? renderContent(project.content) : (
                                    <div className="w-full p-8 border border-dashed border-border/50 text-center rounded-xl bg-panel/30">
                                        <p className="text-muted italic font-[family-name:var(--font-mono)] text-sm"># Arquivo README vazio.</p>
                                        <p className="text-muted/60 text-xs mt-2">Nenhum detalhe adicional documentado ainda para este projeto.</p>
                                    </div>
                                )}
                            </div>

                            {/* Media Gallery with Mac Window Frames */}
                            {project.media && project.media.length > 0 && (
                                <div className="mt-20 space-y-12 max-w-5xl">
                                    <h3 className="text-xs font-bold font-[family-name:var(--font-mono)] text-muted/50 uppercase tracking-widest flex items-center gap-2 mb-8">
                                        <span className="material-symbols-outlined text-[16px]">photo_library</span>
                                        _Gallery
                                    </h3>

                                    {project.media.map((item: ProjectMedia, idx: number) => (
                                        <div
                                            key={idx}
                                            onClick={() => setActiveMedia(item)}
                                            className="w-full rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] shadow-xl shadow-background/50 cursor-zoom-in group transition-all hover:border-border"
                                        >
                                            {/* Mac OS Window Frame */}
                                            <div className="h-10 bg-panel border-b border-border/50 flex items-center px-4 gap-2.5 shrink-0">
                                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 group-hover:opacity-100 opacity-50 transition-opacity" />
                                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 group-hover:opacity-100 opacity-50 transition-opacity" />
                                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 group-hover:opacity-100 opacity-50 transition-opacity" />

                                                <div className="flex-1 flex justify-center text-[10px] font-[family-name:var(--font-mono)] text-muted/40 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {item.alt || `preview-${idx + 1}.png`}
                                                </div>
                                                <div className="w-[42px]" />
                                            </div>

                                            <div className="relative aspect-video w-full overflow-hidden">
                                                {item.type === 'image' ? (
                                                    <Image
                                                        src={item.url}
                                                        alt={item.alt || ""}
                                                        fill
                                                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                                                        sizes="(max-width: 1024px) 100vw, 1536px"
                                                        unoptimized
                                                    />
                                                ) : (
                                                    <video src={item.url} muted loop autoPlay playsInline className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== STATUS BAR ========== */}
            <footer className="h-6 bg-primary text-white text-[11px] flex items-center justify-between px-3 shrink-0 select-none font-[family-name:var(--font-mono)] z-20">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
                        <VscGitCommit size={12} />
                        <span>main*</span>
                    </div>
                    <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
                        <VscSettingsGear size={12} className="animate-spin-slow" />
                        <span>0</span>
                        <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
                        <span>0</span>
                        <span className="material-symbols-outlined text-[12px]">arrow_downward</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm hidden sm:inline">UTF-8</span>
                    <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm hidden sm:inline">Markdown</span>
                    <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm">Prettier</span>
                    <span className="material-symbols-outlined text-[14px] cursor-pointer hover:bg-white/10 rounded-sm">notifications</span>
                </div>
            </footer>

            {/* Lightbox / Zoom (Notion Style) Component isolated outside flow */}
            <AnimatePresence>
                {activeMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveMedia(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 10 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-border/50 bg-[#0d1117] cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="h-10 bg-panel border-b border-border/50 flex items-center px-4 gap-2.5 shrink-0">
                                <button
                                    onClick={() => setActiveMedia(null)}
                                    className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center group/close cursor-pointer"
                                    title="Close Preview"
                                >
                                    <span className="material-symbols-outlined text-[8px] text-black/50 opacity-0 group-hover/close:opacity-100">close</span>
                                </button>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />

                                <div className="flex-1 flex justify-center text-[10px] font-[family-name:var(--font-mono)] text-muted/60 font-bold">
                                    {activeMedia.alt || `${project.id}-preview`}
                                </div>
                                <div className="w-[42px]" />
                            </div>
                            <div className="relative w-full h-[calc(100%-2.5rem)]">
                                {activeMedia.type === 'image' ? (
                                    <Image
                                        src={activeMedia.url}
                                        alt={activeMedia.alt || ""}
                                        fill
                                        className="object-contain bg-[#0d1117]"
                                        unoptimized
                                    />
                                ) : (
                                    <video src={activeMedia.url} controls autoPlay className="w-full h-full bg-[#0d1117]" />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
