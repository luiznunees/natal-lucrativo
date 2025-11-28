import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            number: '1',
            title: 'Compra o Acesso',
            description: 'Pagamento seguro e aprovação instantânea',
            time: '2 minutos',
            icon: '🔒'
        },
        {
            number: '2',
            title: 'Recebe o Material',
            description: 'Acesso imediato a todas as receitas e bônus',
            time: 'Imediato',
            icon: '📚'
        },
        {
            number: '3',
            title: 'Faz o Primeiro Lote',
            description: 'Segue o passo a passo e produz 6-8 chocotones',
            time: '2 horas',
            icon: '👩‍🍳'
        },
        {
            number: '4',
            title: 'Anuncia e Vende',
            description: 'Usa os scripts prontos para divulgar e vender',
            time: '1-2 dias',
            icon: '📱'
        },
        {
            number: '5',
            title: 'Recebe e Lucra',
            description: 'Entrega os chocotones e embolsa o dinheiro!',
            time: 'Mesmo dia',
            icon: '💰'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                        🎯 Como Funciona?
                    </h2>
                    <p className="text-lg text-gray-600">
                        5 passos simples para você começar a lucrar no Natal
                    </p>
                </div>

                {/* Timeline Desktop */}
                <div className="hidden md:block relative">
                    {/* Linha conectora */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-natal-red via-natal-gold to-natal-green transform -translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className={`relative flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            {/* Conteúdo */}
                            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                                <div className="bg-white border-2 border-natal-green/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-5xl mb-3">{step.icon}</div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 mb-3">{step.description}</p>
                                    <div className="inline-block bg-natal-gold/20 px-3 py-1 rounded-full">
                                        <p className="text-sm font-bold text-natal-gold">⏱️ {step.time}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Badge central */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-natal-green rounded-full flex items-center justify-center shadow-lg z-10">
                                <span className="text-2xl font-black text-white">{step.number}</span>
                            </div>

                            {/* Espaço vazio do outro lado */}
                            <div className="w-5/12"></div>
                        </div>
                    ))}
                </div>

                {/* Timeline Mobile */}
                <div className="md:hidden space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-16">
                            {/* Linha vertical */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-7 top-16 bottom-0 w-1 bg-gradient-to-b from-natal-red to-natal-green"></div>
                            )}

                            {/* Badge */}
                            <div className="absolute left-0 top-0 w-14 h-14 bg-natal-green rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-xl font-black text-white">{step.number}</span>
                            </div>

                            {/* Card */}
                            <div className="bg-white border-2 border-natal-green/20 rounded-xl p-6 shadow-lg">
                                <div className="text-4xl mb-3">{step.icon}</div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                                <div className="inline-block bg-natal-gold/20 px-3 py-1 rounded-full">
                                    <p className="text-xs font-bold text-natal-gold">⏱️ {step.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Final */}
                <div className="mt-12 text-center">
                    <div className="bg-natal-green/10 border-2 border-natal-green rounded-2xl p-8">
                        <CheckCircle className="w-16 h-16 text-natal-green mx-auto mb-4" />
                        <h3 className="text-2xl font-black text-gray-900 mb-3">
                            Simples Assim!
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Em menos de 1 semana você pode estar com dinheiro extra no bolso.
                            Quanto mais cedo começar, mais vai lucrar!
                        </p>
                        <a
                            href="#oferta"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-natal-green hover:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            QUERO COMEÇAR AGORA! 🚀
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
