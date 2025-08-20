import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollToTop } from "@/components/scroll-to-top"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "MCS - Moisture Capsulation Sheet | Advanced Concrete Curing Technology",
  description:
    "India's first 6-layer engineered sheet for concrete curing. Save 90% water, prevent cracks, and ensure stronger concrete with MCS technology.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <WhatsAppFloat />
          <ThemeToggle />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
