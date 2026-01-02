import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

interface Course {
  id: number
  title: string
  category: string
  instructor: string
  price: string
  rating: number
  students: number
  image: string
  level: string
  duration: string
}

export default function CourseGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16 space-y-4">
        <div className="text-5xl">🔍</div>
        <h3 className="text-xl font-semibold text-foreground">No courses found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search query</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
        >
          {/* Course Image */}
          <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-5xl">
            {course.image}
          </div>

          {/* Course Content */}
          <div className="p-4 space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium text-accent uppercase tracking-wide">{course.category}</p>
                <p className="text-xs font-medium text-muted-foreground">{course.level}</p>
              </div>
              <h3 className="text-sm font-semibold text-foreground line-clamp-2">{course.title}</h3>
            </div>

            <p className="text-xs text-muted-foreground">{course.instructor}</p>

            {/* Duration and Rating */}
            <div className="space-y-2 py-2 border-y border-border">
              <div className="text-xs text-muted-foreground">⏱️ {course.duration}</div>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-accent text-accent" />
                <span className="text-sm font-medium text-foreground">{course.rating}</span>
                <span className="text-xs text-muted-foreground">({course.students.toLocaleString()})</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-primary">{course.price}</span>
              <Link href={`/courses/${course.id}`}>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  View
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
