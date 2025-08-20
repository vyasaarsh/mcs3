import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Home, Factory, RouteIcon as Road, Play } from "lucide-react"

export default function ApplicationPage() {
  const steps = [
    {
      number: "01",
      title: "Water the Concrete Surface",
      description:
        "Apply water to the freshly laid concrete surface once. Ensure even coverage across the entire area.",
    },
    {
      number: "02",
      title: "Place MCS Sheet",
      description: "Carefully place the MCS sheet over the watered concrete surface, ensuring complete coverage.",
    },
    {
      number: "03",
      title: "Seal the Edges",
      description: "Use tapes, stretch film, or wrapping rolls to seal all edges and lock in moisture completely.",
    },
    {
      number: "04",
      title: "Leave for 7-10 Days",
      description: "Let the MCS sheet work its magic. No daily watering needed - just wait for optimal curing.",
    },
  ]

  const applications = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Beams and Columns",
      description: "Perfect for vertical and horizontal structural elements",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Slabs and Foundations",
      description: "Ideal for large flat surfaces and foundation work",
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Industrial Flooring",
      description: "Excellent for warehouse and factory floor curing",
    },
    {
      icon: <Road className="h-8 w-8" />,
      title: "Pavements",
      description: "Suitable for road construction and pavement curing",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <PageHero
          title="How to Apply MCS"
          subtitle="Easy 4-step process that anyone can follow. No skilled labor required."
        />

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Watch MCS in Action</h2>
              <p className="text-xl text-muted-foreground">See how easy it is to apply MCS for concrete curing</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full mb-6">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">MCS Application Demo Video</h3>
                <p className="text-muted-foreground mb-6">
                  Watch our comprehensive video guide showing the complete MCS application process from start to finish.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Application Process</h2>
              <p className="text-xl text-muted-foreground">Follow these simple steps for optimal concrete curing</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-6 animate-pulse">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary animate-bounce" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Suitable Applications</h2>
              <p className="text-xl text-muted-foreground">
                MCS can be used for any concrete structure requiring durable curing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {app.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Concrete Curing?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with MCS today and experience the difference</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a
                  href="https://www.mcssystemsindia.com/images/broucherMCS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Application Guide
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
