/**
 * ============================================================
 * AGENTES UNIVERSAL
 * CAMADA DE DADOS
 * ============================================================
 *
 * ARQUIVO:
 * /js/database.js
 *
 * VERSÃO:
 * 1.0
 *
 * FUNÇÃO:
 * Centralizar todo acesso aos dados da plataforma.
 *
 * ATUALMENTE:
 * localStorage / modo demonstração
 *
 * FUTURAMENTE:
 * API / Netlify Functions / Banco de dados
 *
 * ============================================================
 */

"use strict";


/* ============================================================
   1. CONFIGURAÇÃO
   ============================================================ */

const DATABASE_CONFIG = Object.freeze({

    storageKey:
        "agentes_universal_database_v1",

    mode: "local",

    futureApiBase:
        "/.netlify/functions"

});


/* ============================================================
   2. ESTRUTURA INICIAL
   ============================================================ */

function createEmptyDatabase() {

    return {

        meta: {

            version: "1.0",

            createdAt:
                new Date().toISOString(),

            updatedAt:
                new Date().toISOString()

        },

        users: [],

        clients: [],

        sessions: [],

        clientTokens: [],

        plans: [],

        subscriptions: [],

        subscriptionHistory: [],

        agents: [],

        agentVersions: [],

        agentPermissions: [],

        apiProviders: [],

        clientApiKeys: [],

        executions: [],

        executionLogs: [],

        auditLogs: [],

        settings: []

    };

}


/* ============================================================
   3. DADOS DEMONSTRATIVOS
   ============================================================ */

function createDemoDatabase() {

    const database =
        createEmptyDatabase();


    /* --------------------------------------------------------
       USUÁRIO ADMIN
       -------------------------------------------------------- */

    database.users.push({

        id: "USR-ADMIN-001",

        role: "admin",

        name: "Administrador",

        email: "admin@agentesuniversal.com",

        status: "active",

        createdAt:
            new Date().toISOString()

    });


    /* --------------------------------------------------------
       CLIENTE DEMONSTRATIVO
       -------------------------------------------------------- */

    database.users.push({

        id: "USR-CLI-001",

        role: "client",

        name: "Cliente Demonstração",

        email: "cliente@agentesuniversal.com",

        status: "active",

        createdAt:
            new Date().toISOString()

    });


    database.clients.push({

        id: "CLI-0001",

        userId: "USR-CLI-001",

        name: "Cliente Demonstração",

        email: "cliente@agentesuniversal.com",

        whatsapp: "",

        status: "active",

        tokenId: "TOK-CLI-0001",

        createdAt:
            new Date().toISOString()

    });


    /* --------------------------------------------------------
       TOKEN DEMONSTRATIVO
       -------------------------------------------------------- */

    database.clientTokens.push({

        id: "TOK-CLI-0001",

        clientId: "CLI-0001",

        token: "DEMO-CLIENT-TOKEN",

        status: "active",

        createdAt:
            new Date().toISOString()

    });


    /* --------------------------------------------------------
       PLANO
       -------------------------------------------------------- */

    database.plans.push({

        id: "PLAN-001",

        name: "Plano Inicial",

        description:
            "Plano demonstrativo da plataforma.",

        price: 0,

        durationDays: 30,

        status: "active",

        features: [

            "Acesso aos agentes autorizados",

            "Histórico de execuções",

            "Área do cliente"

        ]

    });


    /* --------------------------------------------------------
       ASSINATURA
       -------------------------------------------------------- */

    const startedAt =
        new Date();

    const expiresAt =
        new Date(startedAt);

    expiresAt.setDate(
        expiresAt.getDate() + 30
    );


    database.subscriptions.push({

        id: "SUB-0001",

        clientId: "CLI-0001",

        planId: "PLAN-001",

        status: "active",

        startedAt:
            startedAt.toISOString(),

        expiresAt:
            expiresAt.toISOString(),

        autoRenew: false,

        createdAt:
            startedAt.toISOString()

    });


    /* --------------------------------------------------------
       AGENTES
       -------------------------------------------------------- */

    database.agents.push({

        id: "AGT-001",

        name:
            "Agente Universal V3.1",

        slug:
            "agente-universal-v3-1",

        description:
            "Agente universal para criação de prompts, roteiros e projetos de IA.",

        version:
            "3.1",

        status:
            "active",

        category:
            "Criação",

        icon:
            "✦"

    });


    database.agents.push({

        id: "AGT-002",

        name:
            "Agente de Vídeos IA",

        slug:
            "agente-videos-ia",

        description:
            "Agente especializado em planejamento e criação de vídeos com IA.",

        version:
            "1.0",

        status:
            "draft",

        category:
            "Vídeo",

        icon:
            "▶"

    });


    database.agents.push({

        id: "AGT-003",

        name:
            "Agente de Marketing IA",

        slug:
            "agente-marketing-ia",

        description:
            "Agente para criação de campanhas, conteúdos e estratégias de marketing.",

        version:
            "1.0",

        status:
            "draft",

        category:
            "Marketing",

        icon:
            "◆"

    });


    /* --------------------------------------------------------
       VERSÕES DOS AGENTES
       -------------------------------------------------------- */

    database.agentVersions.push({

        id: "AGV-001",

        agentId: "AGT-001",

        version: "3.1",

        status: "active",

        releaseDate:
            new Date().toISOString()

    });


    /* --------------------------------------------------------
       PERMISSÃO DO CLIENTE
       -------------------------------------------------------- */

    database.agentPermissions.push({

        id: "PERM-001",

        clientId: "CLI-0001",

        agentId: "AGT-001",

        allowed: true,

        createdAt:
            new Date().toISOString()

    });


    /* --------------------------------------------------------
       PROVEDORES DE API
       -------------------------------------------------------- */

    database.apiProviders.push({

        id: "API-GEMINI",

        name: "Google Gemini",

        slug: "gemini",

        status: "active"

    });


    database.apiProviders.push({

        id: "API-OPENAI",

        name: "OpenAI",

        slug: "openai",

        status: "active"

    });


    /* --------------------------------------------------------
       CONFIGURAÇÕES
       -------------------------------------------------------- */

    database.settings.push({

        key:
            "subscription_duration_days",

        value:
            30

    });


    database.settings.push({

        key:
            "platform_name",

        value:
            "Agentes Universal"

    });


    database.settings.push({

        key:
            "default_currency",

        value:
            "BRL"

    });


    return database;

}


