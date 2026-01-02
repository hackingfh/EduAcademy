import Header from "@/components/header"
import Footer from "@/components/footer"
import CourseHero from "@/components/course-detail/course-hero"
import CourseContent from "@/components/course-detail/course-content"
import InstructorProfile from "@/components/course-detail/instructor-profile"
import StudentReviews from "@/components/course-detail/student-reviews"
import RelatedCourses from "@/components/course-detail/related-courses"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CourseHero courseId={params.id} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <CourseContent courseId={params.id} />
            <InstructorProfile courseId={params.id} />
            <StudentReviews courseId={params.id} />
          </div>
          <div className="space-y-8">
            <RelatedCourses courseId={params.id} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
