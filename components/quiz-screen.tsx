"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/contexts/quiz-context"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Gem, ArrowRight, X, Sparkles, Volume2, VolumeX } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Você sente que está vivendo como quem realmente é?",
    subtitle: "Ou sente que está representando um papel todos os dias?",
    options: [
      {
        id: 1,
        text: "Quase nunca — me perdi de mim há muito tempo.",
        points: 5,
        feedback: "Você não precisa se encaixar, precisa se encontrar.",
        microfeedback: "Você enfrentou uma verdade corajosa agora.",
      },
      {
        id: 2,
        text: "Às vezes — sinto que uso máscaras para agradar.",
        points: 7,
        feedback: "É hora de tirar o peso da performance.",
        microfeedback: "Você deu voz a uma parte que estava esquecida.",
      },
      {
        id: 3,
        text: "Quase sempre — mas às vezes me confundo.",
        points: 9,
        feedback: "Sua essência está pedindo mais espaço.",
        microfeedback: "Respire — sua sombra está sendo ouvida.",
      },
      {
        id: 4,
        text: "Sim — estou me alinhando mais a cada dia.",
        points: 10,
        feedback: "Continue nutrindo essa verdade interior.",
        microfeedback: "Sua autenticidade está florescendo.",
      },
    ],
  },
  {
    id: 2,
    question: "O que costuma te travar quando surge uma nova oportunidade?",
    subtitle: "A voz da sua sombra costuma aparecer antes da sua coragem?",
    options: [
      {
        id: 1,
        text: "Medo de fracassar ou decepcionar.",
        points: 6,
        feedback: "O fracasso não te define — mas o medo sim.",
        microfeedback: "Você reconheceu um padrão profundo.",
      },
      {
        id: 2,
        text: "Dúvida sobre meu valor ou merecimento.",
        points: 8,
        feedback: "Você já é suficiente. Só precisa lembrar.",
        microfeedback: "Sua vulnerabilidade é sua força.",
      },
      {
        id: 3,
        text: "Falta de clareza sobre o que fazer.",
        points: 7,
        feedback: "Sua sombra confunde — sua alma sabe.",
        microfeedback: "A confusão é o primeiro passo da clareza.",
      },
      {
        id: 4,
        text: "Procrastino por ansiedade ou perfeccionismo.",
        points: 9,
        feedback: "A perfeição é o disfarce do medo.",
        microfeedback: "Você iluminou uma sombra oculta.",
      },
    ],
  },
  {
    id: 3,
    question: "Qual padrão emocional mais se repete na sua vida?",
    subtitle: "O que você sente que não consegue quebrar — por mais que tente?",
    options: [
      {
        id: 1,
        text: "Me anulando para não desagradar.",
        points: 7,
        feedback: 'Dizer "não" pode ser seu maior "sim" interior.',
        microfeedback: "Sua honestidade está curando feridas antigas.",
      },
      {
        id: 2,
        text: "Fugir de conflitos e engolir tudo.",
        points: 6,
        feedback: "Silêncio forçado também é dor.",
        microfeedback: "Você deu nome ao que estava silenciado.",
      },
      {
        id: 3,
        text: "Comparar minha vida com os outros.",
        points: 8,
        feedback: "Seu tempo não é medido com o relógio alheio.",
        microfeedback: "Você está se reconectando com sua singularidade.",
      },
      {
        id: 4,
        text: "Começar com entusiasmo, mas desistir no meio.",
        points: 9,
        feedback: "Sua constância começa com compaixão.",
        microfeedback: "Cada insight é um passo em direção à cura.",
      },
    ],
  },
  {
    id: 4,
    question: "Como é a conversa que acontece dentro de você?",
    subtitle: "Sua voz interior te acolhe ou te pune?",
    options: [
      {
        id: 1,
        text: "É dura — vivo me criticando.",
        points: 6,
        feedback: "Você merece o mesmo amor que oferece aos outros.",
        microfeedback: "Sua coragem de olhar para dentro é admirável.",
      },
      {
        id: 2,
        text: "É silenciosa — nem sei o que sinto.",
        points: 7,
        feedback: "O silêncio também carrega verdades esquecidas.",
        microfeedback: "Você está aprendendo a escutar sua alma.",
      },
      {
        id: 3,
        text: "Oscila — às vezes me apoio, às vezes me saboto.",
        points: 8,
        feedback: "Consistência começa na escuta interna.",
        microfeedback: "Você reconheceu a dança entre luz e sombra.",
      },
      {
        id: 4,
        text: "É gentil — mas ainda estou aprendendo.",
        points: 10,
        feedback: "A autocompaixão é o solo da transformação.",
        microfeedback: "Sua jornada de autoamor está florescendo.",
      },
    ],
  },
  {
    id: 5,
    question: "Você sente que carrega dores que nem sabe explicar?",
    subtitle: "Como se houvesse feridas que nem são só suas?",
    options: [
      {
        id: 1,
        text: "Sim — é como se fossem ancestrais.",
        points: 10,
        feedback: "Talvez sua dor não tenha começado com você — mas pode acabar em você.",
        microfeedback: "Você tocou em camadas profundas da existência.",
      },
      {
        id: 2,
        text: "Acho que sim — mas nunca parei para sentir.",
        points: 7,
        feedback: "O que você ignora, continua te guiando.",
        microfeedback: "Sua disposição para sentir é um ato de coragem.",
      },
      {
        id: 3,
        text: "Às vezes — em momentos específicos.",
        points: 8,
        feedback: "A sombra aparece quando estamos prontos para vê-la.",
        microfeedback: "Você está se tornando mais consciente.",
      },
      {
        id: 4,
        text: "Não — acho que tudo vem das minhas escolhas.",
        points: 6,
        feedback: "Reconhecer padrões é o primeiro passo para quebrá-los.",
        microfeedback: "Sua responsabilidade pessoal é um poder.",
      },
    ],
  },
  {
    id: 6,
    question: "O que você mais deseja mudar dentro de si hoje?",
    subtitle: "Se pudesse transformar um ponto agora, qual seria?",
    options: [
      {
        id: 1,
        text: "Parar de me sabotar sempre que começo algo.",
        points: 9,
        feedback: "Você não tem medo do fracasso — tem medo do seu próprio brilho.",
        microfeedback: "Você está pronto para abraçar sua luz.",
      },
      {
        id: 2,
        text: "Me libertar da ansiedade e do medo de não dar conta.",
        points: 8,
        feedback: "A paz que você busca começa com aceitação.",
        microfeedback: "Sua busca por paz é sagrada.",
      },
      {
        id: 3,
        text: "Aprender a me amar de verdade, sem depender dos outros.",
        points: 10,
        feedback: "Você é digno de amor mesmo nos seus dias escuros.",
        microfeedback: "Seu coração está se abrindo para si mesmo.",
      },
      {
        id: 4,
        text: "Me reconectar com meu propósito e força interior.",
        points: 9,
        feedback: "A sombra esconde o exato caminho da luz.",
        microfeedback: "Você está redescobrindo sua essência.",
      },
    ],
  },
]

