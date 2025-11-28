import { AlertCircle, XCircle, HelpCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function PainSection() {
    const pains = [
        {
            icon: <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-natal-red" />,
            title: "O dinheiro acaba antes do mês?",
            description: "A sensação de trabalhar o mês todo e não ver a cor do dinheiro é desesperadora."
        },
        {
            icon: <XCircle className="w-8 h-8 md:w-10 md:h-10 text-natal-red" />,
            title: "Medo de não dar um bom Natal?",
            description: "Dói pensar em não poder comprar os presentes que seus filhos pediram."
        },
        {
            icon: <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-natal-red" />,
            title: "Sente que falta uma oportunidade?",
            description: "Você é esforçada, mas parece que nada que você tenta dá o retorno que precisa."
        }
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
                            Você se identifica com isso?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sei exatamente como você se sente, porque já estive aí.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {pains.map((pain, index) => (
                        <Reveal key={index} delay={index * 0.2}>
                            <div className="bg-red-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-shadow h-full">
                                <div className="mb-4 flex justify-center">{pain.icon}</div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2 text-center">{pain.title}</h3>
                                <p className="text-gray-700 text-center leading-relaxed">{pain.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
