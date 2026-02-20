import type { Locale } from "./i18n";

const pt: Record<string, string> = {
    // Profile
    "profile.role": "Desenvolvedor Full-Stack",
    "profile.summary":
        "Transformando problemas complexos em produtos digitais escaláveis. Como Desenvolvedor Full-Stack, utilizo ecossistemas como Python e PHP para construir aplicações Web e Mobile (Flutter) focadas em UX e alta disponibilidade. Meu diferencial está na visão 360º: uno código de alta qualidade com automação RPA e uma infraestrutura segura (CCNA/Linux), garantindo que a solução não apenas funcione, mas seja eficiente e protegida.",

    // Hero
    "hero.title.prefix": "Transformando",
    "hero.title.highlight": "problemas em produtos digitais",
    "hero.cta.projects": "cd /projetos",
    "hero.cta.contact": "./contato.sh",

    // Expertise
    "expertise.title": "Competências",
    "expertise.scalability": "Escalabilidade",
    "expertise.scalability.comment": "// Design modular",
    "expertise.precision": "Precisão",
    "expertise.precision.comment": "// Pixel-perfect",
    "expertise.performance": "Performance",
    "expertise.performance.comment": "// Otimizado",

    // System Overview
    "system.loc": "Porto Velho, Brasil",
    "system.status": "DISPONÍVEL",
    "system.label.user": "USUARIO",
    "system.label.role": "CARGO",
    "system.label.loc": "LOCAL",
    "system.label.stack": "STACK",
    "system.label.tools": "FERRAMENTAS",
    "system.label.status": "STATUS",
    "system.prompt": "usuario@portfolio:~$",

    // Sections
    "sections.projects": "projetos",
    "sections.experience": "Experiência",
    "sections.education": "Educação",

    // Navbar (Tabs)
    "nav.main": "main.py",
    "nav.projects": "projetos.json",
    "nav.experience": "curriculo.md",
    "nav.contact": "contato.sh",
    "nav.resume": "curriculo.pdf",

    // Contact
    "contact.social": "Links Sociais:",

    // Experience
    "exp.0.role": "Analista e Desenvolvedor de Sistemas",
    "exp.0.period": "Dezembro 2024 – Presente",
    "exp.0.desc.0": "Desenvolvimento de sites e sistemas web (WordPress, PHP/MadBuilder).",
    "exp.0.desc.1": "Criação de automações (RPA) com Python e Selenium.",
    "exp.0.desc.2": "Implantação e configuração de servidores Linux (Apache).",
    "exp.0.desc.3": "Levantamento de requisitos e modelagem de sistemas para a área da saúde.",
    "exp.1.role": "Suporte Técnico de TI",
    "exp.1.period": "Agosto 2024 – Dezembro 2024",
    "exp.1.desc.0": "Manutenção, formatação e otimização de infraestrutura.",
    "exp.1.desc.1": "Troubleshooting avançado em sistemas comerciais e backups críticos.",
    "exp.1.desc.2": "Atendimento especializado e implementação de segurança digital.",
    "exp.2.role": "Experiências Internacionais (Bar Waiter e Kitchen Utility)",
    "exp.2.period": "2021 – 2023",
    "exp.2.desc.0": "Atendimento de alto padrão em ambientes multiculturais.",
    "exp.2.desc.1": "Operação de sistemas (Micros) e conformidade com padrões CDC/FDA.",

    // Education
    "edu.0.degree": "Pós-graduação em Ciência de Dados",
    "edu.0.year": "2026 – Presente",
    "edu.1.degree": "Pós-graduação em Gestão na Cibersegurança Empresarial",
    "edu.1.year": "2025",
    "edu.2.degree": "Bacharelado em Sistemas de Informação",
    "edu.2.year": "2017 – 2021",

    // Projects
    "proj.rpa-ana.name": "Automação de Coleta de Dados Hidrológicos (RPA)",
    "proj.rpa-ana.desc": "Solução para coleta diária e automática de dados históricos de qualidade da água da ANA.",
    "proj.rpa-ana.highlight": "Redução de falhas manuais e organização automatizada de diretórios por estação.",

    "proj.fluxo-paciente.name": "Sistema Fluxo Transporte Paciente",
    "proj.fluxo-paciente.desc": "Gestão de logística inter-hospitalar para transferência de pacientes.",
    "proj.fluxo-paciente.highlight": "Redução de 40% no tempo de organização e integração com WhatsApp API.",

    "proj.portal-ciges.name": "Portal do CIGES (Saúde Pública)",
    "proj.portal-ciges.desc": "Plataforma de dashboards dinâmicos para indicadores de saúde de Rondônia.",
    "proj.portal-ciges.highlight": "Centralização de dados críticos para decisões baseadas em evidências (SESAU-RO).",

    "proj.respirar-mobile.name": "Projeto RespirAR (Mobile)",
    "proj.respirar-mobile.desc": "Aplicativo focado em saúde e bem-estar com notificações push e geolocalização.",
    "proj.respirar-mobile.highlight": "Experiência intuitiva multiplataforma (Android/iOS).",

    "proj.saude-digital.name": "Portal da Saúde Digital (SESAU-RO)",
    "proj.saude-digital.desc": "Site oficial para iniciativas de saúde digital, promovendo transparência.",
    "proj.saude-digital.highlight": "Foco em acessibilidade e navegação fluida em dispositivos móveis.",

    "proj.captacao-recursos.name": "Sistema de Captação de Recursos",
    "proj.captacao-recursos.desc": "Gestão de editais e financiamentos para projetos de saúde pública.",
    "proj.captacao-recursos.highlight": "Fortalecimento da governança digital e sustentabilidade financeira.",

    "proj.portal-telesaude.name": "Portal da Telesaúde",
    "proj.portal-telesaude.desc": "Plataforma para teleconsultas e monitoramento remoto de pacientes.",
    "proj.portal-telesaude.highlight": "Expansão do acesso à saúde em áreas remotas de Rondônia.",

    // Activity Log
    "activity.filename": "atividade_git.log",
    "activity.0.message": "feat: automação RPA v2",
    "activity.0.time": "2h atrás",
    "activity.1.message": "fix: integração api whatsapp",
    "activity.1.time": "5h atrás",
    "activity.2.message": "feat: dashboard CIGES",
    "activity.2.time": "1d atrás",
    "activity.3.message": "docs: atualização readme",
    "activity.3.time": "2d atrás",
};

