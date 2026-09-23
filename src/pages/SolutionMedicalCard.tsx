import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { medicalCardContent } from "@/content/medicalCard"
import { contactLinks } from "@/lib/contactLinks"
import medCardImage from "@/assets/medcard.jpeg"

export default function SolutionMedicalCard() {
  return (
    <div className="animate-in fade-in duration-700">

      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            {medicalCardContent.hero.eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-6xl">
            {medicalCardContent.hero.heading}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {medicalCardContent.hero.body}
          </p>
        </div>
      </section>

      {/* Editorial image */}
      <section className="pt-10 pb-6 md:pt-14 md:pb-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={medCardImage}
              alt="A calm family moment representing the importance of medical protection"
              className="h-[320px] w-full object-cover md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {medicalCardContent.problem.eyebrow}
              </p>

              <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
                {medicalCardContent.problem.heading}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {medicalCardContent.problem.body}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 space-y-12">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              {medicalCardContent.benefits.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
              {medicalCardContent.benefits.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {medicalCardContent.benefits.items.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-3xl p-7 space-y-5"
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

      {/* Considerations */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                {medicalCardContent.considerations.eyebrow}
              </p>

              <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
                {medicalCardContent.considerations.heading}
              </h2>
            </div>

            <div className="border-t border-border">
              {medicalCardContent.considerations.items.map((item) => (
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
              {medicalCardContent.misconceptions.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
              {medicalCardContent.misconceptions.heading}
            </h2>
          </div>

          <div className="border-t border-border/70">
            {medicalCardContent.misconceptions.items.map((item, index) => (
              <div
                key={item.question}
                className="grid gap-4 border-b border-border/70 py-8 md:grid-cols-[80px_1fr] md:gap-10 md:py-10"
              >
                <p className="font-serif text-2xl text-brand-oxblood/60">
                  0{index + 1}
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-medium">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-7">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/70">
            {medicalCardContent.cta.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl">
            {medicalCardContent.cta.heading}
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {medicalCardContent.cta.body}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2 px-8"
            >
              <a href={contactLinks.calendly}>
                {medicalCardContent.cta.primaryCta}
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
                {medicalCardContent.cta.secondaryCta}
              </a>
            </Button>
          </div>

          <div className="pt-4">
            <Link
              href="/solutions"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              ← Back to all solutions
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
