
import type { Locale } from "./i18n";

export const PROFILE = {
    name: "Gabriel Porto Duque Estrada Fiorante",
    email: "portoduque@outlook.com",
    phone: "(21) 97572-2770",
    social: {
        linkedin: "https://www.linkedin.com/in/portoduque",
        github: "https://github.com/portoduque",
    },
    highlights: [
        { label: "CERT", value: "CCNA + Google + Harvard CS50’s" },
        { label: "TECH", value: "Full Stack + DevOps + Security" }
    ]
};

export function getProfile(locale: Locale) {
    const localized = locale === "en"
        ? {
            role: "Full-Stack Developer",
            location: "Porto Velho - RO, Brazil",
            summary:
                "Turning complex problems into scalable digital products. As a Full-Stack Developer, I leverage ecosystems like Python and PHP to build Web and Mobile (Flutter) applications focused on UX and high availability. My edge is a 360° vision: I combine high-quality code with RPA automation and a secure infrastructure (CCNA/Linux), ensuring solutions are not only functional but efficient and protected.",
        }
        : {
            role: "Desenvolvedor Full-Stack",
            location: "Porto Velho - RO, Brasil",
            summary:
                "Transformando problemas complexos em produtos digitais escaláveis. Como Desenvolvedor Full-Stack, utilizo ecossistemas como Python e PHP para construir aplicações Web e Mobile (Flutter) focadas em UX e alta disponibilidade. Meu diferencial está na visão 360º: uno código de alta qualidade com automação RPA e uma infraestrutura segura (CCNA/Linux), garantindo que a solução não apenas funcione, mas seja eficiente e protegida.",
        };

    return { ...PROFILE, ...localized };
}

export const SKILLS = {
    languages: ["PHP", "Python", "JavaScript (ES6+)", "HTML5", "CSS3"],
    frameworks: ["Bootstrap", "MadBuilder (PHP)", "Flutter/Dart"],
    mobile: ["Flutter", "FlutterFlow"],
    infrastructure: [
        "Linux (Apache)",
        "Windows Server 2016 (AD, Group Policy)",
        "Cisco CCNA",
        "Troubleshooting",
    ],
    security: [
        "Google Cybersecurity Professional",
        "LGPD Compliance",
        "Risk Mitigation",
    ],
    tools: [
        "WordPress (Elementor, JetEngine)",
        "Jira",
        "Trello",
        "Agile",
        "GitHub",
        "Selenium WebDriver",
        "RPA",
        "Airflow",
        "Madbuilder",
        "FlutterFlow",
    ],
};

export function getExperience(locale: Locale) {
    if (locale === "en") {
        return [
            {
                role: "Systems Analyst & Developer",
                period: "December 2024 – Present",
                description: [
                    "Development of websites and web systems (WordPress, PHP/MadBuilder).",
                    "Creation of automations (RPA) with Python, Selenium and Airflow.",
                    "Deployment and configuration of Linux servers (Apache).",
                    "Requirements gathering, system modeling for healthcare, and project management.",
                ],
            },
            {
                role: "IT Technical Support",
                period: "August 2024 – December 2024",
                description: [
                    "Maintenance, formatting and infrastructure optimization.",
                    "Advanced troubleshooting in commercial systems and critical backups.",
                    "Specialized support and digital security implementation.",
                ],
            },
            {
                role: "International Experience (Oceania & MSC Cruises)",
                period: "01/2021 – 12/2023",
                description: [
                    "High-standard service in multicultural environments, demonstrating adaptability and global communication skills.",
                    "Transaction management and record-keeping via the Micros system, ensuring uncompromising accuracy and reliability.",
                    "Strict compliance with international safety and hygiene protocols established by the CDC/FDA.",
                ],
            },
        ];
    }

    return [
        {
            role: "Analista e Desenvolvedor de Sistemas",
            period: "Dezembro 2024 – Presente",
            description: [
                "Desenvolvimento de sites e sistemas web (WordPress, PHP/MadBuilder).",
                "Criação de automações (RPA) com Python, Selenium e Airflow.",
                "Implantação e configuração de servidores Linux (Apache).",
                "Levantamento de requisitos, modelagem de sistemas para a área da saúde e gestão de projetos.",
            ],
        },
        {
            role: "Suporte Técnico de TI",
            period: "Agosto 2024 – Dezembro 2024",
            description: [
                "Manutenção, formatação e otimização de infraestrutura.",
                "Troubleshooting avançado em sistemas comerciais e backups críticos.",
                "Atendimento especializado e implementação de segurança digital.",
            ],
        },
        {
            role: "Experiências Internacionais (Oceania e MSC Cruzeiros)",
            period: "01/2021 – 12/2023",
            description: [
                "Atendimento de alto padrão em ambiente multicultural, demonstrando forte adaptabilidade e comunicação global.",
                "Gestão de transações com sistema Micros, garantindo precisão e confiabilidade no registro de operações.",
                "Adesão estrita a rigorosos padrões internacionais de segurança e conformidade estabelecidos pelo CDC/FDA.",
            ],
        },
    ];
}

