"use client";

import { useState } from "react";
import { SystemOverview } from "@/components/hero/SystemOverview";
import { ProjectsView } from "@/components/content/ProjectsView";
import { ExperienceView } from "@/components/content/ExperienceView";
import { ContactView } from "@/components/content/ContactView";
import { PROFILE, SKILLS, ACTIVITY_LOG } from "@/lib/data";
import { clsx } from "clsx";
import {
  FileCode,
  Search,
  Layout,
  Terminal,
  Code2,
  Database,
  Smartphone,
  Server,
  GitCommit,
  Globe,
  Settings
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"main.py" | "projects.json" | "experience.md" | "contact.sh">("main.py");

  const handleTabClick = (tab: "main.py" | "projects.json" | "experience.md" | "contact.sh") => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-screen w-full relative font-[family-name:var(--font-display)]">
      {/* Dot pattern background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-dot-pattern" />

      {/* ========== MAIN AREA ========== */}
      <div className="flex flex-1 overflow-hidden z-10">
        {/* ===== SIDEBAR ===== */}
        <aside className="w-12 bg-background border-r border-border hidden md:flex flex-col items-center py-4 gap-6 shrink-0">
          <button
            onClick={() => setActiveTab("main.py")}
            className={clsx("relative group transition-colors", activeTab === "main.py" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "main.py" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <FileCode size={24} />
          </button>
          <button
            onClick={() => setActiveTab("projects.json")}
            className={clsx("transition-colors relative", activeTab === "projects.json" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "projects.json" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <Search size={24} />
          </button>
          <button
            onClick={() => setActiveTab("experience.md")}
            className={clsx("transition-colors relative", activeTab === "experience.md" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "experience.md" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <Layout size={24} />
          </button>
          <div className="flex-1" />
          <button
            onClick={() => setActiveTab("contact.sh")}
            className={clsx("pb-4 transition-colors relative", activeTab === "contact.sh" ? "text-foreground" : "text-muted hover:text-foreground")}
          >
            {activeTab === "contact.sh" && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary -ml-[13px]" />}
            <Terminal size={24} />
          </button>
        </aside>

        {/* ===== EDITOR PANEL ===== */}
        <div className="flex-1 flex flex-col bg-background/50 backdrop-blur-sm">
          {/* Tab bar (navbar) */}
          <div className="flex items-end bg-panel border-b border-border overflow-x-auto no-scrollbar h-10 shrink-0">
            {/* Tab 1 — main.py */}
            <Tab
              name="main.py"
              icon={<Code2 size={16} className="text-[#3776ab]" />}
              isActive={activeTab === "main.py"}
              onClick={() => setActiveTab("main.py")}
            />
            {/* Tab 2 — projects.json */}
            <Tab
              name="projects.json"
              icon={<Settings size={16} className="text-[#f7df1e]" />}
              isActive={activeTab === "projects.json"}
              onClick={() => setActiveTab("projects.json")}
            />
            {/* Tab 3 — experience.md */}
            <Tab
              name="experience.md"
              icon={<FileCode size={16} className="text-[#3b82f6]" />}
              isActive={activeTab === "experience.md"}
              onClick={() => setActiveTab("experience.md")}
            />
            {/* Tab 4 — contact.sh */}
            <Tab
              name="contact.sh"
              icon={<Terminal size={16} className="text-green-500" />}
              isActive={activeTab === "contact.sh"}
              onClick={() => setActiveTab("contact.sh")}
            />
          </div>

          {/* Editor content area */}
          <div className="flex-1 overflow-y-auto relative custom-scrollbar flex">
            {/* Line Numbers - Hidden on Hero for cleaner look */}
            {activeTab !== "main.py" && (
              <div className="hidden md:flex flex-col items-end w-12 lg:w-16 py-8 pr-4 border-r border-border/50 shrink-0 text-muted/20 font-mono text-xs lg:text-sm select-none bg-background/30 h-full min-h-screen">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="leading-6 lg:leading-7">{i + 1}</div>
                ))}
              </div>
            )}

            <div className="flex-1 flex flex-col relative w-full min-h-full">
              {activeTab === "main.py" && (
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 my-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
                    {/* Left Column: Hero Content */}
                    <div className="flex flex-col gap-6 items-center text-center lg:items-center lg:text-center">
                      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
                        Engineering the{" "}
                        <span className="relative inline-block">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-blue to-primary animate-gradient-x">
                            full stack from secure cores to fluid code
                          </span>
                          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></span>
                        </span>
                      </h1>

                      {/* Role subtitle */}
                      <div className="font-[family-name:var(--font-mono)] text-base lg:text-xl text-muted flex flex-wrap justify-center lg:justify-center items-center gap-2">
                        <span className="text-primary font-bold animate-pulse">&gt;</span>
                        <span className="text-syntax-keyword">const</span>
                        <span className="text-syntax-variable">role</span>
                        <span className="text-foreground">=</span>
                        <span className="text-syntax-string font-medium">&quot;{PROFILE.role}&quot;</span>
                        <span className="text-foreground">;</span>
                        <span className="w-2 h-5 bg-primary animate-blink inline-block ml-1 shadow-[0_0_8px_var(--color-primary)]" />
                      </div>

                      {/* Description */}
                      <p className="text-muted text-base lg:text-lg max-w-xl font-light leading-relaxed">
                        {PROFILE.summary}
                      </p>

                      {/* CTA buttons */}
                      <div className="flex flex-wrap justify-center lg:justify-center gap-4 mt-2">
                        <button
                          onClick={() => setActiveTab("projects.json")}
                          className="group relative inline-flex items-center justify-center px-8 py-3.5 font-[family-name:var(--font-mono)] text-sm font-medium text-white transition-all duration-300 overflow-hidden rounded-sm bg-primary hover:bg-primary-dark shadow-[0_0_20px_rgba(6,123,249,0.3)] hover:shadow-[0_0_30px_rgba(6,123,249,0.5)] cursor-pointer">
                          <span className="relative flex items-center gap-2 z-10">
                            <span className="text-white/70 group-hover:text-white transition-colors">$</span>
                            cd /projects
                            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                          </span>
                        </button>
                        <button
                          onClick={() => setActiveTab("contact.sh")}
                          className="group inline-flex items-center justify-center px-8 py-3.5 font-[family-name:var(--font-mono)] text-sm font-medium text-muted transition-all duration-300 hover:text-foreground border border-border hover:border-muted rounded-sm bg-panel/50 hover:bg-panel cursor-pointer">
                          <span className="relative flex items-center gap-2 z-10">
                            ./contact.sh
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0 translate-y-[1px]">send</span>
                          </span>
                        </button>
                      </div>

                      {/* Tech stack bar - Mini */}
                      <div className="w-full mt-6 opacity-80 scale-90 lg:scale-100 origin-center lg:origin-center">
                        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2 mask-linear-fade w-full max-w-full px-4">
                          <TechIcon icon={<Globe size={24} />} label="HTML" />
                          <TechIcon icon={<Layout size={24} />} label="CSS" />
                          <TechIcon icon={<Code2 size={24} />} label="PHP" />
                          <TechIcon icon={<Terminal size={24} />} label="Python" />
                          <TechIcon icon={<Smartphone size={24} />} label="Flutter" />
                          <TechIcon icon={<Database size={24} />} label="SQL" />
                          <TechIcon icon={<Server size={24} />} label="Linux" />
                          <TechIcon icon={<GitCommit size={24} />} label="Git" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column: System Overview Component */}
                    <div className="w-full flex justify-center items-center lg:justify-center perspective-[2000px] mt-8 lg:mt-0">
                      <SystemOverview />
                    </div>
                  </div>

                  {/* CORE PHILOSOPHY / EXPERTISE */}
                  <div className="w-full max-w-7xl mx-auto mt-24 mb-16 relative z-10">
                    <div className="flex items-center justify-center lg:justify-center gap-2 mb-8 opacity-80">
                      <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">##</span>
                      <h2 className="text-2xl font-bold text-foreground tracking-widest uppercase">Expertise</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Scalability */}
                      <div className="bg-panel/30 backdrop-blur-sm border border-border rounded-xl p-6 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/50 hover:shadow-[0_0_30px_rgba(6,123,249,0.1)]">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">scale</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-blue font-bold group-hover:text-foreground transition-colors">Scalability</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background/50 p-4 rounded-lg border border-foreground/5 group-hover:border-primary/20 transition-colors">
                          <span className="text-syntax-comment">{"// Modular design"}</span><br />
                          <span className="text-syntax-keyword">class</span> <span className="text-syntax-class">System</span> {"{"}<br />
                          &nbsp;&nbsp;scaling = <span className="text-syntax-keyword">true</span>;<br />
                          {"}"}
                        </div>
                      </div>
                      {/* Precision */}
                      <div className="bg-panel/30 backdrop-blur-sm border border-border rounded-xl p-6 group hover:border-neon-purple/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/50 hover:shadow-[0_0_30px_rgba(188,140,255,0.1)]">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">precision_manufacturing</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-purple font-bold group-hover:text-foreground transition-colors">Precision</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background/50 p-4 rounded-lg border border-foreground/5 group-hover:border-neon-purple/20 transition-colors">
                          <span className="text-syntax-comment">{"// Pixel-perfect"}</span><br />
                          &nbsp;&nbsp;RPA_Accuracy = <span className="text-syntax-string">&quot;100%&quot;</span>;<br />
                        </div>
                      </div>
                      {/* Performance */}
                      <div className="bg-panel/30 backdrop-blur-sm border border-border rounded-xl p-6 group hover:border-neon-green/50 transition-all duration-500 hover:-translate-y-1 hover:bg-panel/50 hover:shadow-[0_0_30px_rgba(63,185,80,0.1)]">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">speed</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-mono)] text-neon-green font-bold group-hover:text-foreground transition-colors">Performance</h3>
                        </div>
                        <div className="font-[family-name:var(--font-mono)] text-xs text-muted/80 leading-relaxed bg-background/50 p-4 rounded-lg border border-foreground/5 group-hover:border-neon-green/20 transition-colors">
                          <span className="text-syntax-comment">{"// Optimized"}</span><br />
                          <span className="text-syntax-keyword">await</span> <span className="text-syntax-function">optimize</span>();<br />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity log integrated into footer of hero */}
                  <div className="w-full max-w-7xl mx-auto mb-12 relative z-10 hidden lg:block">
                    <div className="bg-background/80 backdrop-blur-xl rounded-xl border border-border/50 overflow-hidden shadow-2xl">
                      <div className="bg-panel/50 px-6 py-2 flex items-center justify-between border-b border-border/50">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-[family-name:var(--font-mono)] text-muted opacity-70">git_activity.log</span>
                        </div>
                      </div>
                      <div className="p-4 font-[family-name:var(--font-mono)] text-xs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {ACTIVITY_LOG.map((log, i) => (
                          <ActivityLogEntry key={i} hash={log.hash} message={log.message} time={log.time} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "projects.json" && <ProjectsView />}
              {activeTab === "experience.md" && <ExperienceView />}
              {activeTab === "contact.sh" && <ContactView />}

            </div>
          </div>
        </div>
      </div>

      {/* ========== STATUS BAR ========== */}
      <footer className="h-6 bg-primary text-white text-[11px] flex items-center justify-between px-3 shrink-0 select-none font-[family-name:var(--font-mono)] z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
            <GitCommit size={12} />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
            <Settings size={12} className="animate-spin-slow" />
            <span>0</span>
            <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
            <span>1</span>
            <span className="material-symbols-outlined text-[12px]">arrow_downward</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-1 rounded-sm cursor-pointer">
            <span className="material-symbols-outlined text-[12px]">error</span>
            <span>0</span>
            <span className="material-symbols-outlined text-[12px]">warning</span>
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm">Ln 12, Col 43</span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm hidden sm:inline">UTF-8</span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm hidden sm:inline">Typescript</span>
          <span className="cursor-pointer hover:bg-white/10 px-1 rounded-sm">Prettier</span>
          <span className="material-symbols-outlined text-[14px] cursor-pointer hover:bg-white/10 rounded-sm">notifications</span>
        </div>
      </footer>
    </div>
  );
}

/* ===== HELPER COMPONENTS ===== */

function Tab({ name, icon, isActive, onClick }: { name: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 px-4 h-full border-r border-border min-w-[140px] cursor-pointer group transition-colors select-none",
        isActive
          ? "bg-background border-t-[2px] border-t-primary text-foreground"
          : "bg-panel text-muted hover:bg-background/50 border-t-[2px] border-t-transparent"
      )}
    >
      {icon}
      <span className="text-xs font-[family-name:var(--font-mono)]">{name}</span>
      <span className={clsx("material-symbols-outlined text-[14px] ml-auto hover:text-foreground", isActive ? "opacity-100 text-muted" : "opacity-0 group-hover:opacity-100 text-muted")}>close</span>
    </div>
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
  return (
    <div className="flex gap-4">
      <span className="text-syntax-variable w-20 shrink-0">{hash}</span>
      <span className="text-muted">{message}</span>
      <span className="text-muted/50 ml-auto shrink-0">{time}</span>
    </div>
  );
}


