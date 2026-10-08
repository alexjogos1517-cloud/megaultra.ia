/**
 * ============================================================
 * AGENTES UNIVERSAL
 * JAVASCRIPT GLOBAL — NÚCLEO DA PLATAFORMA
 * ============================================================
 *
 * ARQUIVO:
 * /js/global.js
 *
 * VERSÃO:
 * 2.0
 *
 * FUNÇÃO:
 * Núcleo global da aplicação.
 *
 * IMPORTANTE:
 * Este arquivo NÃO deve conter:
 * - senhas reais
 * - chaves de API
 * - credenciais
 * - lógica de banco real
 * - segredos
 *
 * A camada de dados fica em:
 * /js/database.js
 *
 * Futuramente:
 *
 * Interface
 *    ↓
 * JavaScript
 *    ↓
 * Data Layer
 *    ↓
 * API / Netlify Functions
 *    ↓
 * Banco de dados
 *
 * ============================================================
 */

"use strict";


/* ============================================================
   1. CONFIGURAÇÃO PRINCIPAL
   ============================================================ */

const APP = Object.freeze({

    name: "Agentes Universal",

    shortName: "Agentes Universal",

    title: "Agentes Universal — Plataforma de Agentes IA",

    version: "2.0.0",

    environment: "frontend",

    language: "pt-BR",

    timezone: "America/Sao_Paulo",

    currency: "BRL",

    currencySymbol: "R$",

    subscriptionDays: 30,

    storageMode: "local",

    apiMode: false,

    backendReady: false,

    initialized: false

});


/* ============================================================
   2. CONFIGURAÇÃO DA PLATAFORMA
   ============================================================ */

const PLATFORM_CONFIG = Object.freeze({

    platform: {
        id: "PLT-001",
        name: "Agentes Universal",
        status: "active"
    },

    brand: {
        logo: "✦",
        name: "AGENTES UNIVERSAL"
    },

    routes: {

        home: "/index.html",

        login: "/login.html",

        register: "/cadastro.html",

        recovery: "/recuperar-senha.html",

        client: "/cliente/dashboard.html",

        clientAgents: "/cliente/agentes.html",

        clientAgent: "/cliente/agente.html",

        clientSubscription: "/cliente/assinatura.html",

        clientProfile: "/cliente/perfil.html",

        clientApis: "/cliente/apis.html",

        clientHistory: "/cliente/historico.html",

        admin: "/admin/dashboard.html",

        adminClients: "/admin/clientes.html",

        adminClient: "/admin/cliente.html",

        adminAgents: "/admin/agentes.html",

        adminSubscriptions: "/admin/assinaturas.html",

        adminPlans: "/admin/planos.html",

        adminApis: "/admin/apis.html",

        adminLogs: "/admin/logs.html",

        adminSettings: "/admin/configuracoes.html",

        universalAgent: "/agentes/universal/index.html",

        universalV31:
            "/agentes/universal/v3.1/index.html"

    },

    api: {

        enabled: false,

        baseUrl: "/.netlify/functions",

        timeout: 30000

    }

});


/* ============================================================
   3. TIPOS E STATUS PADRÃO
   ============================================================ */

const STATUS = Object.freeze({

    ACTIVE: "active",

    INACTIVE: "inactive",

    PENDING: "pending",

    BLOCKED: "blocked",

    EXPIRED: "expired",

    CANCELLED: "cancelled",

    SUSPENDED: "suspended",

    DRAFT: "draft"

});


const USER_ROLES = Object.freeze({

    ADMIN: "admin",

    CLIENT: "client"

});


const EXECUTION_STATUS = Object.freeze({

    PENDING: "pending",

    RUNNING: "running",

    COMPLETED: "completed",

    FAILED: "failed",

    CANCELLED: "cancelled"

});


/* ============================================================
   4. UTILIDADES DE ID
   ============================================================ */

function generateId(prefix = "ID") {

    const timestamp = Date.now();

    const random = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    return `${prefix}-${timestamp}-${random}`;
}


/* ============================================================
   5. UTILIDADES DE DATA
   ============================================================ */

function now() {

    return new Date();

}


function nowISO() {

    return new Date().toISOString();

}


function formatDate(dateValue) {

    if (!dateValue) {
        return "-";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "-";
    }

    return new Intl.DateTimeFormat(
        APP.language,
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    ).format(date);

}


function formatDateTime(dateValue) {

    if (!dateValue) {
        return "-";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "-";
    }

    return new Intl.DateTimeFormat(
        APP.language,
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    ).format(date);

}


/* ============================================================
   6. UTILIDADES DE MOEDA
   ============================================================ */

function formatCurrency(value) {

    const number = Number(value);

    if (Number.isNaN(number)) {
        return "R$ 0,00";
    }

    return new Intl.NumberFormat(
        APP.language,
        {
            style: "currency",
            currency: APP.currency
        }
    ).format(number);

}


/* ============================================================
   7. UTILIDADES DE TEXTO
   ============================================================ */

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    const element = document.createElement("div");

    element.textContent = String(value);

    return element.innerHTML;

}


function truncateText(value, maxLength = 100) {

    if (!value) {
        return "";
    }

    const text = String(value);

    if (text.length <= maxLength) {
        return text;
    }

    return `${text.substring(0, maxLength)}...`;

}


