import { CheckCircle, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function ProductPresentation() {
    const modules = [
        'Receita Exclusiva do Chocotone (Massa úmida e macia)',
        'Videoaula Passo a Passo (Do zero ao avançado)',
        'Calculadora de Precificação Automática',
        'Planilha de Gestão de Pedidos',
        'Checklist de Produção Diária',
        'Guia de Vendas pelo WhatsApp'
    ];

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Título */}
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2 bg-natal-gold/20 px-4 py-1 md:px-6 md:py-2 rounded-full mb-4">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-natal-gold" />
                            <span className="text-sm md:text-base font-bold text-natal-gold">A Solução Completa</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                            Apresento: <span className="text-natal-green">Natal Lucrativo 2025</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            O método completo para você criar uma renda extra no Natal vendendo chocotones artesanais
                        </p>
                    </div>

                    {/* Card do Produto */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 md:border-4 border-natal-green rounded-2xl p-6 md:p-12 shadow-2xl">
                        {/* Badge Destaque */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-natal-gold text-gray-900 font-black px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg shadow-lg">
                                ⭐ ACESSO VITALÍCIO ⭐
                            </div>
                        </div>

                        {/* Título do Card */}
                        <h3 className="text-xl md:text-3xl font-black text-center mb-6 md:mb-8 text-gray-900">
                            Tudo o Que Você Vai Receber:
                        </h3>

                        {/* Layout Grid: Lista + Imagens */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Lista de Módulos */}
                            <div className="space-y-3 md:space-y-4 order-2 md:order-1">
                                {modules.map((module, index) => (
                                    <div key={index} className="flex gap-3 md:gap-4 items-start">
                                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-natal-green flex-shrink-0 mt-1" />
                                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                                            {module}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Imagens do Produto */}
                            <div className="space-y-4 order-1 md:order-2">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-natal-gold/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src="/images/hero/chocotone-cortado-novo.png"
                                        alt="Chocotone com muito recheio cortado"
                                        className="relative rounded-xl shadow-lg border-2 border-white w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-natal-green shadow-sm">
                                        Recheio Cremoso 😋
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img
                                        src="/images/hero/chocotone-embalado-novo.png"
                                        alt="Chocotone embalado para presente"
                                        className="relative rounded-xl shadow-lg border-2 border-white w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-natal-red shadow-sm">
                                        Embalagem Lucrativa 🎁
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Valor */}
                        <div className="border-t-2 border-gray-200 pt-6 md:pt-8">
                            <div className="text-center">
                                <p className="text-sm md:text-base text-gray-600 mb-2">Valor Normal do Curso:</p>
                                <p className="text-2xl md:text-4xl font-black text-gray-400 line-through mb-4">
                                    R$ 497,00
                                </p>
                                <p className="text-xs md:text-sm text-gray-600 mb-6">
                                    Mas hoje você não vai pagar isso...
                                </p>
                                <div className="w-full md:w-auto inline-block">
                                    <CTAButton className="w-full">
                                        QUERO COMEÇAR AGORA
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefício Final */}
                    <div className="mt-6 md:mt-8 text-center px-4">
                        <p className="text-base md:text-xl text-gray-700 font-semibold leading-relaxed">
                            💡 <span className="text-natal-green">Comece hoje</span> e venda seus primeiros chocotones{' '}
                            <span className="text-natal-red">ainda esta semana!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
