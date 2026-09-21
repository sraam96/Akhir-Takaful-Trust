import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
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
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-border bg-background p-7 md:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-4xl text-muted-foreground/40">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    {step.number === "06" ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <ArrowRight className="h-5 w-5" />
                    )}
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-medium tracking-tight">
                  {step.title}
                </h2>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="border-y border-border/50 bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-background">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {note.eyebrow}
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
            {note.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {note.body}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            {cta.eyebrow}
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-5xl">
            {cta.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            {cta.body}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
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
              className="rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={contactLinks.whatsapp}>
                <MessageCircle className="mr-2 h-4 w-4" />
                {cta.secondaryCta}
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/50">
            Explore our protection solutions below.
          </p>
        </div>
      </section>
    </main>
  )
}