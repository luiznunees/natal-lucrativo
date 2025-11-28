import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase (Substitua com suas chaves reais depois)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export let supabase = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Gera um ID de sessão único para o usuário atual
const getSessionId = () => {
    let sessionId = localStorage.getItem('nl_session_id');
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem('nl_session_id', sessionId);
    }
    return sessionId;
};

// Inicializa rastreadores externos (GA4, Clarity)
export const initAnalytics = (gaId, clarityId) => {
    // Google Analytics 4
    if (gaId) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gaId);
    }

    // Microsoft Clarity
    if (clarityId) {
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", clarityId);
    }
};

// Loga um evento (Supabase + Console)
export const logEvent = async (eventName, eventData = {}) => {
    const sessionId = getSessionId();
    const payload = {
        event_name: eventName,
        event_data: eventData,
        session_id: sessionId,
        created_at: new Date().toISOString()
    };

    // Log no console em dev
    if (import.meta.env.DEV) {
        console.log('📊 [Analytics]', eventName, payload);
    }

    // Envia para Supabase se configurado
    if (supabase) {
        try {
            await supabase.from('analytics_events').insert([payload]);
        } catch (error) {
            console.error('Erro ao enviar analytics:', error);
        }
    }
};

// Loga visita inicial
export const logVisit = async () => {
    const sessionId = getSessionId();
    const visitData = {
        session_id: sessionId,
        source: new URLSearchParams(window.location.search).get('utm_source') || document.referrer,
        device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
        created_at: new Date().toISOString()
    };

    // ... (código existente)

    if (supabase) {
        try {
            await supabase.from('site_visits').insert([visitData]);
        } catch (error) {
            console.error('Erro ao registrar visita:', error);
        }
    }
};

// Salva Lead na Lista de Espera
export const saveLead = async (name, whatsapp) => {
    const sessionId = getSessionId();
    const leadData = {
        name,
        whatsapp,
        session_id: sessionId,
        source: new URLSearchParams(window.location.search).get('utm_source') || document.referrer || 'direct',
        created_at: new Date().toISOString()
    };

    if (supabase) {
        try {
            const { error } = await supabase.from('waitlist_leads').insert([leadData]);
            if (error) throw error;
            console.log('✅ Lead salvo com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar lead:', error);
        }
    }
};

// Salva Resposta do Quiz
export const saveQuizResponse = async (name, whatsapp, resultType, gender, answers) => {
    const sessionId = getSessionId();
    const quizData = {
        name,
        whatsapp,
        result_type: resultType,
        gender,
        answers_json: answers, // Certifique-se que a coluna no DB é jsonb e se chama answers_json ou ajuste aqui
        session_id: sessionId,
        created_at: new Date().toISOString()
    };

    // Ajuste para bater com o schema atual se necessário. 
    // No schema anterior vi: quiz_responses (name, whatsapp, result_type, gender, answers (jsonb))

    if (supabase) {
        try {
            const { error } = await supabase.from('quiz_responses').insert([{
                name,
                whatsapp,
                result_type: resultType,
                gender,
                answers: answers, // Coluna 'answers' do tipo jsonb
                session_id: sessionId
            }]);
            if (error) throw error;
            console.log('✅ Resposta do quiz salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar resposta do quiz:', error);
        }
    }
};
