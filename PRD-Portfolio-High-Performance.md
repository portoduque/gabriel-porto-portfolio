# PRD: Portfolio High-Performance — Gabriel (Fullstack Developer)

**Status**: Draft | **Version**: 1.0 | **Author**: Antigravity (PM Mode)

---

## 1. Executive Summary

### Problem Statement
Recrutadores de tecnologia analisamt centenas de currículos diariamente, dedicando em média apenas **6 a 10 segundos** para decidir se um candidato merece atenção. Currículos tradicionais ou portfólios genéricos falham em capturar essa atenção, resultando em baixas taxas de conversão para entrevistas.

### Proposed Solution
Desenvolver um portfólio online de alta performance que utiliza **Neuromarketing**, **Neurodesign** e uma hierarquia visual agressiva para garantir a retenção do recrutador nos primeiros 2 segundos e a conversão em até 10 segundos. O sistema será construído com tecnologia de ponta para demonstrar autoridade técnica imediata.

### Business Impact (Impacto Profissional)
- Aumento na taxa de resposta de candidaturas frias.
- Posicionamento como desenvolvedor "Premium/High-End".
- Redução do tempo de explicação de stack técnica através de visualização imediata.

### Success Metrics (KPIs)
- **Retention Rate**: 80% de permanência por mais de 10s após o carregamento.
- **Conversion Rate**: >15% de cliques no CTA de "Baixar CV" ou "Contato".
- **Performance**: Lighthouse Score de 100/100 em todas as categorias.
- **ATS Compatibility**: Nota máxima em simuladores de sourcing.

---

## 2. Problem Definition

### 2.1 Customer Problem
- **Who**: Tech Recruiters (TRs), Technical Leads (TLs), Hiring Managers.
- **What**: Excesso de ruído visual e falta de clareza nos perfis dos candidatos.
- **Why**: TRs precisam validar rapidamente: 1. Nome/Cargo; 2. Stack Principal; 3. Prova de Impacto.
- **Impact**: Gabriel perde oportunidades por não ser "visto" a tempo no mar de candidatos.

### 2.2 Market Opportunity (Contexto Tech)
- O mercado atual exige que o desenvolvedor Fullstack também entenda de **Produto** e **UX**. Um portfólio medíocre é um sinal de alerta (red flag). Um portfólio de alta performance é o seu maior diferencial competitivo.

---

## 3. Solution Overview

### 3.1 Proposed Solution
Uma single-page application (SPA) focada em conversão, com subpáginas detalhadas para projetos críticos. O design segue a estética "Vibe Coding" e a identidade "Electric Blue v2.0".

### 3.2 Key Capabilities (In Scope)
- **Hero Section "The Hook"**: Headline de 2s e proposta de valor.
- **Bento Grid de Projetos**: Display premium de trabalhos anteriores.
- **ATS Optimized Content**: Texto estruturado para leitura por máquinas.
- **Modern Design System**: Escala 1.333, Regra 60-30-10 e modo escuro automático.
- **Dashboard de Projeto**: Página individual que explica "Problema -> Solução -> Resultado".

### 3.3 Out of Scope
- Backend complexo para gestão de posts (inicialmente usaremos Markdown/Static).
- Sistema de comentários ou fórum integrado.

## 4. Information Architecture & Content Strategy

### 4.1 Navigation & Global Elements
- **Navbar**: Fixed position with glassmorphism effect.
    - Links: [Home, Projects, About, Contact]
    - Dynamic Theme Toggle (Sun/Moon icon).
- **Footer**: minimal design with social links (GitHub, LinkedIn, WhatsApp).

### 4.2 Content Breakdown (The "Blueprint")
- **Hero Section**:
    - `Headline`: Gabriel — Fullstack Developer
    - `Sub-headline`: "Transformando complexidade em interfaces fluidas e escaláveis."
    - `Primary CTA`: [Ver Projetos] (Scroll to Projects)
    - `Secondary CTA`: [Baixar CV] (PDF Download)
- **Bento Grid (Projects)**:
    - 4-6 cards with different sizes.
    - Fields per project: `Title`, `Short Description`, `Tech Badges`, `Preview Image/Mockup`.
- **Experience Timeline**:
    - `Company Name`, `Role`, `Period`, `Impact Statements` (Max 3 per role).
- **Project Detail Page (Dashboard Style)**:
    - `Problem`: What was the challenge?
    - `Solution`: Your technical approach.
    - `Stats`: Impact metrics (e.g., "30% performance increase").
    - `Links`: [Live Demo, GitHub Repository].

---

---

## 5. Component Library Specification (The "AI Guide")

| Component | Technical Specs | User Interaction |
|-----------|-----------------|------------------|
| `TechBadge` | Lucide icon + Name. OKLCH secondary bg. | Ripple effect on click. |
| `BentoCard` | Nested glassmorphism, 1px border. | Hover: Scale 102%, glow primary blue. |
| `ProjectPanel` | Split layout for mobile, sticky side-info on desktop. | Parallax scroll on image assets. |
| `StatusIndicator` | Circular glow with pulse. | Indicates "Open for Work" status. |

