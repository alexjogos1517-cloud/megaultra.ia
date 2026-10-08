/* =========================================================
   AGENTES UNIVERSAL
   CSS GLOBAL
   Versão: 1.0
   Status: Base visual da plataforma
   ========================================================= */


/* =========================================================
   01. VARIÁVEIS GLOBAIS
   ========================================================= */

:root {

    /* ---------- CORES DE FUNDO ---------- */

    --bg-primary: #080b14;
    --bg-secondary: #0d1220;
    --bg-tertiary: #111827;
    --bg-card: #151b2b;
    --bg-card-hover: #1b2438;


    /* ---------- CORES PRINCIPAIS ---------- */

    --primary: #7c3aed;
    --primary-dark: #6425c5;
    --primary-light: #a78bfa;

    --secondary: #2563eb;
    --secondary-light: #60a5fa;


    /* ---------- TEXTOS ---------- */

    --text-primary: #ffffff;
    --text-secondary: #a7b0c0;
    --text-muted: #737d91;
    --text-dark: #4b5563;


    /* ---------- STATUS ---------- */

    --success: #22c55e;
    --success-light: #86efac;

    --warning: #f59e0b;
    --warning-light: #fcd34d;

    --danger: #ef4444;

    --info: #3b82f6;


    /* ---------- BORDAS ---------- */

    --border: rgba(255, 255, 255, 0.08);
    --border-light: rgba(255, 255, 255, 0.14);
    --border-strong: rgba(255, 255, 255, 0.22);


    /* ---------- LAYOUT ---------- */

    --container: 1180px;
    --header-height: 76px;


    /* ---------- BORDER RADIUS ---------- */

    --radius-xs: 6px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 18px;
    --radius-xl: 24px;
    --radius-round: 999px;


    /* ---------- SOMBRAS ---------- */

    --shadow-xs: 0 4px 12px rgba(0, 0, 0, 0.12);

    --shadow-sm:
        0 8px 25px rgba(0, 0, 0, 0.18);

    --shadow-md:
        0 15px 45px rgba(0, 0, 0, 0.28);

    --shadow-lg:
        0 25px 70px rgba(0, 0, 0, 0.38);


    /* ---------- TRANSIÇÕES ---------- */

    --transition-fast: 120ms ease;
    --transition: 180ms ease;
    --transition-slow: 300ms ease;
}


/* =========================================================
   02. RESET
   ========================================================= */

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
    font-size: 16px;
}


body {
    min-height: 100vh;

    background: var(--bg-primary);
    color: var(--text-primary);

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;

    line-height: 1.6;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


img,
svg {
    display: block;
    max-width: 100%;
}


img {
    height: auto;
}


button,
input,
textarea,
select {
    font: inherit;
}


button {
    border: 0;
    cursor: pointer;
}


a {
    color: inherit;
    text-decoration: none;
}


ul,
ol {
    list-style: none;
}


/* =========================================================
   03. SELEÇÃO DE TEXTO
   ========================================================= */

::selection {
    background: var(--primary);
    color: #ffffff;
}


/* =========================================================
   04. FOCO DE ACESSIBILIDADE
   ========================================================= */

:focus-visible {
    outline: 2px solid var(--primary-light);
    outline-offset: 3px;
}


/* =========================================================
   05. CONTAINER
   ========================================================= */

.container {
    width: min(
        calc(100% - 40px),
        var(--container)
    );

    margin-inline: auto;
}


/* =========================================================
   06. BOTÕES GLOBAIS
   ========================================================= */

.button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 8px;

    min-height: 44px;

    padding: 0 20px;

    border-radius: var(--radius-md);

    font-size: 0.95rem;
    font-weight: 600;

    white-space: nowrap;

    transition:
        background var(--transition),
        color var(--transition),
        border-color var(--transition),
        transform var(--transition),
        box-shadow var(--transition);
}


.button:hover {
    transform: translateY(-1px);
}


.button:active {
    transform: translateY(0);
}


/* ---------- BOTÃO PRINCIPAL ---------- */

.button-primary {
    background: var(--primary);
    color: #ffffff;

    box-shadow:
        0 8px 24px rgba(124, 58, 237, 0.25);
}


.button-primary:hover {
    background: var(--primary-dark);

    box-shadow:
        0 12px 30px rgba(124, 58, 237, 0.35);
}


/* ---------- BOTÃO SECUNDÁRIO ---------- */

.button-secondary {
    background: rgba(255, 255, 255, 0.04);

    color: var(--text-primary);

    border: 1px solid var(--border-light);
}


.button-secondary:hover {
    background: rgba(255, 255, 255, 0.08);

    border-color: var(--border-strong);
}


/* ---------- BOTÃO GRANDE ---------- */

.button-large {
    min-height: 52px;

    padding: 0 26px;

    border-radius: var(--radius-md);

    font-size: 1rem;
}


/* ---------- BOTÃO DESABILITADO ---------- */

