import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, TrendingUp, Droplets, Users, Recycle, Shield, DollarSign } from "lucide-react"

export default function ComparisonPage() {
  const comparisonData = [
    {
      factor: "Water Usage",
      traditional: {
        icon: <Droplets className="h-5 w-5 text-red-500" />,
        text: "Requires continuous watering (thousands of liters)",
        status: "negative",
      },
      mcs: {
        icon: <Droplets className="h-5 w-5 text-green-500" />,
        text: "One-time watering, saves up to 90% water",
        status: "positive",
      },
    },
    {
      factor: "Moisture Retention",
      traditional: {
        icon: <XCircle className="h-5 w-5 text-red-500" />,
        text: "Uneven, dries out quickly, requires re-watering",
        status: "negative",
      },
      mcs: {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        text: "Even, consistent curing for 7–10 days",
        status: "positive",
      },
    },
    {
      factor: "Labor Requirement",
      traditional: {
        icon: <Users className="h-5 w-5 text-red-500" />,
        text: "High – frequent manual watering, monitoring",
        status: "negative",
      },
      mcs: {
        icon: <Users className="h-5 w-5 text-green-500" />,
        text: "Minimal – place, seal, and leave",
        status: "positive",
      },
    },
    {
      factor: "Reusability",
      traditional: {
        icon: <XCircle className="h-5 w-5 text-red-500" />,
        text: "Single-use, creates waste",
        status: "negative",
      },
      mcs: {
        icon: <Recycle className="h-5 w-5 text-green-500" />,
        text: "Reusable for multiple curing cycles",
        status: "positive",
      },
    },
    {
      factor: "Strength of Concrete",
      traditional: {
        icon: <XCircle className="h-5 w-5 text-red-500" />,
        text: "Risk of cracks, shrinkage, surface flaking",
        status: "negative",
      },
      mcs: {
        icon: <Shield className="h-5 w-5 text-green-500" />,
        text: "Prevents cracks, improves hydration & strength",
        status: "positive",
      },
    },
    {
      factor: "Environmental Impact",
      traditional: {
        icon: <XCircle className="h-5 w-5 text-red-500" />,
        text: "Wastes water, generates site debris",
        status: "negative",
      },
      mcs: {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        text: "Eco-friendly, reduces waste & water use",
        status: "positive",
      },
    },
    {
      factor: "Ease of Use",
      traditional: {
        icon: <XCircle className="h-5 w-5 text-red-500" />,
        text: "Messy, time-consuming",
        status: "negative",
      },
      mcs: {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        text: "Lightweight, easy to apply & remove",
        status: "positive",
      },
    },
    {
      factor: "Cost Efficiency",
      traditional: {
        icon: <DollarSign className="h-5 w-5 text-red-500" />,
        text: "Higher long-term costs (labor, water, repairs)",
        status: "negative",
      },
      mcs: {
        icon: <DollarSign className="h-5 w-5 text-green-500" />,
        text: "Saves cost in labor, water, and maintenance",
        status: "positive",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4">Side by Side Analysis</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">MCS vs Traditional Methods</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how MCS outperforms traditional concrete curing methods across all key factors
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Header */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-muted-foreground">Comparison Factor</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-red-700">Traditional Methods</h3>
                      <p className="text-sm text-red-600 mt-1">Gunny Bags, Watering, Polythene Sheets</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-green-700">MCS Solution</h3>
                      <p className="text-sm text-green-600 mt-1">Moisture Capsulation Sheet</p>
                    </div>
                  </div>
                </div>

                {/* Comparison Rows */}
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-3 gap-0">
                          {/* Factor */}
                          <div className="p-6 bg-muted/30 flex items-center justify-center border-r">
                            <h4 className="font-semibold text-foreground text-center">{item.factor}</h4>
                          </div>

                          {/* Traditional */}
                          <div className="p-6 border-r bg-red-50/50">
                            <div className="flex items-start space-x-3">
                              {item.traditional.icon}
                              <p className="text-sm text-muted-foreground">{item.traditional.text}</p>
                            </div>
                          </div>

                          {/* MCS */}
                          <div className="p-6 bg-green-50/50">
                            <div className="flex items-start space-x-3">
                              {item.mcs.icon}
                              <p className="text-sm text-muted-foreground">{item.mcs.text}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why MCS Wins</h2>
              <p className="text-xl text-muted-foreground">Clear advantages that make the difference</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">90%</h3>
                  <p className="text-muted-foreground">Water Savings</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Recycle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">1-10x</h3>
                  <p className="text-muted-foreground">Reusable</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">75%</h3>
                  <p className="text-muted-foreground">Less Labor</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Zero</h3>
                  <p className="text-muted-foreground">Cracks</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of contractors who have already upgraded to MCS
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Get Free Sample
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  >
                    Calculate Savings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
