import { Gift, FileText, Printer, ShoppingBag, MessageCircle, BookOpen } from 'lucide-react';
import Reveal from './Reveal';

export default function Bonuses() {
    const bonuses = [
        {
            icon: <Printer className="w-8 h-8 text-pink-500" />,
            title: "10 Embalagens Prontas",
            description: "Arquivos em alta qualidade para imprimir e usar. Deixe seus chocotones com cara de presente caro!",
            value: "R$ 47,00"
        },
        {
            icon: <FileText className="w-8 h-8 text-blue-500" />,
            title: "Cardápio Editável",
            description: "Modelo profissional para você colocar seus preços e enviar para os clientes.",
            value: "R$ 37,00"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-purple-500" />,
            title: "Modelos de Catálogo",
            description: "Layouts prontos para o WhatsApp Business e Instagram.",
            value: "R$ 57,00"
        },
        {
            icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
            title: "Lista de Fornecedores",
            description: "Onde comprar embalagens e ingredientes baratos para aumentar seu lucro.",
            value: "R$ 27,00"
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-natal-green" />,
            title: "Script de Vendas",
            description: "Textos prontos para copiar e colar no WhatsApp. Venda sem ser chata!",
            value: "R$ 47,00"
        },
        {
            icon: <Gift className="w-8 h-8 text-natal-red" />,
            title: "Mini E-book: Venda no Bairro",
            description: "Estratégias simples para vender para vizinhos e comércios locais.",
            value: "R$ 29,90"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Reveal>
                        <div className="inline-block bg-natal-red text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                            🎁 PRESENTE PARA VOCÊ
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            Levando HOJE, você ganha tudo isso de <span className="text-natal-green">GRAÇA:</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {bonuses.map((bonus, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-natal-gold transition-all hover:-translate-y-1 group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-natal-gold/10 transition-colors">
                                        {bonus.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">{bonus.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                            {bonus.description}
                                        </p>
                                        <p className="text-natal-green font-bold text-sm">
                                            Valor: <span className="line-through text-gray-400 font-normal">{bonus.value}</span> <span className="ml-1">GRÁTIS</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
