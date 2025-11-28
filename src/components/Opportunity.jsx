export default function Opportunity() {
    const revelations = [
        {
            emoji: '✨',
            title: 'O Chocotone é o PRODUTO PERFEITO',
            description: 'Todo mundo quer comprar no Natal, mas poucos sabem fazer de qualidade. Você terá ZERO concorrência real!'
        },
        {
            emoji: '🎄',
            title: 'Você Pode Vender por R$ 35 a R$ 60',
            description: 'E o custo para fazer cada chocotone? Menos de R$ 12! Isso significa LUCRO de 60% a 80% em cada venda!'
        },
        {
            emoji: '💰',
            title: 'Vendendo Apenas 30 Chocotones...',
            description: 'Você coloca mais de R$ 1.000 no bolso! E tem gente vendendo 100, 200, 300 unidades neste Natal!'
        },
        {
            emoji: '👩‍🍳',
            title: 'Não Precisa Ser Chef de Cozinha',
            description: 'Com nossa receita PASSO A PASSO testada e aprovada, até quem nunca fez um bolo vai fazer chocotones LINDOS e DELICIOSOS!'
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-natal-red via-red-700 to-natal-green relative overflow-hidden">
            {/* Overlay para melhor legibilidade */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Título */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                            Mas E Se Eu Te Dissesse Que...
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 font-medium">
                            Existe uma oportunidade de ouro bem debaixo do seu nariz?
                        </p>
                    </div>

                    {/* Grid de Revelações */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {revelations.map((revelation, index) => (
                            <div
                                key={index}
                                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-5xl mb-3">{revelation.emoji}</div>
                                <h3 className="font-black text-xl mb-3 text-gray-900">
                                    {revelation.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {revelation.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Call to action secundário */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-natal-gold px-8 py-4 rounded-xl">
                            <p className="text-xl md:text-2xl font-black text-gray-900">
                                🔥 Esta é a SUA CHANCE de transformar o Natal em LUCRO! 🔥
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
