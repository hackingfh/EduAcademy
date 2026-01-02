export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
            <p className="text-primary-foreground/80">Students Learning</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
            <p className="text-primary-foreground/80">Courses Available</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
            <p className="text-primary-foreground/80">Expert Instructors</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
            <p className="text-primary-foreground/80">Completion Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
