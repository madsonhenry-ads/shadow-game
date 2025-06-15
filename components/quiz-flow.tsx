"use client"

import { useQuiz } from "@/contexts/quiz-context"
import IntroScreen from "./intro-screen"
import QuizScreen from "./quiz-screen"
import DiagnosisScreen from "./diagnosis-screen"
import ArchetypeScreen from "./archetype-screen"
import DiagnosisPartialScreen from "./diagnosis-partial-screen"
import OfferScreen from "./offer-screen"

export default function QuizFlow() {
  const { currentStep } = useQuiz()

  switch (currentStep) {
    case "intro":
      return <IntroScreen />
    case "quiz":
      return <QuizScreen />
    case "diagnosis":
      return <DiagnosisScreen />
    case "archetype":
      return <ArchetypeScreen />
    case "diagnosis-partial":
      return <DiagnosisPartialScreen />
    case "offer":
      return <OfferScreen />
    default:
      return <IntroScreen />
  }
}
