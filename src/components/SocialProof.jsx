import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

export default function SocialProof() {
    const testimonials = [
        {
            name: 'Maria Silva',
            city: 'São Paulo - SP',
            image: '/images/hero/depoimento-maria-novo.png',
            text: 'Eu estava desempregada e desesperada. Com o Natal Lucrativo, fiz 87 chocotones e coloquei R$ 2.340 no bolso! Parcelei as compras de Natal e ainda sobrou dinheiro. Muito obrigada!',
            profit: 'R$ 2.340',
            color: 'bg-pink-500'
        },
        {
            name: 'Ana Costa',
            city: 'Rio de Janeiro - RJ',
            image: '/images/hero/depoimento-ana.jpg',
            text: 'Nunca tinha feito nada parecido na vida, mas a receita é TÃO simples que até minha filha de 12 anos me ajudou! Vendi 52 chocotones e faturei R$ 1.560. Recebi até encomenda para o ano que vem!',
            profit: 'R$ 1.560',
            color: 'bg-purple-500'
        },
        {
            name: 'Carlos Oliveira',
            city: 'Curitiba - PR',
            image: '/images/hero/depoimento-carlos.jpg',
            text: 'Estava precisando de uma renda extra urgente. Fiz 65 chocotones e vendi tudo em 12 dias. Lucrei R$ 1.820 e ainda consegui fazer o Natal da família! Recomendo demais.',
            profit: 'R$ 1.820',
            color: 'bg-blue-500'
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Título */}
                    <div className="text-center mb-12">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                                Veja o Que Nossas Alunas Estão Dizendo
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                Mulheres como você que transformaram suas vidas com o{' '}
                                <span className="text-natal-green font-bold">Natal Lucrativo</span>
                            </p>
                        </Reveal>
                    </div>

                    {/* Grid de Depoimentos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Reveal key={index} delay={index * 0.2}>
                                <div
                                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-natal-gold relative"
                                >
                                    <Quote className="absolute top-4 right-4 w-6 h-6 text-gray-200" />

                                    {/* Avatar e Estrelas */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-natal-gold"
                                        />
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</h3>
                                            <p className="text-xs md:text-sm text-gray-600">{testimonial.city}</p>
                                        </div>
                                    </div>

                                    {/* Estrelas */}
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-natal-gold text-natal-gold" />
                                        ))}
                                    </div>

                                    {/* Depoimento */}
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 italic">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Lucro Destacado */}
                                    <div className="bg-natal-green/10 border-l-4 border-natal-green p-3 rounded">
                                        <p className="text-xs md:text-sm text-gray-600">Lucro obtido:</p>
                                        <p className="text-xl md:text-2xl font-black text-natal-green">
                                            {testimonial.profit}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Mensagem Final */}
                    <div className="mt-8 md:mt-12 text-center px-4">
                        <Reveal delay={0.6}>
                            <div className="inline-block bg-natal-red/10 border-2 border-natal-red px-6 py-3 md:px-8 md:py-4 rounded-xl w-full md:w-auto">
                                <p className="text-base md:text-xl font-bold text-gray-900">
                                    ⚡ E se você for a próxima história de sucesso? ⚡
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
