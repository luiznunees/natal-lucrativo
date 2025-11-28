import { Sparkles, Heart, DollarSign, Users } from 'lucide-react';

export default function DreamSection() {
    const dreams = [
        {
            icon: <DollarSign className="w-8 h-8 md:w-10 md:h-10" />,
            text: 'Comprar os presentes SEM CULPA?',
            color: 'from-natal-green/20 to-natal-green/5 border-natal-green'
        },
        {
            icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
            text: 'Pagar as contas EM DIA?',
            color: 'from-natal-red/20 to-natal-red/5 border-natal-red'
        },
        {
            icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
            text: 'Ter dinheiro para um passeio em FAMÍLIA?',
            color: 'from-natal-gold/20 to-natal-gold/5 border-natal-gold'
        },
        {
            icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" />,
            text: 'Sentir o ORGULHO de dizer "eu fiz isso"?',
            color: 'from-purple-200/50 to-pink-200/50 border-purple-300'
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-natal-red/5 via-purple-50 to-natal-green/5">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-natal-gold mx-auto mb-4 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                        ✨ Já Imaginou...
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Feche os olhos por um momento e visualize você mesma...
                    </p>
                </div>

                {/* Grid de sonhos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                    {dreams.map((dream, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${dream.color} border-2 rounded-2xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                        >
                            <div className="flex items-center md:items-start gap-4">
                                <div className="text-natal-green flex-shrink-0">
                                    {dream.icon}
                                </div>
                                <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight text-left">
                                    {dream.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Antes e Depois */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors rounded-2xl z-10"></div>
                        <img
                            src="/images/hero/antes-frustrada.jpg"
                            alt="Antes: Frustração financeira"
                            className="w-full h-56 md:h-64 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">ANTES</span>
                            <p className="text-white font-bold text-base md:text-lg mt-1">Preocupação com as contas...</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-natal-green/20 group-hover:bg-transparent transition-colors rounded-2xl z-10"></div>
                        <img
                            src="/images/hero/depois-feliz.jpg"
                            alt="Depois: Liberdade financeira"
                            className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                            <span className="bg-natal-green text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">DEPOIS</span>
                            <p className="text-white font-bold text-base md:text-lg mt-1 drop-shadow-md">Liberdade e Felicidade! ✨</p>
                        </div>
                    </div>
                </div>

                {/* Mensagem central */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 text-center border-2 md:border-4 border-natal-gold/30">
                    <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-4">
                        🎄 Isso NÃO é um SONHO Distante.
                    </h3>
                    <p className="text-base md:text-xl text-gray-700 mb-6 leading-relaxed">
                        É a <span className="text-natal-green font-black">REALIDADE</span> de centenas de mulheres que decidiram agir.
                        <br className="hidden md:block" />
                        E pode ser a <span className="text-natal-red font-black">SUA REALIDADE</span> também.
                    </p>

                    <div className="bg-gradient-to-r from-natal-green/10 to-natal-gold/10 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                        <p className="text-base md:text-lg font-bold text-gray-900">
                            💡 A diferença entre SONHAR e CONQUISTAR é uma DECISÃO.
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mt-2">
                            E essa decisão pode acontecer AGORA. Neste exato momento.
                        </p>
                    </div>

                    {/* CTA */}
                    <a
                        href="#oferta"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-block w-full md:w-auto bg-gradient-to-r from-natal-red to-natal-green hover:from-natal-green hover:to-natal-gold text-white font-black text-lg md:text-xl px-8 py-4 md:px-12 md:py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                        SIM! QUERO REALIZAR MEU SONHO 🌟
                    </a>

                    <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
                        🛡️ Garantia de 7 dias • Acesso imediato • Sem risco
                    </p>
                </div>
            </div>
        </section>
    );
}