/* ============================================================
   8. UTILIDADES DE URL
   ============================================================ */

function navigateTo(path) {

    if (!path) {
        return;
    }

    window.location.href = path;

}


function openInNewTab(path) {

    if (!path) {
        return;
    }

    window.open(path, "_blank", "noopener,noreferrer");

}


/* ============================================================
   9. EVENT BUS GLOBAL
   ============================================================ */

const EventBus = {

    events: {},

    on(eventName, callback) {

        if (!this.events[eventName]) {

            this.events[eventName] = [];

        }

        this.events[eventName].push(callback);

    },

    off(eventName, callback) {

        if (!this.events[eventName]) {
            return;
        }

        this.events[eventName] =
            this.events[eventName]
                .filter(
                    handler => handler !== callback
                );

    },

    emit(eventName, data = null) {

        if (!this.events[eventName]) {
            return;
        }

        this.events[eventName].forEach(
            callback => {

                try {

                    callback(data);

                } catch (error) {

                    console.error(
                        `[EventBus] Erro no evento ${eventName}:`,
                        error
                    );

                }

            }
        );

    }

};


/* ============================================================
   10. ESTADO DA APLICAÇÃO
   ============================================================ */

const AppState = {

    initialized: false,

    currentUser: null,

    currentClient: null,

    currentAgent: null,

    currentExecution: null,

    currentPage: null,

    loading: false,

    error: null

};


function setAppState(key, value) {

    if (!(key in AppState)) {

        console.warn(
            `[AppState] Propriedade desconhecida: ${key}`
        );

        return;

    }

    AppState[key] = value;

}


function getAppState(key = null) {

    if (!key) {

        return {
            ...AppState
        };

    }

    return AppState[key];

}


/* ============================================================
   11. DETECÇÃO DE PÁGINA
   ============================================================ */

function getCurrentPage() {

    const path = window.location.pathname;

    if (path.endsWith("/index.html") || path === "/") {

        return "home";

    }

    if (path.includes("/cliente/")) {

        return "client";

    }

    if (path.includes("/admin/")) {

        return "admin";

    }

    if (path.includes("/agentes/")) {

        return "agent";

    }

    if (path.includes("login.html")) {

        return "login";

    }

    if (path.includes("cadastro.html")) {

        return "register";

    }

    if (path.includes("recuperar-senha.html")) {

        return "recovery";

    }

    return "unknown";

}


/* ============================================================
   12. VALIDAÇÃO DE CONFIGURAÇÃO
   ============================================================ */

function validateAppConfiguration() {

    const errors = [];

    if (!APP.name) {

        errors.push("Nome da aplicação não configurado.");

    }

    if (!APP.version) {

        errors.push("Versão da aplicação não configurada.");

    }

    if (!APP.language) {

        errors.push("Idioma não configurado.");

    }

    if (!APP.timezone) {

        errors.push("Timezone não configurado.");

    }

    if (!APP.currency) {

        errors.push("Moeda não configurada.");

    }

    if (errors.length > 0) {

        console.error(
            "[Agentes Universal] Erros de configuração:",
            errors
        );

        return false;

    }

    return true;

}


/* ============================================================
   13. INICIALIZAÇÃO
   ============================================================ */

function initializeApp() {

    if (AppState.initialized) {

        return;

    }

    const valid =
        validateAppConfiguration();

    if (!valid) {

        console.error(
            "[Agentes Universal] Inicialização interrompida."
        );

        return;

    }

    AppState.currentPage =
        getCurrentPage();

    AppState.initialized = true;

    APP.initialized = true;

    EventBus.emit(
        "app:initialized",
        {
            page: AppState.currentPage,
            version: APP.version
        }
    );

}


/* ============================================================
   14. LOG CONTROLADO
   ============================================================ */

const Logger = {

    info(message, data = null) {

        console.info(
            `[Agentes Universal] ${message}`,
            data ?? ""
        );

    },

    warn(message, data = null) {

        console.warn(
            `[Agentes Universal] ${message}`,
            data ?? ""
        );

    },

    error(message, error = null) {

        console.error(
            `[Agentes Universal] ${message}`,
            error ?? ""
        );

    }

};


/* ============================================================
   15. API FUTURA
   ============================================================ */

/**
 * Esta função NÃO executa chamadas reais neste momento.
 *
 * Futuramente:
 *
 * frontend
 *    ↓
 * api.js
 *    ↓
 * Netlify Functions
 *    ↓
 * backend
 */

async function apiRequest() {

    if (!PLATFORM_CONFIG.api.enabled) {

        throw new Error(
            "API ainda não está habilitada."
        );

    }

}


/* ============================================================
   16. NAMESPACE PRINCIPAL
   ============================================================ */

window.AGENTES_UNIVERSAL = {

    APP,

    PLATFORM_CONFIG,

    STATUS,

    USER_ROLES,

    EXECUTION_STATUS,

    AppState,

    EventBus,

    Logger,

    generateId,

    now,

    nowISO,

    formatDate,

    formatDateTime,

    formatCurrency,

    escapeHTML,

    truncateText,

    navigateTo,

    openInNewTab,

    getCurrentPage,

    setAppState,

    getAppState,

    validateAppConfiguration,

    initializeApp,

    apiRequest

};


/* ============================================================
   17. INICIALIZAÇÃO AUTOMÁTICA
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeApp();

    }
);
