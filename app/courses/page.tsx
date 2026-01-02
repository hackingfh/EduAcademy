"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CourseGrid from "@/components/courses/course-grid"
import CourseFil from "@/components/courses/course-filters"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const allCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Web Development",
    instructor: "Sarah Johnson",
    price: "$49.99",
    rating: 4.9,
    students: 2341,
    image: "🌐",
    level: "Beginner",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Data Science Essentials",
    category: "Data Science",
    instructor: "Dr. Ahmed Hassan",
    price: "$59.99",
    rating: 4.8,
    students: 1823,
    image: "📊",
    level: "Intermediate",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Mobile Dev",
    instructor: "Emma Chen",
    price: "$54.99",
    rating: 4.9,
    students: 1567,
    image: "📱",
    level: "Intermediate",
    duration: "12 weeks",
  },
  {
    id: 4,
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    instructor: "Michael Brown",
    price: "$44.99",
    rating: 4.7,
    students: 2089,
    image: "📈",
    level: "Beginner",
    duration: "6 weeks",
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    category: "Web Development",
    instructor: "Sarah Johnson",
    price: "$69.99",
    rating: 4.9,
    students: 1234,
    image: "⚛️",
    level: "Advanced",
    duration: "8 weeks",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    category: "Data Science",
    instructor: "Dr. Ahmed Hassan",
    price: "$64.99",
    rating: 4.8,
    students: 987,
    image: "🤖",
    level: "Intermediate",
    duration: "12 weeks",
  },
  {
    id: 7,
    title: "UI/UX Design Principles",
    category: "Design",
    instructor: "Lisa Martinez",
    price: "$44.99",
    rating: 4.8,
    students: 1456,
    image: "🎨",
    level: "Beginner",
    duration: "8 weeks",
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    category: "Cloud",
    instructor: "James Wilson",
    price: "$79.99",
    rating: 4.9,
    students: 876,
    image: "☁️",
    level: "Advanced",
    duration: "10 weeks",
  },
  {
    id: 9,
    title: "Python for Everyone",
    category: "Programming",
    instructor: "David Lee",
    price: "$39.99",
    rating: 4.7,
    students: 3456,
    image: "🐍",
    level: "Beginner",
    duration: "8 weeks",
  },
  {
    id: 10,
    title: "Blockchain Fundamentals",
    category: "Technology",
    instructor: "Alex Rodriguez",
    price: "$59.99",
    rating: 4.8,
    students: 654,
    image: "⛓️",
    level: "Intermediate",
    duration: "10 weeks",
  },
  {
    id: 11,
    title: "SEO & SEM Strategies",
    category: "Marketing",
    instructor: "Michael Brown",
    price: "$49.99",
    rating: 4.7,
    students: 1876,
    image: "🔍",
    level: "Intermediate",
    duration: "6 weeks",
  },
  {
    id: 12,
    title: "Video Production Essentials",
    category: "Media",
    instructor: "Sophie Turner",
    price: "$54.99",
    rating: 4.8,
    students: 1234,
    image: "🎬",
    level: "Beginner",
    duration: "8 weeks",
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || course.category === selectedCategory
    const matchesLevel = !selectedLevel || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Explore Courses</h1>
              <p className="text-lg text-muted-foreground">Find the perfect course to advance your skills</p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses or instructors..."
                className="pl-12 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <CourseFil onCategoryChange={setSelectedCategory} onLevelChange={setSelectedLevel} />
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">{filteredCourses.length} courses found</h2>
              </div>
              <CourseGrid courses={filteredCourses} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
