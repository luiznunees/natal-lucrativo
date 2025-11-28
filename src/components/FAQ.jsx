import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Eu nunca fiz chocotone na vida. Consigo mesmo sendo iniciante?',
            answer: 'SIM! O Natal Lucrativo foi criado ESPECIALMENTE para iniciantes. A receita é passo a passo, com vídeos e fotos de cada etapa. Se você sabe ligar o forno, você consegue fazer!'
        },
        {
            question: 'Preciso de equipamentos caros ou profissionais?',
            answer: 'Não! Você vai usar apenas utensílios básicos que provavelmente já tem em casa: forno comum, tigelas, batedeira (ou pode bater à mão) e formas. Nada de equipamento caro ou difícil de encontrar.'
        },
        {
            question: 'Quanto tempo leva para fazer cada chocotone?',
            answer: 'Depois que você pega a prática, leva em média 30-40 minutos de preparo + 40 minutos de forno. Você pode fazer vários de uma vez e otimizar seu tempo!'
        },
        {
            question: 'Como vou receber o curso?',
            answer: 'Assim que o pagamento for confirmado, você recebe IMEDIATAMENTE no seu e-mail o acesso à área de membros com todo o conteúdo: vídeos, receitas, bônus e grupo VIP.'
        },
        {
            question: 'Terei suporte se tiver dúvidas?',
            answer: 'SIM! Você terá acesso ao Grupo VIP no WhatsApp onde eu e outras alunas respondemos dúvidas, trocamos experiências e nos ajudamos. Você nunca estará sozinha!'
        },
        {
            question: 'E se eu não conseguir vender?',
            answer: 'Além da receita, você recebe estratégias completas de vendas e divulgação! Mas relaxe: chocotone artesanal de qualidade SE VENDE SOZINHO no Natal. As pessoas VÃO procurar você!'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Título */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                            Dúvidas Frequentes
                        </h2>
                        <p className="text-lg text-gray-600">
                            Tire suas últimas dúvidas antes de começar sua transformação
                        </p>
                    </div>

                    {/* Accordion de FAQs */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-natal-green transition-colors duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-bold text-lg text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-natal-green flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="p-5 md:p-6 pt-0 bg-gray-50">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mensagem Final */}
                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-700 mb-4">
                            Ainda tem alguma dúvida?
                        </p>
                        <p className="text-gray-600">
                            Lembre-se: você tem <strong className="text-blue-600">7 dias de garantia</strong>!{' '}
                            Pode começar SEM RISCO e tirar suas dúvidas no grupo VIP.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