const en: Record<string, string> = {
    // Profile
    "profile.role": "Full-Stack Developer",
    "profile.summary":
        "Turning complex problems into scalable digital products. As a Full-Stack Developer, I leverage ecosystems like Python and PHP to build Web and Mobile (Flutter) applications focused on UX and high availability. My edge is a 360° vision: I combine high-quality code with RPA automation and a secure infrastructure (CCNA/Linux), ensuring solutions are not only functional but efficient and protected.",

    // Hero
    "hero.title.prefix": "Transforming",
    "hero.title.highlight": "problems into digital products",
    "hero.cta.projects": "cd /projects",
    "hero.cta.contact": "./contact.sh",

    // Expertise
    "expertise.title": "Expertise",
    "expertise.scalability": "Scalability",
    "expertise.scalability.comment": "// Modular design",
    "expertise.precision": "Precision",
    "expertise.precision.comment": "// Pixel-perfect",
    "expertise.performance": "Performance",
    "expertise.performance.comment": "// Optimized",

    // System Overview
    "system.loc": "Porto Velho, Brazil",
    "system.status": "AVAILABLE",
    "system.label.user": "USER",
    "system.label.role": "ROLE",
    "system.label.loc": "LOC",
    "system.label.stack": "STACK",
    "system.label.tools": "TOOLS",
    "system.label.status": "STATUS",
    "system.prompt": "user@portfolio:~$",

    // Sections
    "sections.projects": "projects",
    "sections.experience": "Experience",
    "sections.education": "Education",

    // Navbar (Tabs)
    "nav.main": "main.py",
    "nav.projects": "projects.json",
    "nav.experience": "experience.md",
    "nav.contact": "contact.sh",
    "nav.resume": "resume.pdf",

    // Contact
    "contact.social": "Social Links:",

    // Experience
    "exp.0.role": "Systems Analyst & Developer",
    "exp.0.period": "December 2024 – Present",
    "exp.0.desc.0": "Development of websites and web systems (WordPress, PHP/MadBuilder).",
    "exp.0.desc.1": "Creation of automations (RPA) with Python and Selenium.",
    "exp.0.desc.2": "Deployment and configuration of Linux servers (Apache).",
    "exp.0.desc.3": "Requirements gathering and system modeling for healthcare.",
    "exp.1.role": "IT Technical Support",
    "exp.1.period": "August 2024 – December 2024",
    "exp.1.desc.0": "Maintenance, formatting and infrastructure optimization.",
    "exp.1.desc.1": "Advanced troubleshooting in commercial systems and critical backups.",
    "exp.1.desc.2": "Specialized support and digital security implementation.",
    "exp.2.role": "International Experience (Bar Waiter & Kitchen Utility)",
    "exp.2.period": "2021 – 2023",
    "exp.2.desc.0": "High-standard service in multicultural environments.",
    "exp.2.desc.1": "System operations (Micros) and CDC/FDA compliance.",

    // Education
    "edu.0.degree": "Postgraduate in Data Science",
    "edu.0.year": "2026 – Present",
    "edu.1.degree": "Postgraduate in Enterprise Cybersecurity Management",
    "edu.1.year": "2025",
    "edu.2.degree": "Bachelor's in Information Systems",
    "edu.2.year": "2017 – 2021",

    // Projects
    "proj.rpa-ana.name": "Hydrological Data Collection Automation (RPA)",
    "proj.rpa-ana.desc": "Solution for daily and automatic collection of historical water quality data from ANA.",
    "proj.rpa-ana.highlight": "Reduction of manual errors and automated directory organization by station.",

    "proj.fluxo-paciente.name": "Patient Transport Flow System",
    "proj.fluxo-paciente.desc": "Inter-hospital logistics management for patient transfers.",
    "proj.fluxo-paciente.highlight": "40% reduction in organization time and WhatsApp API integration.",

    "proj.portal-ciges.name": "CIGES Portal (Public Health)",
    "proj.portal-ciges.desc": "Dynamic dashboard platform for health indicators in Rondônia state.",
    "proj.portal-ciges.highlight": "Centralization of critical data for evidence-based decisions (SESAU-RO).",

    "proj.respirar-mobile.name": "RespirAR Project (Mobile)",
    "proj.respirar-mobile.desc": "Health and wellness app with push notifications and geolocation.",
    "proj.respirar-mobile.highlight": "Intuitive cross-platform experience (Android/iOS).",

    "proj.saude-digital.name": "Digital Health Portal (SESAU-RO)",
    "proj.saude-digital.desc": "Official website for digital health initiatives, promoting transparency.",
    "proj.saude-digital.highlight": "Focus on accessibility and fluid mobile navigation.",

    "proj.captacao-recursos.name": "Resource Acquisition System",
    "proj.captacao-recursos.desc": "Management of grants and funding for public health projects.",
    "proj.captacao-recursos.highlight": "Strengthening digital governance and financial sustainability.",

    "proj.portal-telesaude.name": "Telehealth Portal",
    "proj.portal-telesaude.desc": "Platform for teleconsultations and remote patient monitoring.",
    "proj.portal-telesaude.highlight": "Expanding healthcare access in remote areas of Rondônia.",

    // Activity Log
    "activity.filename": "git_activity.log",
    "activity.0.message": "feat: RPA automation v2",
    "activity.0.time": "2h ago",
    "activity.1.message": "fix: whatsapp api integration",
    "activity.1.time": "5h ago",
    "activity.2.message": "feat: dashboard CIGES",
    "activity.2.time": "1d ago",
    "activity.3.message": "docs: update readme",
    "activity.3.time": "2d ago",
};


export const translations: Record<Locale, Record<string, string>> = {
    "pt-BR": pt,
    en,
};
