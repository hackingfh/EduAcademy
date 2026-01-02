import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

const relatedCourses = [
  {
    id: 5,
    title: "Advanced React Patterns",
    instructor: "Sarah Johnson",
    price: "$69.99",
    rating: 4.9,
    students: 1234,
    image: "⚛️",
  },
  {
    id: 7,
    title: "UI/UX Design Principles",
    instructor: "Lisa Martinez",
    price: "$44.99",
    rating: 4.8,
    students: 1456,
    image: "🎨",
  },
  {
    id: 9,
    title: "Python for Everyone",
    instructor: "David Lee",
    price: "$39.99",
    rating: 4.7,
    students: 3456,
    image: "🐍",
  },
]

export default function RelatedCourses() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-foreground">Related Courses</h3>
      <div className="space-y-4">
        {relatedCourses.map((course) => (
          <Card key={course.id} className="p-4 hover:border-primary/50 transition-colors">
            <div className="h-32 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-3xl mb-3">
              {course.image}
            </div>
            <h4 className="font-semibold text-foreground text-sm line-clamp-2 mb-1">{course.title}</h4>
            <p className="text-xs text-muted-foreground mb-3">{course.instructor}</p>
            <div className="flex items-center gap-1 mb-3">
              <Star size={14} className="fill-accent text-accent" />
              <span className="text-sm font-medium text-foreground">{course.rating}</span>
              <span className="text-xs text-muted-foreground">({course.students})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary">{course.price}</span>
              <Link href={`/courses/${course.id}`}>
                <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                  View
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