.button-disabled,
.button:disabled {
    opacity: 0.5;

    cursor: not-allowed;

    pointer-events: none;
}


/* =========================================================
   07. BADGES
   ========================================================= */

.badge {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 6px;

    min-height: 28px;

    padding: 0 10px;

    border-radius: var(--radius-round);

    font-size: 0.75rem;
    font-weight: 600;

    line-height: 1;
}


.badge-primary {
    background: rgba(124, 58, 237, 0.14);
    color: var(--primary-light);

    border: 1px solid rgba(124, 58, 237, 0.25);
}


.badge-success {
    background: rgba(34, 197, 94, 0.12);
    color: var(--success-light);

    border: 1px solid rgba(34, 197, 94, 0.22);
}


.badge-warning {
    background: rgba(245, 158, 11, 0.12);
    color: var(--warning-light);

    border: 1px solid rgba(245, 158, 11, 0.22);
}


.badge-danger {
    background: rgba(239, 68, 68, 0.12);
    color: #fca5a5;

    border: 1px solid rgba(239, 68, 68, 0.22);
}


/* =========================================================
   08. LOGO
   ========================================================= */

.logo {
    display: inline-flex;

    align-items: center;

    gap: 9px;

    color: var(--text-primary);

    font-size: 1.05rem;
    font-weight: 800;

    letter-spacing: -0.02em;
}


.logo-icon {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    border-radius: 9px;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            var(--secondary)
        );

    color: #ffffff;

    font-size: 0.9rem;

    box-shadow:
        0 6px 18px rgba(124, 58, 237, 0.25);
}


/* =========================================================
   09. HEADER GLOBAL
   ========================================================= */

.site-header {
    position: sticky;

    top: 0;

    z-index: 1000;

    width: 100%;

    min-height: var(--header-height);

    background:
        rgba(8, 11, 20, 0.82);

    border-bottom: 1px solid var(--border);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
}


.site-header-inner {
    min-height: var(--header-height);

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 30px;
}


.site-header-left {
    display: flex;

    align-items: center;

    gap: 36px;

    min-width: 0;
}


/* =========================================================
   10. NAVEGAÇÃO
   ========================================================= */

.site-nav {
    display: flex;

    align-items: center;

    gap: 26px;
}


.site-nav a {
    position: relative;

    color: var(--text-secondary);

    font-size: 0.9rem;
    font-weight: 500;

    transition:
        color var(--transition);
}


.site-nav a:hover {
    color: var(--text-primary);
}


.site-nav a.active {
    color: var(--text-primary);
}


.site-nav a.active::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;
    bottom: -8px;

    height: 2px;

    border-radius: 999px;

    background: var(--primary);
}


/* =========================================================
   11. AÇÕES DO HEADER
   ========================================================= */

.header-actions {
    display: flex;

    align-items: center;

    gap: 10px;

    flex-shrink: 0;
}


/* =========================================================
   12. SEÇÕES
   ========================================================= */

.section {
    position: relative;

    padding: 100px 0;
}


.section-sm {
    padding: 70px 0;
}


.section-lg {
    padding: 130px 0;
}


/* =========================================================
   13. CABEÇALHO DE SEÇÃO
   ========================================================= */

.section-header {
    max-width: 760px;

    margin: 0 auto 55px;

    text-align: center;
}


.section-label {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    margin-bottom: 14px;

    color: var(--primary-light);

    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: 0.12em;

    text-transform: uppercase;
}


.section-title {
    margin-bottom: 16px;

    color: var(--text-primary);

    font-size: clamp(
        2rem,
        4vw,
        3rem
    );

    font-weight: 800;

    line-height: 1.1;

    letter-spacing: -0.04em;
}


.section-description {
    color: var(--text-secondary);

    font-size: 1rem;

    line-height: 1.75;
}


/* =========================================================
   14. CARDS GLOBAIS
   ========================================================= */

.card {
    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.035),
            rgba(255, 255, 255, 0.015)
        );

    border: 1px solid var(--border);

    border-radius: var(--radius-lg);

    box-shadow: var(--shadow-xs);

    transition:
        border-color var(--transition),
        background var(--transition),
        transform var(--transition),
        box-shadow var(--transition);
}


.card:hover {
    border-color: var(--border-light);

    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.02)
        );

    box-shadow: var(--shadow-sm);
}


.card-body {
    padding: 28px;
}


/* =========================================================
   15. STATUS
   ========================================================= */

.status {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    font-size: 0.82rem;
    font-weight: 600;
}


.status-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--text-muted);
}


.status-active .status-dot {
    background: var(--success);

    box-shadow:
        0 0 0 4px rgba(34, 197, 94, 0.10);
}


.status-warning .status-dot {
    background: var(--warning);

    box-shadow:
        0 0 0 4px rgba(245, 158, 11, 0.10);
}


.status-danger .status-dot {
    background: var(--danger);

    box-shadow:
        0 0 0 4px rgba(239, 68, 68, 0.10);
}


