import { Star, Award } from 'lucide-react';

export default function WhoAmI() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-natal-cream rounded-3xl p-8 md:p-12 shadow-xl border-2 border-natal-gold/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Foto da Professora */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-natal-gold/20 rounded-full blur-2xl"></div>
                            <img
                                src="/images/mockups/professora-exemplo.png"
                                alt="Professora Confeiteira"
                                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                            {/* Badge Flutuante */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-natal-green animate-bounce hidden md:block">
                                <div className="flex items-center gap-2">
                                    <Award className="w-8 h-8 text-natal-gold" />
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold">ALUNAS FORMADAS</p>
                                        <p className="text-2xl font-black text-natal-green">500+</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Texto */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm mb-6">
                                <Star className="w-4 h-4 text-natal-gold fill-natal-gold" />
                                <span className="text-sm font-bold text-gray-600">SUA MENTORA</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                                Prazer, sou a <span className="text-natal-red">Maria Luiza</span>
                            </h2>

                            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    Há 5 anos, eu estava exatamente onde você está hoje: preocupada com as contas de fim de ano e querendo dar um Natal melhor para minha família.
                                </p>
                                <p>
                                    Comecei fazendo chocotones na minha pequena cozinha, errando muito até acertar a receita perfeita.
                                </p>
                                <p className="font-bold text-natal-green">
                                    Hoje, vivo exclusivamente da confeitaria e já ajudei mais de 500 mulheres a conquistarem sua independência financeira através dos doces.
                                </p>
                                <p>
                                    Minha missão é te mostrar que você NÃO precisa ser uma chef profissional para ganhar dinheiro. Você só precisa do método certo.
                                </p>
                            </div>

                            <div className="mt-8">
                                <img
                                    src="/images/mockups/assinatura-ana.png"
                                    alt="Assinatura Ana"
                                    className="h-12 opacity-60"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
