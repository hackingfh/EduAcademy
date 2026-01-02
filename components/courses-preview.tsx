import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 2341,
    price: "$49.99",
    image: "🌐",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Data Science Essentials",
    instructor: "Dr. Ahmed Hassan",
    rating: 4.8,
    students: 1823,
    price: "$59.99",
    image: "📊",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Mobile App Development",
    instructor: "Emma Chen",
    rating: 4.9,
    students: 1567,
    price: "$54.99",
    image: "📱",
    category: "Mobile Dev",
  },
  {
    id: 4,
    title: "Digital Marketing Masterclass",
    instructor: "Michael Brown",
    rating: 4.7,
    students: 2089,
    price: "$44.99",
    image: "📈",
    category: "Marketing",
  },
]

export default function CoursesPreview() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Courses</h2>
            <p className="text-muted-foreground">Discover our most popular and highest-rated courses</p>
          </div>
          <Link href="/courses">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group rounded-xl border border-border bg-card hover:border-primary/50 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* Course Image */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                {course.image}
              </div>

              {/* Course Content */}
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-medium text-accent uppercase tracking-wide">{course.category}</p>
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2 mt-1">{course.title}</h3>
                </div>

                <p className="text-xs text-muted-foreground">{course.instructor}</p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  <span className="text-xs text-muted-foreground">({course.students})</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                  <Link href={`/courses/${course.id}`}>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
