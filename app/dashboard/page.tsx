import DashboardHeader from "@/components/dashboard/dashboard-header"
import EnrollmentCards from "@/components/dashboard/enrollment-cards"
import ProgressSection from "@/components/dashboard/progress-section"
import RecentActivity from "@/components/dashboard/recent-activity"
import UpcomingClasses from "@/components/dashboard/upcoming-classes"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground">Here's what's happening with your courses this week.</p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <EnrollmentCards />
              <ProgressSection />
            </div>

            {/* Right Column - Sidebar Content */}
            <div className="space-y-8">
              <UpcomingClasses />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
