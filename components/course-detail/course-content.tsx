import { Card } from "@/components/ui/card"
import { ChevronDown, BookOpen, Video, FileText, Code } from "lucide-react"

interface CourseContentProps {
  courseId: string
}

const curriculum: Record<string, any> = {
  "1": [
    {
      section: "Getting Started",
      lessons: [
        { title: "Course Introduction", duration: "5 min", type: "video" },
        { title: "Setting Up Your Environment", duration: "15 min", type: "video" },
        { title: "HTML Basics", duration: "20 min", type: "video" },
      ],
    },
    {
      section: "Styling with CSS",
      lessons: [
        { title: "CSS Selectors and Properties", duration: "25 min", type: "video" },
        { title: "Flexbox Layout", duration: "30 min", type: "video" },
        { title: "CSS Grid Layouts", duration: "35 min", type: "video" },
        { title: "CSS Project", duration: "60 min", type: "project" },
      ],
    },
    {
      section: "JavaScript Fundamentals",
      lessons: [
        { title: "Variables and Data Types", duration: "20 min", type: "video" },
        { title: "Functions and Scope", duration: "25 min", type: "video" },
        { title: "DOM Manipulation", duration: "30 min", type: "video" },
        { title: "Interactive Quiz", duration: "15 min", type: "quiz" },
      ],
    },
  ],
}

interface Lesson {
  title: string
  duration: string
  type: "video" | "project" | "quiz"
}

const getIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Video size={18} className="text-blue-600" />
    case "project":
      return <Code size={18} className="text-green-600" />
    case "quiz":
      return <FileText size={18} className="text-purple-600" />
    default:
      return <BookOpen size={18} />
  }
}

export default function CourseContent({ courseId }: CourseContentProps) {
  const sections = curriculum[courseId] || curriculum["1"]
  const totalLessons = sections.reduce((sum: number, section: any) => sum + section.lessons.length, 0)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Course Curriculum</h2>
        <p className="text-muted-foreground">
          {sections.length} sections • {totalLessons} lessons
        </p>
      </div>

      <div className="space-y-3">
        {sections.map((section: any, index: number) => (
          <Card key={index} className="overflow-hidden">
            <button className="w-full px-6 py-4 flex items-center justify-between bg-secondary/30 hover:bg-secondary/50 transition-colors border-b border-border">
              <div className="text-left">
                <h3 className="font-semibold text-foreground">{section.section}</h3>
                <p className="text-sm text-muted-foreground">{section.lessons.length} lessons</p>
              </div>
              <ChevronDown size={20} className="text-muted-foreground" />
            </button>
            <div className="p-4 space-y-3">
              {section.lessons.map((lesson: Lesson, lessonIndex: number) => (
                <div
                  key={lessonIndex}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {getIcon(lesson.type)}
                    <div>
                      <p className="text-sm font-medium text-foreground">{lesson.title}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Course Features */}
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-bold text-foreground">What you'll learn</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Build responsive and modern websites",
            "Master HTML5, CSS3, and JavaScript ES6+",
            "Create interactive user interfaces",
            "Deploy your projects to production",
            "Understand responsive design principles",
            "Work with version control and Git",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 p-4 rounded-lg bg-secondary/20">
              <div className="text-primary">✓</div>
              <p className="text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
