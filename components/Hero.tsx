import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-image.jpg"
          alt="Food Rescue Jaipur Hero"
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full brightness-[0.6]"
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center pt-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-[3.5rem] font-bold leading-[1.1] text-white mb-6">
              Turning Celebration Leftovers into Hope
            </h1>
            <p className="text-lg text-white/90 mb-8">
              We collect surplus wedding food and redistribute it within hours to those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white border-0 rounded-md px-8 py-6 text-base font-medium"
              >
                <Link href="#donate">Donate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 rounded-md px-8 py-6 text-base font-medium"
              >
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Purple Bar */}
      <div className="relative h-16 bg-[#6D28D9]">
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-white animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  )
} 