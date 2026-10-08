/* =========================================================
   AGENTES UNIVERSAL
   JAVASCRIPT GLOBAL
   Versão: 1.0
   Status: Núcleo inicial da plataforma
   ========================================================= */


/* =========================================================
   01. CONFIGURAÇÃO PRINCIPAL
   ========================================================= */

const APP = {

    name: "Agentes Universal",

    shortName: "Agentes Universal",

    version: "0.1.0",

    environment: "development",

    mode: "HTML/CSS/JS",

    storageKey: "agentes_universal_data",

    initialized: false
};


/* =========================================================
   02. CONFIGURAÇÃO DA PLATAFORMA
   ========================================================= */

const PLATFORM_CONFIG = {

    platformName: "Agentes Universal",

    platformTitle:
        "Agentes Universal — Plataforma de Agentes IA",

    supportEmail:
        "suporte@agentesuniversal.local",

    subscriptionDays: 30,

    defaultLanguage: "pt-BR",

    timezone: "America/Sao_Paulo",

    currency: "BRL"
};


/* =========================================================
   03. BANCO DE DADOS TEMPORÁRIO
   =========================================================

   ATENÇÃO:

   Esta estrutura simula o banco de dados.

   Futuramente será substituída por:

   - Backend
   - Banco de dados real
   - API
   - Sistema de autenticação
   - Controle de sessão
   - Segurança real

   Não colocar informações sensíveis reais aqui.
   ========================================================= */

const DEFAULT_DATABASE = {

    /* =====================================================
       USUÁRIOS
       ===================================================== */

    users: [],


    /* =====================================================
       CLIENTES
       ===================================================== */

    clients: [

        {
            id: "CLI-0001",

            name: "Cliente Demonstração",

            email: "cliente@demo.local",

            whatsapp: "(00) 00000-0000",

            status: "active",

            createdAt:
                "2026-10-08T14:30:00",

            token:
                "demo-token-cli-0001",

            subscriptionId:
                "SUB-0001"
        }

    ],


    /* =====================================================
       SESSÕES
       ===================================================== */

    sessions: [],


    /* =====================================================
       TOKENS
       ===================================================== */

    clientTokens: [

        {
            id: "TOK-0001",

            clientId: "CLI-0001",

            token:
                "demo-token-cli-0001",

            status: "active",

            createdAt:
                "2026-10-08T14:30:00"
        }

    ],


    /* =====================================================
       PLANOS
       ===================================================== */

    plans: [

        {
            id: "PLAN-001",

            name: "Plano Inicial",

            description:
                "Plano inicial da plataforma.",

            price: 0,

            durationDays: 30,

            status: "active",

            agentsLimit: 1
        }

    ],


    /* =====================================================
       ASSINATURAS
       ===================================================== */

    subscriptions: [

        {
            id: "SUB-0001",

            clientId: "CLI-0001",

            planId: "PLAN-001",

            startAt:
                "2026-10-08T14:30:00",

            endAt:
                "2026-11-07T14:30:00",

            status: "active",

            autoRenew: false
        }

    ],


    /* =====================================================
       HISTÓRICO DE ASSINATURAS
       ===================================================== */

    subscriptionHistory: [

        {
            id: "SUBH-0001",

            subscriptionId: "SUB-0001",

            clientId: "CLI-0001",

            action: "created",

            date:
                "2026-10-08T14:30:00"
        }

    ],


    /* =====================================================
       AGENTES
       ===================================================== */

    agents: [

        {
            id: "AGT-001",

            name:
                "Agente Universal de Criação de Prompts",

            version: "V3.1",

            fullName:
                "Agente Universal de Criação de IA — V3.1",

            description:
                "Agente universal para criação de ideias, roteiros, prompts, cenas e projetos com inteligência artificial.",

            category:
                "Criação",

            status: "active",

            path:
                "agentes/universal/v3.1/index.html"
        },


        {
            id: "AGT-002",

            name:
                "Agente Universal de Roteiros",

            version: "V1.0",

            fullName:
                "Agente Universal de Roteiros — V1.0",

            description:
                "Agente especializado na criação e estruturação de roteiros.",

            category:
                "Roteiros",

            status: "active",

            path:
                "agentes/universal/roteiros/index.html"
        },


        {
            id: "AGT-003",

            name:
                "Agente Universal de Conteúdo",

            version: "V1.0",

            fullName:
                "Agente Universal de Conteúdo — V1.0",

            description:
                "Agente para criação de conteúdos para diferentes plataformas.",

            category:
                "Conteúdo",

            status: "maintenance",

            path:
                "agentes/universal/conteudo/index.html"
        }

    ],


    /* =====================================================
       VERSÕES DOS AGENTES
       ===================================================== */

    agentVersions: [

        {
            id: "AGV-001",

            agentId: "AGT-001",

            version: "V3.1",

            status: "active",

            releaseDate:
                "2026-10-08"
        }

    ],


    /* =====================================================
       PERMISSÕES DOS CLIENTES
       ===================================================== */

    agentPermissions: [

        {
            id: "PERM-0001",

            clientId: "CLI-0001",

            agentId: "AGT-001",

            allowed: true,

            createdAt:
                "2026-10-08T14:30:00"
        },


        {
            id: "PERM-0002",

            clientId: "CLI-0001",

            agentId: "AGT-002",

            allowed: false,

            createdAt:
                "2026-10-08T14:30:00"
        },


        {
            id: "PERM-0003",

            clientId: "CLI-0001",

            agentId: "AGT-003",

            allowed: false,

            createdAt:
                "2026-10-08T14:30:00"
        }

    ],


    /* =====================================================
       PROVEDORES DE API
       ===================================================== */

    apiProviders: [

        {
            id: "API-GEMINI",

            name: "Google Gemini",

            slug: "gemini",

            status: "active"
        },


        {
            id: "API-OPENAI",

            name: "OpenAI",

            slug: "openai",

            status: "active"
        }

    ],


    /* =====================================================
       CHAVES DE API DOS CLIENTES
       ===================================================== */

    clientApiKeys: [],


    /* =====================================================
       EXECUÇÕES
       ===================================================== */

    executions: [],


    /* =====================================================
       LOGS DE EXECUÇÃO
       ===================================================== */

    executionLogs: [],


    /* =====================================================
       LOGS DE AUDITORIA
       ===================================================== */

    auditLogs: [],


    /* =====================================================
       CONFIGURAÇÕES
       ===================================================== */

    settings: {

        maintenanceMode: false,

        allowRegistration: true,

        allowPasswordRecovery: true,

        defaultSubscriptionDays: 30,

        platformVersion: "0.1.0"
    }

};


