"use client";

import { motion } from "framer-motion";
import { getProfile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function ContactView() {
    const { locale, t } = useLanguage();
    const profile = getProfile(locale);

    const whatsappNumber = "5521975722770";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    const lineVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.04, duration: 0.3 },
        }),
    };

    let lineIndex = 0;
    const nextLine = () => lineIndex++;

    const isPt = locale === "pt-BR";
    const fileName = isPt ? "contato.yaml" : "contact.yaml";

    return (
        <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center relative min-h-[60vh] py-8 sm:py-12">
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-4xl bg-[#fafafa] dark:bg-[#1e1e1e]/90 backdrop-blur-2xl border border-[#d1d1d1] dark:border-white/10 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] sm:hover:-translate-y-2 ring-1 ring-black/5 dark:ring-white/10 relative transition-all duration-500"
            >
                {/* Mac Terminal Header */}
                <div className="bg-gradient-to-b from-[#f5f5f5] to-[#e8e8e8] dark:bg-[#2d2d2d]/90 dark:bg-none border-b border-[#cfcfcf] dark:border-black/20 px-4 py-2 sm:py-3 flex items-center justify-between transition-colors duration-300">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_1px_rgba(0,0,0,0.2)_inset]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_1px_rgba(0,0,0,0.2)_inset]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_1px_rgba(0,0,0,0.2)_inset]" />
                    </div>
                    <div className="font-[family-name:var(--font-mono)] text-[11px] sm:text-[13px] dark:text-xs text-[#6a737d] dark:text-white/50 font-medium absolute left-1/2 -translate-x-1/2">
                        portoduque@macbook: ~
                    </div>
                    <div className="w-4" /> {/* Spacer */}
                </div>

                {/* Terminal Body */}
                <div className="p-3 sm:p-6 md:p-8 font-[family-name:var(--font-mono)] text-xs sm:text-sm md:text-base leading-[1.6] sm:leading-[1.8] text-[#24292e] dark:text-[#f8f8f2] transition-colors duration-300">

                    {/* The Command */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="mb-4 sm:mb-6 flex gap-1 flex-wrap">
                        <span className="text-[#22863a] dark:text-[#50fa7b] font-bold">portoduque@macbook</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">:</span>
                        <span className="text-[#005cc5] dark:text-[#8be9fd] font-bold">~</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">$</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2] ml-1">cat {fileName}</span>
                    </motion.div>

                    {/* contact: section */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible">
                        <span className="text-[#d73a49] dark:text-[#ff79c6] font-bold">{t("contact.yaml.contact")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">:</span>
                    </motion.div>

                    {/* email */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-3 sm:pl-6 flex flex-wrap gap-x-1">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.email")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-[#22863a] dark:text-[#f1fa8c] hover:text-[#005cc5] dark:hover:text-white transition-colors hover:underline cursor-pointer break-all"
                        >
                            &quot;{profile.email}&quot;
                        </a>
                    </motion.div>

                    {/* whatsapp */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-3 sm:pl-6 flex flex-wrap gap-x-1">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.whatsapp")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#22863a] dark:text-[#f1fa8c] hover:text-[#005cc5] dark:hover:text-white transition-colors hover:underline cursor-pointer break-all"
                        >
                            &quot;{profile.phone}&quot;
                        </a>
                    </motion.div>

                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible">
                        &nbsp;
                    </motion.div>

                    {/* social: section */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="text-[#6a737d] dark:text-[#6272a4] pl-3 sm:pl-6 pt-2">
                        # {t("contact.social")}
                    </motion.div>
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-3 sm:pl-6">
                        <span className="text-[#d73a49] dark:text-[#ff79c6]">{t("contact.yaml.social")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">:</span>
                    </motion.div>

                    {/* linkedin */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-6 sm:pl-12 flex flex-wrap gap-x-1 items-center">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.linkedin")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#22863a] dark:text-[#f1fa8c] hover:text-[#005cc5] dark:hover:text-white transition-colors hover:underline cursor-pointer group inline-flex items-center gap-1 break-all"
                        >
                            &quot;/in/portoduque&quot;
                            <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                        </a>
                    </motion.div>

                    {/* github */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-6 sm:pl-12 flex flex-wrap gap-x-1 items-center">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.github")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#22863a] dark:text-[#f1fa8c] hover:text-[#005cc5] dark:hover:text-white transition-colors hover:underline cursor-pointer group inline-flex items-center gap-1 break-all"
                        >
                            &quot;/portoduque&quot;
                            <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                        </a>
                    </motion.div>

                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible">
                        &nbsp;
                    </motion.div>

                    {/* location: section */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="text-[#6a737d] dark:text-[#6272a4] pl-3 sm:pl-6 pt-2">
                        # {t("contact.location")}
                    </motion.div>
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-3 sm:pl-6">
                        <span className="text-[#d73a49] dark:text-[#ff79c6]">{t("contact.yaml.location")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">:</span>
                    </motion.div>
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-6 sm:pl-12 flex flex-wrap gap-x-1">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.city")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <span className="text-[#22863a] dark:text-[#f1fa8c] break-all">&quot;Porto Velho&quot;</span>
                    </motion.div>
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-6 sm:pl-12 flex flex-wrap gap-x-1">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.state")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <span className="text-[#22863a] dark:text-[#f1fa8c] break-all">&quot;Rondônia (RO)&quot;</span>
                    </motion.div>
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-6 sm:pl-12 flex flex-wrap gap-x-1">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.country")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <span className="text-[#22863a] dark:text-[#f1fa8c] break-all">&quot;{t("contact.country.name")}&quot;</span>
                    </motion.div>

                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible">
                        &nbsp;
                    </motion.div>

                    {/* status */}
                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="pl-3 sm:pl-6 pt-2 flex flex-wrap gap-x-1 items-center">
                        <span className="text-[#005cc5] dark:text-[#8be9fd]">{t("contact.yaml.status")}</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">: </span>
                        <span className="text-[#22863a] dark:text-[#f1fa8c] inline-flex items-center gap-2 break-all">
                            &quot;{t("contact.available")}&quot;
                            <span className="inline-block w-2 h-2 rounded-full bg-[#22863a] dark:bg-[#50fa7b] animate-pulse shadow-[0_0_8px_rgba(34,134,58,0.5)] dark:shadow-[0_0_8px_#50fa7b]" />
                        </span>
                    </motion.div>

                    <motion.div custom={nextLine()} variants={lineVariants} initial="hidden" animate="visible" className="mt-6 flex flex-wrap gap-1 items-center">
                        <span className="text-[#22863a] dark:text-[#50fa7b] font-bold">portoduque@macbook</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">:</span>
                        <span className="text-[#005cc5] dark:text-[#8be9fd] font-bold">~</span>
                        <span className="text-[#24292e] dark:text-[#f8f8f2]">$ </span>
                        <span className="inline-block w-2.5 h-5 bg-[#24292e]/80 dark:bg-[#f8f8f2]/80 animate-blink shadow-[0_0_6px_rgba(0,0,0,0.5)] dark:shadow-[0_0_6px_#f8f8f2] align-middle mb-[2px]" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
