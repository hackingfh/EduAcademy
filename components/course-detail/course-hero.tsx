import { Button } from "@/components/ui/button"
import { Star, Users, Clock } from "lucide-react"

interface CourseHeroProps {
  courseId: string
}

const courseData: Record<string, any> = {
  "1": {
    title: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 2341,
    price: "$49.99",
    image: "🌐",
    duration: "8 weeks",
    level: "Beginner",
    description:
      "Learn the foundations of web development with HTML, CSS, and JavaScript. Build responsive, modern websites.",
  },
  "2": {
    title: "Data Science Essentials",
    instructor: "Dr. Ahmed Hassan",
    rating: 4.8,
    students: 1823,
    price: "$59.99",
    image: "📊",
    duration: "10 weeks",
    level: "Intermediate",
    description: "Master data analysis and visualization. Learn Python, Pandas, and create insights from data.",
  },
  "3": {
    title: "Mobile App Development",
    instructor: "Emma Chen",
    rating: 4.9,
    students: 1567,
    price: "$54.99",
    image: "📱",
    duration: "12 weeks",
    level: "Intermediate",
    description: "Build native and cross-platform mobile applications. Learn React Native and iOS development.",
  },
}

export default function CourseHero({ courseId }: CourseHeroProps) {
  const course = courseData[courseId] || courseData["1"]

  return (
    <section className="bg-gradient-to-b from-secondary to-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-xs font-medium text-accent uppercase">{course.level}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>
            </div>

            {/* Instructor and Stats */}
            <div className="space-y-4">
              <p className="text-foreground font-medium">
                Taught by <span className="text-primary">{course.instructor}</span>
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-accent fill-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{course.rating}</p>
                    <p className="text-xs text-muted-foreground">({course.students.toLocaleString()} reviews)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{course.students.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Students enrolled</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{course.duration}</p>
                    <p className="text-xs text-muted-foreground">Course duration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Enrollment Card */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4 h-fit sticky top-20">
            <div className="h-40 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl">
              {course.image}
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Price</p>
                <p className="text-3xl font-bold text-primary">{course.price}</p>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12">Enroll Now</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Add to Wishlist
              </Button>
              <p className="text-xs text-center text-muted-foreground">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
