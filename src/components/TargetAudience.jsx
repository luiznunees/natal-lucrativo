import { CheckCircle, XCircle } from 'lucide-react';

export default function TargetAudience() {
    const forWho = [
        'Quer uma renda extra rápida neste Natal',
        'Precisa ajudar nas contas de casa',
        'Gosta de cozinhar (mesmo sendo iniciante)',
        'Quer trabalhar no conforto da sua cozinha',
        'Sonha em dar um Natal farto para a família'
    ];

    const notForWho = [
        'Procura "dinheiro fácil" sem trabalho',
        'Não está disposta a colocar a mão na massa',
        'Acha que vai ficar rica do dia para a noite',
        'Não tem compromisso com a qualidade',
        'Já sabe de tudo e não quer aprender nada novo'
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        Será que o <span className="text-natal-green">Natal Lucrativo</span> é Para Você?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Não quero que você perca seu tempo. Veja se você se encaixa:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Para quem É */}
                    <div className="bg-white rounded-2xl shadow-xl border-t-8 border-natal-green p-8 transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-black text-natal-green mb-6 flex items-center gap-2">
                            <CheckCircle className="w-8 h-8" />
                            PARA QUEM É:
                        </h3>
                        <ul className="space-y-4">
                            {forWho.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-natal-green flex-shrink-0 mt-1" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Para quem NÃO É */}
                    <div className="bg-white rounded-2xl shadow-xl border-t-8 border-natal-red p-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-2xl font-black text-natal-red mb-6 flex items-center gap-2">
                            <XCircle className="w-8 h-8" />
                            PARA QUEM NÃO É:
                        </h3>
                        <ul className="space-y-4">
                            {notForWho.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-natal-red flex-shrink-0 mt-1" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
