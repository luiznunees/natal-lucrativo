import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function UrgencyBar() {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const christmas = new Date('2025-12-25');
            const today = new Date();
            const diffTime = christmas - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDaysLeft(diffDays > 0 ? diffDays : 0);
        };

        calculateDaysLeft();
        const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60); // Atualiza a cada hora

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sticky top-0 z-50 bg-natal-red animate-pulse-slow shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-white font-bold text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                        <span className="uppercase tracking-wide">
                            FALTAM APENAS {daysLeft} DIAS PARA O NATAL!
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="font-medium">
                            Mais de 200 pessoas vendo agora
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
