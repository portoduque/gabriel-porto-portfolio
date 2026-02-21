"use client";

import { useLanguage } from "@/lib/i18n";
import { clsx } from "clsx";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { SiDocker, SiPython } from "react-icons/si";
import { VscFilePdf, VscMail, VscTerminal } from "react-icons/vsc";

function MobileNavItem({
    label,
    icon,
    isActive,
    onClick,
    activeColor
}: {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
    activeColor: string;
}) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "flex flex-col items-center gap-1 p-2 rounded-lg transition-all active:scale-95 min-w-[64px]",
                isActive ? clsx("bg-primary/10", activeColor) : "text-muted hover:text-foreground"
            )}
        >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}

export function MobileNavbar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { t } = useLanguage();

    const activeTab = searchParams.get("tab") || "main.py";
    const isProjectDetail = pathname?.startsWith("/projetos/");

    const handleTabChange = (tab: string) => {
        router.push(`/?tab=${tab}`);
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-panel/95 backdrop-blur-md border-t border-border z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <MobileNavItem
                label={t("nav.main")}
                icon={<SiPython size={20} />}
                isActive={activeTab === "main.py" && !isProjectDetail}
                onClick={() => handleTabChange("main.py")}
                activeColor="text-[#3776ab]"
            />
            <MobileNavItem
                label={t("nav.projects")}
                icon={<SiDocker size={20} />}
                isActive={activeTab === "projetos.yml" || isProjectDetail}
                onClick={() => handleTabChange("projetos.yml")}
                activeColor="text-[#1D63ED]"
            />
            <MobileNavItem
                label={t("nav.experience")}
                icon={<VscTerminal size={20} />}
                isActive={activeTab === "carreira.sh"}
                onClick={() => handleTabChange("carreira.sh")}
                activeColor="text-neon-green"
            />
            <MobileNavItem
                label={t("nav.contact")}
                icon={<VscMail size={20} />}
                isActive={activeTab === "contact.yaml"}
                onClick={() => handleTabChange("contact.yaml")}
                activeColor="text-red-400"
            />
            <a
                href="/Gabriel-Porto-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-lg transition-all text-muted hover:text-foreground active:scale-95 min-w-[64px]"
            >
                <VscFilePdf size={20} />
                <span className="text-[10px] font-medium">{t("nav.resume")}</span>
            </a>
        </nav>
    );
}
