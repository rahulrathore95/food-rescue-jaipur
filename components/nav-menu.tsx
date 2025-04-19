import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Our Impact" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
]

export function NavMenu() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold text-primary">
        Food Rescue Jaipur
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-1 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
} 