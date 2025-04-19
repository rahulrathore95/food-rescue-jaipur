"use client"

import { Heart, Utensils, Users, Calendar } from "lucide-react"

export function Impact() {
  return (
    <section id="impact" className="container section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4">Our Impact</h2>
        <p className="paragraph max-w-2xl mx-auto">
          Through the support of our community and volunteers, we've made a significant impact in reducing food waste and hunger in Jaipur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ImpactCard
          icon={<Utensils className="w-8 h-8 text-primary" />}
          title="50,000+"
          description="Meals Served"
        />
        <ImpactCard
          icon={<Heart className="w-8 h-8 text-primary" />}
          title="2,500 kg"
          description="Food Saved"
        />
        <ImpactCard
          icon={<Calendar className="w-8 h-8 text-primary" />}
          title="200+"
          description="Events Covered"
        />
        <ImpactCard
          icon={<Users className="w-8 h-8 text-primary" />}
          title="100+"
          description="Active Volunteers"
        />
      </div>
    </section>
  )
}

function ImpactCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-8 hover:shadow-lg transition-all">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 p-3">
          {icon}
        </div>
        <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
} 