/* ============================================================
   4. LEITURA LOCAL
   ============================================================ */

function loadLocalDatabase() {

    try {

        const stored =
            localStorage.getItem(
                DATABASE_CONFIG.storageKey
            );

        if (!stored) {

            const demo =
                createDemoDatabase();

            saveLocalDatabase(demo);

            return demo;

        }

        return JSON.parse(stored);

    } catch (error) {

        console.error(
            "[Database] Erro ao carregar dados:",
            error
        );

        const fallback =
            createDemoDatabase();

        saveLocalDatabase(fallback);

        return fallback;

    }

}


/* ============================================================
   5. SALVAMENTO LOCAL
   ============================================================ */

function saveLocalDatabase(database) {

    if (!database) {

        throw new Error(
            "Banco de dados inválido."
        );

    }

    database.meta.updatedAt =
        new Date().toISOString();

    localStorage.setItem(

        DATABASE_CONFIG.storageKey,

        JSON.stringify(database)

    );

    return database;

}


/* ============================================================
   6. BANCO ATUAL
   ============================================================ */

function getDatabase() {

    return loadLocalDatabase();

}


/* ============================================================
   7. SUBSTITUIR BANCO
   ============================================================ */

function replaceDatabase(database) {

    return saveLocalDatabase(
        database
    );

}


/* ============================================================
   8. RESETAR DEMONSTRAÇÃO
   ============================================================ */

function resetDatabase() {

    const demo =
        createDemoDatabase();

    saveLocalDatabase(demo);

    return demo;

}


/* ============================================================
   9. CONSULTAR COLEÇÃO
   ============================================================ */

function getCollection(collectionName) {

    const database =
        getDatabase();

    if (!database[collectionName]) {

        throw new Error(
            `Coleção inexistente: ${collectionName}`
        );

    }

    return database[collectionName];

}


