import { TrendingUp } from 'lucide-react';

export default function VisualProof() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                        Resultados Reais de Alunas Reais
                    </h2>
                    <p className="text-gray-600">
                        Veja o que acontece quando você aplica o método:
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    {/* Print de Vendas */}
                    <div className="relative group mx-auto">
                        <div className="absolute -inset-2 bg-natal-green/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <img
                            src="/images/mockups/print-vendas-exemplo.png"
                            alt="Notificações de Vendas no Celular"
                            className="relative rounded-2xl shadow-2xl border-4 border-white w-64 md:w-72 mx-auto transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border-l-4 border-natal-green animate-bounce">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-natal-green" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold">VENDAS CAINDO</p>
                                    <p className="text-sm font-black text-gray-900">TODO DIA! 🚀</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Texto de Apoio */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Imagine seu celular apitando assim...
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Essas notificações não são sorte. São fruto de um método validado que ensina não só a fazer, mas a <span className="font-bold text-natal-green">VENDER</span>.
                        </p>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                            <p className="text-sm text-gray-600 italic">
                                "No meu primeiro Natal, vendi 50 chocotones em uma semana!"
                            </p>
                            <p className="text-xs font-bold text-gray-900 mt-2">- Depoimento de Aluna</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
