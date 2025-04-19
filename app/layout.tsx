import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Food Rescue Jaipur | Feed Not Waste",
  description: "NGO rescuing surplus wedding food in Jaipur & turning it into hot meals within hours.",
  keywords: ["food rescue", "jaipur", "ngo", "food waste", "charity", "donation"],
  authors: [{ name: "Food Rescue Jaipur" }],
  openGraph: {
    title: "Food Rescue Jaipur | Feed Not Waste",
    description: "NGO rescuing surplus wedding food in Jaipur & turning it into hot meals within hours.",
    type: "website",
    locale: "en_IN",
    siteName: "Food Rescue Jaipur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Rescue Jaipur | Feed Not Waste",
    description: "NGO rescuing surplus wedding food in Jaipur & turning it into hot meals within hours.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
} 