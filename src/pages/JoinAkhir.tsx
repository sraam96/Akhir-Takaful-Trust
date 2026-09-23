import { ArrowRight, Check, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

import { careerContent } from "@/content/career"

import { contactLinks } from "@/lib/contactLinks"

import joinAkhirImage from "@/assets/joinakhir.jpeg"

export default function JoinAkhir() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            {careerContent.hero.eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-6xl">
            {careerContent.hero.heading}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {careerContent.hero.body}
          </p>
        </div>
      </section>

      {/* Editorial image */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={joinAkhirImage}
              alt="A young Malaysian professional walking through a modern business district"
              className="h-[320px] w-full object-cover md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {careerContent.opportunity.eyebrow}
              </p>

              <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
                {careerContent.opportunity.heading}
              </h2>
            </div>

            <div className="space-y-5">
              {careerContent.opportunity.paragraphs.map((paragraph) => (
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

      {/* Qualities */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 space-y-12">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              {careerContent.qualities.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
              {careerContent.qualities.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careerContent.qualities.items.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-3xl p-7 space-y-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-6 h-6" />
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

      {/* What you get */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {careerContent.whatYouGet.eyebrow}
              </p>

              <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
                {careerContent.whatYouGet.heading}
              </h2>
            </div>

            <div className="border-t border-border">
              {careerContent.whatYouGet.items.map((item) => (
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

      {/* Reality */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            {careerContent.reality.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
            {careerContent.reality.heading}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {careerContent.reality.body}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-7">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/70">
            {careerContent.cta.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
            {careerContent.cta.heading}
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {careerContent.cta.body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2 px-8"
            >
              <a href={contactLinks.whatsapp}>
                {careerContent.cta.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 bg-brand-ivory"
            >
              <a href={contactLinks.whatsapp}>
                <MessageCircle className="w-5 h-5" />
                {careerContent.cta.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}