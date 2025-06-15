"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { Button } from "@/components/ui/button"
import { Gem } from "lucide-react"

export default function DiagnosisScreen() {
  const { clarityPoints, setCurrentStep } = useQuiz()

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Resultado Inicial */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#E1E5EA] mb-6">🎉 Você concluiu o desafio das sombras!</h1>

          <div className="bg-[#2A3B47] rounded-2xl p-8 mb-8 border border-[#6C4F85]/50">
            <div className="space-y-6 text-[#E1E5EA]/90 leading-relaxed">
              <p className="text-lg">
                Com cada resposta, você enfrentou partes ocultas do seu interior — e isso exige coragem.
              </p>

              <p className="text-[#92C9D8] font-medium">
                Seu nível de consciência se expandiu. Sua sombra falou. Agora é hora de revelar o que ela tem tentado
                dizer esse tempo todo...
              </p>
            </div>

            <div className="bg-[#6C4F85]/20 rounded-xl p-6 mt-8 border border-[#6C4F85]/30">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <Gem className="w-8 h-8 text-[#E8C572]" />
                <span className="text-2xl font-bold text-[#E8C572]">
                  Você acumulou: {clarityPoints} pontos de clareza
                </span>
              </div>
              <p className="text-[#E1E5EA] text-center">
                🧠 Isso revela um impacto emocional profundo de origens não resolvidas.
              </p>
            </div>
          </div>

          <Button
            onClick={() => setCurrentStep("archetype")}
            className="bg-[#E8C572] hover:bg-[#E8C572]/80 text-[#1C2B33] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            ➡️ Descobrir o que isso significa
          </Button>
        </div>
      </div>
    </div>
  )
}