export function getEducation(locale: Locale) {
    if (locale === "en") {
        return [
            { degree: "Postgraduate in Data Science", year: "2026 – Present" },
            { degree: "Postgraduate in Enterprise Cybersecurity Management", year: "2025" },
            { degree: "Bachelor's in Information Systems", year: "2017 – 2021" },
        ];
    }

    return [
        { degree: "Pós-graduação em Ciência de Dados", year: "2026 – Presente" },
        { degree: "Pós-graduação em Gestão na Cibersegurança Empresarial", year: "2025" },
        { degree: "Bacharelado em Sistemas de Informação", year: "2017 – 2021" },
    ];
}

export const CERTIFICATES = [
    "Cisco Certified Network Associate (CCNA)",
    "Google Cybersecurity Professional Certificate",
    "CS50's Introduction to Programming with Python (Harvard)",
    "C# COMPLETO - Programação Orientada a Objetos",
    "CompTIA Security+ (SY0-701) Complete Course",
    "Curso de Administrador Linux",
    "Google Cloud Foundations Academy"
];

export function getProjects(locale: Locale) {
    if (locale === "en") {
        return [
            {
                id: "rpa-ana",
                name: "Hydrological Data Collection Automation (RPA)",
                tech: ["Python", "Selenium WebDriver"],
                description: "Solution for daily and automatic collection of historical water quality data from ANA.",
                highlight: "Reduction of manual errors and automated directory organization by station.",
            },
            {
                id: "fluxo-paciente",
                name: "Patient Transport Flow System",
                tech: ["PHP", "MadBuilder", "PostgreSQL", "MySQL"],
                description: "Inter-hospital logistics management for patient transfers.",
                highlight: "40% reduction in organization time and WhatsApp API integration.",
            },
            {
                id: "portal-ciges",
                name: "CIGES Portal (Public Health)",
                tech: ["C#", ".NET", "JavaScript", "Bootstrap"],
                description: "Dynamic dashboard platform for health indicators in Rondônia state.",
                highlight: "Centralization of critical data for evidence-based decisions (SESAU-RO).",
            },
            {
                id: "respirar-mobile",
                name: "RespirAR Project (Mobile)",
                tech: ["Flutter", "FlutterFlow", "Firebase"],
                description: "Health and wellness app with push notifications and geolocation.",
                highlight: "Intuitive cross-platform experience (Android/iOS).",
            },
            {
                id: "saude-digital",
                name: "Digital Health Portal (SESAU-RO)",
                tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
                description: "Official website for digital health initiatives, promoting transparency.",
                highlight: "Focus on accessibility and fluid mobile navigation.",
            },
            {
                id: "captacao-recursos",
                name: "Resource Acquisition System",
                tech: ["WordPress", "PHP", "JetEngine"],
                description: "Management of grants and funding for public health projects.",
                highlight: "Strengthening digital governance and financial sustainability.",
            },
            {
                id: "portal-telesaude",
                name: "Telehealth Portal",
                tech: ["WordPress", "PHP", "Elementor"],
                description: "Platform for teleconsultations and remote patient monitoring.",
                highlight: "Expanding healthcare access in remote areas of Rondônia.",
            },
        ];
    }

    return [
        {
            id: "rpa-ana",
            name: "Automação de Coleta de Dados Hidrológicos (RPA)",
            tech: ["Python", "Selenium WebDriver"],
            description: "Solução para coleta diária e automática de dados históricos de qualidade da água da ANA.",
            highlight: "Redução de falhas manuais e organização automatizada de diretórios por estação.",
        },
        {
            id: "fluxo-paciente",
            name: "Sistema Fluxo Transporte Paciente",
            tech: ["PHP", "MadBuilder", "PostgreSQL", "MySQL"],
            description: "Gestão de logística inter-hospitalar para transferência de pacientes.",
            highlight: "Redução de 40% no tempo de organização e integração com WhatsApp API.",
        },
        {
            id: "portal-ciges",
            name: "Portal do CIGES (Saúde Pública)",
            tech: ["C#", ".NET", "JavaScript", "Bootstrap"],
            description: "Plataforma de dashboards dinâmicos para indicadores de saúde de Rondônia.",
            highlight: "Centralização de dados críticos para decisões baseadas em evidências (SESAU-RO).",
        },
        {
            id: "respirar-mobile",
            name: "Projeto RespirAR (Mobile)",
            tech: ["Flutter", "FlutterFlow", "Firebase"],
            description: "Aplicativo focado em saúde e bem-estar com notificações push e geolocalização.",
            highlight: "Experiência intuitiva multiplataforma (Android/iOS).",
        },
        {
            id: "saude-digital",
            name: "Portal da Saúde Digital (SESAU-RO)",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            description: "Site oficial para iniciativas de saúde digital, promovendo transparência.",
            highlight: "Foco em acessibilidade e navegação fluida em dispositivos móveis.",
        },
        {
            id: "captacao-recursos",
            name: "Sistema de Captação de Recursos",
            tech: ["WordPress", "PHP", "JetEngine"],
            description: "Gestão de editais e financiamentos para projetos de saúde pública.",
            highlight: "Fortalecimento da governança digital e sustentabilidade financeira.",
        },
        {
            id: "portal-telesaude",
            name: "Portal da Telesaúde",
            tech: ["WordPress", "PHP", "Elementor"],
            description: "Plataforma para teleconsultas e monitoramento remoto de pacientes.",
            highlight: "Expansão do acesso à saúde em áreas remotas de Rondônia.",
        },
    ];
}