---

## 6. Design & User Experience (Branding: Electric Blue v2.0)

### 6.1 User Stories
- **Como Recrutador**, quero ver o cargo e a stack principal de Gabriel em menos de 2 segundos para saber se ele se encaixa na vaga.
- **Como Tech Lead**, quero ver a arquitetura e os desafios técnicos dos projetos em uma página detalhada para validar a senioridade técnica.
- **Como Usuário Mobile**, quero que o site carregue instantaneamente em 4G para que eu possa avaliar o candidato durante o deslocamento.

### 6.2 Design Principles
1.  **Regra 60-30-10**: 
    - 60% Background: `--background-50` (`#f8fafc`)
    - 30% Estrutura: `--secondary-200` (`#e1e7ef`)
    - 10% Accent: `--accent-500` (`#00d688`)
2.  **Hierarchy-First**: Uso agressivo da escala 1.333 para guiar o olhar.
3.  **Micro-interações Suaves**: Todas as transições limitadas a 0.3s com física `ease-out`.

### 6.3 Tipografia (Modular Scale 1.333)
- **Títulos**: **Space Grotesk** (600–700) - Look futurista/tech.
- **Corpo**: **Inter** (400–500) - Legibilidade máxima.
- **Labels Técnicas**: **JetBrains Mono** - Contexto code/desenvolvedor.

### 6.4 Paleta de Cores (Electric Blue v2.0)

| Layer | Hex | OKLCH (Light) | OKLCH (Dark) |
|-------|-----|---------------|--------------|
| **Text** | `#0a111a` | `oklch(15.18% 0.016 251.87)` (950) | `oklch(95.91% 0.010 252.81)` (950) |
| **Background**| `#f8fafc` | `oklch(95.88% 0.009 247.92)` (50) | `oklch(15.61% 0.014 248.04)` (50) |
| **Primary** | `#0055ff` | `oklch(53.32% 0.260 262.64)` (500) | `oklch(53.32% 0.260 262.64)` (500) |
| **Secondary** | `#e1e7ef` | `oklch(83.43% 0.028 255.11)` (200) | `oklch(30.93% 0.036 255.36)` (200) |
| **Accent** | `#00d688` | `oklch(88.08% 0.206 158.06)` (500) | `oklch(88.08% 0.206 158.06)` (500) |

---

## 7. Requirements & Functional Specs

### 7.1 Functional Requirements
| ID | Requirement | Priority | Notes |
|----|------------|----------|-------|
| FR1 | Hero dominante com Nome + Cargo + Proposta de Valor | P0 | Crítico para os 10 segundos |
| FR2 | Botão de download de CV (PDF) sempre acessível | P0 | Conversão principal |
| FR3 | Seção de Skills em formato de badges escaneáveis | P0 | Validação técnica rápida |
| FR4 | Página individual de projeto com walkthrough em vídeo | P1 | Prova social/técnica |
| FR5 | Suporte a Light/Dark Mode via sistema | P1 | Conforto visual e modernidade |

### 7.2 Non-Functional Requirements
- **Performance**: LCP (Largest Contentful Paint) < 1s.
- **Acessibilidade**: Conformidade com WCAG AA.
- **SEO**: Meta tags OpenGraph para pré-visualização no LinkedIn/WhatsApp.

---

## 8. Technical Specifications & Assets

### 8.1 Tech Stack (Locked)
- **Framework**: `Next.js 15` (App Router).
- **Styling**: `Tailwind CSS v4` (with OKLCH config).
- **Assets**: 
    - Icons: `lucide-react`.
    - Assets Directory: `/public/assets/` (projects, icons, cv.pdf).

### 8.2 Directory Structure (Requirement)
```text
/public
  /assets
    /projects       # Screenshots (WebP)
    /icons          # Custom SVGs
    cv-gabriel.pdf  # Main CV
```

---

## 9. Timeline & Milestones (Estimativa)

| Milestone | Prazo | Deliverables |
|-----------|-------|--------------|
| **Setup & Branding** | Dia 1 | Estrutura Next.js + Design Tokens configurados |
| **MVP Hero & Skills** | Dia 2 | Seção Hero e lista de skills (Aprovado nos 10s) |
| **Project Details** | Dia 4 | Template de página de projeto dashboard style |
| **Launch & Audit** | Dia 5 | Deploy final + Testes de Performance 100/100 |

---

## 10. Risks & Mitigations

| Risk | Probability | Impact | Mitigation Strategy |
|------|------------|--------|-------------------|
| Baixo FPS em animações | Média | Alta | Usar apenas propriedades transform/opacity |
| Excesso de informação | Alta | Média | Aplicar Lei de Miller (Chunking de 5-7 itens) |
| Falha no ATS | Baixa | Alta | Validar semântica HTML com simuladores de leitura |

---
**Fim do PRD.**
