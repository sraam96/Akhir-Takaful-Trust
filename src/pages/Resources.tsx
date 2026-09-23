import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  HelpCircle,
  Shield,
  Stethoscope,
} from "lucide-react"
import { contactLinks } from "@/lib/contactLinks"
import { Button } from "@/components/ui/button"
import { resourcesContent } from "@/content/resources"

const topicIcons = [
  Shield,
  Stethoscope,
  HeartPulse,
  HeartPulse,
  Shield,
  HelpCircle,
]

export default function Resources() {
  const { hero, featured, topics, disclaimer, cta } = resourcesContent

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

      {/* Featured */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {featured.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {featured.heading}
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {featured.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.articles.map((article) => (
              <a
                key={article.title}
                href={article.link}
                className="group rounded-3xl border border-border bg-background p-7 transition-colors hover:bg-secondary/40 md:p-8"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                  <BookOpen className="h-5 w-5" />
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  {article.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight">
                  {article.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-border/50 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {topics.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {topics.heading}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.items.map((item, index) => {
              const Icon = topicIcons[index]

              return (
                <a
                  key={item.title}
                  href={item.link}
                  className="group rounded-3xl border border-border bg-background p-7 transition-colors hover:bg-secondary/60"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {disclaimer.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
            {disclaimer.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            {disclaimer.body}
          </p>
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
              <a href="/solutions">
                {cta.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}