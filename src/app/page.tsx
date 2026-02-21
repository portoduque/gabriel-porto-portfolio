"use client";

import { useState } from "react";
import { SystemOverview } from "@/components/hero/SystemOverview";
import { DockerComposeView } from "@/components/content/DockerComposeView";
import { CareerPipelineView } from "@/components/content/CareerPipelineView";
import { ContactView } from "@/components/content/ContactView";
import { getProfile, getActivityLog } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { clsx } from "clsx";
import { BentoCard } from "@/components/ui/BentoCard";
import {
  VscTerminal,
  VscFilePdf,
  VscGitCommit,
  VscSettingsGear,
  VscDatabase,
  VscMail,
  VscPlug
} from "react-icons/vsc";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiFlutter,
  SiLinux,
  SiDocker
} from "react-icons/si";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { locale, t } = useLanguage();
  const profile = getProfile(locale);
  const activityLog = getActivityLog(locale);

  const initialTab = searchParams.get("tab") as "main.py" | "projetos.yml" | "carreira.sh" | "contact.yaml" | null;
  const defaultTab = initialTab && ["main.py", "projetos.yml", "carreira.sh", "contact.yaml"].includes(initialTab)
    ? initialTab
    : "main.py";

  const [activeTab, setActiveTab] = useState<"main.py" | "projetos.yml" | "carreira.sh" | "contact.yaml">(defaultTab);

  const handleTabChange = (tab: "main.py" | "projetos.yml" | "carreira.sh" | "contact.yaml") => {
    setActiveTab(tab);
    router.push(`/?tab=${tab}`);
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "main.py" || tab === "projetos.yml" || tab === "carreira.sh" || tab === "contact.yaml") {
      if (activeTab !== tab) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveTab(tab as "main.py" | "projetos.yml" | "carreira.sh" | "contact.yaml");
      }
    }
  }, [searchParams, activeTab]);

  return (
    <div className="flex flex-col h-screen w-full relative font-[family-name:var(--font-display)]">
      {/* Dot pattern background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-dot-pattern" />

      {/* ========== MAIN AREA ========== */}
      <div className="flex flex-1 overflow-hidden z-10">
        {/* ===== SIDEBAR ===== */}
        <aside className="w-12 bg-background border-r border-border hidden md:flex flex-col items-center py-4 gap-6 shrink-0">
          <button
            aria-label={t("nav.main")}
            onClick={() => handleTabChange("main.py")}
            className={clsx("relative group transition-colors", activeTab === "main.py" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "main.py" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <SiPython size={24} />
          </button>
          <button
            aria-label={t("nav.projects")}
            onClick={() => handleTabChange("projetos.yml")}
            className={clsx("transition-colors relative", activeTab === "projetos.yml" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "projetos.yml" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <SiDocker size={24} />
          </button>
          <button
            aria-label={t("nav.experience")}
            onClick={() => handleTabChange("carreira.sh")}
            className={clsx("transition-colors relative", activeTab === "carreira.sh" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "carreira.sh" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <VscTerminal size={24} />
          </button>
          <div className="flex-1" />
          <button
            aria-label={t("nav.contact")}
            onClick={() => handleTabChange("contact.yaml")}
            className={clsx("pb-4 transition-colors relative", activeTab === "contact.yaml" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "contact.yaml" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <VscMail size={24} />
          </button>
        </aside>

        {/* ===== EDITOR PANEL ===== */}
        <div className="flex-1 flex flex-col bg-panel">
          {/* Tab bar (navbar) */}
          <div className="flex items-end bg-panel border-b border-border overflow-x-auto no-scrollbar h-10 shrink-0">
            {/* Tab 1 — main.py */}
            <Tab
              name={t("nav.main")}
              icon={<SiPython size={16} className="text-[#3776ab]" />}
              isActive={activeTab === "main.py"}
              onClick={() => handleTabChange("main.py")}
            />
            {/* Tab 2 — docker-compose.yml */}
            <Tab
              name={t("nav.projects")}
              icon={<SiDocker size={16} className="text-[#1D63ED]" />}
              isActive={activeTab === "projetos.yml"}
              onClick={() => handleTabChange("projetos.yml")}
            />
            {/* Tab 3 — carreira.sh */}
            <Tab
              name={t("nav.experience")}
              icon={<VscTerminal size={16} className="text-neon-green" />}
              isActive={activeTab === "carreira.sh"}
              onClick={() => handleTabChange("carreira.sh")}
            />
            {/* Tab 4 — contact.yaml */}
            <Tab
              name={t("nav.contact")}
              icon={<VscMail size={16} className="text-red-400" />}
              isActive={activeTab === "contact.yaml"}
              onClick={() => handleTabChange("contact.yaml")}
            />
            {/* CV Download / Open Tab */}
            <a
              href="/Gabriel-Porto-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-pointer group transition-colors select-none bg-panel text-muted hover:bg-background dark:hover:bg-panel-highlight border-t-[2px] border-t-transparent hover:text-foreground"
              title="Download / Open Resume"
            >
              <VscFilePdf size={16} className="text-red-400" />
              <span className="text-xs font-[family-name:var(--font-mono)]">{t("nav.resume")}</span>
              {/* No close button for this one, maybe an external link icon? */}
              <span className="material-symbols-outlined text-[14px] ml-auto opacity-0 group-hover:opacity-100 text-muted">open_in_new</span>
            </a>
          </div>

          {/* Editor content area */}
          <div className="flex-1 overflow-y-auto relative custom-scrollbar flex">
            {/* Line Numbers - Visible on all pages now */}
            <div className="hidden md:flex flex-col items-end w-12 lg:w-16 py-8 pr-4 border-r border-border shrink-0 text-muted/30 font-mono text-xs lg:text-sm select-none bg-panel h-full min-h-screen">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="leading-6 lg:leading-7">{i + 1}</div>
              ))}
            </div>

            <main className="flex-1 flex flex-col relative w-full min-h-full">
              {activeTab === "main.py" && (
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 mt-8 mb-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
                    {/* Left Column: Hero Content */}
                    <div className="col-span-1 lg:col-span-6 flex flex-col gap-8 items-start text-left">
                      <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
                        {t("hero.title.prefix")}{" "}
                        <span className="relative inline-block">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-blue to-primary animate-gradient-x">
                            {t("hero.title.highlight")}
                          </span>
                          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></span>
                        </span>
                      </h1>

                      {/* Role subtitle */}
                      <div className="font-[family-name:var(--font-mono)] text-base lg:text-xl text-muted flex flex-wrap justify-start items-center gap-3">
                        <span className="text-primary font-bold animate-pulse">&gt;</span>
                        <span className="text-syntax-variable">{t("hero.role_var")}</span>
                        <span className="text-foreground">=</span>
                        <span className="text-syntax-string font-medium">&quot;{profile.role}&quot;</span>
                        <span className="w-2 h-5 bg-primary animate-blink inline-block ml-1 shadow-[0_0_8px_var(--color-primary)]" />
                      </div>

                      {/* Description */}
                      <p className="text-muted text-base lg:text-lg max-w-2xl font-light leading-relaxed">
                        {profile.summary}
                      </p>

                      {/* CTA buttons */}
                      <div className="flex flex-wrap justify-start gap-6 mt-4">
                        <button
                          onClick={() => handleTabChange("projetos.yml")}
                          className="group relative inline-flex items-center justify-center px-8 py-3.5 font-[family-name:var(--font-mono)] text-sm font-medium text-white transition-all duration-300 overflow-hidden rounded-none bg-primary hover:bg-primary-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] border border-primary hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] dark:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] cursor-pointer">
                          <span className="relative flex items-center gap-2 z-10">
                            <span className="text-white/70 group-hover:text-white transition-colors">$</span>
                            {t("hero.cta.projects")}
                            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                          </span>
                        </button>
                        <button
                          onClick={() => handleTabChange("contact.yaml")}
                          className="group inline-flex items-center justify-center px-8 py-3.5 font-[family-name:var(--font-mono)] text-sm font-medium text-muted transition-all duration-300 hover:text-foreground border border-border hover:border-muted rounded-none bg-background dark:bg-panel hover:bg-panel dark:hover:bg-panel-highlight cursor-pointer">
                          <span className="relative flex items-center gap-2 z-10">
                            {t("hero.cta.contact")}
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0 translate-y-[1px]">send</span>
                          </span>
                        </button>
                      </div>

                      {/* Tech stack bar - Mini */}
                      <div className="w-full mt-6 opacity-80">
                        <div className="flex flex-wrap justify-start items-center gap-x-6 gap-y-4 pb-2 w-full py-4 px-0">
                          <TechIcon icon={<SiHtml5 size={24} className="text-[#E34F26] group-hover:scale-110 transition-transform" />} label="HTML" />
                          <TechIcon icon={<SiCss3 size={24} className="text-[#1572B6] group-hover:scale-110 transition-transform" />} label="CSS" />
                          <TechIcon icon={<SiPhp size={24} className="text-[#777BB4] group-hover:scale-110 transition-transform" />} label="PHP" />
                          <TechIcon icon={<SiPython size={24} className="text-[#3776AB] group-hover:scale-110 transition-transform" />} label="Python" />
                          <TechIcon icon={<SiFlutter size={24} className="text-[#02569B] group-hover:scale-110 transition-transform" />} label="Flutter" />
                          <TechIcon icon={<VscDatabase size={24} className="text-[#4479A1] group-hover:scale-110 transition-transform" />} label="SQL" />
                          <TechIcon icon={<SiDocker size={24} className="text-[#2496ED] group-hover:scale-110 transition-transform" />} label="Docker" />
                          <TechIcon icon={<VscPlug size={24} className="text-[#00C7B7] group-hover:scale-110 transition-transform" />} label="REST API" />
                          <TechIcon icon={<SiLinux size={24} className="text-[#FCC624] group-hover:scale-110 transition-transform" />} label="Linux" />
                          <TechIcon icon={<VscGitCommit size={24} className="group-hover:scale-110 transition-transform text-[#F05032]" />} label="Git" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column: System Overview Component */}
                    <div className="col-span-1 lg:col-span-6 w-full flex justify-end items-center perspective-[2000px] mt-8 lg:mt-0 lg:pl-4">
                      <SystemOverview />
                    </div>
                  </div>

                  {/* CORE PHILOSOPHY / EXPERTISE */}
                  <div className="w-full max-w-7xl mx-auto mt-24 mb-16 relative z-10">
                    <div className="flex items-center justify-center lg:justify-center gap-2 mb-8 opacity-80">
                      <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">##</span>
                      <h2 className="text-2xl font-bold text-foreground tracking-widest uppercase">{t("expertise.title")}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border -ml-px -mt-px relative">
                      {/* Critical Thinking */}
                      <div className="bg-panel dark:bg-panel-highlight  border border-border dark:border-border rounded-none p-8 group border-r border-b border-border hover:border-neon-blue/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/80 dark:hover:bg-panel-highlight hover:shadow-[8px_8px_0px_0px_rgba(6,123,249,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-none border border-border bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">psychology</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-blue font-bold group-hover:text-foreground transition-colors">{t("expertise.critical_thinking")}</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background p-4 rounded-none border border-border border border-border group-hover:border-primary/20 transition-colors">
                          <span className="text-syntax-comment">{t("expertise.critical_thinking.comment")}</span><br />
                          <span className="text-syntax-variable">result</span> = [<span className="text-syntax-function">logic</span>(v) <span className="text-syntax-keyword">for</span> v <span className="text-syntax-keyword">in</span> <span className="text-syntax-function">analyze</span>(data)]
                        </div>
                      </div>
                      {/* Continuous Learning */}
                      <div className="bg-panel dark:bg-panel-highlight  border border-border dark:border-border rounded-none p-8 group border-r border-b border-border hover:border-neon-emerald/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/80 dark:hover:bg-panel-highlight hover:shadow-[8px_8px_0px_0px_rgba(52,211,153,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-none border border-border bg-neon-emerald/10 flex items-center justify-center text-neon-emerald group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">auto_stories</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-emerald font-bold group-hover:text-foreground transition-colors">{t("expertise.learning")}</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background p-4 rounded-none border border-border border border-border group-hover:border-neon-emerald/20 transition-colors">
                          <span className="text-syntax-comment">{t("expertise.learning.comment")}</span><br />
                          <span className="text-syntax-keyword">while</span> <span className="text-syntax-keyword">True</span>: <span className="text-syntax-function">learn</span>(<span className="text-syntax-variable">new_tech</span>)
                        </div>
                      </div>
                      {/* Time Management */}
                      <div className="bg-panel dark:bg-panel-highlight  border border-border dark:border-border rounded-none p-8 group border-r border-b border-border hover:border-neon-green/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/80 dark:hover:bg-panel-highlight hover:shadow-[8px_8px_0px_0px_rgba(63,185,80,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-none border border-border bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">schedule</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-green font-bold group-hover:text-foreground transition-colors">{t("expertise.time_management")}</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background p-4 rounded-none border border-border border border-border group-hover:border-neon-green/20 transition-colors">
                          <span className="text-syntax-comment">{t("expertise.time_management.comment")}</span><br />
                          tasks.<span className="text-syntax-function">sort</span>(key=<span className="text-syntax-keyword">lambda</span> t: -t.priority)
                        </div>
                      </div>
                      {/* Problem Solving */}
                      <div className="bg-panel dark:bg-panel-highlight  border border-border dark:border-border rounded-none p-8 group border-r border-b border-border hover:border-neon-orange/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/80 dark:hover:bg-panel-highlight hover:shadow-[8px_8px_0px_0px_rgba(255,166,87,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-none border border-border bg-neon-orange/10 flex items-center justify-center text-neon-orange group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">terminal</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-orange font-bold group-hover:text-foreground transition-colors">{t("expertise.problem_solving")}</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background p-4 rounded-none border border-border border border-border group-hover:border-neon-orange/20 transition-colors">
                          <span className="text-syntax-comment">{t("expertise.problem_solving.comment")}</span><br />
                          <span className="text-syntax-variable">root_cause</span> = <span className="text-syntax-function">debug</span>(issue)
                        </div>
                      </div>
                      {/* Technical Communication */}
                      <div className="bg-panel dark:bg-panel-highlight  border border-border dark:border-border rounded-none p-8 group border-r border-b border-border hover:border-neon-cyan/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/80 dark:hover:bg-panel-highlight hover:shadow-[8px_8px_0px_0px_rgba(57,197,187,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-none border border-border bg-neon-cyan/10 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">forum</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-cyan font-bold group-hover:text-foreground transition-colors">{t("expertise.communication")}</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background p-4 rounded-none border border-border border border-border group-hover:border-neon-cyan/20 transition-colors">
                          <span className="text-syntax-comment">{t("expertise.communication.comment")}</span><br />
                          <span className="text-syntax-function">explain</span>(complex_code).<span className="text-syntax-function">to</span>(humans)
                        </div>
                      </div>
                      {/* Agile Collaboration */}
                      <div className="bg-panel dark:bg-panel-highlight  border border-border dark:border-border rounded-none p-8 group border-r border-b border-border hover:border-neon-yellow/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/80 dark:hover:bg-panel-highlight hover:shadow-[8px_8px_0px_0px_rgba(241,224,90,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-none border border-border bg-neon-yellow/10 flex items-center justify-center text-neon-yellow group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">groups</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-yellow font-bold group-hover:text-foreground transition-colors">{t("expertise.collaboration")}</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background p-4 rounded-none border border-border border border-border group-hover:border-neon-yellow/20 transition-colors">
                          <span className="text-syntax-comment">{t("expertise.collaboration.comment")}</span><br />
                          git.<span className="text-syntax-function">merge</span>(collective_intelligence)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity log integrated into footer of hero */}
                  <div className="w-full max-w-7xl mx-auto mb-12 relative z-10 hidden lg:block px-4">
                    <BentoCard borderColor="blue" glowColor="rgba(6, 123, 249, 0.1)" className="overflow-hidden shadow-2xl bg-panel">
                      <div className="bg-background dark:bg-panel px-6 py-2 flex items-center justify-between border-b border-border dark:border-border">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-[family-name:var(--font-mono)] text-muted opacity-70">{t("activity.filename")}</span>
                        </div>
                      </div>
                      <div className="p-4 font-[family-name:var(--font-mono)] text-xs flex flex-col gap-3">
                        {activityLog.map((log, i) => (
                          <ActivityLogEntry key={i} hash={log.hash} message={log.message} time={log.time} />
                        ))}
                      </div>
                    </BentoCard>
                  </div>
                </div>
              )}

              {activeTab === "projetos.yml" && <DockerComposeView />}
              {activeTab === "carreira.sh" && <CareerPipelineView />}
              {activeTab === "contact.yaml" && <ContactView />}
            </main>
          </div>
        </div>
      </div>

      {/* ========== STATUS BAR ========== */}
      <footer className="h-6 bg-primary text-white text-[11px] flex items-center justify-between px-3 shrink-0 select-none font-[family-name:var(--font-mono)] z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded-none cursor-pointer">
            <VscGitCommit size={12} />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded-none cursor-pointer">
            <VscSettingsGear size={12} className="animate-spin-slow" />
            <span>0</span>
            <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
            <span>1</span>
            <span className="material-symbols-outlined text-[12px]">arrow_downward</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-1 rounded-none cursor-pointer">
            <span className="material-symbols-outlined text-[12px]">error</span>
            <span>0</span>
            <span className="material-symbols-outlined text-[12px]">warning</span>
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-none">Ln 12, Col 43</span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-none hidden sm:inline">UTF-8</span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-none hidden sm:inline">
            {{
              "main.py": "Python",
              "projetos.yml": "YAML",
              "carreira.sh": "Shell Script",
              "contact.yaml": "YAML",
            }[activeTab]}
          </span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-none">Prettier</span>
          <span className="material-symbols-outlined text-[14px] cursor-pointer hover:bg-white/10 rounded-none">notifications</span>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-background" />}>
      <HomeContent />
    </Suspense>
  );
}

/* ===== HELPER COMPONENTS ===== */

function Tab({ name, icon, isActive, onClick }: { name: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) {
  return (
    <button
      aria-label={name}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-pointer group transition-colors select-none",
        isActive
          ? "bg-background border-t-[2px] border-t-primary text-foreground"
          : "bg-panel text-muted hover:bg-background dark:hover:bg-panel-highlight border-t-[2px] border-t-transparent"
      )}
    >
      {icon}
      <span className="text-xs font-[family-name:var(--font-mono)]">{name}</span>
      <span aria-hidden="true" className={clsx("material-symbols-outlined text-[14px] ml-auto hover:text-foreground", isActive ? "opacity-100 text-muted" : "opacity-0 group-hover:opacity-100 text-muted")}>close</span>
    </button>
  )
}

function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="group flex items-center gap-2 cursor-pointer tech-icon transition-all duration-300">
      {icon}
      <span className="text-sm font-[family-name:var(--font-mono)] text-foreground group-hover:text-primary transition-colors">{label}</span>
    </div>
  );
}

