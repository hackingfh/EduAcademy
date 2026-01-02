import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-primary">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                EA
              </div>
              EduAcademy
            </div>
            <p className="text-sm text-muted-foreground">Empowering learners worldwide with quality education.</p>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Company</h4>
            <nav className="space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">
                Careers
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </Link>
            </nav>
          </div>

          {/* Learn */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Learn</h4>
            <nav className="space-y-2">
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">
                Courses
              </Link>
              <Link href="/instructors" className="text-sm text-muted-foreground hover:text-primary">
                Instructors
              </Link>
              <Link href="/paths" className="text-sm text-muted-foreground hover:text-primary">
                Learning Paths
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Support</h4>
            <nav className="space-y-2">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 EduAcademy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
