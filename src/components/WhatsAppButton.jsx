import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5551989194794?text=Oi,%20quero%20saber%20mais%20sobre%20o%20Natal%20Lucrativo!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-4 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-slow flex items-center justify-center"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
}
