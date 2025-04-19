import { Award, Heart, Shield, Users } from "lucide-react"

const badges = [
  {
    icon: Award,
    title: "Certified NGO",
    description: "Registered under the Societies Registration Act, 1860",
  },
  {
    icon: Heart,
    title: "100% Non-Profit",
    description: "Every rupee goes directly to feeding the needy",
  },
  {
    icon: Shield,
    title: "Transparent Operations",
    description: "Regular impact reports and financial disclosures",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Powered by 100+ dedicated volunteers",
  },
]

export function Credibility() {
  return (
    <section id="certs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Trust Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 