"use client"

import { QuizProvider } from "@/contexts/quiz-context"
import QuizFlow from "@/components/quiz-flow"

export default function Home() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-[#1C2B33] text-[#E1E5EA]">
        <QuizFlow />
      </div>
    </QuizProvider>
  )
}
