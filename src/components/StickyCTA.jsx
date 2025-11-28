import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostra após 30% de scroll
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setIsVisible(scrollPercent > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-natal-green shadow-2xl z-50 transform transition-transform duration-300">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Preço */}
                <div className="flex items-center gap-3">
                    <div className="hidden md:block">
                        <p className="text-xs text-white/80 line-through">R$ 222,00</p>
                        <p className="text-2xl font-black text-white">R$ 16,90</p>
                    </div>
                    <div className="md:hidden">
                        <p className="text-xl font-black text-white">R$ 16,90</p>
                    </div>
                </div>

                {/* CTA */}
                <a
                    href="#oferta"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 md:flex-none bg-white hover:bg-gray-100 text-natal-green font-black px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2 shadow-lg"
                >
                    <span className="text-sm md:text-base">GARANTIR MINHA VAGA</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                {/* Botão fechar (opcional) */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="hidden md:block text-white/80 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