/* =========================================================
   16. FORMULÁRIOS
   ========================================================= */

.form-group {
    display: flex;

    flex-direction: column;

    gap: 8px;
}


.form-label {
    color: var(--text-primary);

    font-size: 0.88rem;
    font-weight: 600;
}


.form-help {
    color: var(--text-muted);

    font-size: 0.78rem;
}


.form-input,
.form-select,
.form-textarea {
    width: 100%;

    border: 1px solid var(--border-light);

    border-radius: var(--radius-md);

    background: rgba(255, 255, 255, 0.035);

    color: var(--text-primary);

    outline: none;

    transition:
        border-color var(--transition),
        background var(--transition),
        box-shadow var(--transition);
}


.form-input,
.form-select {
    min-height: 46px;

    padding: 0 14px;
}


.form-textarea {
    min-height: 120px;

    padding: 14px;

    resize: vertical;
}


.form-input::placeholder,
.form-textarea::placeholder {
    color: var(--text-muted);
}


.form-input:hover,
.form-select:hover,
.form-textarea:hover {
    border-color: var(--border-strong);
}


.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    border-color: var(--primary);

    background: rgba(124, 58, 237, 0.035);

    box-shadow:
        0 0 0 3px rgba(124, 58, 237, 0.12);
}


.form-select {
    cursor: pointer;
}


/* =========================================================
   17. DIVISOR
   ========================================================= */

.divider {
    width: 100%;

    height: 1px;

    background: var(--border);
}


/* =========================================================
   18. UTILITÁRIOS
   ========================================================= */

.text-primary {
    color: var(--text-primary);
}


.text-secondary {
    color: var(--text-secondary);
}


.text-muted {
    color: var(--text-muted);
}


.text-success {
    color: var(--success);
}


.text-warning {
    color: var(--warning);
}


.text-danger {
    color: var(--danger);
}


.text-center {
    text-align: center;
}


.hidden {
    display: none !important;
}


.flex {
    display: flex;
}


.flex-center {
    display: flex;

    align-items: center;
    justify-content: center;
}


.items-center {
    align-items: center;
}


.justify-between {
    justify-content: space-between;
}


.gap-sm {
    gap: 8px;
}


.gap-md {
    gap: 16px;
}


.gap-lg {
    gap: 24px;
}


/* =========================================================
   19. SCROLLBAR
   ========================================================= */

::-webkit-scrollbar {
    width: 9px;
    height: 9px;
}


::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}


::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.14);

    border-radius: 999px;
}


::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.22);
}


/* =========================================================
   20. RESPONSIVIDADE — TABLET
   ========================================================= */

@media (max-width: 900px) {

    :root {
        --header-height: 70px;
    }


    .site-header-left {
        gap: 20px;
    }


    .site-nav {
        gap: 18px;
    }


    .site-nav a {
        font-size: 0.84rem;
    }


    .section {
        padding: 80px 0;
    }


    .section-lg {
        padding: 100px 0;
    }


    .section-header {
        margin-bottom: 42px;
    }
}


/* =========================================================
   21. RESPONSIVIDADE — MOBILE
   ========================================================= */

@media (max-width: 700px) {

    .container {
        width: min(
            calc(100% - 28px),
            var(--container)
        );
    }


    .site-header {
        position: relative;
    }


    .site-header-inner {
        min-height: auto;

        padding: 16px 0;

        flex-wrap: wrap;

        gap: 16px;
    }


    .site-header-left {
        width: 100%;

        justify-content: space-between;
    }


    .site-nav {
        width: 100%;

        order: 3;

        overflow-x: auto;

        padding-bottom: 4px;

        gap: 20px;
    }


    .site-nav a {
        white-space: nowrap;
    }


    .header-actions {
        margin-left: auto;
    }


    .section {
        padding: 65px 0;
    }


    .section-sm {
        padding: 50px 0;
    }


    .section-lg {
        padding: 80px 0;
    }


    .section-title {
        font-size: 2rem;
    }


    .section-description {
        font-size: 0.94rem;
    }


    .card-body {
        padding: 22px;
    }


    .button {
        min-height: 42px;

        padding: 0 16px;

        font-size: 0.88rem;
    }


    .button-large {
        min-height: 48px;

        padding: 0 20px;
    }
}


/* =========================================================
   22. MOBILE PEQUENO
   ========================================================= */

@media (max-width: 480px) {

    .container {
        width: min(
            calc(100% - 22px),
            var(--container)
        );
    }


    .logo {
        font-size: 0.95rem;
    }


    .logo-icon {
        width: 28px;
        height: 28px;
    }


    .header-actions {
        width: 100%;
    }


    .header-actions .button {
        flex: 1;
    }


    .section-title {
        font-size: 1.75rem;
    }
}


/* =========================================================
   23. REDUÇÃO DE MOVIMENTO
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }


    *,
    *::before,
    *::after {
        transition-duration: 0.01ms !important;

        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;
    }
}
