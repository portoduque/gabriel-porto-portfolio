
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

const PROFILE_EN = {
    ...PROFILE,
    role: "Full-Stack Developer",
    location: "Porto Velho - RO, Brazil",
    summary:
        "Turning complex problems into scalable digital products. As a Full-Stack Developer, I leverage ecosystems like Python and PHP to build Web and Mobile (FlutterFlow) applications focused on UX and high availability. My edge is a 360° vision: I combine high-quality code with RPA automation and a secure infrastructure (CCNA/Linux), ensuring solutions are not only functional but efficient and protected.",
};

const PROFILE_PT = {
    ...PROFILE,
    role: "Desenvolvedor Full-Stack",
    location: "Porto Velho - RO, Brasil",
    summary:
        "Transformando problemas complexos em produtos digitais escaláveis. Como Desenvolvedor Full-Stack, utilizo ecossistemas como Python e PHP para construir aplicações Web e Mobile (FlutterFlow) focadas em UX e alta disponibilidade. Meu diferencial está na visão 360º: uno código de alta qualidade com automação RPA e uma infraestrutura segura (CCNA/Linux), garantindo que a solução não apenas funcione, mas seja eficiente e protegida.",
};

export function getProfile(locale: Locale) {
    return locale === "en" ? PROFILE_EN : PROFILE_PT;
}


