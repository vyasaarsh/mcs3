"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, X, FileText } from "lucide-react"

export function PresentationDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    window.open("/mcs-presentation.pdf", "_blank")
  }

  return (
    <>
      {/* Trigger Button */}
      <Button onClick={() => setIsOpen(true)} variant="outline" className="flex items-center space-x-2">
        <FileText className="h-4 w-4" />
        <span>View Presentation</span>
      </Button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Drawer */}
          <div className="relative bg-background border rounded-lg shadow-2xl max-w-md w-full mx-4 animate-in slide-in-from-bottom-4 duration-300">
            <Card className="border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-xl">MCS Presentation</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Complete Product Overview</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Download our comprehensive presentation covering MCS technology, applications, and benefits.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button onClick={handleDownload} className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" onClick={() => setIsOpen(false)} className="w-full">
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