/* =========================================================
   04. OBTER BANCO DE DADOS
   ========================================================= */

function getDatabase() {

    try {

        const stored =
            localStorage.getItem(APP.storageKey);

        if (!stored) {

            const initialData =
                JSON.parse(
                    JSON.stringify(DEFAULT_DATABASE)
                );

            localStorage.setItem(
                APP.storageKey,
                JSON.stringify(initialData)
            );

            return initialData;
        }


        return JSON.parse(stored);

    } catch (error) {

        console.error(
            "Erro ao carregar banco local:",
            error
        );

        return JSON.parse(
            JSON.stringify(DEFAULT_DATABASE)
        );
    }
}


/* =========================================================
   05. SALVAR BANCO DE DADOS
   ========================================================= */

function saveDatabase(database) {

    try {

        localStorage.setItem(
            APP.storageKey,
            JSON.stringify(database)
        );

        return true;

    } catch (error) {

        console.error(
            "Erro ao salvar banco local:",
            error
        );

        return false;
    }
}


/* =========================================================
   06. RESETAR BANCO
   ========================================================= */

function resetDatabase() {

    const confirmation =
        window.confirm(
            "Deseja realmente restaurar os dados de demonstração?"
        );


    if (!confirmation) {

        return false;
    }


    const database =
        JSON.parse(
            JSON.stringify(DEFAULT_DATABASE)
        );


    saveDatabase(database);


    console.log(
        "Banco de demonstração restaurado."
    );


    window.location.reload();

    return true;
}


/* =========================================================
   07. OBTER CLIENTE
   ========================================================= */

function getClientById(clientId) {

    const database =
        getDatabase();

    return database.clients.find(
        client => client.id === clientId
    ) || null;
}


/* =========================================================
   08. OBTER CLIENTE ATUAL
   ========================================================= */

function getCurrentClient() {

    const database =
        getDatabase();


    const currentClientId =
        localStorage.getItem(
            "agentes_universal_current_client"
        );


    if (currentClientId) {

        return getClientById(
            currentClientId
        );
    }


    return database.clients[0] || null;
}


/* =========================================================
   09. DEFINIR CLIENTE ATUAL
   ========================================================= */

