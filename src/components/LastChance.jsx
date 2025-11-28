import { Clock, Flame, Users } from 'lucide-react';

export default function LastChance() {
    return (
        <section className="py-16 bg-gradient-to-br from-natal-red via-orange-500 to-natal-gold relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-9xl">🎄</div>
                <div className="absolute bottom-10 right-10 text-9xl">💰</div>
                <div className="absolute top-1/2 left-1/4 text-6xl">⚡</div>
                <div className="absolute top-1/4 right-1/4 text-6xl">🔥</div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center text-white">
                    {/* Ícones */}
                    <div className="flex justify-center gap-4 mb-6">
                        <Flame className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                        <Clock className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
                        <Flame className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">
                        🚨 ÚLTIMA CHANCE!
                    </h2>

                    <p className="text-xl md:text-2xl font-bold mb-6 text-white/90">
                        Você está a UMA DECISÃO de mudar seu Natal
                    </p>

                    {/* Cards de urgência */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/40">
                            <Clock className="w-10 h-10 mx-auto mb-3" />
                            <h3 className="font-black text-lg mb-2">Tempo Acabando</h3>
                            <p className="text-sm text-white/90">
                                Faltam poucos dias para o Natal. Cada dia perdido é dinheiro que você deixa na mesa.
                            </p>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/40">
                            <Users className="w-10 h-10 mx-auto mb-3" />
                            <h3 className="font-black text-lg mb-2">Vagas Limitadas</h3>
                            <p className="text-sm text-white/90">
                                O Grupo VIP está quase lotado. Apenas as primeiras 200 têm acesso ao suporte exclusivo.
                            </p>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/40">
                            <Flame className="w-10 h-10 mx-auto mb-3" />
                            <h3 className="font-black text-lg mb-2">Preço Promocional</h3>
                            <p className="text-sm text-white/90">
                                R$ 21,90 é TEMPORÁRIO. Logo volta para o preço normal de R$ 97,00.
                            </p>
                        </div>
                    </div>

                    {/* Mensagem central */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 mb-8">
                        <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                            ⚠️ Esta Pode Ser a ÚLTIMA VEZ que Você Vê Esta Oferta
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Enquanto você pensa "vou decidir depois", outras mulheres estão AGINDO e LUCRANDO.
                            <br />
                            <span className="font-bold text-natal-red">Não deixe para depois o que pode mudar sua vida HOJE.</span>
                        </p>

                        <div className="bg-natal-green/10 border-2 border-natal-green rounded-xl p-6 mb-6">
                            <p className="font-bold text-gray-900 text-lg">
                                💡 Pense: O que você tem a perder com a garantia de 7 dias?
                            </p>
                            <p className="text-gray-600 mt-2">
                                NADA. Mas tem TUDO a ganhar!
                            </p>
                        </div>

                        {/* CTA Final */}
                        <a
                            href="#oferta"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-natal-green hover:bg-green-600 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-slow"
                        >
                            SIM! EU QUERO MUDAR MINHA VIDA AGORA! 🚀
                        </a>

                        <p className="text-sm text-gray-500 mt-4">
                            ⏰ Não espere mais. O Natal não vai esperar por você.
                        </p>
                    </div>

                    {/* Contador de pessoas (simulado) */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                        <p className="text-sm font-bold">
                            🔴 <span className="animate-pulse">287 pessoas</span> estão vendo esta página agora
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
