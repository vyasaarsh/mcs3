import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/mcs-logo.png"
              alt="MCS Logo"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              India's first 6-layer engineered sheet for advanced concrete curing. Stronger concrete, less water, better
              results.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-accent transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/application" className="hover:text-accent transition-colors">
                  Application
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-accent transition-colors">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/product" className="hover:text-accent transition-colors">
                  MCS Sheets
                </Link>
              </li>
              <li>
                <Link href="/application" className="hover:text-accent transition-colors">
                  Application Guide
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-accent transition-colors">
                  vs Traditional Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>info.mcssystems@gmail.com</p>
                  <p>sale.mcssystems@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>Call for immediate assistance</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 MCS Systems India. All rights reserved. | Floorguard Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