function setCurrentClient(clientId) {

    const client =
        getClientById(clientId);


    if (!client) {

        return false;
    }


    localStorage.setItem(
        "agentes_universal_current_client",
        clientId
    );


    return true;
}


/* =========================================================
   10. OBTER ASSINATURA DO CLIENTE
   ========================================================= */

function getClientSubscription(clientId) {

    const database =
        getDatabase();


    return database.subscriptions.find(
        subscription =>
            subscription.clientId === clientId
    ) || null;
}


/* =========================================================
   11. VERIFICAR ASSINATURA
   ========================================================= */

function isSubscriptionActive(clientId) {

    const subscription =
        getClientSubscription(clientId);


    if (!subscription) {

        return false;
    }


    const now =
        new Date();


    const start =
        new Date(
            subscription.startAt
        );


    const end =
        new Date(
            subscription.endAt
        );


    return (
        subscription.status === "active" &&
        now >= start &&
        now < end
    );
}


/* =========================================================
   12. DIAS RESTANTES
   ========================================================= */

function getSubscriptionDaysLeft(clientId) {

    const subscription =
        getClientSubscription(clientId);


    if (!subscription) {

        return 0;
    }


    const now =
        new Date();


    const end =
        new Date(
            subscription.endAt
        );


    const difference =
        end.getTime() -
        now.getTime();


    if (difference <= 0) {

        return 0;
    }


    return Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
    );
}


/* =========================================================
   13. FORMATAR DATA
   ========================================================= */

function formatDate(
    dateValue,
    includeTime = false
) {

    if (!dateValue) {

        return "-";
    }


    const date =
        new Date(dateValue);


    if (Number.isNaN(date.getTime())) {

        return "-";
    }


    const options = {

        day: "2-digit",

        month: "2-digit",

        year: "numeric"
    };


    if (includeTime) {

        options.hour = "2-digit";

        options.minute = "2-digit";
    }


    return new Intl.DateTimeFormat(
        "pt-BR",
        options
    ).format(date);
}


/* =========================================================
   14. FORMATAR MOEDA
   ========================================================= */

function formatCurrency(value) {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(
        Number(value) || 0
    );
}


/* =========================================================
   15. OBTER AGENTE
   ========================================================= */

function getAgentById(agentId) {

    const database =
        getDatabase();


    return database.agents.find(
        agent => agent.id === agentId
    ) || null;
}


/* =========================================================
   16. OBTER AGENTES ATIVOS
   ========================================================= */

function getActiveAgents() {

    const database =
        getDatabase();


    return database.agents.filter(
        agent =>
            agent.status === "active"
    );
}


/* =========================================================
   17. VERIFICAR PERMISSÃO
   ========================================================= */

function hasAgentPermission(
    clientId,
    agentId
) {

    const database =
        getDatabase();


    const permission =
        database.agentPermissions.find(
            item =>
                item.clientId === clientId &&
                item.agentId === agentId
        );


    return Boolean(
        permission &&
        permission.allowed === true
    );
}


/* =========================================================
   18. AGENTES PERMITIDOS
   ========================================================= */

function getClientAgents(clientId) {

    const database =
        getDatabase();


    return database.agents.filter(
        agent => {

            const permission =
                database.agentPermissions.find(
                    item =>
                        item.clientId === clientId &&
                        item.agentId === agent.id
                );


            return (
                agent.status === "active" &&
                permission &&
                permission.allowed === true
            );
        }
    );
}


/* =========================================================
   19. VERIFICAÇÃO CENTRAL DE ACESSO
   =========================================================

   Essa função será importante no futuro.

   Fluxo:

   1. Cliente existe?
   2. Cliente está ativo?
   3. Assinatura está ativa?
   4. Agente existe?
   5. Agente está ativo?
   6. Cliente possui permissão?

   Se tudo estiver correto:
   acesso permitido.
   ========================================================= */

function canAccessAgent(
    clientId,
    agentId
) {

    const client =
        getClientById(clientId);


    if (!client) {

        return {

            allowed: false,

            reason: "CLIENT_NOT_FOUND"
        };
    }


    if (client.status !== "active") {

        return {

            allowed: false,

            reason: "CLIENT_INACTIVE"
        };
    }


    if (
        !isSubscriptionActive(
            clientId
        )
    ) {

        return {

            allowed: false,

            reason: "SUBSCRIPTION_EXPIRED"
        };
    }


    const agent =
        getAgentById(agentId);


    if (!agent) {

        return {

            allowed: false,

            reason: "AGENT_NOT_FOUND"
        };
    }


    if (agent.status !== "active") {

        return {

            allowed: false,

            reason: "AGENT_INACTIVE"
        };
    }


    if (
        !hasAgentPermission(
            clientId,
            agentId
        )
    ) {

        return {

            allowed: false,

            reason: "PERMISSION_DENIED"
        };
    }


    return {

        allowed: true,

        reason: "ACCESS_GRANTED",

        client,

        agent
    };
}


