import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { PresentationDrawer } from "@/components/presentation-drawer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Shield, Recycle, Clock, CheckCircle, ArrowRight, Play, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const benefits = [
    {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: "90% Water Savings",
      description: "Dramatically reduce water usage compared to traditional curing methods",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Crack Prevention",
      description: "Prevents surface cracks and shrinkage for stronger concrete",
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: "Reusable Design",
      description: "Use the same sheet for 1-10 curing cycles, reducing waste",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "7-10 Day Curing",
      description: "Complete curing with just one-time watering application",
    },
  ]

  const faqs = [
    {
      question: "What is a Moisture Capsulation Sheet (MCS)?",
      answer:
        "MCS is India's first 6-layer engineered sheet designed for concrete curing. It locks in moisture, prevents cracks, and ensures consistent hydration—making concrete stronger, faster, and more durable.",
    },
    {
      question: "How does MCS work?",
      answer:
        "You place MCS on freshly watered concrete and seal the edges with tape or stretch film. The sheet traps the moisture, curing the concrete evenly for 7–10 days without the need for daily watering.",
    },
    {
      question: "Why should I use MCS instead of traditional methods?",
      answer:
        "MCS saves up to 90% water, prevents cracks and shrinkage, is reusable up to 10 times, reduces site labor and cost, and is cleaner and more efficient than jute bags or polythene sheets.",
    },
    {
      question: "Is MCS suitable for Indian climate conditions?",
      answer:
        "Yes. It is specially designed for India's hot, dry, and windy climate where conventional curing often fails.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  India's First 6-Layer Engineered Sheet
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Revolutionary
                  <span className="text-primary block">Concrete Curing</span>
                  Technology
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Save 90% water, prevent cracks, and ensure stronger concrete with MCS - the moisture capsulation sheet
                  that transforms how India builds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Get Quote</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </Button>
                <PresentationDrawer />
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Reusable up to 10 times</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>No daily watering needed</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/concrete-curing-mcs.png"
                  alt="MCS Application Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm">Water Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose MCS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of concrete curing with our innovative 6-layer technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See MCS in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how our revolutionary moisture capsulation technology transforms concrete curing
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/ou7d34sTg4I"
                title="MCS Moisture Capsulation Sheet Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Discover how MCS delivers superior concrete curing with minimal effort and maximum efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Problem with Traditional Curing
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Requires continuous watering (thousands of liters)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Uneven moisture retention leads to cracks and weak spots</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>High labor requirements for repetitive work</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p>Single-use materials create waste and recurring costs</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The MCS Solution</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>One-time watering saves up to 90% water usage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Even, consistent curing for 7–10 days</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Minimal labor - place, seal, and leave</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Reusable for multiple curing cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Engineering Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced 6-Layer Engineering</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each layer is precisely engineered to deliver superior moisture retention and concrete protection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-primary">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Polymeric Film with UV Resistance</h3>
                      <p className="text-muted-foreground text-sm">
                        Protects against harmful UV rays and environmental damage
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-primary">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Reinforced HDPE Sack Material</h3>
                      <p className="text-muted-foreground text-sm">Provides structural strength and durability</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-primary">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Crosslink Adhesive Coating</h3>
                      <p className="text-muted-foreground text-sm">Ensures perfect layer bonding and integrity</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild>
                    <Link href="/product" className="flex items-center space-x-2">
                      <span>Learn More About Our Technology</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/mcs-6-layer-structure.png"
                  alt="MCS 6-Layer Structure Diagram"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
                  <div className="text-lg font-bold">6 Layers</div>
                  <div className="text-xs">Advanced Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by construction professionals across India</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about MCS technology</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Concrete Curing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of construction professionals who trust MCS for stronger, more efficient concrete curing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Your Quote Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
