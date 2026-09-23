import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { contactLinks } from "@/lib/contactLinks"
import { Button } from "@/components/ui/button"
import { howItWorksContent } from "@/content/howItWorks"

export default function HowItWorks() {
  const { hero, steps, note, cta } = howItWorksContent

  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {hero.eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-medium tracking-tight md:text-6xl">
            {hero.heading}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.body}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="border-t border-border/70">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 border-b border-border/70 py-8 md:grid-cols-[100px_1fr] md:gap-10 md:py-10"
              >
                <p className="font-serif text-3xl text-brand-oxblood/60 md:text-4xl">
                  {step.number}
                </p>

                <div className="max-w-3xl space-y-3">
                  <h2 className="font-serif text-2xl font-medium tracking-tight md:text-3xl">
                    {step.title}
                  </h2>

                  <p className="leading-relaxed text-muted-foreground md:text-lg">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="border-t border-border/70 pt-10 md:pt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {note.eyebrow}
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
              {note.heading}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {note.body}
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/70">
            {cta.eyebrow}
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-5xl">
            {cta.heading}
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {cta.body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7"
            >
              <a href={contactLinks.calendly}>
                {cta.primaryCta}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 bg-brand-ivory"
            >
              <a href={contactLinks.whatsapp}>
                <MessageCircle className="mr-2 h-4 w-4" />
                {cta.secondaryCta}
              </a>
            </Button>
          </div>

          <p className="pt-4 text-sm text-foreground/70">
            Explore our protection solutions below.
          </p>
        </div>
      </section>
    </main>
  )
}
