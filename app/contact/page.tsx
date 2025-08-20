"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PresentationDrawer } from "@/components/presentation-drawer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Building } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - send to email
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Message: ${formData.message}
    `
    window.location.href = `mailto:info.mcssystems@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your concrete curing process? Get in touch with our experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us an Inquiry</CardTitle>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Call Us Now</p>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-muted-foreground">info.mcssystems@gmail.com</p>
                        <p className="text-muted-foreground">sale.mcssystems@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Website</p>
                        <p className="text-muted-foreground">www.mcssystemsindia.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-800 mb-2">Product Presentation</h3>
                        <p className="text-blue-700 text-sm mb-4">View and download our detailed product brochure</p>
                        <PresentationDrawer />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground">Come see our manufacturing facility and meet our team</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959552716!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MCS Office Location"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                <MapPin className="h-4 w-4 inline mr-1" />
                Exact location details will be shared upon contact
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
