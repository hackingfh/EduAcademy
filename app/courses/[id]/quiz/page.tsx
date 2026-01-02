"use client"

import { useState } from "react"
import QuizInterface from "@/components/quiz/quiz-interface"
import QuizResults from "@/components/quiz/quiz-results"

export default function QuizPage({ params }: { params: { id: string } }) {
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  if (!quizStarted) {
    return <QuizIntro onStart={() => setQuizStarted(true)} courseId={params.id} />
  }

  if (quizCompleted) {
    return (
      <QuizResults
        score={score}
        totalQuestions={totalQuestions}
        courseId={params.id}
        onRetake={() => {
          setQuizStarted(true)
          setQuizCompleted(false)
          setScore(0)
        }}
      />
    )
  }

  return (
    <QuizInterface
      courseId={params.id}
      onComplete={(finalScore, total) => {
        setScore(finalScore)
        setTotalQuestions(total)
        setQuizCompleted(true)
      }}
    />
  )
}

function QuizIntro({ onStart, courseId }: { onStart: () => void; courseId: string }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">✍️</div>
          <h1 className="text-4xl font-bold text-foreground">Course Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Test your knowledge with this comprehensive quiz covering all course topics
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Quiz Details</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="text-sm text-muted-foreground">Questions</p>
                <p className="text-2xl font-bold text-primary">15</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="text-sm text-muted-foreground">Time Limit</p>
                <p className="text-2xl font-bold text-primary">30 min</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="text-sm text-muted-foreground">Passing Score</p>
                <p className="text-2xl font-bold text-primary">70%</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 border border-border rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-foreground">Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span>•</span>
                <span>You must answer all questions before submitting</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>You cannot go back to previous questions</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Your answers are automatically saved</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>You can retake the quiz if you don't pass</span>
              </li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
