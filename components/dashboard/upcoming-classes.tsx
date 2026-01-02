import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

const upcomingClasses = [
  {
    id: 1,
    title: "JavaScript Advanced Patterns",
    instructor: "Sarah Johnson",
    date: "Today",
    time: "2:00 PM UTC",
    students: 24,
  },
  {
    id: 2,
    title: "Data Analysis Workshop",
    instructor: "Dr. Ahmed Hassan",
    date: "Tomorrow",
    time: "10:00 AM UTC",
    students: 18,
  },
  {
    id: 3,
    title: "React Best Practices",
    instructor: "Emma Chen",
    date: "Feb 8",
    time: "4:00 PM UTC",
    students: 32,
  },
]

export default function UpcomingClasses() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Upcoming Classes</h2>
      <Card className="p-4 space-y-3">
        {upcomingClasses.map((classItem) => (
          <div key={classItem.id} className="p-3 rounded-lg bg-secondary/50 space-y-2">
            <h4 className="font-medium text-foreground text-sm">{classItem.title}</h4>
            <p className="text-xs text-muted-foreground">{classItem.instructor}</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>
                  {classItem.date} at {classItem.time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} />
                <span>{classItem.students} students</span>
              </div>
            </div>
            <Button size="sm" className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Join Class
            </Button>
          </div>
        ))}
      </Card>
    </div>
  )
}