/* ============================================================
   10. BUSCAR POR ID
   ============================================================ */

function findById(
    collectionName,
    id
) {

    const collection =
        getCollection(
            collectionName
        );

    return collection.find(
        item => item.id === id
    ) || null;

}


/* ============================================================
   11. INSERIR
   ============================================================ */

function insert(
    collectionName,
    item
) {

    const database =
        getDatabase();

    if (!database[collectionName]) {

        throw new Error(
            `Coleção inexistente: ${collectionName}`
        );

    }

    database[collectionName].push(
        item
    );

    saveLocalDatabase(
        database
    );

    return item;

}


/* ============================================================
   12. ATUALIZAR
   ============================================================ */

function update(
    collectionName,
    id,
    changes
) {

    const database =
        getDatabase();

    const collection =
        database[collectionName];

    if (!collection) {

        throw new Error(
            `Coleção inexistente: ${collectionName}`
        );

    }

    const index =
        collection.findIndex(
            item => item.id === id
        );

    if (index === -1) {

        return null;

    }

    collection[index] = {

        ...collection[index],

        ...changes

    };

    saveLocalDatabase(
        database
    );

    return collection[index];

}


/* ============================================================
   13. REMOVER
   ============================================================ */

function remove(
    collectionName,
    id
) {

    const database =
        getDatabase();

    const collection =
        database[collectionName];

    if (!collection) {

        throw new Error(
            `Coleção inexistente: ${collectionName}`
        );

    }

    const index =
        collection.findIndex(
            item => item.id === id
        );

    if (index === -1) {

        return false;

    }

    collection.splice(
        index,
        1
    );

    saveLocalDatabase(
        database
    );

    return true;

}


/* ============================================================
   14. CONSULTA POR CONDIÇÃO
   ============================================================ */

function findAll(
    collectionName,
    filter = null
) {

    const collection =
        getCollection(
            collectionName
        );

    if (!filter) {

        return [...collection];

    }

    return collection.filter(
        filter
    );

}


/* ============================================================
   15. CONTAGEM
   ============================================================ */

function count(
    collectionName
) {

    return getCollection(
        collectionName
    ).length;

}


/* ============================================================
   16. CAMADA FUTURA DE API
   ============================================================ */

const APIDataProvider = {

    async request(
        endpoint,
        options = {}
    ) {

        if (
            !AGENTES_UNIVERSAL.PLATFORM_CONFIG.api.enabled
        ) {

            throw new Error(
                "O modo API ainda não está habilitado."
            );

        }

        const baseUrl =
            AGENTES_UNIVERSAL
                .PLATFORM_CONFIG
                .api
                .baseUrl;

        const response =
            await fetch(
                `${baseUrl}${endpoint}`,
                {
                    ...options,

                    headers: {

                        "Content-Type":
                            "application/json",

                        ...(options.headers || {})

                    }

                }
            );

        if (!response.ok) {

            throw new Error(
                `Erro da API: ${response.status}`
            );

        }

        return response.json();

    }

};


/* ============================================================
   17. DATA LAYER
   ============================================================ */

const Database = {

    mode:
        DATABASE_CONFIG.mode,

    get:
        getDatabase,

    replace:
        replaceDatabase,

    reset:
        resetDatabase,

    collection:
        getCollection,

    findById,

    findAll,

    insert,

    update,

    remove,

    count,

    api:
        APIDataProvider

};


/* ============================================================
   18. EXPOSIÇÃO GLOBAL
   ============================================================ */

window.AGENTES_UNIVERSAL =
    window.AGENTES_UNIVERSAL || {};


window.AGENTES_UNIVERSAL.Database =
    Database;


window.AGENTES_UNIVERSAL.DatabaseConfig =
    DATABASE_CONFIG;


/* ============================================================
   19. INICIALIZAÇÃO
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        try {

            getDatabase();

            console.info(
                "[Agentes Universal] Data Layer inicializado."
            );

        } catch (error) {

            console.error(
                "[Agentes Universal] Falha no Data Layer:",
                error
            );

        }

    }
);
