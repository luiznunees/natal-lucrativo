import { useState, useEffect } from 'react';
import { logVisit } from '../services/analytics';
import UrgencyBar from '../components/UrgencyBar';
import Hero from '../components/Hero';
import PainSection from '../components/PainSection';
import VisualProof from '../components/VisualProof';
import WhoAmI from '../components/WhoAmI';
import ProductPresentation from '../components/ProductPresentation';
import Bonuses from '../components/Bonuses';
import Offer from '../components/Offer';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import WhatsAppButton from '../components/WhatsAppButton';
import WaitlistModal from '../components/WaitlistModal';

export default function LandingPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    useEffect(() => {
        // Registra visita ao carregar a página
        logVisit();

        const handleOpenWaitlist = () => setIsWaitlistOpen(true);
        window.addEventListener('open-waitlist', handleOpenWaitlist);
        return () => window.removeEventListener('open-waitlist', handleOpenWaitlist);
    }, []);

    return (
        <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
            {/* 1. Barra de Urgência */}
            <UrgencyBar />

            {/* 2. Hero Section */}
            <Hero />

            {/* 3. Dores e Identificação */}
            <PainSection />

            {/* 4. Prova Visual (Prints) */}
            <VisualProof />

            {/* 5. Autoridade (Quem ensina) */}
            <WhoAmI />

            {/* 6. O Método + Entregáveis */}
            <ProductPresentation />

            {/* 7. Bônus Exclusivos */}
            <Bonuses />

            {/* 8. Oferta Irresistível (Preço + Garantia + CTA) */}
            <Offer />

            {/* 9. Prova Social (Depoimentos) */}
            <SocialProof />

            {/* 10. Perguntas Frequentes */}
            <FAQ />

            {/* 11. Rodapé */}
            <Footer />

            {/* Elementos Flutuantes */}
            <StickyCTA />
            <WhatsAppButton />

            {/* Modal de Lista de Espera (Fake Door) */}
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </div>
    );
}
