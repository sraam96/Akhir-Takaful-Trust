import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { hibahContent } from "@/content/hibah"

import { contactLinks } from "@/lib/contactLinks"
export default function SolutionHibah() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            {hibahContent.hero.eyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-balance">
            {hibahContent.hero.heading}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {hibahContent.hero.body}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {hibahContent.problem.eyebrow}
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-balance">
                {hibahContent.problem.heading}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {hibahContent.problem.body}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 space-y-12">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              {hibahContent.benefits.eyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-balance">
              {hibahContent.benefits.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hibahContent.benefits.items.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-border rounded-3xl p-7 space-y-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-serif font-medium">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {hibahContent.planning.eyebrow}
              </p>

              <h2 className="text-3xl md:text-4xl font-serif text-balance">
                {hibahContent.planning.heading}
              </h2>
            </div>

            <div className="border-t border-border">
              {hibahContent.planning.items.map((item) => (
                <div
                  key={item.title}
                  className="py-7 border-b border-border"
                >
                  <div className="flex gap-5">
                    <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>

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

      {/* Misconceptions */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 space-y-12">
          <div className="text-center space-y-5">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              {hibahContent.misconceptions.eyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-balance">
              {hibahContent.misconceptions.heading}
            </h2>
          </div>

          <div className="space-y-4">
            {hibahContent.misconceptions.items.map((item) => (
              <div
                key={item.question}
                className="bg-white border border-border rounded-2xl p-6 md:p-7"
              >
                <h3 className="text-lg font-serif font-medium mb-3">
                  {item.question}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-7">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/70">
            {hibahContent.cta.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-balance">
            {hibahContent.cta.heading}
          </h2>

          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {hibahContent.cta.body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full gap-2 px-8"
            >
              <a href={contactLinks.calendly}>
                {hibahContent.cta.primaryCta}
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
                {hibahContent.cta.secondaryCta}
              </a>
            </Button>
          </div>

          <div className="pt-4">
            <Link
              href="/solutions"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              ← Back to all solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}