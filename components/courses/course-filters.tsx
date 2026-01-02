"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

interface CourseFiltersProps {
  onCategoryChange: (category: string) => void
  onLevelChange: (level: string) => void
}

const categories = [
  "Web Development",
  "Data Science",
  "Mobile Dev",
  "Design",
  "Marketing",
  "Programming",
  "Cloud",
  "Technology",
  "Media",
]

const levels = ["Beginner", "Intermediate", "Advanced"]

export default function CourseFilters({ onCategoryChange, onLevelChange }: CourseFiltersProps) {
  const [openCategory, setOpenCategory] = useState(true)
  const [openLevel, setOpenLevel] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? "" : category
    setSelectedCategory(newCategory)
    onCategoryChange(newCategory)
  }

  const handleLevelChange = (level: string) => {
    const newLevel = selectedLevel === level ? "" : level
    setSelectedLevel(newLevel)
    onLevelChange(newLevel)
  }

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <Card className="p-0 overflow-hidden">
        <button
          onClick={() => setOpenCategory(!openCategory)}
          className="w-full px-4 py-3 flex items-center justify-between font-semibold text-foreground bg-secondary/30 hover:bg-secondary/50 transition-colors border-b border-border"
        >
          <span>Category</span>
          <ChevronDown size={18} className={`transition-transform ${openCategory ? "" : "-rotate-90"}`} />
        </button>

        {openCategory && (
          <div className="p-4 space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </Card>

      {/* Level Filter */}
      <Card className="p-0 overflow-hidden">
        <button
          onClick={() => setOpenLevel(!openLevel)}
          className="w-full px-4 py-3 flex items-center justify-between font-semibold text-foreground bg-secondary/30 hover:bg-secondary/50 transition-colors border-b border-border"
        >
          <span>Level</span>
          <ChevronDown size={18} className={`transition-transform ${openLevel ? "" : "-rotate-90"}`} />
        </button>

        {openLevel && (
          <div className="p-4 space-y-2">
            {levels.map((level) => (
              <label key={level} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedLevel === level}
                  onChange={() => handleLevelChange(level)}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {level}
                </span>
              </label>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
