"use client"

import { Button } from "@/components/ui/button"

export function Donate() {
  const handleDonate = () => {
    alert("Thank you for your interest in donating! This feature will be implemented soon.")
  }

  return (
    <section id="donate" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-gray-600 mb-8">
            Your contribution helps us rescue more food and feed more people in need.
            Every donation makes a difference in reducing food waste and hunger in Jaipur.
          </p>
          <div className="space-y-4">
            <Button
              onClick={handleDonate}
              className="w-full md:w-auto px-8 py-3"
            >
              Donate Now
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            For large donations or corporate partnerships,
            please contact us directly through our contact form.
          </p>
        </div>
      </div>
    </section>
  )
} 