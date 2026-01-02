"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const quizzes: Record<string, QuizQuestion[]> = {
  "1": [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Which property is used to change the background color?",
      options: ["bg-color", "background-color", "color-bg"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "What is JavaScript primarily used for?",
      options: ["Styling web pages", "Creating interactive web features", "Managing databases"],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Which CSS layout is best for complex 2D layouts?",
      options: ["Flexbox", "Float", "Grid"],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Management", "Digital Output Module"],
      correctAnswer: 0,
    },
  ],
}

interface QuizInterfaceProps {
  courseId: string
  onComplete: (score: number, total: number) => void
}

export default function QuizInterface({ courseId, onComplete }: QuizInterfaceProps) {
  const questions = quizzes[courseId] || quizzes["1"]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [answered, setAnswered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isTimeRunning = timeLeft <= 0

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
    setAnswered(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
    }
  }

  const handleSubmit = () => {
    const score = answers.reduce((sum, answer, index) => {
      return sum + (answer === questions[index].correctAnswer ? 1 : 0)
    }, 0)
    onComplete(score, questions.length)
  }

  const allAnswered = answers.every((answer) => answer !== -1)

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Quiz: Web Development</h1>
              <p className="text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <div
              className={`text-center p-4 rounded-lg border ${
                timeLeft <= 300 ? "border-red-500/50 bg-red-500/10" : "border-border bg-secondary/30"
              }`}
            >
              <div className="flex items-center gap-2 justify-center mb-2">
                <Clock size={20} className={timeLeft <= 300 ? "text-red-600" : "text-primary"} />
                <span className={`text-2xl font-bold ${timeLeft <= 300 ? "text-red-600" : "text-foreground"}`}>
                  {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </span>
              </div>
              {isTimeRunning && <p className="text-xs text-red-600 font-semibold">Time's Up!</p>}
            </div>
          </div>

          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 space-y-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{question.question}</h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  answers[currentQuestion] === index
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary/20 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index ? "border-primary bg-primary" : "border-border"
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="font-medium text-foreground">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {!answered && <p className="text-sm text-muted-foreground italic">Please select an answer to continue</p>}
        </Card>

        {/* Navigation */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => {
              if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
            }}
            disabled={currentQuestion === 0}
            className="bg-transparent"
          >
            Previous
          </Button>

          <div className="flex-1" />

          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!answered}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Next Question
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Submit Quiz
            </Button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="mt-8 p-6 bg-card border border-border rounded-lg space-y-4">
          <h3 className="font-semibold text-foreground">Questions Overview</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-full aspect-square rounded-lg border-2 font-medium transition-all ${
                  index === currentQuestion
                    ? "border-primary bg-primary text-primary-foreground"
                    : answers[index] !== -1
                      ? "border-green-600 bg-green-600/10 text-green-600"
                      : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