const progressMessages = [
  "Fragmento da sombra revelado...",
  "Camada desbloqueada — continue explorando...",
  "Sua essência está emergindo...",
  "Padrões ocultos sendo iluminados...",
  "Profundidades da alma sendo mapeadas...",
  "Transformação em andamento...",
]

export default function QuizScreen() {
  const { currentQuestion, clarityPoints, setCurrentQuestion, addAnswer, setCurrentStep, calculateArchetype } =
    useQuiz()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showInsightPopup, setShowInsightPopup] = useState(false)
  const [showMicrofeedback, setShowMicrofeedback] = useState(false)
  const [currentInsight, setCurrentInsight] = useState({ feedback: "", points: 0, microfeedback: "" })
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Inicializar áudio de fundo com tratamento de erro
    const initializeAudio = async () => {
      try {
        const backgroundAudio = new Audio()
        backgroundAudio.src = "https://inffidelity-finder.online/wp-content/uploads/2025/06/background-sound.mp3"
        backgroundAudio.loop = true
        backgroundAudio.volume = 0.3
        backgroundAudio.preload = "auto"

        // Aguardar o áudio carregar
        await new Promise((resolve, reject) => {
          backgroundAudio.addEventListener("canplaythrough", resolve)
          backgroundAudio.addEventListener("error", reject)
          backgroundAudio.load()
        })

        setAudio(backgroundAudio)
      } catch (error) {
        console.log("Áudio não disponível, continuando sem som de fundo")
        setAudio(null)
      }
    }

    initializeAudio()

    return () => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [])

  const toggleAudio = () => {
    if (audio) {
      if (isAudioPlaying) {
        audio.pause()
        setIsAudioPlaying(false)
      } else {
        audio
          .play()
          .then(() => {
            setIsAudioPlaying(true)
          })
          .catch((error) => {
            console.log("Não foi possível reproduzir o áudio:", error)
            setIsAudioPlaying(false)
          })
      }
    }
  }

  const handleAnswerSelect = (answerId: number, points: number, feedbackText: string, microfeedbackText: string) => {
    setSelectedAnswer(answerId)
    setCurrentInsight({ feedback: feedbackText, points, microfeedback: microfeedbackText })

    addAnswer({
      questionId: currentQuestion + 1,
      answerId,
      points,
    })

    // Mostrar microfeedback primeiro
    setTimeout(() => {
      setShowMicrofeedback(true)
    }, 300)

    // Depois mostrar popup principal
    setTimeout(() => {
      setShowMicrofeedback(false)
      setShowInsightPopup(true)
    }, 2500)
  }

  const handleCloseInsight = () => {
    setShowInsightPopup(false)
    setSelectedAnswer(null)
  }

  const handleNext = () => {
    setShowInsightPopup(false)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      calculateArchetype()
      setCurrentStep("diagnosis")
    }
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen p-4 relative overflow-hidden">
      {/* Partículas de fundo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#92C9D8]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#E8C572]/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#6C4F85]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#92C9D8]/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#E8C572]/30 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header com pontos e áudio */}
        <div className="flex justify-between items-center mb-8 bg-[#2A3B47] rounded-xl p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6C4F85]/10 to-[#92C9D8]/10"></div>
          <div className="flex items-center space-x-2 relative z-10">
            <Gem className="w-6 h-6 text-[#E8C572] animate-pulse" />
            <span className="text-[#E8C572] font-bold text-lg">💠 {clarityPoints} Fragmentos de Autenticidade</span>
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            {audio && (
              <button
                onClick={toggleAudio}
                className="text-[#92C9D8] hover:text-[#E8C572] transition-colors"
                title={isAudioPlaying ? "Pausar áudio" : "Tocar áudio"}
              >
                {isAudioPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            )}
            <div className="text-[#92C9D8]">
              Pergunta {currentQuestion + 1} de {questions.length}
            </div>
          </div>
        </div>

        {/* Barra de progresso emocional */}
        <div className="mb-8">
          <div className="relative">
            <Progress value={progress} className="h-4 bg-[#2A3B47] overflow-hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C4F85] via-[#92C9D8] to-[#E8C572] opacity-20 rounded-full"></div>
          </div>
          <p className="text-center text-sm text-[#92C9D8] mt-3 italic">✨ {progressMessages[currentQuestion]}</p>
        </div>

        {/* Pergunta */}
        <div className="bg-[#2A3B47] rounded-2xl p-8 mb-8 border border-[#6C4F85]/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C4F85]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-3 text-[#E1E5EA] leading-relaxed">{currentQ.question}</h2>
            <p className="text-[#92C9D8] mb-8 text-lg italic">{currentQ.subtitle}</p>

            {/* Opções */}
            <div className="space-y-4">
              {currentQ.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id, option.points, option.feedback, option.microfeedback)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-500 group ${
                    selectedAnswer === option.id
                      ? "border-[#E8C572] bg-[#E8C572]/10 shadow-lg shadow-[#E8C572]/20"
                      : "border-[#6C4F85]/30 hover:border-[#6C4F85] bg-[#1C2B33] hover:bg-[#1C2B33]/80"
                  } ${
                    selectedAnswer !== null
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  <span className="text-[#E1E5EA] group-hover:text-[#E1E5EA] transition-colors">{option.text}</span>
                  {selectedAnswer === option.id && (
                    <div className="mt-3 text-[#E8C572] text-sm font-medium flex items-center space-x-2 animate-in fade-in-0 slide-in-from-bottom-2">
                      <Sparkles className="w-4 h-4" />
                      <span>+{option.points} fragmentos de autenticidade</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Microfeedback flutuante */}
      {showMicrofeedback && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-in fade-in-0 zoom-in-95 duration-500">
          <div className="bg-[#6C4F85]/90 backdrop-blur-sm rounded-2xl p-6 border border-[#92C9D8]/50 max-w-md">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-[#92C9D8] mx-auto mb-3 animate-pulse" />
              <p className="text-[#E1E5EA] text-lg italic">"{currentInsight.microfeedback}"</p>
            </div>
          </div>
        </div>
      )}

      {/* Popup de Insight */}
      {showInsightPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#2A3B47] rounded-2xl p-8 max-w-lg w-full border border-[#6C4F85]/50 relative animate-in fade-in-0 zoom-in-95 duration-500 overflow-hidden">
            {/* Efeito de luz de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#92C9D8]/20 via-transparent to-[#E8C572]/20"></div>

            {/* Botão fechar */}
            <button
              onClick={handleCloseInsight}
              className="absolute top-4 right-4 text-[#E1E5EA]/60 hover:text-[#E1E5EA] transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Conteúdo do popup */}
            <div className="text-center mb-6 relative z-10">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-[#92C9D8]/30 blur-2xl rounded-full animate-pulse"></div>
                <Sparkles className="w-12 h-12 text-[#92C9D8] mx-auto relative z-10 animate-spin" />
              </div>

              <h3 className="text-2xl font-bold text-[#92C9D8] mb-2">💫 Insight Revelado</h3>

              <div className="bg-[#E8C572]/10 border border-[#E8C572]/30 rounded-xl p-4 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8C572]/5 to-[#E8C572]/10"></div>
                <div className="text-[#E8C572] font-semibold mb-2 relative z-10 flex items-center justify-center space-x-2">
                  <Gem className="w-5 h-5 animate-pulse" />
                  <span>+{currentInsight.points} Fragmentos de Autenticidade</span>
                </div>
              </div>
            </div>

            <div className="bg-[#6C4F85]/20 border border-[#6C4F85]/30 rounded-xl p-6 mb-6 relative z-10">
              <p className="text-[#E1E5EA] text-lg leading-relaxed italic text-center">"{currentInsight.feedback}"</p>
            </div>

            <div className="text-center space-y-4 relative z-10">
              <Button
                onClick={handleNext}
                className="bg-[#E8C572] hover:bg-[#E8C572]/80 text-[#1C2B33] px-8 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E8C572]/20"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Próxima Pergunta <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  "Revelar Meu Arquétipo"
                )}
              </Button>

              <p className="text-sm text-[#92C9D8]">
                {currentQuestion < questions.length - 1
                  ? `${questions.length - currentQuestion - 1} camadas restantes para explorar`
                  : "Prepare-se para descobrir sua essência oculta..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
