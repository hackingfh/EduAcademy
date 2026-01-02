import { BookOpen, Users, BarChart3, Trophy, Clock, Zap } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Structured learning paths designed by industry experts covering basics to advanced topics.",
  },
  {
    icon: Users,
    title: "Live Classes",
    description: "Interact with instructors and peers in real-time through live sessions and discussions.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and personalized recommendations.",
  },
  {
    icon: Trophy,
    title: "Certifications",
    description: "Earn recognized certificates upon completion to boost your professional profile.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access all materials anytime, anywhere. Study on your schedule with lifetime access.",
  },
  {
    icon: Zap,
    title: "Interactive Projects",
    description: "Apply your knowledge with real-world projects and practical assignments.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose EduAcademy?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
