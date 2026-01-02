import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const enrolledCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    progress: 65,
    nextLesson: "CSS Grid Layouts",
    daysLeft: 12,
  },
  {
    id: 2,
    title: "Data Science Essentials",
    instructor: "Dr. Ahmed Hassan",
    progress: 42,
    nextLesson: "Data Visualization",
    daysLeft: 28,
  },
  {
    id: 3,
    title: "Mobile App Development",
    instructor: "Emma Chen",
    progress: 78,
    nextLesson: "Navigation Patterns",
    daysLeft: 5,
  },
]

export default function EnrollmentCards() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Ongoing Courses</h2>
      <div className="grid gap-4">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="p-6 hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {course.daysLeft} days left
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-semibold text-foreground">{course.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${course.progress}%` }} />
                </div>
              </div>

              {/* Next Lesson */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Next Lesson</p>
                  <p className="text-sm font-medium text-foreground">{course.nextLesson}</p>
                </div>
                <Link href={`/dashboard/courses/${course.id}`}>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    Continue <ChevronRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
