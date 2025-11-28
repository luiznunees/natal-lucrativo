import { useState, useEffect } from 'react';
import { X, CheckCircle, Lock, Smartphone, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logEvent, saveLead } from '../services/analytics';

export default function WaitlistModal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Log do evento de tentativa de cadastro
        logEvent('waitlist_submit_attempt', { name, phone });

        // Salva no Supabase
        await saveLead(name, phone);

        // Log do evento de sucesso
        logEvent('waitlist_submit_success', { name });

        // Simula delay visual
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                >
                    {/* Botão Fechar */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {!submitted ? (
                        <div className="p-8">
                            <div className="text-center mb-6">
                                <div className="inline-block bg-natal-red/10 px-3 py-1 rounded-full mb-3">
                                    <span className="text-natal-red font-bold text-xs uppercase tracking-wider">
                                        Vagas Esgotadas
                                    </span>
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 mb-2">
                                    Entre na Lista de Espera VIP
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    As vagas da Turma Beta encerraram, mas vamos liberar um lote extra amanhã. Cadastre-se para garantir o preço de <span className="font-bold text-natal-green">R$ 16,90</span>.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Seu Nome Completo
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Maria da Silva"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-natal-green focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Seu WhatsApp (com DDD)
                                    </label>
                                    <div className="relative">
                                        <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="(11) 99999-9999"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-natal-green focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-natal-green hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            GARANTIR MINHA VAGA NA LISTA
                                            <Lock className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-4 text-center">
                                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                    <Lock className="w-3 h-3" />
                                    Seus dados estão 100% seguros
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center bg-green-50/50">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 mb-4">
                                Cadastro Confirmado! 🎉
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Parabéns, {name}! Você está na nossa lista prioritária.
                                <br /><br />
                                Fique atenta ao seu WhatsApp. Vamos entrar em contato assim que liberarmos as vagas extras.
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-colors"
                            >
                                Voltar para o site
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
