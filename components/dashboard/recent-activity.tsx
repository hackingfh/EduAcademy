import { Card } from "@/components/ui/card"
import { CheckCircle, BookOpen, Award, MessageSquare } from "lucide-react"

const activities = [
  {
    icon: CheckCircle,
    title: "Completed lesson",
    description: "CSS Flexbox Basics",
    time: "2 hours ago",
    color: "text-green-600",
  },
  {
    icon: BookOpen,
    title: "Started course",
    description: "Data Science Essentials",
    time: "1 day ago",
    color: "text-blue-600",
  },
  {
    icon: Award,
    title: "Earned certificate",
    description: "JavaScript Fundamentals",
    time: "3 days ago",
    color: "text-yellow-600",
  },
  {
    icon: MessageSquare,
    title: "Discussion reply",
    description: "React hooks question",
    time: "5 days ago",
    color: "text-purple-600",
  },
]

export default function RecentActivity() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
      <Card className="p-4">
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex gap-3 pb-4 last:pb-0 last:border-0 border-b border-border">
                <div className={`p-2 rounded-lg bg-secondary/50 ${activity.color} h-fit`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
