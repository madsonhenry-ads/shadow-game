"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export default function DiagnosisPartialScreen() {
  const { setCurrentStep } = useQuiz()

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#E1E5EA] mb-8">
            🔒 Algo importante ainda está bloqueando seu potencial.
          </h1>
        </div>

        <div className="bg-[#2A3B47] rounded-2xl p-8 mb-8 border border-[#6C4F85]/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C4F85]/20 to-transparent"></div>
          <div className="relative z-10">
            <div className="space-y-6 mb-8 text-[#E1E5EA]/90 leading-relaxed">
              <p className="text-lg">
                Nossa análise mostrou que existe um ciclo recorrente no seu comportamento emocional.
              </p>

              <p className="text-lg">Você não se sente confiante para começar, mas se sente ainda pior por não agir.</p>

              <p className="text-[#92C9D8] font-medium text-lg">
                Isso não é fraqueza — é a assinatura do seu arquétipo. E agora que ele foi revelado, você pode mudar.
              </p>
            </div>

            {/* Destaque da Citação */}
            <div className="bg-[#6C4F85]/20 rounded-xl p-8 border border-[#6C4F85]/50 mb-8 relative">
              <Quote className="w-8 h-8 text-[#E8C572] mb-4 mx-auto" />
              <blockquote className="text-2xl font-bold text-[#E8C572] text-center italic">
                "A sombra só perde o poder quando você a olha de frente."
              </blockquote>
            </div>

            <div className="text-center">
              <Button
                onClick={() => setCurrentStep("offer")}
                className="bg-[#E8C572] hover:bg-[#E8C572]/80 text-[#1C2B33] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                ➡️ Quero meu Plano de Transformação Personalizado
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
