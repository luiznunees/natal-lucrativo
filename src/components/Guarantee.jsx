import { Shield } from 'lucide-react';

export default function Guarantee() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Selo de Garantia */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl">
                                    <div className="text-center text-white">
                                        <Shield className="w-16 h-16 mx-auto mb-2" />
                                        <p className="text-4xl font-black">7 DIAS</p>
                                        <p className="text-sm font-semibold">DE GARANTIA</p>
                                    </div>
                                </div>
                                {/* Efeito de brilho */}
                                <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Texto da Garantia */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                                Garantia Incondicional de{' '}
                                <span className="text-blue-600">7 Dias</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Eu confio TANTO no meu método que vou te dar uma garantia blindada:{' '}
                                <strong>Se em 7 dias você achar que o Natal Lucrativo não é para você,</strong>{' '}
                                basta me enviar um único e-mail e eu devolvo 100% do seu dinheiro.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong className="text-natal-green">Sem perguntas. Sem burocracia. Sem enrolação.</strong>
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                                <p className="font-bold text-gray-900">
                                    💡 O risco é TODO MEU. A oportunidade é TODA SUA!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mensagem Extra */}
                    <div className="mt-12 text-center">
                        <p className="text-xl font-semibold text-gray-700">
                            Você não tem nada a perder e{' '}
                            <span className="text-natal-green">muito dinheiro a ganhar!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
