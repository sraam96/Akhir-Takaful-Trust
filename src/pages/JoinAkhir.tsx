import {
  ArrowRight,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { contactLinks } from "@/lib/contactLinks"
import { Button } from "@/components/ui/button"
import { careerContent } from "@/content/career"

const qualityIcons = [Heart, Sparkles, ShieldCheck, Users]

export default function JoinAkhir() {
  const { hero, opportunity, qualities, whatYouGet, reality, cta } =
    careerContent

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

      {/* Opportunity */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {opportunity.eyebrow}
              </p>

              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                {opportunity.heading}
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {opportunity.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="border-y border-border/50 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {qualities.eyebrow}
            </p>

            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {qualities.heading}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {qualities.items.map((item, index) => {
              const Icon = qualityIcons[index]

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-background p-7 md:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {whatYouGet.eyebrow}
            </p>

            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {whatYouGet.heading}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whatYouGet.items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border p-7"
              >
                <span className="font-serif text-3xl text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-7 font-serif text-xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reality */}
      <section className="border-y border-border/50 bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {reality.eyebrow}
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
            {reality.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {reality.body}
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
                <ArrowRight className="ml-2 h-4 w-4" />
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
        </div>
      </section>
    </main>
  )
}