export function getActivityLog(locale: Locale) {
    if (locale === "en") {
        return [
            { hash: "d8f2a1c", message: "feat: hydrological data scrapper (RPA)", time: "2h ago" },
            { hash: "b5e9c0f", message: "fix: WhatsApp API notification service", time: "5h ago" },
            { hash: "7a3d2e1", message: "feat: CIGES dashboards integration", time: "1d ago" },
            { hash: "e9b4c6a", message: "feat: push notifications health alerts", time: "2d ago" },
            { hash: "f6d3s2a", message: "refactor: optimize patient transfer SQL queries", time: "3d ago" },
            { hash: "c1v8n9m", message: "feat: build health digital portal (SESAU-RO)", time: "4d ago" },
            { hash: "k4j7h2l", message: "fix: responsive layout for Telesaúde portal", time: "1w ago" },
            { hash: "p0o9i8u", message: "docs: cybersecurity risk assessment report", time: "2w ago" },
            { hash: "n5m3v2x", message: "chore: setup Airflow DAGs for data pipeline", time: "3w ago" },
            { hash: "u8y1t9r", message: "test: integration tests for RPA selenium module", time: "1m ago" },
            { hash: "q1w2e3r", message: "ci: github actions for security scanning (OWASP)", time: "1m ago" },
            { hash: "l9k8j7h", message: "fix: Linux Apache server hardening", time: "1m ago" },
        ];
    }

    return [
        { hash: "d8f2a1c", message: "feat: coletor de dados hidrológicos (RPA)", time: "2h atrás" },
        { hash: "b5e9c0f", message: "fix: serviço de notificação WhatsApp API", time: "5h atrás" },
        { hash: "7a3d2e1", message: "feat: integração de dashboards CIGES", time: "1d atrás" },
        { hash: "e9b4c6a", message: "feat: notificações push alertas de saúde", time: "2d atrás" },
        { hash: "f6d3s2a", message: "refactor: otimização de queries SQL fluxo paciente", time: "3d atrás" },
        { hash: "c1v8n9m", message: "feat: desenvolvimento portal saúde digital (SESAU-RO)", time: "4d atrás" },
        { hash: "k4j7h2l", message: "fix: layout responsivo portal telesaúde", time: "1sem atrás" },
        { hash: "p0o9i8u", message: "docs: relatório de análise de riscos de segurança", time: "2sem atrás" },
        { hash: "n5m3v2x", message: "chore: configuração de DAGs Airflow para pipeline", time: "3sem atrás" },
        { hash: "u8y1t9r", message: "test: testes de integração módulo RPA selenium", time: "1mês atrás" },
        { hash: "q1w2e3r", message: "ci: automação de scan de segurança (OWASP)", time: "1mês atrás" },
        { hash: "l9k8j7h", message: "fix: hardening de servidor Apache Linux", time: "1mês atrás" },
    ];
}

// Keep backward-compatible exports for non-i18n usage
export const EXPERIENCE = getExperience("pt-BR");
export const EDUCATION = getEducation("pt-BR");
export const PROJECTS = getProjects("pt-BR");
export const ACTIVITY_LOG = getActivityLog("pt-BR");
