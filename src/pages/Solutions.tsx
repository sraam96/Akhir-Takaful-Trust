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

          <h1 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-6xl">
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

      <div className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/70">
            {solutionsContent.cta.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-serif">
            {solutionsContent.cta.heading}
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {solutionsContent.cta.body}
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full gap-2 px-8"
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
    <div className="group grid gap-8 border-t border-border py-10 md:grid-cols-[56px_1fr_auto] md:items-center md:gap-10 md:py-14">
      <div className="font-serif text-3xl text-brand-oxblood/60 md:text-4xl">
        {title === "Medical Card" && "01"}
        {title === "Hibah & Family Protection" && "02"}
        {title === "Critical Illness" && "03"}
        {title === "Protection Planning Review" && "04"}
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-oxblood">
          {title}
        </p>

        <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
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

      <div className="flex items-center md:justify-end">
        <Button
          asChild
          variant="ghost"
          className="group w-full justify-between md:w-auto md:justify-center text-brand-oxblood hover:text-brand-oxblood"
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