"use client";

import { useLanguage } from "@/lib/i18n";
import { useState, useEffect } from "react";

export function LanguageToggle() {
    const { locale, setLocale } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-[42px] w-[130px]" />;
    }

    const isEn = locale === "en";

    return (
        <button
            onClick={() => setLocale(isEn ? "pt-BR" : "en")}
            className="relative flex items-center gap-3 px-3 py-2 rounded-full bg-background dark:bg-panel border border-border/50 dark:border-border shadow-sm hover:shadow-md transition-all duration-300 group"
            aria-label={isEn ? "Switch to Portuguese" : "Mudar para Inglês"}
            title={isEn ? "Switch to Portuguese" : "Mudar para Inglês"}
        >
            <div
                className={`flex items-center justify-center transition-all duration-300 ${isEn ? "opacity-30 grayscale scale-75" : "opacity-100 grayscale-0 scale-110 drop-shadow-sm"
                    }`}
            >
                <BrazilFlag className="w-6 h-4 rounded-sm" />
            </div>
            <div className="relative w-11 h-6 rounded-full bg-muted/80 border border-border transition-all duration-300 group-hover:border-primary/50">
                <div
                    className={`absolute top-0.5 h-4.5 w-4.5 rounded-full bg-primary shadow-sm transition-all duration-300 ${isEn ? "left-[calc(100%-20px)]" : "left-0.5"
                        }`}
                />
            </div>
            <div
                className={`flex items-center justify-center transition-all duration-300 ${isEn ? "opacity-100 grayscale-0 scale-110 drop-shadow-sm" : "opacity-30 grayscale scale-75"
                    }`}
            >
                <USFlag className="w-6 h-4 rounded-sm" />
            </div>
        </button>
    );
}

function BrazilFlag({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 720 480"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="720" height="480" fill="#009b3a" />
            <path d="M360 30L690 240L360 450L30 240Z" fill="#fedf00" />
            <circle cx="360" cy="240" r="120" fill="#002776" />
            <path
                d="M245 260Q360 220 475 260L475 245Q360 205 245 245Z"
                fill="#fff"
            />
        </svg>
    );
}

function USFlag({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 741 390"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="741" height="390" fill="#bf0a30" />
            <path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#fff" strokeWidth="30" />
            <rect width="296.4" height="210" fill="#002868" />
            <g fill="#fff">
                <g id="s">
                    <g id="r">
                        <path id="t" d="M24.7 15l2.4 7.5h7.9l-6.4 4.6 2.4 7.4-6.3-4.6-6.4 4.6 2.4-7.4-6.3-4.6h7.9z" />
                        <use href="#t" x="49.4" />
                        <use href="#t" x="98.8" />
                        <use href="#t" x="148.2" />
                        <use href="#t" x="197.6" />
                    </g>
                    <use href="#r" x="24.7" y="21" />
                </g>
                <use href="#s" y="42" />
                <use href="#s" y="84" />
                <use href="#s" y="126" />
                <use href="#r" y="168" />
            </g>
        </svg>
    );
}
