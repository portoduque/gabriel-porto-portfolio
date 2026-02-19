
export const PROFILE = {
    name: "Gabriel Porto",
    role: "Desenvolvedor Full-Stack",
    location: "Porto Velho - RO, Brasil",
    email: "portoduque@outlook.com",
    phone: "(21) 97572-2770",
    social: {
        linkedin: "https://www.linkedin.com/in/portoduque",
        github: "https://github.com/portoduque",
    },
    summary:
        "Transformando problemas complexos em produtos digitais escaláveis. Como Desenvolvedor Full-Stack, utilizo ecossistemas como Python e PHP para construir aplicações Web e Mobile (Flutter) focadas em UX e alta disponibilidade. Meu diferencial está na visão 360º: uno código de alta qualidade com automação RPA e uma infraestrutura segura (CCNA/Linux), garantindo que a solução não apenas funcione, mas seja eficiente e protegida.",
    highlights: [
        { label: "CERT", value: "CCNA + Google Cybersecurity" },
        { label: "TECH", value: "Full Stack + DevOps + Security" }
    ]
};

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
        "Git",
        "GitHub",
        "Selenium WebDriver",
        "RPA",
        "Airflow",
    ],
};

export const EXPERIENCE = [
    {
        role: "Analista e Desenvolvedor de Sistemas",
        period: "Dezembro 2024 – Presente",
        description: [
            "Desenvolvimento de sites e sistemas web (WordPress, PHP/MadBuilder).",
            "Criação de automações (RPA) com Python e Selenium.",
            "Implantação e configuração de servidores Linux (Apache).",
            "Levantamento de requisitos e modelagem de sistemas para a área da saúde.",
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
        role: "Experiências Internacionais (Bar Waiter e Kitchen Utility)",
        period: "2021 – 2023",
        description: [
            "Atendimento de alto padrão em ambientes multiculturais.",
            "Operação de sistemas (Micros) e conformidade com padrões CDC/FDA.",
        ],
    },
];

export const EDUCATION = [
    {
        degree: "Pós-graduação em Ciência de Dados",
        year: "2026 – Presente",
    },
    {
        degree: "Pós-graduação em Gestão na Cibersegurança Empresarial",
        year: "2025",
    },
    {
        degree: "Bacharelado em Sistemas de Informação",
        year: "2017 – 2021",
    },
];

export const CERTIFICATES = [
    "Cisco Certified Network Associate (CCNA)",
    "Google Cybersecurity Professional Certificate",
    "CS50’s Introduction to Programming with Python (Harvard)",
    "C# COMPLETO - Programação Orientada a Objetos",
    "CompTIA Security+ (SY0-701) Complete Course",
    "Curso de Administrador Linux",
    "Google Cloud Foundations Academy"
];

export const PROJECTS = [
    {
        id: "rpa-ana",
        name: "Automação de Coleta de Dados Hidrológicos (RPA)",
        tech: ["Python", "Selenium WebDriver"],
        description:
            "Solução para coleta diária e automática de dados históricos de qualidade da água da ANA.",
        highlight:
            "Redução de falhas manuais e organização automatizada de diretórios por estação.",
    },
    {
        id: "fluxo-paciente",
        name: "Sistema Fluxo Transporte Paciente",
        tech: ["PHP", "MadBuilder", "PostgreSQL", "MySQL"],
        description:
            "Gestão de logística inter-hospitalar para transferência de pacientes.",
        highlight:
            "Redução de 40% no tempo de organização e integração com WhatsApp API.",
    },
    {
        id: "portal-ciges",
        name: "Portal do CIGES (Saúde Pública)",
        tech: ["C#", ".NET", "JavaScript", "Bootstrap"],
        description:
            "Plataforma de dashboards dinâmicos para indicadores de saúde de Rondônia.",
        highlight:
            "Centralização de dados críticos para decisões baseadas em evidências (SESAU-RO).",
    },
    {
        id: "respirar-mobile",
        name: "Projeto RespirAR (Mobile)",
        tech: ["Flutter", "FlutterFlow", "Firebase"],
        description:
            "Aplicativo focado em saúde e bem-estar com notificações push e geolocalização.",
        highlight: "Experiência intuitiva multiplataforma (Android/iOS).",
    },
    {
        id: "saude-digital",
        name: "Portal da Saúde Digital (SESAU-RO)",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        description:
            "Site oficial para iniciativas de saúde digital, promovendo transparência.",
        highlight:
            "Foco em acessibilidade e navegação fluida em dispositivos móveis.",
    },
    {
        id: "captacao-recursos",
        name: "Sistema de Captação de Recursos",
        tech: ["WordPress", "PHP", "JetEngine"],
        description:
            "Gestão de editais e financiamentos para projetos de saúde pública.",
        highlight: "Fortalecimento da governança digital e sustentabilidade financeira.",
    },
    {
        id: "portal-telesaude",
        name: "Portal da Telesaúde",
        tech: ["WordPress", "PHP", "Elementor"],
        description:
            "Plataforma para teleconsultas e monitoramento remoto de pacientes.",
        highlight: "Expansão do acesso à saúde em áreas remotas de Rondônia.",
    },
];

export const ACTIVITY_LOG = [
    { hash: "a7b2c9d", message: "feat: RPA automation v2", time: "2h ago" },
    { hash: "f3e1a4b", message: "fix: whatsapp api integration", time: "5h ago" },
    { hash: "9c8d7e6", message: "feat: dashboard CIGES", time: "1d ago" },
    { hash: "2b5a1f0", message: "docs: update readme", time: "2d ago" },
];
