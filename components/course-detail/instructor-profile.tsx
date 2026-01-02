import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"

interface InstructorProfileProps {
  courseId: string
}

const instructors: Record<string, any> = {
  "1": {
    name: "Sarah Johnson",
    title: "Full Stack Web Developer",
    bio: "Sarah is a passionate full-stack developer with 10+ years of experience building scalable web applications. She has worked with startups and Fortune 500 companies.",
    rating: 4.9,
    students: 45000,
    courses: 12,
    image: "👩‍💻",
  },
  "2": {
    name: "Dr. Ahmed Hassan",
    title: "Data Science & ML Expert",
    bio: "Ahmed holds a PhD in Computer Science and has published numerous research papers on machine learning and data science. He's passionate about making AI accessible to everyone.",
    rating: 4.8,
    students: 32000,
    courses: 8,
    image: "👨‍🔬",
  },
  "3": {
    name: "Emma Chen",
    title: "Mobile App Developer",
    bio: "Emma is an award-winning mobile app developer who has created apps with millions of downloads. She specializes in iOS and React Native development.",
    rating: 4.9,
    students: 28000,
    courses: 10,
    image: "👩‍💻",
  },
}

export default function InstructorProfile({ courseId }: InstructorProfileProps) {
  const instructor = instructors[courseId] || instructors["1"]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">About the Instructor</h2>
      <Card className="p-8 space-y-6">
        <div className="flex gap-6">
          {/* Instructor Image */}
          <div className="text-5xl h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            {instructor.image}
          </div>

          {/* Instructor Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground">{instructor.name}</h3>
            <p className="text-primary font-medium mb-4">{instructor.title}</p>
            <div className="flex gap-6 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-accent text-accent" />
                  <span className="font-semibold text-foreground">{instructor.rating}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Students</p>
                <p className="font-semibold text-foreground">{(instructor.students / 1000).toFixed(0)}K</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Courses</p>
                <p className="font-semibold text-foreground">{instructor.courses}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{instructor.bio}</p>

        <Button variant="outline" className="w-full gap-2 bg-transparent">
          <MessageCircle size={18} />
          Message Instructor
        </Button>
      </Card>
    </div>
  )
}
