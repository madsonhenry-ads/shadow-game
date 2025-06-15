"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { Button } from "@/components/ui/button"
import { Moon, Eye, Sparkles } from "lucide-react"

export default function IntroScreen() {
  const { setCurrentStep } = useQuiz()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Partículas de fundo animadas */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#92C9D8]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#E8C572]/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#6C4F85]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#92C9D8]/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#E8C572]/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-[#6C4F85]/40 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-[#6C4F85] opacity-20 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative bg-[#2A3B47] rounded-2xl p-8 border border-[#6C4F85]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C4F85]/10 to-[#92C9D8]/5"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <div className="relative group">
                <Moon className="w-16 h-16 text-[#92C9D8] transition-transform group-hover:scale-110" />
                <Eye className="w-8 h-8 text-[#E8C572] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute inset-0 bg-[#92C9D8]/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#E1E5EA] leading-tight relative z-10">
              🎯 Você está pronto para enfrentar sua sombra e descobrir seu verdadeiro poder interior?
            </h1>

            <div className="space-y-4 text-left text-[#E1E5EA]/90 leading-relaxed relative z-10">
              <p>
                Durante anos você pode ter carregado feridas silenciosas — de rejeição, autossabotagem, comparação ou
                medo de ser quem realmente é.
              </p>

              <p className="text-[#92C9D8] font-medium flex items-center space-x-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>Agora, chegou a hora de iluminar o que está escondido.</span>
              </p>

              <p>
                Em apenas 6 etapas, você vai revelar o arquétipo sombrio que mais impacta sua vida — e acumular pontos
                de clareza que desbloqueiam sua transformação.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => setCurrentStep("quiz")}
          className="bg-[#6C4F85] hover:bg-[#6C4F85]/80 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#6C4F85]/30 group"
        >
          <span className="flex items-center space-x-2">
            <span>➡️ Sim, estou pronto para começar minha jornada interior</span>
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
          </span>
        </Button>

        <p className="text-xs text-[#E1E5EA]/60 flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>⚡ Tempo estimado: 3-5 minutos para uma transformação que pode durar para sempre...</span>
        </p>
      </div>
    </div>
  )
}
