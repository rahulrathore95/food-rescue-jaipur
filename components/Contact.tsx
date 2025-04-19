"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
      setLoading(false)
    }, 1000)
  }

  return (
    <section id="contact" className="container section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">Contact Us</h2>
        <p className="paragraph max-w-2xl mx-auto">
          Have questions or want to get involved? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">contact@foodrescuejaipur.org</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                123 NGO Street, Civil Lines<br />
                Jaipur, Rajasthan 302006
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
              className="bg-background"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              required
              className="min-h-[150px] bg-background"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
} 