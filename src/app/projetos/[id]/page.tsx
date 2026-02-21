"use client";

import { useParams, useRouter } from "next/navigation";

import { getProjects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import {
    VscTerminal,
    VscSettingsGear,
    VscMail,
    VscGitCommit,
    VscArrowLeft,
    VscFilePdf
} from "react-icons/vsc";
import { SiPython, SiDocker } from "react-icons/si";
import ProjectDetailTabbedView from "./_components/ProjectDetailTabbedView";
import { MobileNavbar } from "@/components/ui/MobileNavbar";


export default function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const { locale, t } = useLanguage();


    const projectId = Array.isArray(params?.id) ? params.id[0] : params?.id;
    const project = projectId ? getProjects(locale).find(p => p.id === projectId) : null;

    if (!project) return (
        <div className="flex flex-col h-screen w-full relative font-[family-name:var(--font-display)] bg-background text-foreground items-center justify-center">
            <span className="text-xl mb-4">{t("error.project_not_found")}</span>
            <button onClick={() => router.push("/?tab=projetos.yml")} className="text-primary hover:underline">
                {t("error.return_to_projects")}
            </button>
        </div>
    );

    const baseTabClasses = "flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-pointer group transition-colors select-none bg-panel text-muted hover:bg-background dark:hover:bg-panel-highlight border-t-2 border-t-transparent";

    return (
        <div aria-label="portfolio code page" className="flex flex-col h-screen w-full relative font-[family-name:var(--font-display)]">
            {/* Dot pattern background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-dot-pattern" />

            {/* ========== MAIN AREA ========== */}
            <div className="flex flex-1 overflow-hidden z-10 w-full relative">

                {/* ===== SIDEBAR ===== */}
                <aside className="w-12 bg-background border-r border-border hidden md:flex flex-col items-center py-4 gap-2 shrink-0">
                    <button onClick={() => router.push("/?tab=main.py")} className="relative group flex items-center justify-center w-full h-12 text-muted hover:text-foreground transition-colors cursor-pointer" title="Home (main.py)">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200 bg-primary opacity-0 group-hover:opacity-50" />
                        <SiPython size={24} className="transition-transform duration-200 group-hover:scale-110" />
                    </button>
                    <button onClick={() => router.push("/?tab=projetos.yml")} className="text-foreground group relative flex items-center justify-center w-full h-12 transition-colors cursor-pointer" title="Projetos (projetos.yml)">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200 bg-primary opacity-100" />
                        <SiDocker size={24} className="transition-transform duration-200 group-hover:scale-110" />
                    </button>
                    <button onClick={() => router.push("/?tab=carreira.sh")} className="relative group flex items-center justify-center w-full h-12 text-muted hover:text-foreground transition-colors cursor-pointer" title="Experiência (carreira.sh)">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200 bg-primary opacity-0 group-hover:opacity-50" />
                        <VscTerminal size={24} className="transition-transform duration-200 group-hover:scale-110" />
                    </button>
                    <div className="flex-1" />
                    <button onClick={() => router.push("/?tab=contact.yaml")} className="relative group flex items-center justify-center w-full h-12 pb-2 text-muted hover:text-foreground transition-colors cursor-pointer" title="Contato">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200 bg-primary opacity-0 group-hover:opacity-50" />
                        <VscMail size={24} className="transition-transform duration-200 group-hover:scale-110" />
                    </button>
                </aside>

                {/* ===== EDITOR PANEL ===== */}
                <div className="flex-1 flex flex-col bg-panel min-w-0">
                    {/* Desktop Tab bar (navbar) - Hidden on Mobile */}
                    <div className="hidden md:flex items-end bg-panel border-b border-border overflow-x-auto no-scrollbar h-10 shrink-0">
                        <button
                            onClick={() => router.push("/?tab=main.py")}
                            className={baseTabClasses}
                        >
                            <SiPython size={16} className="text-[#3776ab]" />
                            <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.main")}</span>
                        </button>
                        <button
                            onClick={() => router.push("/?tab=projetos.yml")}
                            className={baseTabClasses}
                        >
                            <SiDocker size={16} className="text-[#1D63ED]" />
                            <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.projects")}</span>
                        </button>
                        <button
                            onClick={() => router.push("/?tab=carreira.sh")}
                            className={baseTabClasses}
                        >
                            <VscTerminal size={16} className="text-neon-green" />
                            <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.experience")}</span>
                        </button>
                        <button
                            onClick={() => router.push("/?tab=contact.yaml")}
                            className={baseTabClasses}
                        >
                            <VscMail size={16} className="text-red-400" />
                            <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.contact")}</span>
                        </button>
                        {/* CV Download / Open Tab */}
                        <a
                            href="/gabrielportocurriculo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${baseTabClasses} hover:text-foreground`}
                            title={t("nav.resume.title")}
                        >
                            <VscFilePdf size={16} className="text-red-400" />
                            <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.resume")}</span>
                            <span className="material-symbols-outlined text-[14px] ml-auto opacity-0 group-hover:opacity-100 text-muted">open_in_new</span>
                        </a>
                        {/* Tab 5 — Active Project */}
                        <div className="flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-default group transition-colors select-none bg-background border-t-2 border-t-primary text-foreground">
                            <span className="material-symbols-outlined text-[16px] text-neon-blue">markdown</span>
                            <span className="text-xs font-[family-name:var(--font-mono)] text-primary font-bold italic truncate max-w-[120px]">{project.id}.md</span>
                            <button onClick={() => router.push("/?tab=projetos.yml")} className="flex items-center ml-auto">
                                <span className="material-symbols-outlined text-[14px] text-muted hover:text-red-400 cursor-pointer">close</span>
                            </button>
                        </div>
                        {/* Spacer */}
                        <div className="flex-1" />
                    </div>

                    {/* Breadcrumb / Back Button */}
                    <div className="px-4 sm:px-6 md:px-8 pt-4 pb-2 bg-background/50 border-b border-border/30">
                        <button
                            onClick={() => router.push("/?tab=projetos.yml")}
                            className="group flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-muted hover:text-primary transition-colors cursor-pointer w-fit"
                        >
                            <VscArrowLeft size={16} className="text-primary group-hover:-translate-x-1 transition-transform" />
                            <span>{t("common.back")}</span>
                        </button>
                    </div>

                    {/* View Content */}
                    <div className="flex-1 overflow-hidden pb-20 md:pb-0 relative flex flex-col">
                        <ProjectDetailTabbedView project={project} locale={locale} />
                    </div>
                </div>
            </div>

            {/* ========== STATUS BAR (Desktop Only) ========== */}
            <footer className="hidden md:flex h-6 bg-primary text-white text-[11px] items-center justify-between px-3 shrink-0 select-none font-[family-name:var(--font-mono)] z-20">
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

            {/* ========== MOBILE BOTTOM NAVBAR ========== */}
            <MobileNavbar />
        </div>
    );
}
