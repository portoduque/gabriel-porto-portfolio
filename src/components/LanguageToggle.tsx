"use client";

import { useLanguage } from "@/lib/i18n";
import { useState, useEffect } from "react";

export function LanguageToggle() {
    const { locale, setLocale } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-[42px] w-[130px]" />;
    }

    const isEn = locale === "en";

    return (
        <button
            onClick={() => setLocale(isEn ? "pt-BR" : "en")}
            className="relative flex items-center gap-3 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:bg-accent/50 transition-all duration-300 group"
            aria-label={isEn ? "Switch to Portuguese" : "Mudar para Inglês"}
            title={isEn ? "Switch to Portuguese" : "Mudar para Inglês"}
        >
            <span
                className={`text-base transition-all duration-300 ${isEn ? "opacity-30 grayscale scale-75" : "opacity-100 grayscale-0 scale-110"
                    }`}
            >
                🇧🇷
            </span>
            <div className="relative w-11 h-6 rounded-full bg-muted/80 border border-border transition-all duration-300 group-hover:border-primary/50">
                <div
                    className={`absolute top-0.5 h-4.5 w-4.5 rounded-full bg-primary shadow-sm transition-all duration-300 ${isEn ? "left-[calc(100%-20px)]" : "left-0.5"
                        }`}
                />
            </div>
            <span
                className={`text-base transition-all duration-300 ${isEn ? "opacity-100 grayscale-0 scale-110" : "opacity-30 grayscale scale-75"
                    }`}
            >
                🇺🇸
            </span>
        </button>
    );
}
