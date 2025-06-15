"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface QuizAnswer {
  questionId: number
  answerId: number
  points: number
}

interface QuizContextType {
  currentStep: "intro" | "quiz" | "diagnosis" | "archetype" | "diagnosis-partial" | "offer"
  currentQuestion: number
  clarityPoints: number
  answers: QuizAnswer[]
  archetype: string
  setCurrentStep: (step: "intro" | "quiz" | "diagnosis" | "archetype" | "diagnosis-partial" | "offer") => void
  setCurrentQuestion: (question: number) => void
  addAnswer: (answer: QuizAnswer) => void
  calculateArchetype: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<
    "intro" | "quiz" | "diagnosis" | "archetype" | "diagnosis-partial" | "offer"
  >("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [clarityPoints, setClarityPoints] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [archetype, setArchetype] = useState("")

  const addAnswer = (answer: QuizAnswer) => {
    setAnswers((prev) => [...prev, answer])
    setClarityPoints((prev) => prev + answer.points)
  }

  const calculateArchetype = () => {
    const totalPoints = clarityPoints

    if (totalPoints >= 50) {
      setArchetype("O Cansado Invisível")
    } else if (totalPoints >= 40) {
      setArchetype("O Guerreiro Exausto")
    } else if (totalPoints >= 30) {
      setArchetype("O Perfeccionista Paralisado")
    } else if (totalPoints >= 20) {
      setArchetype("O Coração Blindado")
    } else {
      setArchetype("O Buscador Perdido")
    }
  }

  return (
    <QuizContext.Provider
      value={{
        currentStep,
        currentQuestion,
        clarityPoints,
        answers,
        archetype,
        setCurrentStep,
        setCurrentQuestion,
        addAnswer,
        calculateArchetype,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider")
  }
  return context
}
