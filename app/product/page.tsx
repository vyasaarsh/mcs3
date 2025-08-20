import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Layers, Shield, Recycle, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "6-Layer Engineering",
      description: "Advanced co-extruded structure for optimal moisture retention",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Weather Resistant",
      description: "Built for India's harsh climate conditions",
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Reusable Design",
      description: "Can be reused for 1-10 curing cycles",
    },
  ]

  const benefits = [
    "Saves up to 90% water compared to traditional methods",
    "Prevents cracks, shrinkage, and dust exposure",
    "Reduces site labor and maintenance costs",
    "Lightweight and easy to handle",
    "No daily watering required",
    "Environmentally friendly and recyclable",
    "Suitable for all concrete structures",
    "No skilled labor required for application",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <PageHero
          title="MCS - Moisture Capsulation Sheet"
          subtitle="India's first engineered sheet designed specifically for concrete curing in high-temperature environments"
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">India's First Innovation</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Advanced 6-Layer Co-Extruded Structure
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Built with an advanced 6-layer co-extruded structure for superior performance in India's challenging
                  climate conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://www.mcssystemsindia.com/images/broucherMCS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img src="/mcs-moisture-capsulation-sheet.png" alt="MCS Product" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Product Features</h2>
              <p className="text-xl text-muted-foreground">Engineered for excellence in concrete curing</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose MCS?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technical Specifications</h2>
              <p className="text-xl text-muted-foreground">Engineered for optimal performance in Indian conditions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Structure</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">6-Layer</p>
                  <p className="text-muted-foreground">Co-extruded engineering</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Reusability</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">1-10 Times</p>
                  <p className="text-muted-foreground">Depending on handling</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Water Savings</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">Up to 90%</p>
                  <p className="text-muted-foreground">Compared to traditional</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Curing Period</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">7-10 Days</p>
                  <p className="text-muted-foreground">One-time application</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6-Layer Structure Details */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">6-Layer Advanced Structure</h2>
              <p className="text-xl text-muted-foreground">
                Each layer serves a specific purpose in delivering superior concrete curing performance
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/mcs-6-layer-structure.png"
                  alt="MCS 6-Layer Technical Structure"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Layer Composition & Benefits</h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
                        <h4 className="font-semibold">Polymeric Film with UV Resistance</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Top protective layer shields against UV damage and environmental exposure
                      </p>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                        <h4 className="font-semibold">Reinforced HDPE Sack Material</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        High-density polyethylene provides structural integrity and tear resistance
                      </p>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"></div>
                        <h4 className="font-semibold">Crosslink Adhesive Coating</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Advanced bonding technology ensures layer adhesion and moisture seal
                      </p>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
                        <h4 className="font-semibold">Expanded Polymer Foam</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Insulation layer maintains consistent temperature and moisture levels
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore MCS Applications</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how MCS can be used across different construction projects
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/application" className="inline-flex items-center">
                View Applications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