function ActivityLogEntry({ hash, message, time }: { hash: string; message: string; time: string }) {
  const isFeat = message.startsWith("feat:");
  const isFix = message.startsWith("fix:");
  const isRefactor = message.startsWith("refactor:");
  const isDocs = message.startsWith("docs:");
  const isChore = message.startsWith("chore:");
  const isTest = message.startsWith("test:");
  const isCI = message.startsWith("ci:");

  return (
    <div className="flex gap-4 items-center group/log hover:bg-muted/10 p-2 -mx-2 rounded-md transition-all duration-300 hover:translate-x-1 cursor-pointer">
      <span className="text-syntax-variable w-16 shrink-0 font-bold group-hover/log:brightness-150 transition-all">{hash}</span>
      <div className="flex items-center gap-2 flex-1">
        <span className={clsx(
          "w-1 h-1 rounded-full shrink-0 transition-all duration-300 group-hover/log:scale-150 group-hover/log:animate-pulse",
          isFeat ? "bg-neon-blue shadow-[0_0_8px_var(--color-primary)]" :
            isFix ? "bg-red-400 shadow-[0_0_8px_#f87171]" :
              isRefactor ? "bg-neon-emerald shadow-[0_0_8px_#34d399]" :
                isDocs ? "bg-neon-green shadow-[0_0_8px_#3fb950]" :
                  isTest ? "bg-neon-orange shadow-[0_0_8px_#ffa657]" :
                    isCI ? "bg-neon-cyan shadow-[0_0_8px_#39c5bb]" :
                      isChore ? "bg-gray-400 shadow-[0_0_8px_#9ca3af]" :
                        "bg-muted shadow-[0_0_8px_currentColor]"
        )} />
        <span className="text-muted group-hover/log:text-foreground transition-colors group-hover/log:font-medium">{message}</span>
      </div>
      <span className="text-muted/30 ml-auto shrink-0 tabular-nums transition-colors group-hover/log:text-muted/80">{time}</span>
    </div>
  );
}
