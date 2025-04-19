import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/foodrescuejaipur",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/foodrescuejaipur",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/foodrescuejaipur",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:contact@foodrescuejaipur.org",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Food Rescue Jaipur</h3>
            <p className="text-gray-400">
              Rescuing surplus wedding food and turning it into hope for the
              needy in Jaipur.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-gray-400 hover:text-white">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="#donate" className="text-gray-400 hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Food Rescue Jaipur. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 