import { Timer, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function FinalCTA() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const christmas = new Date('2025-12-25T00:00:00');
            const now = new Date();
            const difference = christmas - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-natal-green via-green-700 to-natal-red relative overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    {/* Ícone */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                            <Timer className="w-16 h-16" />
                        </div>
                    </div>

                    {/* Título */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                        O Natal Está Chegando!
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 font-semibold">
                        Não deixe essa oportunidade passar!
                    </p>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                            <div className="text-4xl md:text-5xl font-black text-natal-red">
                                {timeLeft.days}
                            </div>
                            <div className="text-sm md:text-base font-semibold text-gray-700 mt-2">
                                Dias
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                            <div className="text-4xl md:text-5xl font-black text-natal-red">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base font-semibold text-gray-700 mt-2">
                                Horas
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                            <div className="text-4xl md:text-5xl font-black text-natal-red">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base font-semibold text-gray-700 mt-2">
                                Min
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                            <div className="text-4xl md:text-5xl font-black text-natal-red">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-sm md:text-base font-semibold text-gray-700 mt-2">
                                Seg
                                <CTAButton
                                    variant="yellow"
                                    size="large"
                                    className="text-xl md:text-2xl px-12 py-6 mb-6"
                                    showLock
                                >
                                    GARANTIR MINHA VAGA AGORA - R$ 16,90
                                </CTAButton>

                                {/* Garantias */}
                                <div className="flex flex-wrap justify-center gap-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🔒</span>
                                        <span>Pagamento Seguro</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">✅</span>
                                        <span>Acesso Imediato</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">⚡</span>
                                        <span>7 Dias de Garantia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    );
}