/* =========================================================
   20. CRIAR LOG DE AUDITORIA
   ========================================================= */

function createAuditLog({

    action,

    clientId = null,

    agentId = null,

    description = ""

}) {

    const database =
        getDatabase();


    const log = {

        id:
            "AUD-" +
            Date.now(),

        action,

        clientId,

        agentId,

        description,

        createdAt:
            new Date().toISOString()
    };


    database.auditLogs.push(log);


    saveDatabase(database);


    return log;
}


/* =========================================================
   21. REGISTRAR EXECUÇÃO
   ========================================================= */

function createExecution({

    clientId,

    agentId,

    input = "",

    status = "started"

}) {

    const database =
        getDatabase();


    const execution = {

        id:
            "EXE-" +
            Date.now(),

        clientId,

        agentId,

        input,

        status,

        startedAt:
            new Date().toISOString(),

        finishedAt: null,

        output: ""
    };


    database.executions.push(
        execution
    );


    saveDatabase(database);


    return execution;
}


/* =========================================================
   22. ATUALIZAR EXECUÇÃO
   ========================================================= */

function updateExecution(
    executionId,
    updates = {}
) {

    const database =
        getDatabase();


    const index =
        database.executions.findIndex(
            execution =>
                execution.id === executionId
        );


    if (index === -1) {

        return null;
    }


    database.executions[index] = {

        ...database.executions[index],

        ...updates
    };


    if (
        updates.status === "completed" ||
        updates.status === "error"
    ) {

        database.executions[index].finishedAt =
            new Date().toISOString();
    }


    saveDatabase(database);


    return database.executions[index];
}


/* =========================================================
   23. REGISTRAR LOG DE EXECUÇÃO
   ========================================================= */

function createExecutionLog({

    executionId,

    level = "info",

    message = ""

}) {

    const database =
        getDatabase();


    const log = {

        id:
            "EXL-" +
            Date.now(),

        executionId,

        level,

        message,

        createdAt:
            new Date().toISOString()
    };


    database.executionLogs.push(log);


    saveDatabase(database);


    return log;
}


/* =========================================================
   24. OBTER ESTADO COMPLETO
   ========================================================= */

function getAppState() {

    return {

        app: APP,

        config:
            PLATFORM_CONFIG,

        database:
            getDatabase()
    };
}


/* =========================================================
   25. INICIALIZAÇÃO
   ========================================================= */

function initializeApp() {

    if (APP.initialized) {

        return;
    }


    getDatabase();


    const currentClient =
        getCurrentClient();


    if (
        currentClient &&
        !localStorage.getItem(
            "agentes_universal_current_client"
        )
    ) {

        setCurrentClient(
            currentClient.id
        );
    }


    APP.initialized = true;


    console.log(
        "=========================================="
    );

    console.log(
        "AGENTES UNIVERSAL"
    );

    console.log(
        "Plataforma inicializada."
    );

    console.log(
        "Versão:",
        APP.version
    );

    console.log(
        "Modo:",
        APP.mode
    );

    console.log(
        "=========================================="
    );
}


/* =========================================================
   26. INICIALIZAR AUTOMATICAMENTE
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

} else {

    initializeApp();
}


/* =========================================================
   27. EXPOSIÇÃO GLOBAL
   =========================================================

   Essas funções ficam disponíveis para os outros
   arquivos JavaScript da plataforma.

   Futuramente essa arquitetura poderá ser substituída
   por módulos JavaScript/backend.
   ========================================================= */

window.AGENTES_UNIVERSAL = {

    APP,

    PLATFORM_CONFIG,

    getDatabase,

    saveDatabase,

    resetDatabase,

    getClientById,

    getCurrentClient,

    setCurrentClient,

    getClientSubscription,

    isSubscriptionActive,

    getSubscriptionDaysLeft,

    formatDate,

    formatCurrency,

    getAgentById,

    getActiveAgents,

    hasAgentPermission,

    getClientAgents,

    canAccessAgent,

    createAuditLog,

    createExecution,

    updateExecution,

    createExecutionLog,

    getAppState,

    initializeApp
};
