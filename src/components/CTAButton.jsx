import { Lock } from 'lucide-react';

export default function CTAButton({
    children,
    variant = 'green',
    size = 'large',
    showLock = false,
    className = '',
    onClick
}) {
    const baseClasses = 'font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2';

    const variantClasses = {
        green: 'bg-natal-green hover:bg-green-600 text-white',
        yellow: 'bg-natal-gold hover:bg-yellow-500 text-gray-900',
    };

    const sizeClasses = {
        normal: 'px-8 py-3 text-base',
        large: 'px-10 py-5 text-lg md:text-xl',
    };

    const handleButtonClick = (e) => {
        if (onClick) {
            onClick(e);
            return;
        }

        // Dispara evento para abrir modal de lista de espera
        window.dispatchEvent(new CustomEvent('open-waitlist'));
    };

    return (
        <button
            onClick={handleButtonClick}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        >
            {showLock && <Lock className="w-5 h-5" />}
            {children}
        </button>
    );
}
