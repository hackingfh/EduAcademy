"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Share2 } from "lucide-react"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  courseId: string
  onRetake: () => void
}

export default function QuizResults({ score, totalQuestions, courseId, onRetake }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = percentage >= 70
  const maxScore = totalQuestions

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Result Card */}
        <Card className="p-12 text-center space-y-8 mb-8">
          {/* Icon */}
          <div className="flex justify-center">
            {passed ? <div className="text-7xl animate-bounce">✓</div> : <div className="text-7xl">⚠️</div>}
          </div>

          {/* Status */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">{passed ? "Congratulations!" : "Keep Practicing"}</h1>
            <p className="text-lg text-muted-foreground">
              {passed
                ? "You passed the assessment with flying colors!"
                : "You didn't quite meet the passing score. Try again!"}
            </p>
          </div>

          {/* Score Display */}
          <div className="grid md:grid-cols-3 gap-6 py-8 border-y border-border">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Your Score</p>
              <div className="text-4xl font-bold text-primary">{score}</div>
              <p className="text-muted-foreground text-sm">out of {maxScore}</p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Percentage</p>
              <div className={`text-4xl font-bold ${passed ? "text-green-600" : "text-orange-600"}`}>{percentage}%</div>
              <p className="text-muted-foreground text-sm">{passed ? "Passed" : "Passing score: 70%"}</p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Performance</p>
              <div className="space-y-1">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${passed ? "bg-green-600" : "bg-orange-600"}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {percentage >= 90
                    ? "Excellent"
                    : percentage >= 80
                      ? "Great"
                      : percentage >= 70
                        ? "Good"
                        : "Needs Work"}
                </p>
              </div>
            </div>
          </div>

          {/* Certificate */}
          {passed && (
            <div className="p-6 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">🎖️</span>
                <h3 className="font-semibold text-foreground">Certificate Earned!</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                You've earned a certificate of completion. Download it to showcase your achievement.
              </p>
            </div>
          )}
        </Card>

        {/* Actions */}
        <div className="space-y-4">
          {!passed && (
            <Card className="p-6 bg-orange-500/10 border-orange-500/20 space-y-3">
              <h3 className="font-semibold text-foreground">Performance Summary</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Review course materials for topics you struggled with</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Watch video lessons again for better understanding</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Practice with additional exercises and projects</span>
                </li>
              </ul>
            </Card>
          )}

          <div className="flex gap-4">
            <Button onClick={onRetake} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12">
              {passed ? "Retake Quiz" : "Try Again"}
            </Button>
            <Link href={`/courses/${courseId}`} className="flex-1">
              <Button variant="outline" className="w-full bg-transparent h-12">
                Back to Course
              </Button>
            </Link>
          </div>
        </div>

        {/* Share Section */}
        {passed && (
          <Card className="mt-8 p-6 space-y-4">
            <h3 className="font-semibold text-foreground">Share Your Success</h3>
            <Button variant="outline" className="w-full gap-2 bg-transparent">
              <Share2 size={18} />
              Share Certificate
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}