const SKILLS_EN = {
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

const SKILLS_PT = {
    languages: ["PHP", "Python", "JavaScript (ES6+)", "HTML5", "CSS3"],
    frameworks: ["Bootstrap", "MadBuilder (PHP)", "Flutter/Dart"],
    mobile: ["Flutter", "FlutterFlow"],
    infrastructure: [
        "Linux (Apache)",
        "Windows Server 2016 (AD, Group Policy)",
        "Cisco CCNA",
        "Resolução de Problemas (Troubleshooting)",
    ],
    security: [
        "Google Cybersecurity Professional",
        "Conformidade LGPD",
        "Mitigação de Riscos",
    ],
    tools: [
        "WordPress (Elementor, JetEngine)",
        "Jira",
        "Trello",
        "Metodologias Ágeis",
        "GitHub",
        "Selenium WebDriver",
        "RPA",
        "Airflow",
        "Madbuilder",
        "FlutterFlow",
    ],
};

export function getSkills(locale: Locale) {
    return locale === "en" ? SKILLS_EN : SKILLS_PT;
}

export const SKILLS = SKILLS_PT;

const EXPERIENCE_EN = [
    {
        role: "Systems Analyst & Developer",
        period: "December 2024 – Present",
        description: [
            "Automated critical processes through RPA flows (Python/Airflow).",
            "Develop Web (PHP/MadBuilder) and Mobile (Flutter/FlutterFlow) applications focused on high availability and user experience.",
            "Modeled scalable system architectures to meet the state's public health demand.",
            "Linux server deployment and configuration (Apache).",
            "Requirements gathering and project management.",
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

const EXPERIENCE_PT = [
    {
        role: "Analista e Desenvolvedor de Sistemas",
        period: "Dezembro 2024 – Presente",
        description: [
            "Automatizei processos críticos através de fluxos RPA (Python/Airflow)",
            "Desenvolvo aplicações Web (PHP/MadBuilder) e Mobile (Flutter/FlutterFlow) focadas em alta disponibilidade e experiência do usuário",
            "Modelei arquiteturas de sistemas escaláveis para atender à demanda de saúde pública do estado.",
            "Implantação e configuração de servidores Linux (Apache).",
            "Levantamento de requisitos e gestão de projetos.",
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
        ],
    },
];

export function getExperience(locale: Locale) {
    return locale === "en" ? EXPERIENCE_EN : EXPERIENCE_PT;
}

const EDUCATION_EN = [
    { degree: "Postgraduate in Data Science", year: "2026 – 2027 (Focus College)" },
    { degree: "Postgraduate in Enterprise Cybersecurity Management", year: "2025 – 2026 (Estácio)" },
    { degree: "Bachelor's in Information Systems", year: "2017 – 2021 (Estácio)" },
];

const EDUCATION_PT = [
    { degree: "Pós-graduação em Ciência de Dados", year: "2026 – 2027 (Faculdade Focus)" },
    { degree: "Pós-graduação em Gestão na Cibersegurança Empresarial", year: "2025 – 2026 (Estácio)" },
    { degree: "Bacharelado em Sistemas de Informação", year: "2017 – 2021 (Estácio)" },
];

export function getEducation(locale: Locale) {
    return locale === "en" ? EDUCATION_EN : EDUCATION_PT;
}

const CERTIFICATES_EN = [
    "Cisco Certified Network Associate (CCNA)",
    "Google Cybersecurity Professional Certificate",
    "CS50's Introduction to Programming with Python (Harvard)",
    "C# COMPLETE - Object Oriented Programming",
    "CompTIA Security+ (SY0-701) Complete Course",
    "Linux Administrator Course",
    "Google Cloud Foundations Academy"
];

const CERTIFICATES_PT = [
    "Cisco Certified Network Associate (CCNA)",
    "Google Cybersecurity Professional Certificate",
    "CS50's Introduction to Programming with Python (Harvard)",
    "C# COMPLETO - Programação Orientada a Objetos",
    "CompTIA Security+ (SY0-701) Curso Completo",
    "Curso de Administrador Linux",
    "Google Cloud Foundations Academy"
];

export function getCertificates(locale: Locale) {
    return locale === "en" ? CERTIFICATES_EN : CERTIFICATES_PT;
}

export const CERTIFICATES = CERTIFICATES_PT;

export interface ProjectMedia {
    type: "image" | "video";
    url: string;
    alt?: string;
}

export interface ProjectMetric {
    label: string;
    value: string;
    icon?: string;
}

export interface Project {
    id: string;
    name: string;
    tech: string[];
    description: string;
    highlight: string;
    visibility: "public" | "private";
    repoUrl?: string;
    content?: string;
    media?: ProjectMedia[];
    metrics?: ProjectMetric[];
    role?: string;
    date?: string;
    impact?: string;
    status?: string;
    liveUrl?: string;
}

const PROJECTS_EN: Project[] = [
    {
        id: "rpa-ana",
        name: "Hydrological Data Collection Automation (RPA)",
        tech: ["Python", "Selenium", "Pathlib", "ActionChains"],
        description: "Automated solution for daily collection of historical water quality data from ANA (National Water Agency).",
        highlight: "Multi-OS architecture with dynamic download management and sequential resilience.",
        visibility: "public" as const,
        repoUrl: "https://github.com/portoduque/hidro-telemetria-automation",
        content: `
# Hydrological Data Collection Automation (RPA)

This project was developed to automate the daily collection of historical water quality data from the **National Water and Sanitation Agency (ANA)**. It replaces a manual, error-prone process with a robust, autonomous execution engine.

## Technical Architecture

- **Iterative Execution Engine**: Sequential processing of multiple hydrological stations (Ji-Paraná, Ariquemes, Porto Velho, Guajará) with individual error handling to ensure global flow stability.
- **Dynamic Browser Profiling**: Real-time manipulation of \`ChromeOptions\` to manage download directories programmatically based on the active station.
- **Multi-OS Portability**: Leverages \`pathlib\` for cross-platform file system operations, compatible with Windows and Linux environments.
- **Advanced UI Interaction**: Implementation of \`ActionChains\` for complex hover-based menu navigation and \`WebDriverWait\` for dynamic synchronization.

## Key Features

- **Automated Station Mapping**: Intelligent lookup and navigation by station code.
- **Dynamic Filtering**: Automated application of date filters and data synchronization.
- **Autonomous Organization**: Files are automatically organized into pre-defined local directories.
- **Error Resilience**: Sequential execution with individual station failure logging.
`,
        media: [
            { type: 'video', url: '/projects/rpa-ana/gracacao-robo-hidrotelemetria.mp4', alt: 'Real-time demonstration of the RPA robot collecting data' }
        ],
        role: "Systems Analyst & Developer",
        date: "2025",
        impact: "Replaced a manual, error-prone daily process with a fully autonomous execution engine.",
        metrics: [
            { label: "Stations", value: "4", icon: "location_on" },
            { label: "Compatibility", value: "Multi-OS", icon: "devices" },
            { label: "Process", value: "100% Auto", icon: "smart_toy" },
            { label: "Resilience", value: "Sequential", icon: "shield" }
        ]
    },
    {
        id: "fluxo-paciente",
        name: "Patient Transport Flow System (Fluxo Paciente)",
        tech: ["PHP", "MadBuilder", "PostgreSQL", "MySQL", "MariaDB", "WhatsApp API", "ViaCEP", "Bootstrap"],
        description: "Inter-hospital logistics management for patient transfers with optimized routing and real-time communication.",
        highlight: "40% reduction in organization time and 30% optimization in transport costs.",
        visibility: "private" as const,
        role: "Systems Analyst & Developer",
        date: "June 2025",
        status: "In Development",
        impact: "Revolutionized patient transfer logistics through intelligent automation and real-time multi-platform integration.",
        metrics: [
            { label: "Org. Time", value: "-40%", icon: "timer" },
            { label: "Costs", value: "-30%", icon: "savings" },
            { label: "Sync", value: "Real-time", icon: "sync" },
            { label: "Standard", value: "HL7/FHIR", icon: "verified" }
        ],
        media: [
            { type: 'image', url: '/projects/fluxo-paciente/1 - fluxotp.png', alt: 'Central Management of Inter-hospital Transport Requests' },
            { type: 'image', url: '/projects/fluxo-paciente/2 - fluxotp.png', alt: 'Transport Request Registration and Editing Interface' },
            { type: 'image', url: '/projects/fluxo-paciente/3 - fluxotp.png', alt: 'Patient Information and Registry Management' },
            { type: 'image', url: '/projects/fluxo-paciente/4 - fluxotp.png', alt: 'Healthcare Units and Hospital Configuration' }
        ],
        content: `
# Patient Transport Flow System (Fluxo Paciente)

Comprehensive web system for managing inter-hospital transport flow, developed with robust architecture and multi-platform integration. This solution revolutionizes the logistics of patient transfers between cities and health units through intelligent automation and real-time communication.

## Technical Highlights

- **MVC Architecture & RESTful APIs**: Robust structure ensuring multi-platform integration and real-time data synchronization.
- **Automated Logistics Workflow**: Streamlined flow for transport requests with optimized routing (distance and time calculations).
- **Proprietary Visual Builder**: Custom visual tool for database migration management and versioning.
- **Health Interoperability**: Integration with hospital systems using international standards (**HL7/FHIR**).
- **Security & LGPD Compliance**: Advanced permission control and strict adherence to data protection laws.
- **Scalability**: Scalable microservices with distributed caching for high performance.

## Business Impact

- **Operational Efficiency**: 40% reduction in the time required to organize transfers.
- **Financial Savings**: 30% optimization in transport costs.
- **Improved Communication**: Real-time updates for medical teams and patients via WhatsApp API integration.
`
    },
    {
        id: "portal-ciges",
        name: "CIGES Portal (Strategic Health Dashboard)",
        tech: ["HTML5", "CSS3", "JavaScript Vanilla", "Bootstrap", "CSS Grid/Flexbox", "C#", ".NET"],
        description: "Centralized digital platform for public health strategic data in Rondônia, supporting evidence-based management of the Unified Health System (SUS).",
        highlight: "Development of interactive dashboards for monitoring bed occupancy, hospital construction progress, and environmental health crises.",
        visibility: "public" as const,
        role: "Systems Analyst & Developer",
        date: "January 2025",
        impact: "Transformed health data management in Rondônia by providing real-time visibility into critical indicators for SESAU-RO.",
        liveUrl: "https://ciges.sesau.ro.gov.br",
        metrics: [
            { label: "Data Quality", value: "Strategic", icon: "insights" },
            { label: "Design", value: "Responsive", icon: "devices" },
            { label: "Integration", value: "REST APIs", icon: "api" },
            { label: "Accessibility", value: "W3C / Standards", icon: "accessibility" }
        ],
        media: [
            { type: 'image', url: '/projects/portal-ciges/ciges 1.png', alt: 'CIGES Portal Home Page - Main strategic pillars' },
            { type: 'image', url: '/projects/portal-ciges/ciges 2.png', alt: 'Health Management Dashboard - Water crisis, construction progress, and bed occupancy indicators' },
            { type: 'image', url: '/projects/portal-ciges/ciges 3.png', alt: 'Support and Contact Section - Institutional location and dynamic help forms' }
        ],
        content: `
# CIGES Portal (Strategic Health Dashboard)

The **CIGES Portal** is a digital platform that centralizes strategic health data to support the management of the Unified Health System (**SUS**) in Rondônia. It offers detailed reports, health indicators, strategic analysis, and data visualization tools, allowing managers, researchers, and health professionals to make evidence-based decisions.

## Technical Architecture & Insights

- **Interactive Dashboard Development**: Creation of intuitive interfaces for visualizing public health indicators, including core modules such as **Health Management**, **Health Care**, and **Health Surveillance**.
- **Specialized Monitoring Modules**:
    - **Water Crisis Panel**: Real-time monitoring of environmental indicators impacting regional health.
    - **Health Construction Dashboard**: Strategic tracking of hospital building and renovation progress across the state.
    - **Beds Dashboard**: Critical visualization of bed occupancy and availability for immediate management action.
- **REST API Integration**: Secure consumption of APIs from the **SETIC-RO** backend team, ensuring data integrity and interoperability.
- **Modern UX/UI**: Implementation of a responsive and semantic design using **CSS Grid, Flexbox, and Bootstrap**, compliant with W3C accessibility standards.

## Generated Impact

- **Strategic Centralization**: Unified access to critical SUS data for the entire state of Rondônia.
- **Decision Support**: Significant improvement in the speed and accuracy of decisions regarding resource allocation and emergency response.
- **Transparency & Governance**: Enhanced digital governance through transparent monitoring of health projects and regional trends.
`
    },
    {
        id: "respirar-mobile",
        name: "RespirAR Project (Mobile)",
        tech: ["Flutter & Dart", "FlutterFlow", "PHP", "MadBuilder", "Firebase", "PostgreSQL", "REST API"],
        description: "Health and wellness mobile app providing an intuitive experience for healthcare monitoring and management.",
        highlight: "Accelerated visual development with FlutterFlow and a robust backend integrated with Firebase and MadBuilder.",
        visibility: "public" as const,
        role: "Systems Analyst & Developer",
        date: "October 2025",
        impact: "Centralization of mobile health services with push notifications and geolocation, optimizing patient follow-up.",
        liveUrl: "https://respirar.sesau.ro.gov.br",
        metrics: [
            { label: "Platforms", value: "iOS & Android", icon: "smartphone" },
            { label: "Sync", value: "Real-time", icon: "sync" },
            { label: "Resilience", value: "Offline Mode", icon: "cloud_off" },
            { label: "UX", value: "Material Design", icon: "palette" }
        ],
        media: [
            { type: 'image', url: '/projects/respirar-mobile/respirar-1.png', alt: 'RespirAR Mobile App Interface 1' },
            { type: 'image', url: '/projects/respirar-mobile/respirar-2.png', alt: 'RespirAR Mobile App Interface 2' }
        ],
        content: `
# RespirAR Project (Mobile)

The **RespirAR** project is a robust mobile application focused on health and wellness, designed to provide a seamless experience for both end-users and system administrators.

## Technical Highlights & Architecture

- **Accelerated Visual Development**: Leveraged **FlutterFlow** to speed up UI development and advanced feature integration.
- **Hybrid Backend**: Efficient integration with **Firebase** (Firestore, Auth, Cloud Functions) for real-time data and **MadBuilder** (PHP) for REST API services and a web administrative panel.
- **Data Persistence**: NoSQL (Firestore) database strategy for mobile and PostgreSQL for administrative management.
- **Native Features**: Implementation of intelligent push notifications, geolocation, and integration with native Android and iOS APIs.
- **Design & Accessibility**: Intuitive and responsive interface based on **Material Design** standards, with a total focus on accessibility.

## System Features

- Full user and profile management.
- Real-time health monitoring system.
- Integrated reports and analytics.
- Web administrative interface for global management.
`
    },
    {
        id: "saude-digital",
        name: "Digital Health Portal (SESAU-RO)",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "CSS Grid/Flexbox", "C#", ".NET"],
        description: "Official portal for the Digital Health Secretariat of the State of Rondônia Health Department, centralizing health initiatives, real-time data, and technological advances.",
        highlight: "Full-scale UI development and optimization focused on accessibility, responsiveness, and state-level healthcare service integration.",
        visibility: "public" as const,
        role: "Systems Analyst & Developer",
        date: "December 2024",
        status: "Active",
        impact: "Revolutionized digital health transparency in Rondônia, aligning government data with citizen accessibility needs.",
        liveUrl: "https://saudedigital.sesau.ro.gov.br",
        metrics: [
            { label: "Accessibility", value: "W3C Standards", icon: "accessibility" },
            { label: "Design", value: "Modern/Fluid", icon: "devices" },
            { label: "Performance", value: "Optimized", icon: "speed" },
            { label: "Gov Solutions", value: "Integrated", icon: "public" }
        ],
        media: [
            { type: 'image', url: '/projects/saude-digital/1 - saudedigital.png', alt: 'Digital Health Portal - Navigation and Accessibility' },
            { type: 'image', url: '/projects/saude-digital/2 - saudedigital.png', alt: 'Responsive Layout and Modern Interface' },
            { type: 'image', url: '/projects/saude-digital/3 - saudedigital.png', alt: 'Integration with Health Services and Data' },
            { type: 'image', url: '/projects/saude-digital/4 - saudedigital.png', alt: 'User Experience and Call to Action sections' }
        ],
        content: `
# Digital Health Portal (SESAU-RO)

The **Digital Health Portal** is the official gateway for technology initiatives in health for the State of Rondônia. It centralizes information on technological advances, projects, and public data, promoting transparency and bridging the gap between the State and its citizens.

## Overview

This project consisted of the **creation and optimization of the User Interface** for the Digital Health Portal, focusing on **accessibility, responsiveness, and integration** with health services such as **CIGES and Telehealth**. Development was carried out using modern technologies, ensuring an efficient navigation experience adapted to multiple devices.

## Key Development Tasks

- **Responsive & Intuitive Layouts**: Developed using HTML5, CSS3, and JavaScript.
- **Technical Health Data Presentation**: Clear visualization of data related to CIGES and Telehealth.
- **Interactive Component Creation**: Implementation of dynamic menus, news carousels, and FAQ forms.

## Mobile Optimization

- **Advanced CSS Techniques**: Use of media queries, **CSS Grid/Flexbox**, and **Bootstrap** to ensure seamless adaptation across all screen sizes.
- **Cross-Browser Verification**: Rigorous compatibility testing on Chrome, Firefox, and Edge, including legacy support.

## Multidisciplinary Collaboration

- **Institutional Alignment**: Participation in acceptance meetings to ensure compliance with formal requirements.
- **API Integration**: Seamless integration with the **GSTEC** backend team's REST APIs.
- **Design Synergy**: Collaborative work with designers to maintain strict institutional visual standards.

## Skills & Knowledge Acquired

- **Frontend Mastery**: Advanced command of **Bootstrap, Vanilla JavaScript**, and modern CSS techniques.
- **Complex Troubleshooting**: Solving challenges related to **legacy browser compatibility**.
- **Agile Management**: Time management and meeting strict deadlines in high-social-impact projects.

## Conclusion

The project consolidated my expertise in **responsive and accessible frontend development**, while strengthening collaboration skills in multidisciplinary teams, delivering effective digital solutions for public health.
`
    },
    {
        id: "captacao-recursos",
        name: "Resource Acquisition System",
        tech: ["HTML5", "CSS3", "PHP", "WordPress", "JetEngine", "Elementor"],
        description: "Platform developed to manage and monitor financial resources for public health projects and initiatives, ensuring transparency and efficiency.",
        highlight: "Centralization of financing opportunities (calls/partnerships) and strengthening public financial management.",
        visibility: "public" as const,
        role: "Systems Analyst & Developer",
        date: "March 2025",
        status: "In Development",
        impact: "Modernization of funding management and boosting transparency in the sustainability of social and public initiatives.",
        metrics: [
            { label: "Management", value: "Financial", icon: "account_balance" },
            { label: "Status", value: "Ongoing", icon: "pending" },
            { label: "Focus", value: "Public Health", icon: "healing" },
            { label: "Standard", value: "Digital Gov.", icon: "gavel" }
        ],
        media: [
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-01.png', alt: 'Platform Overview - Resource Acquisition and Management' },
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-02.png', alt: 'Detailed Project and Grant Information View' },
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-03.png', alt: 'Financial Dashboard and Resource Monitoring' },
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-04.png', alt: 'Partnerships and Institutional Collaboration Interface' }
        ],
        content: `
# Resource Acquisition System

The **Resource Acquisition System** is a strategic platform developed to manage and monitor financial resources allocated to public health projects and initiatives. Its primary function is to facilitate the identification of funding opportunities, such as grant calls, partnerships with public agents, and action funding programs.

## Technical Highlights & Architecture

- **Advanced WordPress Customization**: Development of exclusive themes and specialized plugins for dense data management.
- **Strategic Structuring**: Implementation of dedicated modules for Grants, Partnerships, and Resource Control for managers.
- **SEO & Performance**: Deep optimization with strategic meta tags, image compression, lazy loading, and CDN usage for efficient loading.
- **Collaborative Methodology**: Multidisciplinary teamwork using agile methodologies (Trello) and efficient versioning with Git.

## Demonstrated Technical Skills

- Advanced mastery of WordPress, Elementor, and JetEngine.
- Performance Optimization and On-Page SEO.
- Solutions for Digital Governance and Legal Compliance.
- Multidisciplinary Teamwork.

## Generated Impact

- **Transparency**: Strengthening accountability and clarity in fund allocation.
- **Efficiency**: Centralization and ease of access to grants and partnerships in an intuitive system.
- **Sustainability**: Direct boost to the long-term viability of social and public initiatives.
`
    },
    {
        id: "portal-telesaude",
        name: "Telehealth Portal",
        tech: ["WordPress", "PHP", "Elementor", "JetEngine", "HTML5", "CSS3"],
        description: "Digital platform connecting healthcare professionals and patients for remote consultations, integrating teleconsultations, electronic health records management, and remote monitoring.",
        highlight: "Expanding healthcare access in remote areas of Rondônia through telemedicine and clinical decision support.",
        visibility: "public" as const,
        role: "Systems Analyst & Developer",
        date: "February 2025",
        status: "Active",
        impact: "Strengthening digital public health management and expanding the reach of healthcare services in Rondônia.",
        metrics: [
            { label: "Performance", value: "Optimized", icon: "speed" },
            { label: "Design", value: "Responsive", icon: "devices" },
            { label: "SEO", value: "On-Page", icon: "search" },
            { label: "Security", value: "Digital Health", icon: "shield" }
        ],
        media: [
            { type: 'image', url: '/projects/portal-telesaude/telesaude 1.png', alt: 'Telehealth Portal Description and Tech Stack' },
            { type: 'image', url: '/projects/portal-telesaude/telesaude 2.png', alt: 'Overview and Development Tasks' },
            { type: 'image', url: '/projects/portal-telesaude/telesaude 3.png', alt: 'Demonstrated Skills and Generated Impact' },
            { type: 'image', url: '/projects/portal-telesaude/telesaude 4.png', alt: 'Project Conclusion and Digital Health Vision' }
        ],
        content: `
# Telehealth Portal

The **Telehealth Portal** is a digital platform developed to connect healthcare professionals and patients in the state of Rondônia, facilitating remote consultations and strategic management of clinical services.

## Overview

The goal of this project was to create a functional and scalable platform using **WordPress**, centralizing information and strategic resources for telehealth. The portal prioritizes simplified navigation, high performance, and integration with essential clinical functionalities.

## Key Development Tasks

- **Platform Creation**: Developed on WordPress using custom themes and specialized plugins for the public health sector.
- **Specific Module Implementation**: Creation of sections for Regulation, Pharmacy, and Health Units, focusing on usability for professionals.
- **Versioning and Collaboration**: Mastery of version control with **Git** for change tracking and efficient team collaboration.

## SEO and Performance Optimization

- **On-Page SEO**: Application of strategic meta tags and SEO-friendly URL structuring.
- **High Performance**: Implementation of image compression, lazy loading, and CDN usage to ensure extremely fast loading times.

## Demonstrated Technical Skills

- **WordPress Customization**: Advanced use of Elementor and JetEngine for modular development.
- **Digital Security**: Implementation of security practices in digital health platforms and compliance with data protection standards.
- **Multidisciplinary Teamwork**: Direct collaboration with doctors and managers using agile methodologies (Trello).

## Generated Impact

- **Expanded Access**: Expansion of telemedicine to remote areas, optimizing healthcare resources.
- **Clinical Decision**: Facilitating access to regulations, protocols, and pharmaceutical information.
- **Management Efficiency**: Centralization of critical resources to strengthen digital public health in the state.
`
    },
    {
        id: "gerenciador-credenciais",
        name: "Inventory System (Credential Manager)",
        tech: ["C#", ".NET 8.0", "ASP.NET Core MVC", "Entity Framework", "SQL Server", "Bootstrap"],
        description: "Web application developed to catalog and manage digital resources like virtual machines, e-mail accounts, websites, and credentials, focused on security and organization.",
        highlight: "Robust authentication via OpenID Connect and sensitive data encryption with automated PDF reports.",
        visibility: "private" as const,
        role: "Systems Analyst & Developer",
        date: "January 2025",
        status: "Active",
        impact: "Centralizes digital resource control, providing efficiency, traceability, and security for the institution's technological management.",
        metrics: [
            { label: "Security", value: "High", icon: "shield" },
            { label: "Auth", value: "Azure AD", icon: "security" },
            { label: "Reports", value: "PDF Auto", icon: "picture_as_pdf" },
            { label: "UI", value: "Responsive", icon: "devices" }
        ],
        media: [
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 1.png', alt: 'Inventory System Description and Technologies' },
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 2.png', alt: 'Overview and Used Frameworks' },
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 3.png', alt: 'Security, UI, and Special Features' },
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 4.png', alt: 'Description for Portfolio and Conclusion' }
        ],
        content: `
# Inventory System (Credential Manager)

The **Inventory** is a complete web application developed in ASP.NET Core 8.0 to catalog and manage digital resources, such as virtual machines, e-mail accounts, websites, and credentials, focusing on security and organization.

## Technical Highlights & Architecture

- **Core Framework**: Developed with .NET 8.0, ASP.NET Core MVC, and C#.
- **Database & Persistence**: Utilizes Entity Framework Core 8.0.11 as ORM, SQL Server, and Microsoft.Data.SqlClient.
- **Authentication & Security**: Features robust authentication via \`Microsoft.AspNetCore.Authentication.OpenIdConnect\`, integration with Azure AD (\`Azure.Identity\`), identity management (\`Microsoft.Identity.Client\`), and password encryption using \`System.Security.Cryptography\`.
- **User Interface**: Built with ASP.NET Core MVC, Razor Pages, Bootstrap for responsive layout, and interactive notifications using \`AspNetCoreHero.ToastNotification\` and \`NToastNotify\`.

## Special Features

- **Automated PDF Reports**: Uses \`PuppeteerSharp\` for generating PDF reports.
- **External APIs Integration**: Uses \`RestSharp\` for integrations.
- **Data Formatting**: Employs \`Humanizer\` for humanized data formatting.

## Generated Impact

The Inventory system is a robust and secure platform that centralizes the control of digital resources, providing efficiency, traceability, and security for the technological management of the institution. It does not handle physical inventory, but rather serves as a smart catalog for technological resources.
`
    },
];

const PROJECTS_PT: Project[] = [
    {
        id: "rpa-ana",
        name: "Automação de Coleta de Dados Hidrológicos (RPA)",
        tech: ["Python", "Selenium", "Pathlib", "ActionChains"],
        description: "Solução automatizada para a coleta diária de dados históricos de qualidade da água da ANA (Agência Nacional de Águas).",
        highlight: "Arquitetura Multi-OS com gestão dinâmica de downloads e resiliência sequencial.",
        visibility: "public" as const,
        repoUrl: "https://github.com/portoduque/hidro-telemetria-automation",
        content: `
# Automação de Coleta de Dados Hidrológicos (RPA)

Este projeto foi desenvolvido para automatizar a coleta diária de dados históricos de qualidade da água disponibilizados pela **Agência Nacional de Águas e Saneamento Básico (ANA)**. Ele substitui um processo manual e passível de erros por um motor de execução robusto e autônomo.

## Arquitetura Técnica

- **Motor de Execução Iterativo**: Processamento sequencial de múltiplas estações (Ji-Paraná, Ariquemes, Porto Velho, Guajará) com tratamento individual de falhas para garantir estabilidade do fluxo global.
- **Perfil de Navegador Dinâmico**: Manipulação de \`ChromeOptions\` em tempo de execução para gerenciar diretórios de download programaticamente com base na estação ativa.
- **Portabilidade Multi-OS**: Utilização de \`pathlib\` para operações de sistema de arquivos cross-platform, compatível com ambientes Windows e Linux.
- **Interação de UI Avançada**: Implementação de \`ActionChains\` para navegação em menus complexos baseados em hover e \`WebDriverWait\` para sincronização dinâmica.

## Funcionalidades Principais

- **Mapeamento de Estações**: Busca e navegação inteligente por código de estação.
- **Filtragem Dinâmica**: Aplicação automatizada de filtros de data e sincronização de dados.
- **Organização Autônoma**: Arquivos são organizados automaticamente em diretórios locais pré-definidos por estação.
- **Resiliência a Erros**: Execução sequencial com log individual de falhas por estação.
`,
        media: [
            { type: 'video', url: '/projects/rpa-ana/gracacao-robo-hidrotelemetria.mp4', alt: 'Demonstração real do robô RPA coletando dados' }
        ],
        role: "Analista e Desenvolvedor de Sistemas",
        date: "2025",
        impact: "Substituiu um processo manual e sujeito a erros por um motor de execução totalmente autônomo.",
        metrics: [
            { label: "Estações", value: "4", icon: "location_on" },
            { label: "Compat.", value: "Multi-OS", icon: "devices" },
            { label: "Processo", value: "100% Auto", icon: "smart_toy" },
            { label: "Resiliência", value: "Sequencial", icon: "shield" }
        ]
    },
    {
        id: "fluxo-paciente",
        name: "Sistema Fluxo Transporte Paciente (Fluxo Paciente)",
        tech: ["PHP", "MadBuilder", "PostgreSQL", "MySQL", "MariaDB", "WhatsApp API", "ViaCEP", "Bootstrap"],
        description: "Gestão completa de logística inter-hospitalar para transferência de pacientes com roteamento otimizado.",
        highlight: "Redução de 40% no tempo de organização e 30% de economia nos custos de transporte.",
        visibility: "private" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Junho de 2025",
        status: "Em Desenvolvimento",
        impact: "Revolucionou a logística de transferências de pacientes através de automação inteligente e integração multi-plataforma.",
        metrics: [
            { label: "Tempo de Org.", value: "-40%", icon: "timer" },
            { label: "Custos", value: "-30%", icon: "savings" },
            { label: "Sincronia", value: "Tempo Real", icon: "sync" },
            { label: "Padrão", value: "HL7/FHIR", icon: "verified" }
        ],
        media: [
            { type: 'image', url: '/projects/fluxo-paciente/1 - fluxotp.png', alt: 'Gerenciamento Central de Solicitações de Transporte Inter-hospitalar' },
            { type: 'image', url: '/projects/fluxo-paciente/2 - fluxotp.png', alt: 'Interface para Cadastro e Edição de Solicitações de Transporte' },
            { type: 'image', url: '/projects/fluxo-paciente/3 - fluxotp.png', alt: 'Módulo de Gestão e Cadastro de Pacientes' },
            { type: 'image', url: '/projects/fluxo-paciente/4 - fluxotp.png', alt: 'Configuração e Listagem de Unidades de Saúde e Hospitais' }
        ],
        content: `
# Sistema Fluxo Transporte Paciente (Fluxo Paciente)

Sistema web completo para gerenciamento de fluxo de transporte inter-hospitalar, desenvolvido com arquitetura robusta e integração multi-plataforma. Uma solução que revoluciona a logística de transferência de pacientes entre cidades e unidades de saúde através de automação inteligente e comunicação em tempo real.

## Destaques Técnicos

- **Arquitetura MVC & APIs RESTful**: Estrutura robusta que garante integração entre plataformas e sincronização de dados instantânea.
- **Workflow Automatizado de Logística**: Fluxo otimizado de solicitações de transporte com cálculo automático de distâncias e tempos.
- **Builder Visual Proprietário**: Ferramenta visual customizada para gerenciamento de migração e versionamento de banco de dados.
- **Interoperabilidade**: Integração com sistemas hospitalares utilizando padrões internacionais (**HL7/FHIR**).
- **Segurança e LGPD**: Controle de permissões avançado e conformidade estrita com a Lei Geral de Proteção de Dados.
- **Escalabilidade**: Uso de microserviços escaláveis com cache distribuído para alto desempenho.

## Resultados Alcançados

- **Eficiência Operacional**: Redução de 40% no tempo necessário para organizar transferências.
- **Economia Financeira**: Otimização de 30% nos custos de transporte.
- **Comunicação Ativa**: Atualizações em tempo real para equipes médicas e pacientes via integração com WhatsApp API.
`
    },
    {
        id: "portal-ciges",
        name: "Portal do CIGES (Painel Estratégico de Saúde)",
        tech: ["HTML5", "CSS3", "JavaScript Vanilla", "Bootstrap", "CSS Grid/Flexbox", "C#", ".NET"],
        description: "Plataforma digital centralizada para dados estratégicos de saúde pública em Rondônia, apoiando a gestão baseada em evidências do SUS.",
        highlight: "Desenvolvimento de dashboards interativos para monitoramento de leitos, obras em saúde e crises climáticas.",
        visibility: "public" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Janeiro de 2025",
        impact: "Transformou a gestão de dados de saúde em Rondônia, fornecendo visibilidade em tempo real de indicadores críticos para a SESAU-RO.",
        liveUrl: "https://ciges.sesau.ro.gov.br",
        metrics: [
            { label: "Qualidade", value: "Estratégica", icon: "insights" },
            { label: "Design", value: "Responsivo", icon: "devices" },
            { label: "Integração", value: "APIs REST", icon: "api" },
            { label: "Acessibilidade", value: "W3C / Padrões", icon: "accessibility" }
        ],
        media: [
            { type: 'image', url: '/projects/portal-ciges/ciges 1.png', alt: 'Página Inicial do Portal CIGES - Pilares estratégicos principais' },
            { type: 'image', url: '/projects/portal-ciges/ciges 2.png', alt: 'Dashboard de Gestão da Saúde - Indicadores de crise hídrica, obras e ocupação de leitos' },
            { type: 'image', url: '/projects/portal-ciges/ciges 3.png', alt: 'Sessão de Suporte e Contato - Localização institucional e formulários dinâmicos' }
        ],
        content: `
# Portal CIGES (Painel Estratégico de Saúde)

O **Portal CIGES** é uma plataforma digital que centraliza dados estratégicos de saúde para apoiar a gestão do Sistema Único de Saúde (**SUS**) em Rondônia. Ele oferece relatórios detalhados, indicadores de saúde, análises estratégicas e ferramentas de visualização de dados, permitindo que gestores, pesquisadores e profissionais de saúde tomem decisões baseadas em evidências.

## Arquitetura e Insights Técnicos

- **Desenvolvimento de Dashboards Interativos**: Criação de interfaces intuitivas para visualização de indicadores de saúde pública, incluindo módulos principais como **Gestão da Saúde**, **Atenção à Saúde** e **Vigilância em Saúde**.
- **Módulos de Monitoramento Especializados**:
    - **Painel da Crise Hídrica**: Acompanhamento em tempo real de indicadores ambientais com impacto na saúde regional.
    - **Dashboard de Obras em Saúde**: Gestão estratégica do progresso de construções e reformas hospitalares em todo o estado.
    - **Dashboard de Leitos**: Visualização crítica de ocupação e disponibilidade de leitos para ação imediata de gestão.
- **Integração de APIs REST**: Consumo seguro de APIs da equipe de backend da **SETIC-RO**, garantindo integridade de dados e interoperabilidade.
- **UX/UI Moderna**: Implementação de design responsivo e semântico com **CSS Grid, Flexbox e Bootstrap**, seguindo rigorosos padrões de acessibilidade do W3C.

## Impacto Gerado

- **Centralização Estratégica**: Acesso unificado a dados críticos do SUS para todo o estado de Rondônia.
- **Apoio à Decisão**: Melhoria significativa na velocidade e precisão de decisões sobre alocação de recursos e respostas a emergências.
- **Transparência e Governança**: Fortalecimento da governança digital através do monitoramento transparente de projetos de saúde e tendências regionais.
`
    },
    {
        id: "respirar-mobile",
        name: "Projeto RespirAR (Mobile)",
        tech: ["Flutter & Dart", "FlutterFlow", "PHP", "MadBuilder", "Firebase", "PostgreSQL", "REST API"],
        description: "Aplicativo mobile voltado para saúde e bem-estar, proporcionando uma experiência intuitiva para monitoramento e gestão em saúde.",
        highlight: "Desenvolvimento visual acelerado com FlutterFlow e backend robusto integrado com Firebase e MadBuilder.",
        visibility: "public" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Outubro de 2025",
        impact: "Centralização de serviços de saúde mobile com notificações push e geolocalização, otimizando o acompanhamento do paciente.",
        liveUrl: "https://respirar.sesau.ro.gov.br",
        metrics: [
            { label: "Plataformas", value: "iOS & Android", icon: "smartphone" },
            { label: "Sync", value: "Tempo Real", icon: "sync" },
            { label: "Residência", value: "Modo Offline", icon: "cloud_off" },
            { label: "UX", value: "Material Design", icon: "palette" }
        ],
        media: [
            { type: 'image', url: '/projects/respirar-mobile/respirar-1.png', alt: 'Interface do Aplicativo Mobile RespirAR 1' },
            { type: 'image', url: '/projects/respirar-mobile/respirar-2.png', alt: 'Interface do Aplicativo Mobile RespirAR 2' }
        ],
        content: `
# Projeto RespirAR (Mobile)

O projeto **RespirAR** é um aplicativo mobile robusto focado em saúde e bem-estar, desenvolvido para proporcionar uma experiência fluida tanto para usuários finais quanto para administradores de sistema.

## Destaques Técnicos & Arquitetura

- **Desenvolvimento Visual Acelerado**: Utilização do **FlutterFlow** para agilizar o desenvolvimento visual e integração de funcionalidades avançadas.
- **Backend Híbrido**: Integração eficiente com **Firebase** (Firestore, Auth, Cloud Functions) para dados em tempo real e **MadBuilder** (PHP) para serviços de API REST e painel administrativo.
- **Persistência de Dados**: Estratégia de banco de dados NoSQL (Firestore) para mobile e PostgreSQL para gestão administrativa.
- **Recursos Nativos**: Implementação de notificações push inteligentes, geolocalização e integração com APIs nativas de Android e iOS.
- **Design e Acessibilidade**: Interface intuitiva e responsiva baseada em padrões de **Material Design**, com foco total em acessibilidade.

## Recursos do Sistema

- Gestão completa de usuários e perfis.
- Sistema de monitoramento de saúde em tempo real.
- Relatórios e analytics integrados.
- Interface administrativa web para gerenciamento global.
`
    },
    {
        id: "saude-digital",
        name: "Portal da Saúde Digital (SESAU-RO)",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "CSS Grid/Flexbox", "C#", ".NET"],
        description: "Portal oficial da Saúde Digital da Secretaria de Estado de Saúde de Rondônia que centraliza informações sobre iniciativas, projetos e avanços tecnológicos.",
        highlight: "Criação e otimização total de Interface de Usuário com foco em acessibilidade e integração com serviços de saúde do Estado.",
        visibility: "public" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Dezembro de 2024",
        status: "Ativo",
        impact: "Promoveu a transparência na saúde digital de Rondônia, unindo dados governamentais à acessibilidade do cidadão.",
        liveUrl: "https://saudedigital.sesau.ro.gov.br",
        metrics: [
            { label: "Acessibilidade", value: "Padrão W3C", icon: "accessibility" },
            { label: "Design", value: "Moderno/Fluido", icon: "devices" },
            { label: "Performance", value: "Otimizada", icon: "speed" },
            { label: "Soluções Gov.", value: "Integradas", icon: "public" }
        ],
        media: [
            { type: 'image', url: '/projects/saude-digital/1 - saudedigital.png', alt: 'Portal da Saúde Digital - Navegação e Acessibilidade' },
            { type: 'image', url: '/projects/saude-digital/2 - saudedigital.png', alt: 'Layout Responsivo e Interface Moderna' },
            { type: 'image', url: '/projects/saude-digital/3 - saudedigital.png', alt: 'Integração com Serviços de Saúde e Dados' },
            { type: 'image', url: '/projects/saude-digital/4 - saudedigital.png', alt: 'Experiência do Usuário e Sessões Informativas' }
        ],
        content: `
# Portal da Saúde Digital (SESAU-RO)

O **Portal da Saúde Digital** é a porta de entrada oficial para as iniciativas de tecnologia em saúde no Estado de Rondônia. Ele centraliza informações sobre avanços tecnológicos, projetos e dados públicos, promovendo a transparência e aproximando o Estado dos cidadãos.

## Visão Geral

Este projeto consistiu na **criação e otimização da Interface do usuário** para o Portal da Saúde Digital, focando em **acessibilidade, responsividade e integração** com serviços de saúde como **CIGES e Telessaúde**. O desenvolvimento foi realizado com tecnologias modernas, garantindo uma experiência de navegação eficiente e adaptada a múltiplos dispositivos.

## Tarefas Desenvolvidas

- **Layouts Responsivos e Intuitivos**: Desenvolvidos com HTML5, CSS3 e JavaScript.
- **Apresentação de Informações Técnicas**: Visualização clara de dados relacionados ao CIGES e Telessaúde.
- **Componentes Interativos**: Criação de menus dinâmicos, carrosséis de notícias e formulários de FAQ.

## Otimização para Dispositivos Móveis

- **Técnicas Avançadas de CSS**: Utilização de media queries, **CSS Grid/Flexbox** e **Bootstrap** para adaptação perfeita em todas as telas.
- **Verificação Multi-navegador**: Testes rigorosos de compatibilidade (Chrome, Firefox, Edge) e suporte a navegadores legados.

## Colaboração Multidisciplinar

- **Alinhamento Institucional**: Participação em reuniões de aceitação para conformidade com requisitos institucionais.
- **Integração de APIs**: Trabalho conjunto com a equipe backend da **GSTEC** para consumo de APIs REST.
- **Sinergia com Design**: Colaboração com designers para assegurar conformidade com normas visuais institucionais.

## Habilidades e Conhecimentos Adquiridos

- **Domínio de Frontend**: Maestria em **Bootstrap, JavaScript Vanilla** e técnicas avançadas de CSS.
- **Resolução de Complexidades**: Superação de desafios de **compatibilidade com navegadores antigos**.
- **Gestão Ágil**: Gerenciamento de prazos rigorosos em projetos de alto impacto social.

## Conclusão

O projeto consolidou a minha experiência no **desenvolvimento frontend responsivo e acessível**, fortalecendo as habilidades de colaboração em equipes multidisciplinares e entregando soluções digitais eficazes para a saúde pública.
`
    },
    {
        id: "captacao-recursos",
        name: "Sistema de Captação de Recursos",
        tech: ["HTML5", "CSS3", "PHP", "WordPress", "JetEngine", "Elementor"],
        description: "Plataforma desenvolvida para gerenciar e monitorar recursos financeiros destinados a projetos e iniciativas voltadas à saúde pública, garantindo transparência e eficiência.",
        highlight: "Centralização de oportunidades de financiamento (editais/parcerias) e fortalecimento da gestão financeira pública.",
        visibility: "public" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Março de 2025",
        status: "Em Desenvolvimento",
        impact: "Modernização da gestão de financiamentos e impulso à transparência na sustentabilidade de iniciativas sociais e públicas.",
        metrics: [
            { label: "Gestão", value: "Financeira", icon: "account_balance" },
            { label: "Status", value: "Em curso", icon: "pending" },
            { label: "Foco", value: "Saúde Pública", icon: "healing" },
            { label: "Padrão", value: "Gov. Digital", icon: "gavel" }
        ],
        media: [
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-01.png', alt: 'Visão Geral da Plataforma - Captação e Gestão de Recursos' },
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-02.png', alt: 'Visualização Detalhada de Projetos e Editais' },
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-03.png', alt: 'Dashboard Financeiro e Monitoramento de Recursos' },
            { type: 'image', url: '/projects/captacao-recursos/cap-recursos-04.png', alt: 'Interface de Parcerias e Colaboração Institucional' }
        ],
        content: `
# Sistema de Captação de Recursos

O **Sistema de Captação de Recursos** é uma plataforma estratégica desenvolvida para gerenciar e monitorar recursos financeiros destinados a projetos e iniciativas de saúde pública. Sua principal função é facilitar a identificação de oportunidades de captação, como editais de financiamento, parcerias com agentes públicos e programas de custeio.

## Destaques Técnicos & Arquitetura

- **Customização Avançada WordPress**: Desenvolvimento de temas exclusivos e plugins especializados para gestão densa de dados.
- **Estruturação Estratégica**: Implementação de módulos dedicados para Editais, Parcerias e Controle de Recursos para gestores.
- **SEO & Performance**: Otimização profunda com meta tags estratégicas, compressão de imagens, lazy loading e uso de CDN para carregamento eficiente.
- **Metodologia Colaborativa**: Trabalho em equipe multidisciplinar utilizando metodologias ágeis (Trello) e versionamento eficiente com Git.

## Habilidades Técnicas Demonstradas

- Domínio avançado de WordPress, Elementor e JetEngine.
- Otimização de Performance e SEO On-Page.
- Soluções para Governança Digital e Conformidade Legal.
- Trabalho em Equipe Multidisciplinar.

## Impacto Gerado

- **Transparência**: Fortalecimento da prestação de contas e clareza na alocação dos fundos.
- **Eficiência**: Centralização e facilidade de acesso a editais e parcerias em um sistema intuitivo.
- **Sustentabilidade**: Impulso direto à viabilidade de iniciativas sociais e públicas de longo prazo.
`
    },
    {
        id: "portal-telesaude",
        name: "Portal da Telesaúde",
        tech: ["WordPress", "PHP", "Elementor", "JetEngine", "HTML5", "CSS3"],
        description: "Plataforma digital que conecta profissionais de saúde e pacientes para consultas à distância, integrando teleconsultas, gestão de prontuários eletrônicos e monitoramento remoto.",
        highlight: "Expansão do acesso à saúde em áreas remotas de Rondônia através de telemedicina e apoio à decisão clínica.",
        visibility: "public" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Fevereiro de 2025",
        status: "Ativo",
        impact: "Fortalecimento da gestão digital da saúde pública e ampliação do alcance de serviços assistenciais em Rondônia.",
        metrics: [
            { label: "Performance", value: "Otimizada", icon: "speed" },
            { label: "Design", value: "Responsivo", icon: "devices" },
            { label: "SEO", value: "On-Page", icon: "search" },
            { label: "Segurança", value: "Saúde Digital", icon: "shield" }
        ],
        media: [
            { type: 'image', url: '/projects/portal-telesaude/telesaude 1.png', alt: 'Descrição e Tecnologias do Portal Telesaúde' },
            { type: 'image', url: '/projects/portal-telesaude/telesaude 2.png', alt: 'Visão Geral e Tarefas Desenvolvidas' },
            { type: 'image', url: '/projects/portal-telesaude/telesaude 3.png', alt: 'Habilidades e Impacto Gerado' },
            { type: 'image', url: '/projects/portal-telesaude/telesaude 4.png', alt: 'Conclusão e Visão de Negócio' }
        ],
        content: `
# Portal da Telesaúde

O **Portal Telesaúde** é uma plataforma digital desenvolvida para conectar profissionais de saúde e pacientes no estado de Rondônia, facilitando consultas à distância e a gestão estratégica de serviços assistenciais.

## Visão Geral

Este projeto teve como objetivo criar uma plataforma funcional e escalável utilizando **WordPress**, centralizando informações e recursos estratégicos para a telessaúde. O portal prioriza a navegação simplificada, alta performance e integração com funcionalidades clínicas essenciais.

## Tarefas Desenvolvidas

- **Criação da Plataforma**: Desenvolvimento sobre WordPress utilizando temas personalizados e plugins especializados para o setor de saúde pública.
- **Implementação de Módulos Específicos**: Criação de seções para Regulação, Farmácia e Unidades de Saúde, focando em usabilidade para o profissional.
- **Versionamento e Colaboração**: Domínio de versionamento com **Git** para controle de alterações e colaboração eficiente em equipe.

## Otimização para SEO e Performance

- **SEO On-Page**: Aplicação de meta tags estratégicas e estruturação de URLs amigáveis.
- **Alta Performance**: Implementação de compressão de imagens, lazy loading e uso de CDN para garantir carregamento extremamente rápido.

## Habilidades Técnicas Demonstradas

- **Customização de WordPress**: Uso avançado de Elementor e JetEngine para desenvolvimento modular.
- **Segurança Digital**: Implementação de práticas de segurança em plataformas de saúde digital e conformidade com a LGPD.
- **Trabalho Multidisciplinar**: Colaboração direta com médicos e gestores, utilizando metodologias ágeis (Trello).

## Impacto Gerado

- **Acesso Ampliado**: Expansão da telemedicina para áreas remotas, otimizando recursos assistenciais.
- **Decisão Clínica**: Facilitação do acesso a regulamentações, protocolos e informações farmacêuticas.
- **Eficiência na Gestão**: Centralização de recursos críticos para o fortalecimento da saúde pública digital no estado.
`
    },
    {
        id: "gerenciador-credenciais",
        name: "Sistema de Inventário (Gerenciador de Credenciais)",
        tech: ["C#", ".NET 8.0", "ASP.NET Core MVC", "Entity Framework", "SQL Server", "Bootstrap"],
        description: "Aplicação web desenvolvida para catalogar e gerenciar recursos digitais como máquinas virtuais, contas de e-mail, sites e credenciais, com foco em segurança e organização.",
        highlight: "Autenticação robusta via OpenID Connect e criptografia de dados sensíveis com relatórios PDF automatizados.",
        visibility: "private" as const,
        role: "Analista e Desenvolvedor de Sistemas",
        date: "Janeiro de 2025",
        status: "Ativo",
        impact: "Centraliza o controle de recursos digitais, proporcionando eficiência, rastreabilidade e segurança para a gestão tecnológica da instituição.",
        metrics: [
            { label: "Segurança", value: "Alta", icon: "shield" },
            { label: "Autenticação", value: "Azure AD", icon: "security" },
            { label: "Relatórios", value: "PDF Auto", icon: "picture_as_pdf" },
            { label: "UI", value: "Responsiva", icon: "devices" }
        ],
        media: [
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 1.png', alt: 'Descrição e Tecnologias do Sistema de Inventário' },
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 2.png', alt: 'Visão Geral e Frameworks Utilizados' },
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 3.png', alt: 'Segurança, UI e Funcionalidades Especiais' },
            { type: 'image', url: '/projects/gerenciador-credenciais/sindv 4.png', alt: 'Descrição para Portfólio e Conclusão' }
        ],
        content: `
# Sistema de Inventário (Gerenciador de Credenciais)

O **Inventário** é uma aplicação web completa desenvolvida em ASP.NET Core 8.0 para gerenciar e organizar recursos digitais, como máquinas virtuais, contas de e-mail, sites e credenciais, com foco em segurança e organização.

## Destaques Técnicos & Arquitetura

- **Core Framework**: Desenvolvido com .NET 8.0, ASP.NET Core MVC e C#.
- **Banco de Dados e Persistência**: Utiliza Entity Framework Core 8.0.11 como ORM, SQL Server e Microsoft.Data.SqlClient.
- **Autenticação e Segurança**: Conta com autenticação segura via \`Microsoft.AspNetCore.Authentication.OpenIdConnect\`, integração com Azure AD (\`Azure.Identity\`), gerenciamento de identidade (\`Microsoft.Identity.Client\`) e criptografia para senhas usando \`System.Security.Cryptography\`.
- **Interface do Usuário**: Construído com ASP.NET Core MVC, Razor Pages, Bootstrap para layout responsivo e notificações interativas utilizando \`AspNetCoreHero.ToastNotification\` e \`NToastNotify\`.

## Funcionalidades Especiais

- **Relatórios PDF Automatizados**: Uso de \`PuppeteerSharp\` para geração de relatórios em PDF.
- **Integração com APIs Externas**: Utiliza \`RestSharp\` para integrações.
- **Formatação de Dados**: Emprega \`Humanizer\` para formatação humanizada de dados.

## Impacto Gerado

O sistema Inventário é uma plataforma robusta e segura que centraliza o controle de recursos digitais, proporcionando eficiência, rastreabilidade e segurança para a gestão tecnológica da instituição. O sistema não trata de estoque físico, mas sim do catálogo inteligente de recursos tecnológicos da instituição.
`
    },
];

export function getProjects(locale: Locale): Project[] {
    return locale === "en" ? PROJECTS_EN : PROJECTS_PT;
}

const ACTIVITY_LOG_EN = [
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

const ACTIVITY_LOG_PT = [
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

export function getActivityLog(locale: Locale) {
    return locale === "en" ? ACTIVITY_LOG_EN : ACTIVITY_LOG_PT;
}

// Keep backward-compatible exports for non-i18n usage
export const EXPERIENCE = getExperience("pt-BR");
export const EDUCATION = getEducation("pt-BR");
export const PROJECTS = getProjects("pt-BR");
export const ACTIVITY_LOG = getActivityLog("pt-BR");
