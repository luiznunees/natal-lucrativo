import { useState, useEffect } from 'react';
import { supabase } from '../services/analytics';
import { Lock, Github, LayoutDashboard, Users, FileText, BarChart3, LogOut, AlertTriangle } from 'lucide-react';

export default function Admin() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('overview');

    // Dados do Dashboard
    const [stats, setStats] = useState({ visits: 0, leads: 0, quiz: 0 });
    const [leads, setLeads] = useState([]);
    const [quizResponses, setQuizResponses] = useState([]);

    const ALLOWED_USER = 'luiznunees';

    useEffect(() => {
        // Verifica sessão atual
        supabase.auth.getSession().then(({ data: { session } }) => {
            checkUser(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            checkUser(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const checkUser = async (session) => {
        if (session) {
            const githubUsername = session.user?.user_metadata?.user_name;

            if (githubUsername !== ALLOWED_USER) {
                await supabase.auth.signOut();
                setSession(null);
                setError(`Acesso negado para o usuário "${githubUsername}". Apenas "${ALLOWED_USER}" tem permissão.`);
                setLoading(false);
                return;
            }

            setSession(session);
            fetchData();
        } else {
            setSession(null);
        }
        setLoading(false);
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            // Busca estatísticas
            const { count: visitsCount } = await supabase.from('site_visits').select('*', { count: 'exact', head: true });
            const { count: leadsCount } = await supabase.from('waitlist_leads').select('*', { count: 'exact', head: true });
            const { count: quizCount } = await supabase.from('quiz_responses').select('*', { count: 'exact', head: true });

            setStats({ visits: visitsCount || 0, leads: leadsCount || 0, quiz: quizCount || 0 });

            // Busca Leads recentes
            const { data: leadsData } = await supabase
                .from('waitlist_leads')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);
            setLeads(leadsData || []);

            // Busca Respostas do Quiz recentes
            const { data: quizData } = await supabase
                .from('quiz_responses')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);
            setQuizResponses(quizData || []);

        } catch (err) {
            console.error('Erro ao buscar dados:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async () => {
        setLoading(true);
        setError('');
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: window.location.origin + '/admin'
            }
        });

        if (error) setError(error.message);
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    if (!session) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Github className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 mb-2">Admin Login</h1>
                    <p className="text-gray-500 mb-8">Acesso restrito via GitHub</p>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 flex items-center gap-3 text-left">
                            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>
                                <Github className="w-5 h-5" />
                                Entrar com GitHub
                            </>
                        )}
                    </button>

                    <p className="mt-6 text-xs text-gray-400">
                        Apenas o usuário <strong>@{ALLOWED_USER}</strong> tem permissão de acesso.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="font-black text-xl text-natal-red">Natal Lucrativo</h1>
                    <p className="text-xs text-gray-500">Admin Dashboard</p>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg mb-4">
                        <img
                            src={session.user.user_metadata.avatar_url}
                            alt={session.user.user_metadata.full_name}
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-gray-900 truncate">{session.user.user_metadata.user_name}</p>
                            <p className="text-xs text-green-600 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Online
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="px-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-natal-red/10 text-natal-red' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Visão Geral
                    </button>
                    <button
                        onClick={() => setActiveTab('leads')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'leads' ? 'bg-natal-red/10 text-natal-red' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <Users className="w-5 h-5" />
                        Lista de Espera
                    </button>
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'quiz' ? 'bg-natal-red/10 text-natal-red' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <FileText className="w-5 h-5" />
                        Respostas do Quiz
                    </button>
                </nav>
                <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Sair
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
                <header className="bg-white border-b border-gray-200 p-6 md:hidden flex justify-between items-center">
                    <h1 className="font-black text-xl text-natal-red">Admin</h1>
                    <button onClick={handleLogout}><LogOut className="w-6 h-6 text-gray-600" /></button>
                </header>

                <main className="p-6 md:p-10">
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900">Visão Geral</h2>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <BarChart3 className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Total</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">Visitas no Site</p>
                                    <h3 className="text-3xl font-black text-gray-900">{stats.visits}</h3>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            <Users className="w-6 h-6 text-green-600" />
                                        </div>
                                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                            {stats.visits > 0 ? ((stats.leads / stats.visits) * 100).toFixed(1) : 0}% Conv.
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm">Leads (Lista de Espera)</p>
                                    <h3 className="text-3xl font-black text-gray-900">{stats.leads}</h3>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <FileText className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Ativos</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">Quizzes Completos</p>
                                    <h3 className="text-3xl font-black text-gray-900">{stats.quiz}</h3>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'leads' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900">Lista de Espera (Leads)</h2>
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Data</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Nome</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">WhatsApp</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Origem</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {leads.map((lead) => (
                                                <tr key={lead.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-gray-600">
                                                        {new Date(lead.created_at).toLocaleDateString('pt-BR')} {new Date(lead.created_at).toLocaleTimeString('pt-BR')}
                                                    </td>
                                                    <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
                                                    <td className="px-6 py-4 text-gray-600">{lead.whatsapp}</td>
                                                    <td className="px-6 py-4 text-gray-500 text-sm">{lead.source}</td>
                                                </tr>
                                            ))}
                                            {leads.length === 0 && (
                                                <tr>
                                                    <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                                                        Nenhum lead encontrado ainda.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'quiz' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900">Respostas do Quiz</h2>
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Data</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Nome</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">WhatsApp</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Resultado</th>
                                                <th className="px-6 py-4 font-semibold text-gray-700">Gênero</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {quizResponses.map((resp) => (
                                                <tr key={resp.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-gray-600">
                                                        {new Date(resp.created_at).toLocaleDateString('pt-BR')} {new Date(resp.created_at).toLocaleTimeString('pt-BR')}
                                                    </td>
                                                    <td className="px-6 py-4 font-medium text-gray-900">{resp.name}</td>
                                                    <td className="px-6 py-4 text-gray-600">{resp.whatsapp}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase
                                                            ${resp.result_type === 'urgente' ? 'bg-red-100 text-red-700' :
                                                                resp.result_type === 'pronta' ? 'bg-green-100 text-green-700' :
                                                                    'bg-yellow-100 text-yellow-700'}`}>
                                                            {resp.result_type}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600 capitalize">{resp.gender}</td>
                                                </tr>
                                            ))}
                                            {quizResponses.length === 0 && (
                                                <tr>
                                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                                        Nenhuma resposta encontrada ainda.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
