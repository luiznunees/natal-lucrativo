import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function ProfitCalculator() {
    const [quantidade, setQuantidade] = useState(20);
    const [precoVenda, setPrecoVenda] = useState(35);

    const custoUnitario = 10; // Custo médio por chocotone
    const custoTotal = quantidade * custoUnitario;
    const receitaTotal = quantidade * precoVenda;
    const lucroTotal = receitaTotal - custoTotal;
    const margemLucro = ((lucroTotal / receitaTotal) * 100).toFixed(1);
    const investimentoProduto = 21.90;
    const unidadesParaRecuperar = Math.ceil(investimentoProduto / (precoVenda - custoUnitario));

    return (
        <section className="py-16 bg-gradient-to-br from-natal-green/5 via-white to-natal-gold/5">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <Calculator className="w-16 h-16 text-natal-green mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                        💰 Calcule Seu Lucro
                    </h2>
                    <p className="text-lg text-gray-600">
                        Descubra exatamente quanto você pode ganhar neste Natal
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    {/* Inputs */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Quantidade */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Quantos chocotones pretende fazer?
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="100"
                                value={quantidade}
                                onChange={(e) => setQuantidade(Number(e.target.value))}
                                className="w-full h-3 bg-natal-green/20 rounded-lg appearance-none cursor-pointer accent-natal-green"
                            />
                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <span>5</span>
                                <span className="font-bold text-2xl text-natal-green">{quantidade}</span>
                                <span>100</span>
                            </div>
                        </div>

                        {/* Preço */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Preço de venda por unidade:
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-bold">
                                    R$
                                </span>
                                <input
                                    type="number"
                                    min="15"
                                    max="100"
                                    value={precoVenda}
                                    onChange={(e) => setPrecoVenda(Number(e.target.value))}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-natal-green/30 rounded-lg text-2xl font-bold text-center focus:border-natal-green focus:outline-none"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Preço sugerido: R$ 30-40
                            </p>
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="bg-gradient-to-r from-natal-green/10 to-natal-gold/10 rounded-xl p-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Custo Total */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-1">Custo Total</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    R$ {custoTotal.toFixed(2)}
                                </p>
                            </div>

                            {/* Receita */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-1">Receita Total</p>
                                <p className="text-2xl font-bold text-natal-green">
                                    R$ {receitaTotal.toFixed(2)}
                                </p>
                            </div>

                            {/* Margem */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600 mb-1">Margem de Lucro</p>
                                <p className="text-2xl font-bold text-natal-gold">
                                    {margemLucro}%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Lucro Principal */}
                    <div className="bg-natal-green rounded-2xl p-8 text-center mb-6">
                        <TrendingUp className="w-12 h-12 text-white mx-auto mb-3" />
                        <p className="text-white/90 text-sm mb-2">SEU LUCRO ESTIMADO:</p>
                        <p className="text-6xl font-black text-white mb-3">
                            R$ {lucroTotal.toFixed(2)}
                        </p>
                        <p className="text-white/80 text-sm">
                            Fazendo e vendendo {quantidade} chocotones
                        </p>
                    </div>

                    {/* ROI do Produto */}
                    <div className="bg-natal-gold/20 border-2 border-natal-gold rounded-xl p-6 text-center">
                        <p className="text-gray-700 font-bold mb-2">
                            💡 Você recupera o investimento no curso (R$ {investimentoProduto}) vendendo apenas{' '}
                            <span className="text-natal-green text-2xl">{unidadesParaRecuperar}</span>{' '}
                            {unidadesParaRecuperar === 1 ? 'chocotone' : 'chocotones'}!
                        </p>
                        <p className="text-sm text-gray-600">
                            Depois disso, é LUCRO PURO! 🚀
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 text-center">
                        <a
                            href="#oferta"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-natal-green hover:bg-green-600 text-white font-black text-xl px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            QUERO COMEÇAR A LUCRAR AGORA! 🎄
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
