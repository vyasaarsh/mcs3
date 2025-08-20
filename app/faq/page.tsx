import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FAQPage() {
  const allFaqs = [
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
      question: "Why should I use MCS instead of traditional methods like jute bags or water sprinkling?",
      answer:
        "MCS saves up to 90% water, prevents cracks and shrinkage, is reusable up to 10 times, reduces site labor and cost, and is cleaner and more efficient than jute bags or polythene sheets.",
    },
    {
      question: "How many times can MCS be reused?",
      answer: "Depending on handling, MCS can be reused for 1–10 curing cycles.",
    },
    {
      question: "Is MCS suitable for Indian climate conditions?",
      answer:
        "Yes. It is specially designed for India's hot, dry, and windy climate where conventional curing often fails.",
    },
    {
      question: "Do I still need to water the concrete daily?",
      answer: "No. Just water once before applying the sheet. MCS retains moisture for 7–10 days.",
    },
    {
      question: "What types of construction projects can use MCS?",
      answer:
        "MCS can be used for beams and columns, slabs and foundations, pavements and industrial flooring, and any concrete structure requiring durable curing.",
    },
    {
      question: "How is MCS applied?",
      answer:
        "Water the concrete surface once, place MCS over it, seal edges with tape/stretch film, and leave covered for 7–10 days.",
    },
    {
      question: "Is MCS environmentally friendly?",
      answer: "Yes. It reduces water usage, minimizes single-use waste, and is recyclable.",
    },
    {
      question: "Does MCS require skilled labor for application?",
      answer:
        "No. It is lightweight, easy to wrap, and can be applied by regular site workers without special training.",
    },
    {
      question: "How does MCS save costs?",
      answer:
        "MCS reduces water and labor costs, is reusable across multiple sites, and prevents repair costs caused by cracks and weak curing.",
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
              <Badge className="mb-4">Knowledge Base</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about MCS technology and concrete curing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {allFaqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-left text-lg text-primary">
                      {index + 1}. {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
