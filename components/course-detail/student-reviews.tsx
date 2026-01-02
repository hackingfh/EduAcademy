import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface StudentReviewsProps {
  courseId: string
}

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent course! Sarah explains concepts clearly and the projects are really helpful.",
  },
  {
    name: "Maria Garcia",
    rating: 5,
    date: "1 month ago",
    comment: "Best investment in my learning journey. The curriculum is well-structured and comprehensive.",
  },
  {
    name: "Ahmed Ali",
    rating: 4,
    date: "1 month ago",
    comment: "Great content! A few videos could be more detailed, but overall very solid course.",
  },
  {
    name: "Lisa Chen",
    rating: 5,
    date: "2 months ago",
    comment: "I landed a job as a junior developer after completing this course. Highly recommend!",
  },
]

export default function StudentReviews({ courseId }: StudentReviewsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Student Reviews</h2>
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-foreground">4.9</div>
          <div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Based on 2,341 reviews</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <Card key={index} className="p-6 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-foreground">{review.name}</h4>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
