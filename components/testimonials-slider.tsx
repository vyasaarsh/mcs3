"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Construction Ltd.",
    role: "Project Manager",
    content:
      "MCS has revolutionized our concrete curing process. We've seen a 40% reduction in cracks and saved thousands of liters of water on our last project.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Sharma Builders",
    role: "Site Engineer",
    content:
      "The ease of application and reusability of MCS sheets has significantly reduced our labor costs. Highly recommended for any construction project.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Patel Infrastructure",
    role: "Managing Director",
    content:
      "We've been using MCS for 6 months now. The concrete strength improvement is remarkable, and our clients are extremely satisfied with the quality.",
    rating: 5,
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg text-muted-foreground mb-6 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author Info */}
            <div>
              <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              <div className="text-sm text-primary font-medium">{testimonials[currentIndex].company}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-transparent"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-transparent"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
