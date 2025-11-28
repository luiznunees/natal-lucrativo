import { Sparkles, TrendingUp } from 'lucide-react';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

export default function Offer() {
    return (
        <section id="oferta" className="py-16 md:py-24 bg-gradient-to-br from-natal-red via-red-700 to-natal-green relative overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Card da Oferta */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
                        {/* Badge */}
                        <div className="text-center mb-6">
                            <Reveal direction="down">
                                <div className="inline-flex items-center gap-2 bg-natal-red text-white px-6 py-2 rounded-full font-bold animate-pulse-slow">
                                    <Sparkles className="w-5 h-5" />
                                    OFERTA ESPECIAL NATAL 2025
                                    <Sparkles className="w-5 h-5" />
                                </div>
                            </Reveal>
                        </div>

                        {/* Título */}
                        <Reveal delay={0.2}>
                            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900">
                                Investimento Para Mudar Sua Vida:
                            </h2>
                        </Reveal>

                        {/* Preços */}
                        <div className="text-center mb-8">
                            {/* Valor Original */}
                            <Reveal delay={0.3}>
                                <div className="mb-4">
                                    <p className="text-gray-600 mb-2">De:</p>
                                    <p className="text-3xl md:text-4xl font-black text-gray-400 line-through">
                                        R$ 97,00
                                    </p>
                                </div>
                            </Reveal>

                            {/* Divider */}
                            <div className="flex items-center gap-4 my-6 max-w-xs mx-auto">
                                <div className="flex-1 border-t-2 border-gray-300"></div>
                                <span className="text-gray-500 font-semibold">POR APENAS</span>
                                <div className="flex-1 border-t-2 border-gray-300"></div>
                            </div>

                            {/* Preço Promocional */}
                            <Reveal delay={0.4}>
                                <div className="mb-6">
                                    <div className="inline-block bg-natal-green/10 px-8 py-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                                        <p className="text-sm text-gray-600 mb-2">Apenas</p>
                                        <p className="text-5xl md:text-6xl font-black text-natal-green">
                                            R$ 16,90
                                        </p>
                                        <p className="text-sm text-gray-600 mt-2">
                                            ou 3x de R$ 7,97 no cartão
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Resumo do que você leva */}
                            <Reveal delay={0.5}>
                                <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left text-sm text-gray-700 space-y-2 border border-gray-100">
                                    <p className="font-bold text-center mb-2 text-gray-900">VOCÊ VAI RECEBER:</p>
                                    <ul className="space-y-1">
                                        <li className="flex items-center gap-2">✅ Curso Completo de Chocotones</li>
                                        <li className="flex items-center gap-2">✅ 10 Embalagens Prontas para Imprimir</li>
                                        <li className="flex items-center gap-2">✅ Cardápio e Catálogo Editáveis</li>
                                        <li className="flex items-center gap-2">✅ Lista de Fornecedores Baratos</li>
                                        <li className="flex items-center gap-2">✅ Script de Vendas Validado</li>
                                    </ul>
                                </div>
                            </Reveal>

                            {/* Destaque ROI */}
                            <Reveal delay={0.6}>
                                <div className="bg-natal-gold/20 border-2 border-natal-gold rounded-xl p-4 mb-8">
                                    <div className="flex items-center justify-center gap-3">
                                        <TrendingUp className="w-6 h-6 text-natal-gold" />
                                        <p className="font-bold text-gray-900">
                                            Você recupera o investimento vendendo{' '}
                                            <span className="text-natal-red text-xl">APENAS 1 CHOCOTONE!</span>
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            {/* CTA */}
                            <Reveal delay={0.6}>
                                <CTAButton
                                    size="large"
                                    className="w-full text-xl md:text-2xl py-6"
                                    showLock
                                >
                                    SIM! QUERO GARANTIR MINHA VAGA AGORA
                                </CTAButton>
                            </Reveal>

                            {/* Segurança */}
                            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span className="text-natal-green text-xl">🔒</span>
                                    <span>Pagamento 100% Seguro</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-natal-green text-xl">✅</span>
                                    <span>Acesso Imediato</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-natal-green text-xl">⚡</span>
                                    <span>7 Dias de Garantia</span>
                                </div>
                            </div>
                        </div>

                        {/* Garantia Simplificada */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-200">
                            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                                <span className="text-xl">🛡️</span>
                                <strong>Risco Zero:</strong> 7 dias de garantia incondicional.
                            </p>
                        </div>

                        {/* Urgência */}
                        <div className="border-t-2 border-gray-200 pt-6 text-center">
                            <p className="text-red-600 font-bold text-lg">
                                ⚠️ ATENÇÃO: Esta oferta pode encerrar a qualquer momento!
                            </p>
                        </div>
                    </div>

                    {/* Mensagem de Risco Zero */}
                    <div className="mt-8 text-center">
                        <p className="text-white text-lg font-semibold drop-shadow-lg">
                            💎 Sem risco. Sem desculpas. Só resultados.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
