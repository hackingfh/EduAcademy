import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-accent">Master Any Skill</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
                Learn from Industry Experts
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Access thousands of courses taught by real professionals. Learn at your own pace with interactive
                lessons, live classes, and real-world projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Courses
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">10k+</div>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Expert Courses</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">📚</div>
                <p className="text-muted-foreground">Interactive Learning Environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
