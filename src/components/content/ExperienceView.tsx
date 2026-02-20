
"use client";

import { motion } from "framer-motion";
import { getExperience, getEducation } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function ExperienceView() {
    const { locale } = useLanguage();
    const experience = getExperience(locale);
    const education = getEducation(locale);

    return (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24">
            {/* Experience Section */}
            <section className="mb-20">
                <div className="flex items-center gap-2 mb-8 opacity-80">
                    <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                        class
                    </span>
                    <h2 className="text-2xl font-bold text-foreground tracking-widest uppercase">
                        Experience
                    </h2>
                    <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                        implements
                    </span>
                    <span className="text-syntax-class text-xl font-[family-name:var(--font-mono)]">
                        Engineer
                    </span>
                    <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                        {"{"}
                    </span>
                </div>

                <div className="space-y-12 relative border-l-2 border-border/50 ml-3 lg:ml-8 pl-8 lg:pl-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Dot on timeline */}
                            <div className="absolute -left-[41px] lg:-left-[59px] top-6 w-5 h-5 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform duration-300 z-10" />

                            <div className="bg-panel dark:bg-panel-highlight border border-border/50 dark:border-border p-6 rounded-xl hover:bg-panel/80 dark:hover:bg-panel-highlight hover:border-primary/50 transition-all duration-300 shadow-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-primary group-hover:text-foreground transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm font-[family-name:var(--font-mono)] text-muted px-3 py-1 bg-background dark:bg-panel rounded-full border border-border/50 dark:border-border/80">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-2 list-disc list-outside ml-4 text-muted/80 text-sm leading-relaxed">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section>
                <div className="flex items-center gap-2 mb-8 opacity-80">
                    <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                        @doc
                    </span>
                    <h2 className="text-2xl font-bold text-foreground tracking-widest uppercase">
                        Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-3 lg:ml-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-panel dark:bg-panel-highlight border border-border/50 dark:border-border p-6 rounded-xl hover:bg-panel/80 dark:hover:bg-panel-highlight hover:border-neon-purple/50 transition-all duration-300 group relative overflow-hidden shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-10 h-10 bg-neon-purple/10 rounded-lg flex items-center justify-center text-neon-purple mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-neon-purple transition-colors">
                                {edu.degree}
                            </h3>
                            <p className="text-sm font-[family-name:var(--font-mono)] text-muted">
                                {edu.year}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex items-center gap-2 opacity-80">
                    <span className="text-syntax-keyword text-xl font-[family-name:var(--font-mono)]">
                        {"}"}
                    </span>
                </div>
            </section>
        </div>
    );
}
