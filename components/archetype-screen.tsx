"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Eye, Brain } from "lucide-react"

const getArchetypeByPoints = (points: number) => {
  if (points >= 50) {
    return {
      name: "O Cansado Invisível",
      description:
        "Você aprendeu a sobreviver em silêncio. A manter a calma mesmo quando tudo dentro de você implora por mudança.",
      impact:
        "Mas esse padrão cobra um preço: energia baixa, procrastinação, medo de falhar e dúvidas constantes sobre o seu valor.",
      patterns: ["Autossabotagem em momentos-chave", "Voz crítica interna constante", "Medo de se expor ou errar"],
    }
  } else if (points >= 40) {
    return {
      name: "O Guerreiro Exausto",
      description: "Você luta bravamente, mas carrega o peso de batalhas que nem sempre são suas.",
      impact:
        "Esse padrão gera: esgotamento emocional, dificuldade para relaxar e tendência a assumir responsabilidades demais.",
      patterns: ["Dificuldade para dizer não", "Sensação de carregar o mundo", "Medo de decepcionar outros"],
    }
  } else if (points >= 30) {
    return {
      name: "O Perfeccionista Paralisado",
      description: "Você tem padrões altos, mas eles se tornaram uma prisão que impede sua expressão autêntica.",
      impact:
        "Esse padrão resulta em: procrastinação por medo de errar, autocrítica severa e dificuldade para começar projetos.",
      patterns: ["Paralisia por perfeccionismo", "Medo do julgamento alheio", "Autocrítica destrutiva"],
    }
  } else if (points >= 20) {
    return {
      name: "O Coração Blindado",
      description: "Você protege suas emoções, mas essa proteção se tornou uma barreira para conexões profundas.",
      impact:
        "Esse padrão causa: dificuldade para se abrir, medo da vulnerabilidade e sensação de solidão mesmo acompanhado.",
      patterns: ["Dificuldade para se abrir", "Medo da rejeição", "Isolamento emocional"],
    }
  } else {
    return {
      name: "O Buscador Perdido",
      description: "Você sente que há algo maior esperando por você, mas não consegue encontrar o caminho.",
      impact:
        "Esse padrão gera: sensação de estar à deriva, dificuldade para tomar decisões e busca constante por validação externa.",
      patterns: ["Indecisão constante", "Busca por validação externa", "Sensação de estar perdido"],
    }
  }
}

export default function ArchetypeScreen() {
  const { clarityPoints, setCurrentStep } = useQuiz()
  const archetype = getArchetypeByPoints(clarityPoints)

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Arquétipo Revelado */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#E1E5EA] mb-8">
            🧩 Seu Arquétipo da Sombra é: <span className="text-[#E8C572]">{archetype.name}</span>
          </h1>
        </div>

        <div className="bg-[#2A3B47] rounded-2xl p-8 mb-8 border border-[#6C4F85]/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C4F85]/20 to-transparent"></div>
          <div className="relative z-10">
            <div className="space-y-6 mb-8">
              <p className="text-[#E1E5EA]/90 text-lg leading-relaxed">{archetype.description}</p>

              <p className="text-[#92C9D8] leading-relaxed">{archetype.impact}</p>
            </div>

            {/* Resumo Visual */}
            <div className="bg-[#6C4F85]/20 rounded-xl p-6 border border-[#6C4F85]/30 mb-8">
              <h3 className="text-xl font-semibold text-[#E1E5EA] mb-6 text-center">📊 Resumo Visual</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#E1E5EA]">Nível de clareza emocional:</span>
                    <span className="text-[#E8C572] font-bold">{clarityPoints}/100</span>
                  </div>
                  <Progress value={clarityPoints} className="h-3 bg-[#1C2B33]" />
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="w-5 h-5 text-[#92C9D8]" />
                    <span className="text-[#E1E5EA] font-medium">Arquétipo dominante:</span>
                    <span className="text-[#E8C572]">{archetype.name}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye className="w-5 h-5 text-[#92C9D8]" />
                    <span className="text-[#E1E5EA] font-medium">Padrões ocultos detectados:</span>
                  </div>
                  <div className="space-y-2 ml-7">
                    {archetype.patterns.map((pattern, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-[#E8C572]" />
                        <span className="text-[#E1E5EA]/80">{pattern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => setCurrentStep("diagnosis-partial")}
                className="bg-[#E8C572] hover:bg-[#E8C572]/80 text-[#1C2B33] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                ➡️ Ver como transformar esse padrão
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
