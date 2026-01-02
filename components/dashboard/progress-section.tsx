import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const weeklyData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 2 },
  { day: "Sat", hours: 5.5 },
  { day: "Sun", hours: 1.5 },
]

export default function ProgressSection() {
  const totalHours = weeklyData.reduce((sum, day) => sum + day.hours, 0)
  const avgHours = (totalHours / weeklyData.length).toFixed(1)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Learning Activity</h2>
      <Card className="p-6">
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Hours</p>
              <p className="text-2xl font-bold text-foreground mt-2">{totalHours.toFixed(1)}h</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg per Day</p>
              <p className="text-2xl font-bold text-foreground mt-2">{avgHours}h</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Streak</p>
              <p className="text-2xl font-bold text-foreground mt-2">6 days</p>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 -mx-6 px-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: `1px solid var(--color-border)`,
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="hours" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  )
}
