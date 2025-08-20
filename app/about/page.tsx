import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <PageHero
          title="About MCS"
          subtitle="Transforming concrete curing in India with innovative & sustainable technology"
        />

        {/* About MCS Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                <span className="text-foreground">Our </span>
                <span className="text-primary font-bold">MCS</span>
                <span className="text-foreground"> Story</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  At MCS, we are transforming the way concrete is cured in India. Traditional curing methods like jute
                  bags and constant watering are wasteful, labor-intensive, and often leave concrete weak and cracked.
                  That's why we created India's first multi-layer <strong>Moisture Capsulation Sheet (MCS)</strong> —a
                  reusable, engineered solution that locks in moisture and ensures consistent hydration for 7–10 days
                  with just one-time watering.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Built for India's challenging climate, MCS delivers stronger, crack-free concrete while saving water,
                  reducing costs, and cutting down site labor. With innovation and sustainability at our core, MCS is
                  here to make construction smarter, faster, and greener.
                </p>

                <div className="flex justify-center">
                  <Button asChild className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                    <Link href="/contact" className="flex items-center space-x-2">
                      <span>Contact Us</span>
                      <ArrowRight className="h-5 w-5 transform transition-transform group-hover:rotate-0 rotate-45" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to revolutionize concrete curing by providing innovative, eco-friendly, and
                    cost-effective solutions that strengthen infrastructure while conserving precious resources. We aim
                    to empower builders, contractors, and developers with advanced curing technology that simplifies
                    their work, reduces dependency on outdated practices, and ensures long-lasting durability in every
                    project.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our vision is to establish MCS as the trusted standard for concrete curing across India and global
                    markets. We aspire to lead the construction industry toward a future where curing is no longer seen
                    as a burden, but as an efficient, sustainable, and reliable process. By setting new benchmarks in
                    performance, sustainability, and ease of use, we envision MCS driving stronger foundations for
                    tomorrow's world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A legacy built on over Five Decades of expertise in the plastics industry
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  At the heart of Floorguard Pvt. Ltd. and MCS is a legacy built on over five decades of expertise in
                  the plastics industry. Our founder, <strong>Mr. Niraj Shah</strong> with 35 years of hands-on
                  experience, has been shaping innovative plastic sheet solutions for construction and industrial use
                  long before MCS was born. His vision and leadership continue to drive our commitment to engineering
                  smarter, more sustainable materials for modern infrastructure.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Miss Saumya Shah</strong> represents the next generation of leadership at Floorguard Pvt. Ltd.
                  and MCS. Having recently completed her studies in the United States, she now leads as Head of
                  Marketing Operations, bringing fresh global insights and a forward-looking vision to the brand.
                </p>

                <p className="text-lg leading-relaxed">
                  With multiple factories and a state-of-the-art manufacturing house, our team combines deep industry
                  knowledge with advanced technology to deliver high-performance solutions at scale. From concept to
                  execution, we bring together engineers, material scientists, and on-ground experts who understand the
                  unique challenges of construction in India.
                </p>

                <p className="text-lg leading-relaxed">
                  At MCS, we're not just a team—we're a family of innovators dedicated to making construction stronger,
                  greener, and more efficient for the generations ahead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
