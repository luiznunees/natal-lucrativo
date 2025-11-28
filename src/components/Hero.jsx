import CTAButton from './CTAButton';
import Reveal from './Reveal';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-natal-red to-red-800 text-white py-8 md:py-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/christmas-magic.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Texto */}
                    <div className="text-left space-y-6 order-2 md:order-1">
                        <Reveal direction="down">
                            <div className="inline-block bg-natal-green/20 border border-natal-green/40 rounded-full px-4 py-1 mb-4">
                                <span className="text-natal-gold font-bold text-sm tracking-wide uppercase">
                                    🎄 Renda Extra de Natal
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                                E Se Você Pudesse Ganhar <span className="text-natal-gold">R$ 1.000+</span> Neste Natal...
                            </h1>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="text-lg md:text-xl text-gray-100 font-medium max-w-lg">
                                ...Trabalhando da sua cozinha, mesmo sem experiência e com poucos utensílios? Descubra o método simples dos <span className="text-natal-gold font-bold">Chocotones Lucrativos</span>.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <CTAButton className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                                    QUERO MEU NATAL LUCRATIVO
                                </CTAButton>
                            </div>
                            <p className="text-sm text-gray-300 mt-3 flex items-center gap-2">
                                <span>🔒</span> Acesso Imediato e Vitalício
                            </p>
                        </Reveal>
                    </div>

                    {/* Imagem Hero */}
                    <div className="relative order-1 md:order-2">
                        <Reveal direction="left" delay={0.4}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-natal-gold/30 rounded-full blur-3xl animate-pulse-slow"></div>
                                <img
                                    src="/images/hero/hero-mulher-chocotone.jpg"
                                    alt="Mulher feliz segurando chocotone artesanal"
                                    className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white w-full max-w-md mx-auto md:max-w-full"
                                />
                                {/* Floating Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-natal-green animate-bounce hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <span className="text-2xl">💰</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Lucro Diário</p>
                                            <p className="text-xl font-black text-natal-green">R$ 150,00+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
