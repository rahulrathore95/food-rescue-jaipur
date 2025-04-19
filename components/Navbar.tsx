import Link from "next/link"
import { Menu, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#impact", label: "Impact" },
  { href: "#credibility", label: "Credibility" },
  { href: "#donate", label: "Donate" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#22C55E] text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Food Rescue Jaipur Logo"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-lg font-medium">Food Rescue Jaipur</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Download Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex text-white border-white/20 hover:bg-white/10"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black/95">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit text-white border-white/20 hover:bg-white/10"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
} 