"use client";

import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/dashboard/sidebar"), {
  ssr: false,
});

const ProgressSection = dynamic(
  () => import("@/components/dashboard/progress-section"),
  { ssr: false }
);

import DashboardHeader from "@/components/dashboard/dashboard-header";
import EnrollmentCards from "@/components/dashboard/enrollment-cards";
import RecentActivity from "@/components/dashboard/recent-activity";
import UpcomingClasses from "@/components/dashboard/upcoming-classes";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <EnrollmentCards />
          <ProgressSection />
          <UpcomingClasses />
          <RecentActivity />
        </main>
      </div>
    </div>
  );
}
