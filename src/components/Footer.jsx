export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Logo/Título */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-black mb-2">
                            🎄 Natal Lucrativo 2025 🎄
                        </h3>
                        <p className="text-gray-400">
                            Transformando donas de casa em empreendedoras de sucesso
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-700 my-8"></div>

                    {/* Disclaimer */}
                    <div className="text-center text-sm text-gray-400 space-y-4">
                        <p>
                            <strong className="text-white">AVISO LEGAL:</strong> Os resultados podem variar de pessoa para pessoa.
                            Os depoimentos apresentados são reais, mas não garantem que você terá os mesmos resultados.
                            Seu sucesso depende do seu esforço, dedicação e aplicação do método ensinado.
                        </p>
                        <p>
                            Este produto é comercializado com garantia de 7 dias, através da plataforma de pagamentos.
                            Dentro deste período, você pode solicitar o reembolso do valor investido.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-700 my-8"></div>

                    {/* Copyright */}
                    <div className="text-center text-gray-500 text-sm">
                        <p>
                            © {currentYear} Natal Lucrativo. Todos os direitos reservados.
                        </p>
                        <p className="mt-2">
                            CNPJ: XX.XXX.XXX/XXXX-XX
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Termos de Uso
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Política de Privacidade
                        </a>
                        <a href="https://wa.me/5551989194794" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            Contato (Suporte)
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
