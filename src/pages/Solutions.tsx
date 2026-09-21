import { HeartPulse, Users, Shield, Target, ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { solutionsContent } from "@/content/solutions"

import { contactLinks } from "@/lib/contactLinks"
const icons = [HeartPulse, Users, Shield, Target]

export default function Solutions() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            {solutionsContent.hero.eyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-balance">
            {solutionsContent.hero.heading}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {solutionsContent.hero.body}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20 space-y-12">
        {solutionsContent.cards.map((card, index) => {
          const Icon = icons[index]

          return (
            <SolutionCard
              key={card.number}
              href={card.link}
              icon={<Icon className="w-8 h-8" />}
              title={card.title}
              description={card.description}
              points={card.points}
              heading={card.heading}
            />
          )
        })}
      </div>

      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/70">
            {solutionsContent.cta.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-serif">
            {solutionsContent.cta.heading}
          </h2>

          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {solutionsContent.cta.body}
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full mt-4"
          >
            <a href={contactLinks.calendly}>
              {solutionsContent.cta.primaryCta}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

function SolutionCard({
  href,
  icon,
  title,
  heading,
  description,
  points,
}: {
  href: string
  icon: React.ReactNode
  title: string
  heading: string
  description: string
  points: readonly string[]
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white border border-border p-8 rounded-3xl transition-shadow hover:shadow-lg">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
          {title}
        </p>

        <h2 className="text-2xl font-serif font-medium">
          {heading}
        </h2>

        <p className="text-muted-foreground leading-relaxed text-lg">
          {description}
        </p>

        <ul className="space-y-2 pt-2">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm font-medium text-foreground/80"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-48 flex items-center md:justify-end mt-4 md:mt-0 border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 md:pl-8">
        <Button
          asChild
          variant="ghost"
          className="group w-full md:w-auto justify-between md:justify-center text-primary hover:text-primary"
        >
          <Link href={href}>
            Learn more
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}