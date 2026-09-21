import { ArrowRight, Check, MessageCircle } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { aboutContent } from "@/content/about"

import { contactLinks } from "@/lib/contactLinks"
export default function About() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            {aboutContent.hero.eyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-balance">
            {aboutContent.hero.heading}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {aboutContent.hero.body}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {aboutContent.story.eyebrow}
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-balance">
                {aboutContent.story.heading}
              </h2>
            </div>

            <div className="space-y-6">
              {aboutContent.story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 space-y-12">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              {aboutContent.philosophy.eyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-balance">
              {aboutContent.philosophy.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-border">
            {aboutContent.philosophy.principles.map((principle, index) => (
              <div
                key={principle.title}
                className={
                  index === 0
                    ? "pt-8 md:pr-10 md:border-r border-border"
                    : index === 1
                      ? "pt-8 md:px-10 md:border-r border-border"
                      : "pt-8 md:pl-10"
                }
              >
                <span className="text-sm font-semibold tracking-[0.18em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl md:text-3xl font-serif leading-tight">
                  {principle.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {aboutContent.approach.eyebrow}
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-balance">
                {aboutContent.approach.heading}
              </h2>
            </div>

            <div className="border-t border-border">
              {aboutContent.approach.items.map((item) => (
                <div
                  key={item.number}
                  className="py-7 border-b border-border"
                >
                  <div className="flex gap-5">
                    <span className="text-sm font-semibold tracking-[0.18em] text-primary pt-1">
                      {item.number}
                    </span>

                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-medium">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white border border-border rounded-3xl p-8 md:p-12">
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>

              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                  {aboutContent.credentials.eyebrow}
                </p>

                <h2 className="text-3xl md:text-4xl font-serif text-balance">
                  {aboutContent.credentials.heading}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.credentials.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the desk */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {aboutContent.beyondDesk.eyebrow}
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-balance">
                {aboutContent.beyondDesk.heading}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.beyondDesk.body}
            </p>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-white">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
              {aboutContent.disclosure.eyebrow}
            </p>

            <h2 className="text-2xl font-serif mb-3">
              {aboutContent.disclosure.heading}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {aboutContent.disclosure.body}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-7">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/70">
            {aboutContent.cta.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-balance">
            {aboutContent.cta.heading}
          </h2>

          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {aboutContent.cta.body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full gap-2 px-8"
            >
              <a href={contactLinks.calendly}>
                {aboutContent.cta.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={contactLinks.whatsapp}>
                <MessageCircle className="w-5 h-5" />
                {aboutContent.cta.secondaryCta}
              </a>
            </Button>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}