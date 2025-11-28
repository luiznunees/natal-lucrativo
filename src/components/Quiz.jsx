import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Clock, CheckCircle, Phone, Share2, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon
} from 'react-share';
import { logEvent, saveQuizResponse } from '../services/analytics';

export default function Quiz() {
    const [step, setStep] = useState('intro');
    const [answers, setAnswers] = useState({});
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [resultTimer, setResultTimer] = useState(900); // 15 minutos

    // Perguntas base (comuns)
    const baseQuestions = [
        {
            id: 'nome',
            type: 'input',
            question: 'Primeiro, me conta... Qual é o seu nome?',
            subtitle: 'Quero te conhecer melhor 😊',
            placeholder: 'Digite seu nome aqui...'
        },
        {
            id: 'genero',
            type: 'options',
            question: 'E você é...',
            subtitle: 'Para personalizar melhor sua experiência',
            options: [
                { value: 'mulher', label: 'Mulher', emoji: '👩' },
                { value: 'homem', label: 'Homem', emoji: '👨' }
            ]
        }
    ];

    // Perguntas para mulheres
    const womenQuestions = [
        {
            id: 'situacao',
            type: 'options',
            question: `${name || 'Querida'}, como está sua situação financeira hoje?`,
            subtitle: 'Seja sincera, sem julgamentos aqui... ❤️',
            options: [
                { value: 'apertada', label: 'Bem apertada, todo mês é um sufoco', emoji: '😔' },
                { value: 'justa', label: 'Dá para viver, mas não sobra nada', emoji: '😐' },
                { value: 'precaria', label: 'Precária, tenho vergonha de falar', emoji: '😢' },
                { value: 'dependo', label: 'Dependo totalmente dos outros', emoji: '😞' }
            ]
        },
        {
            id: 'sentimento',
            type: 'story',
            story: {
                name: 'Maria',
                age: 38,
                from: 'São Paulo',
                before: 'Eu sei exatamente como você se sente. Em dezembro de 2024, eu estava desesperada. Meu marido tinha perdido o emprego e eu não sabia como ia comprar os presentes das crianças...',
                turning: 'Foi quando descobri que podia ganhar dinheiro fazendo chocotone em casa. Achei que era besteira, mas decidi tentar.',
                after: 'Em 15 dias, vendi 87 chocotones e coloquei R$ 2.340 no bolso. Comprei todos os presentes E ainda parcelei as contas atrasadas.',
                image: 'M',
                color: 'bg-pink-500'
            }
        },
        {
            id: 'tempo',
            type: 'options',
            question: `${name}, você teria 2 horas por semana para mudar sua vida?`,
            subtitle: 'É o tempo que leva para fazer um lote de chocotones',
            options: [
                { value: 'sim', label: 'Sim! Consigo achar esse tempo', emoji: '💪' },
                { value: 'talvez', label: 'Acho que consigo me organizar', emoji: '🤔' },
                { value: 'dificil', label: 'Vai ser difícil, mas vou tentar', emoji: '😓' },
                { value: 'nao', label: 'Não tenho tempo nenhum', emoji: '😰' }
            ]
        },
        {
            id: 'medo',
            type: 'options',
            question: 'Qual é o seu MAIOR medo ao tentar ganhar dinheiro?',
            subtitle: 'Pode ser honesta, todas nós temos medos...',
            options: [
                { value: 'falhar', label: 'Medo de tentar e não conseguir', emoji: '😨' },
                { value: 'perder', label: 'Medo de perder o pouco que tenho', emoji: '😱' },
                { value: 'julgada', label: 'Medo de ser julgada pelos outros', emoji: '😔' },
                { value: 'incapaz', label: 'Medo de não ser capaz', emoji: '😢' }
            ]
        },
        {
            id: 'story2',
            type: 'story',
            story: {
                name: 'Ana',
                age: 42,
                from: 'Rio de Janeiro',
                before: 'Eu tinha esse mesmo medo. Nunca tinha feito um chocotone na vida e achava que ia dar errado...',
                turning: 'Mas sabe o que eu descobri? A receita é TÃO simples que até minha filha de 12 anos me ajudou!',
                after: 'Vendi 52 chocotones em 10 dias e faturei R$ 1.560. Agora já estou planejando fazer para a Páscoa também!',
                image: 'A',
                color: 'bg-purple-500'
            }
        },
        {
            id: 'sonho',
            type: 'options',
            question: `${name}, se você ganhasse R$ 1.000 extras neste Natal, o que faria?`,
            subtitle: 'Feche os olhos e imagine...',
            options: [
                { value: 'contas', label: 'Pagaria as contas atrasadas', emoji: '📝' },
                { value: 'presentes', label: 'Compraria presentes para a família', emoji: '🎁' },
                { value: 'passeio', label: 'Levaria a família para passear', emoji: '🎡' },
                { value: 'guardaria', label: 'Guardaria para emergências', emoji: '💰' }
            ]
        },
        {
            id: 'whatsapp',
            type: 'input',
            question: `Perfeito, ${name}! Qual seu WhatsApp para eu enviar o resultado?`,
            subtitle: '+ Um bônus surpresa exclusivo 🎁',
            placeholder: '(11) 99999-9999',
            inputType: 'tel'
        },
        {
            id: 'urgencia',
            type: 'options',
            question: 'O Natal está chegando... Você está pronta para agir AGORA?',
            subtitle: 'Porque cada dia que passa é dinheiro que você deixa de ganhar',
            options: [
                { value: 'sim', label: 'SIM! Quero começar hoje mesmo!', emoji: '🔥' },
                { value: 'quase', label: 'Quase convencida... me mostre mais', emoji: '👀' },
                { value: 'receosa', label: 'Ainda estou receosa', emoji: '😰' },
                { value: 'nao', label: 'Não sei se é para mim', emoji: '🤷‍♀️' }
            ]
        }
    ];

    // Perguntas para homens
    const menQuestions = [
        {
            id: 'situacao',
            type: 'options',
            question: `${name || 'Parceiro'}, como está sua situação financeira hoje?`,
            subtitle: 'Seja sincero, sem julgamentos aqui...',
            options: [
                { value: 'apertada', label: 'Bem apertada, todo mês é um sufoco', emoji: '😔' },
                { value: 'justa', label: 'Dá para viver, mas não sobra nada', emoji: '😐' },
                { value: 'precaria', label: 'Precária, quero mudar isso', emoji: '💪' },
                { value: 'extra', label: 'Quero uma renda extra', emoji: '💰' }
            ]
        },
        {
            id: 'sentimento',
            type: 'story',
            story: {
                name: 'Carlos',
                age: 35,
                from: 'Curitiba',
                before: 'Eu estava no desemprego e a pressão de sustentar a família estava me consumindo. Precisava de uma renda rápida para o Natal...',
                turning: 'Descobri que chocotone artesanal vende MUITO no fim de ano. Pensei: "Por que não tentar?"',
                after: 'Fiz 65 chocotones e vendi TUDO em 12 dias. Lucrei R$ 1.820 e ainda consegui fazer o Natal da família!',
                image: 'C',
                color: 'bg-blue-600'
            }
        },
        {
            id: 'tempo',
            type: 'options',
            question: `${name}, você teria algumas horas por semana para ganhar dinheiro extra?`,
            subtitle: 'É o tempo que leva para fazer e vender chocotones',
            options: [
                { value: 'sim', label: 'Sim! Vou encontrar esse tempo', emoji: '💪' },
                { value: 'talvez', label: 'Acredito que consigo me organizar', emoji: '🤔' },
                { value: 'dificil', label: 'Vai ser difícil, mas necessário', emoji: '😓' },
                { value: 'nao', label: 'Estou sem tempo', emoji: '😰' }
            ]
        },
        {
            id: 'medo',
            type: 'options',
            question: 'Qual é o seu MAIOR receio ao empreender?',
            subtitle: 'Seja honesto, todos temos receios...',
            options: [
                { value: 'falhar', label: 'Receio de investir e não dar certo', emoji: '😨' },
                { value: 'perder', label: 'Medo de perder dinheiro', emoji: '😱' },
                { value: 'inexperiencia', label: 'Nunca fiz isso antes', emoji: '🤷‍♂️' },
                { value: 'vender', label: 'Não sei se vou conseguir vender', emoji: '😔' }
            ]
        },
        {
            id: 'story2',
            type: 'story',
            story: {
                name: 'Roberto',
                age: 41,
                from: 'Porto Alegre',
                before: 'Eu também tinha esse receio. Nunca tinha feito um doce na vida, quanto mais chocotone...',
                turning: 'Mas a receita é surpreendentemente simples! Segui passo a passo e deu super certo.',
                after: 'Vendi 48 chocotones em uma semana e meio. Lucrei R$ 1.400. Minha esposa nem acreditou!',
                image: 'R',
                color: 'bg-indigo-600'
            }
        },
        {
            id: 'sonho',
            type: 'options',
            question: `${name}, se você ganhasse R$ 1.000 extras neste Natal, o que faria?`,
            subtitle: 'Pense no que isso significaria...',
            options: [
                { value: 'contas', label: 'Quitaria dívidas e contas', emoji: '📝' },
                { value: 'presentes', label: 'Daria presentes melhores para a família', emoji: '🎁' },
                { value: 'investir', label: 'Investiria em algo melhor', emoji: '📈' },
                { value: 'guardaria', label: 'Guardaria para emergências', emoji: '💰' }
            ]
        },
        {
            id: 'whatsapp',
            type: 'input',
            question: `Perfeito, ${name}! Qual seu WhatsApp para eu enviar o resultado?`,
            subtitle: '+ Um bônus surpresa exclusivo 🎁',
            placeholder: '(11) 99999-9999',
            inputType: 'tel'
        },
        {
            id: 'urgencia',
            type: 'options',
            question: 'O Natal está chegando... Você está pronto para agir AGORA?',
            subtitle: 'Cada dia conta quando se trata de ganhar dinheiro',
            options: [
                { value: 'sim', label: 'SIM! Vou começar hoje!', emoji: '🔥' },
                { value: 'quase', label: 'Quase decidido... mostre mais', emoji: '👀' },
                { value: 'receoso', label: 'Ainda tenho dúvidas', emoji: '🤔' },
                { value: 'nao', label: 'Não sei se é para mim', emoji: '🤷‍♂️' }
            ]
        }
    ];

    // Combina perguntas
    const getQuestions = () => {
        if (!gender) return baseQuestions;
        return [...baseQuestions, ...(gender === 'mulher' ? womenQuestions : menQuestions)];
    };

    const questions = getQuestions();

    // Handler de respostas
    const handleAnswer = (questionId, value) => {
        const newAnswers = { ...answers, [questionId]: value };

        if (questionId === 'nome') {
            setName(value);
            // Log início do quiz (primeira interação real)
            logEvent('quiz_start', { name: value });
        }
        if (questionId === 'genero') setGender(value);
        if (questionId === 'whatsapp') {
            setWhatsapp(value);
            console.log('WhatsApp capturado:', value, 'Nome:', name);
        }

        setAnswers(newAnswers);

        setTimeout(() => {
            const totalQuestions = questionId === 'genero'
                ? baseQuestions.length + (value === 'mulher' ? womenQuestions.length : menQuestions.length)
                : questions.length;

            if (step < totalQuestions - 1) {
                setStep(step + 1);
            } else {
                // Confetti ao finalizar
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                setTimeout(() => confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } }), 250);
                setTimeout(() => confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } }), 400);

                // Log fim do quiz
                const result = calculateResult();
                logEvent('quiz_complete', {
                    name,
                    result,
                    answers: newAnswers
                });

                // Salva resposta completa no Supabase
                saveQuizResponse(name, whatsapp, result, gender, newAnswers);

                setStep('result');
            }
        }, 300);
    };

    // Timer do resultado
    useEffect(() => {
        if (step !== 'result') return;
        const interval = setInterval(() => {
            setResultTimer((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(interval);
    }, [step]);

    // Calcula resultado
    const calculateResult = () => {
        const respostas = Object.values(answers);
        const urgentes = ['apertada', 'precaria', 'sim'].filter(v => respostas.includes(v)).length;
        if (urgentes >= 2 || answers.urgencia === 'sim') return 'urgente';
        if (answers.urgencia === 'quase' || answers.tempo === 'sim') return 'pronta';
        return 'receosa';
    };

    const minutes = Math.floor(resultTimer / 60);
    const seconds = resultTimer % 60;

    // URL para compartilhar
    const shareUrl = 'https://natallucrativo.com/quiz';
    const shareText = `Acabei de descobrir meu potencial para ganhar R$ 500-2.000 no Natal! Faça o quiz:`;

    // Tela de resultado  
    if (step === 'result') {
        const resultado = calculateResult();
        const pronome = gender === 'mulher' ? 'Pronta' : 'Pronto';
        const artigo = gender === 'mulher' ? 'a' : 'o';

        return (
            <div className="min-h-screen bg-gradient-to-br from-natal-red/10 via-white to-natal-green/10 py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Timer de urgência */}
                    {resultTimer > 0 && (
                        <div className="bg-natal-red text-white rounded-xl p-4 mb-6 text-center animate-pulse-slow">
                            <Clock className="w-6 h-6 inline-block mr-2" />
                            <span className="font-black">
                                ⏰ Oferta especial expira em: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                            </span>
                        </div>
                    )}

                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-natal-green rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                            {name}, Seu Resultado Está Pronto!
                        </h1>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
                        {resultado === 'urgente' && (
                            <>
                                <h2 className="text-2xl md:text-3xl font-black text-natal-red mb-4">
                                    🔥 Você PRECISA Agir AGORA!
                                </h2>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    Pelas suas respostas, {name}, você está em um momento crítico e não pode esperar.
                                    O Natal é {artigo} sua OPORTUNIDADE de virar o jogo!
                                </p>
                                <div className="bg-natal-red/10 border-l-4 border-natal-red p-4 mb-6">
                                    <p className="font-bold text-gray-900">
                                        💡 Se você começar HOJE e vender apenas 20 chocotones, vai colocar
                                        R$ 460-760 no bolso ANTES do Natal!
                                    </p>
                                </div>
                            </>
                        )}

                        {resultado === 'pronta' && (
                            <>
                                <h2 className="text-2xl md:text-3xl font-black text-natal-green mb-4">
                                    ✨ Você Está Quase Lá!
                                </h2>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    {name}, você tem tudo para dar certo! Só falta dar o primeiro passo.
                                    Imagina você com R$ 500+ no bolso em 2 semanas?
                                </p>
                                <div className="bg-natal-green/10 border-l-4 border-natal-green p-4 mb-6">
                                    <p className="font-bold text-gray-900">
                                        💰 Você pode começar hoje e ter seu primeiro lucro este fim de semana!
                                    </p>
                                </div>
                            </>
                        )}

                        {resultado === 'receosa' && (
                            <>
                                <h2 className="text-2xl md:text-3xl font-black text-natal-gold mb-4">
                                    💛 Eu Entendo {gender === 'mulher' ? 'Seu Medo' : 'Suas Dúvidas'}...
                                </h2>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    {name}, é normal ter {gender === 'mulher' ? 'medo' : 'receios'}. Mas sabe o que é pior?
                                    É o arrependimento de não ter tentado.
                                </p>
                                <div className="bg-natal-gold/10 border-l-4 border-natal-gold p-4 mb-6">
                                    <p className="font-bold text-gray-900">
                                        🛡️ E se eu te disser que tem GARANTIA de 7 dias? Sem risco nenhum!
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Depoimento */}
                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                    {gender === 'mulher' ? 'J' : 'P'}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        {gender === 'mulher' ? 'Juliana Santos' : 'Paulo Ferreira'}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {gender === 'mulher' ? 'Belo Horizonte - MG' : 'Brasília - DF'}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4">
                                {gender === 'mulher'
                                    ? '"Eu tinha MUITO medo de tentar e perder dinheiro. Mas com a garantia de 7 dias, resolvi arriscar. Resultado? Vendi TUDO em 10 dias e lucrei R$ 1.890! Já estou planejando fazer também para a Páscoa."'
                                    : '"Estava desempregado e precisava de dinheiro rápido. Com o Natal Lucrativo, fiz 73 chocotones e vendi tudo em 2 semanas. Lucrei R$ 2.120! Agora vou continuar vendendo na Páscoa."'
                                }
                            </p>
                            <div className="bg-natal-green/20 border-l-4 border-natal-green p-3 rounded">
                                <p className="text-sm text-gray-600">Lucro obtido:</p>
                                <p className="text-3xl font-black text-natal-green">
                                    {gender === 'mulher' ? 'R$ 1.890' : 'R$ 2.120'}
                                </p>
                            </div>
                        </div>

                        {/* Compartilhar resultado */}
                        <div className="border-t border-gray-200 pt-6 mb-6">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <Share2 className="w-5 h-5 text-gray-600" />
                                <p className="font-bold text-gray-900">Compartilhe este quiz:</p>
                            </div>
                            <div className="flex justify-center gap-3">
                                <WhatsappShareButton url={shareUrl} title={shareText}>
                                    <WhatsappIcon size={40} round />
                                </WhatsappShareButton>
                                <FacebookShareButton url={shareUrl} quote={shareText}>
                                    <FacebookIcon size={40} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={shareUrl} title={shareText}>
                                    <TwitterIcon size={40} round />
                                </TwitterShareButton>
                            </div>
                        </div>

                        {/* Oferta */}
                        <div className="border-t-2 border-gray-200 pt-6">
                            <h3 className="text-2xl font-black text-center mb-4">
                                Está {pronome} Para Mudar Sua Vida, {name}?
                            </h3>
                            <div className="text-center mb-6">
                                <div className="inline-block bg-natal-red/10 px-4 py-2 rounded-full mb-2">
                                    <p className="text-sm text-gray-600">De R$ 222,00 por apenas</p>
                                </div>
                                <p className="text-5xl font-black text-natal-green mb-2">R$ 16,90</p>
                                <p className="text-sm text-gray-600">ou 3x de R$ 7,97 sem juros</p>
                            </div>
                            <div className="bg-natal-gold/20 border-2 border-natal-gold rounded-xl p-4 mb-6">
                                <p className="font-bold text-center text-gray-900">
                                    💡 Você recupera o investimento vendendo APENAS 1 chocotone!
                                </p>
                            </div>
                            <a
                                href="/landing"
                                className="block w-full bg-natal-green hover:bg-green-600 text-white font-black text-xl py-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    SIM! QUERO GARANTIR MINHA VAGA AGORA
                                    <ArrowRight className="w-6 h-6" />
                                </span>
                            </a>
                            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span className="text-natal-green text-xl">🔒</span>
                                    <span>Pagamento 100% Seguro</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-natal-green text-xl">✅</span>
                                    <span>Acesso Imediato</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-natal-green text-xl">⚡</span>
                                    <span>7 Dias de Garantia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-natal-red text-white rounded-xl p-6 text-center">
                        <Clock className="w-12 h-12 mx-auto mb-3" />
                        <p className="text-xl font-bold mb-2">
                            ⏰ ATENÇÃO: Faltam Poucos Dias Para o Natal!
                        </p>
                        <p className="text-white/90">
                            Cada dia que você espera é dinheiro que deixa de ganhar.
                            As vagas no Grupo VIP são limitadas!
                        </p>
                    </div>

                    <div className="mt-8 text-center text-gray-600">
                        <p className="text-sm">
                            🛡️ Garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[step];

    // Tela do quiz
    return (
        <div className="min-h-screen bg-gradient-to-br from-natal-red/10 via-white to-natal-green/10 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Capa do Quiz */}
                {step === 'intro' ? (
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center animate-fade-in">
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-natal-gold/20 rounded-full blur-3xl transform scale-150 opacity-50"></div>
                            <img
                                src="/images/hero/chocotone-cortado-novo.png"
                                alt="Chocotone Recheado"
                                className="relative w-64 h-64 object-cover rounded-full mx-auto border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-4 right-1/2 translate-x-1/2 bg-natal-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                                🎄 Especial de Natal
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                            Descubra Seu Potencial de <span className="text-natal-green">Lucro Neste Natal!</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
                            Responda algumas perguntas rápidas e descubra quanto você pode faturar vendendo chocotones artesanais (mesmo começando do zero).
                        </p>

                        <button
                            onClick={() => setStep(0)}
                            className="w-full bg-natal-green hover:bg-green-600 text-white font-black text-xl py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            COMEÇAR O QUIZ AGORA
                            <ArrowRight className="w-6 h-6" />
                        </button>

                        <p className="mt-4 text-sm text-gray-500">
                            ⏱️ Leva menos de 1 minuto
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold text-gray-600">
                                    Pergunta {step + 1} de {questions.length}
                                </span>
                                <span className="text-sm font-semibold text-natal-green">
                                    {Math.round(((step + 1) / questions.length) * 100)}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-natal-red to-natal-green h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Botão Voltar */}
                        <button
                            onClick={() => setStep(step === 0 ? 'intro' : step - 1)}
                            className="mb-4 text-gray-600 hover:text-natal-green font-semibold flex items-center gap-2 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Voltar
                        </button>
                    </>
                )}

                {/* Question Card */}
                {step !== 'intro' && step !== 'result' && (
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        {currentQuestion.type === 'story' ? (
                            // História
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`${currentQuestion.story.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-3xl`}>
                                        {currentQuestion.story.image}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900">{currentQuestion.story.name}</h3>
                                        <p className="text-gray-600">{currentQuestion.story.age} anos - {currentQuestion.story.from}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                                        <p className="text-gray-700 leading-relaxed italic">"{currentQuestion.story.before}"</p>
                                    </div>
                                    <div className="bg-natal-gold/10 p-4 rounded-lg border-l-4 border-natal-gold">
                                        <p className="text-gray-800 leading-relaxed font-semibold">{currentQuestion.story.turning}</p>
                                    </div>
                                    <div className="bg-natal-green/10 p-4 rounded-lg border-l-4 border-natal-green">
                                        <p className="text-gray-800 leading-relaxed font-bold">{currentQuestion.story.after}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setStep(step + 1)}
                                    className="w-full bg-natal-green hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    Continuar
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        ) : currentQuestion.type === 'input' ? (
                            // Input
                            <div>
                                {currentQuestion.id === 'whatsapp' ? (
                                    <Phone className="w-12 h-12 text-natal-green mx-auto mb-4" />
                                ) : (
                                    <Heart className="w-12 h-12 text-natal-red mx-auto mb-4" />
                                )}
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
                                    {currentQuestion.question}
                                </h2>
                                {currentQuestion.subtitle && (
                                    <p className="text-gray-600 text-center mb-8">{currentQuestion.subtitle}</p>
                                )}
                                <input
                                    type={currentQuestion.inputType || 'text'}
                                    value={currentQuestion.id === 'nome' ? name : whatsapp}
                                    onChange={(e) => currentQuestion.id === 'nome' ? setName(e.target.value) : setWhatsapp(e.target.value)}
                                    placeholder={currentQuestion.placeholder}
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-natal-green focus:outline-none mb-6"
                                    autoFocus
                                />
                                <button
                                    onClick={() => handleAnswer(currentQuestion.id, currentQuestion.id === 'nome' ? name : whatsapp)}
                                    disabled={currentQuestion.id === 'nome' ? !name.trim() : !whatsapp.trim()}
                                    className="w-full bg-natal-green hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                                >
                                    Próxima
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            // Opções
                            <div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
                                    {currentQuestion.question}
                                </h2>
                                {currentQuestion.subtitle && (
                                    <p className="text-gray-600 text-center mb-8">{currentQuestion.subtitle}</p>
                                )}
                                <div className="space-y-4">
                                    {currentQuestion.options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleAnswer(currentQuestion.id, option.value)}
                                            className="w-full bg-gray-50 hover:bg-natal-green/10 border-2 border-gray-200 hover:border-natal-green rounded-xl p-5 text-left transition-all duration-300 transform hover:scale-105 group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="text-4xl">{option.emoji}</span>
                                                <span className="text-lg font-semibold text-gray-800 group-hover:text-natal-green">
                                                    {option.label}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        💚 Você está a poucos passos de descobrir como transformar seu Natal!
                    </p>
                </div>
            </div>
        </div>
    );
}
