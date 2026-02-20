
"use client";

import { motion } from "framer-motion";
import { getProjects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function ProjectsView() {
    const { locale } = useLanguage();
    const projects = getProjects(locale);

    return (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24">
            <div className="flex items-center gap-2 mb-8 opacity-80">
                <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                    const
                </span>
                <h2 className="text-2xl font-bold text-foreground tracking-widest uppercase">
                    projects
                </h2>
                <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                    =
                </span>
                <span className="text-syntax-string text-xl font-[family-name:var(--font-mono)]">
                    [
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-panel/60 backdrop-blur-md border border-border/50 rounded-xl overflow-hidden hover:bg-panel/80 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5 shadow-black/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className="font-[family-name:var(--font-mono)] text-primary text-sm">
                                    &quot;{project.id}&quot;
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.name}
                            </h3>

                            <p className="text-muted text-sm mb-4 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="bg-background/50 p-3 rounded-lg border border-border/50 mb-4">
                                <span className="text-syntax-comment text-xs block mb-1">
                  // Highlight
                                </span>
                                <span className="text-xs text-foreground/80 font-[family-name:var(--font-mono)]">
                                    {project.highlight}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 opacity-80 font-[family-name:var(--font-mono)] text-xl text-syntax-string">
                ];
            </div>
        </div>
    );
}
