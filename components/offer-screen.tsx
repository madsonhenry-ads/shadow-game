"use client"

import { useQuiz } from "@/contexts/quiz-context"
import { Button } from "@/components/ui/button"
import { Check, Clock, Shield, Gem, Megaphone } from "lucide-react"

export default function OfferScreen() {
  const { archetype, clarityPoints } = useQuiz()

  const benefits = [
    "Lições diárias de 5 minutos",
    "Exercícios de autoaceitação e desbloqueio emocional",
    "Check-ins semanais com acompanhamento guiado",
    "Técnicas de liberação de ansiedade e medo",
    "Rastreamento de hábitos emocionais",
  ]

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#E1E5EA] mb-6">
            🌿 Seu Plano ShadowWork foi criado — agora é hora de ativar sua cura.
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna Principal - Oferta */}
          <div className="lg:col-span-2">
            <div className="bg-[#2A3B47] rounded-2xl p-8 border border-[#6C4F85]/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C4F85]/20 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-[#E1E5EA]/90 mb-8 leading-relaxed text-lg">
                  Criado por psicólogos, terapeutas e especialistas em neurociência emocional, o seu plano é uma jornada
                  prática, leve e profunda para transformar sua sombra em força interior.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-[#E1E5EA] mb-6">Benefícios do seu plano personalizado:</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-[#92C9D8] mt-0.5 flex-shrink-0" />
                        <span className="text-[#E1E5EA]/90 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Destaque Emocional */}
                <div className="bg-[#E8C572]/10 border border-[#E8C572]/30 rounded-xl p-6 mb-8 relative">
                  <Megaphone className="w-8 h-8 text-[#E8C572] mb-4" />
                  <p className="text-[#E8C572] text-xl font-bold">
                    "Você não precisa mais lutar sozinho. Agora você tem um mapa."
                  </p>
                </div>

                {/* Oferta Visual */}
                <div className="bg-[#6C4F85]/20 rounded-xl p-6 border border-[#6C4F85]/30 mb-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#E1E5EA] mb-4">
                      🧘‍♂️ Transforme sua vida por menos de 1 café por dia.
                    </h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-[#E1E5EA]/60 line-through text-lg">€1,05/dia</span>
                      <span className="text-3xl font-bold text-[#E8C572]">€0,35/dia</span>
                    </div>
                    <p className="text-[#92C9D8]">💳 Garantia de 30 dias. Cancelamento fácil.</p>
                  </div>
                </div>

                {/* CTA Principal */}
                <Button className="w-full bg-[#E8C572] hover:bg-[#E8C572]/80 text-[#1C2B33] py-4 text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 mb-4">
                  ➡️ Ativar meu Plano ShadowWork com 67% OFF
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-[#92C9D8]">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>Garantia 30 dias</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Acesso imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Urgência e Informações */}
          <div className="space-y-6">
            {/* Urgência */}
            <div className="bg-[#2A3B47] rounded-xl p-6 border border-[#E8C572]/30">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#E8C572] mx-auto mb-3" />
                <h3 className="font-bold text-[#E1E5EA] mb-2">Oferta Limitada</h3>
                <p className="text-sm text-[#E1E5EA]/80 mb-4">67% OFF apenas para quem completou o quiz das sombras</p>
                <div className="bg-[#E8C572]/20 rounded-lg p-3">
                  <p className="text-[#E8C572] font-semibold">Expira em 24h</p>
                </div>
              </div>
            </div>

            {/* Seu Resultado */}
            <div className="bg-[#2A3B47] rounded-xl p-6 border border-[#92C9D8]/30">
              <div className="text-center">
                <Gem className="w-8 h-8 text-[#92C9D8] mx-auto mb-3" />
                <h3 className="font-bold text-[#E1E5EA] mb-2">Seu Resultado</h3>
                <div className="space-y-2 text-sm text-[#E1E5EA]/80">
                  <p>{clarityPoints} pontos de clareza</p>
                  <p className="text-[#E8C572]">Arquétipo: {archetype}</p>
                  <p>Plano personalizado criado</p>
                </div>
              </div>
            </div>

            {/* Garantia */}
            <div className="bg-[#2A3B47] rounded-xl p-6 border border-[#92C9D8]/30">
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#92C9D8] mx-auto mb-3" />
                <h3 className="font-bold text-[#E1E5EA] mb-2">Garantia Total</h3>
                <p className="text-sm text-[#E1E5EA]/80">
                  Se em 30 dias você não sentir uma transformação real, devolvemos 100% do investimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
