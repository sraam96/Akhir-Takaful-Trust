import { Shield, Users, HeartPulse, Target, ArrowRight, MessageCircle } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ImagePlaceholder"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useSiteConfig } from "@/lib/useSiteConfig"
import { homeContent } from "@/content/home"

import { contactLinks } from "@/lib/contactLinks"
export default function Home() {
  const config = useSiteConfig()
  const hero = homeContent.hero
  return (
    <div className="animate-in fade-in duration-700">

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {hero.eyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
<>
  {hero.heading}{" "}
  <span className="text-primary italic">{hero.headingAccent}</span>
</>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
             {hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full gap-2 text-base px-8 h-14">
                <a href={contactLinks.whatsapp}>
                  <MessageCircle className="w-5 h-5" />
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full gap-2 text-base px-8 h-14 bg-white/50 backdrop-blur-sm">
                <Link href="/how-it-works">
                  {hero.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-none relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-6 transform scale-105" />
<img
  src="/akhir.jpeg"
  alt="Muhammad Akhir"
  className="aspect-[4/5] w-full rounded-3xl shadow-xl relative z-10 object-cover"
/>          </div>
        </div>
      </section>

{/* Real-world awareness concerns */}
<section className="bg-white border-y border-border/50">
  <div className="container mx-auto max-w-6xl px-4 py-20 md:py-24">

    <div className="max-w-3xl mb-14 md:mb-16">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-5">
        {config.content.home.sections.find((s) => s.id === "concerns")?.eyebrow ||
          "Protection, without the jargon"}
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-tight text-balance">
        {config.content.home.sections.find((s) => s.id === "concerns")?.heading ||
          "Most people don't know what they're actually covered for."}
      </h2>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
        {config.content.home.sections.find((s) => s.id === "concerns")?.body ||
          "Takaful shouldn't require a dictionary, a sales pitch, or blind trust. It should simply make sense."}
      </p>
    </div>

    <div className="grid md:grid-cols-3 border-t border-border">

      {homeContent.protection.principles.map((principle, index) => (
  <div
    key={principle.number}
    className={
      index === 0
        ? "pt-8 md:pr-10 md:border-r border-border"
        : index === 1
          ? "pt-8 md:px-10 md:border-r border-border"
          : "pt-8 md:pl-10"
    }
  >
    <span className="text-sm font-semibold tracking-[0.18em] text-primary">
      {principle.number}
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

{/* Four solution pathways */}
<section className="py-20 md:py-24 bg-[#f7f5ef]">
  <div className="container mx-auto max-w-6xl px-4">

    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
          {config.content.home.sections.find((s) => s.id === "solutions")?.eyebrow ||
            "Protection planning"}
        </p>

        <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">
          {(() => {
            const section = config.content.home.sections.find((s) => s.id === "solutions")
            const heading = section?.heading || "The right protection depends on what you're protecting."
            const parts = heading.split("what you're protecting.")
            return (
              <>
                {parts[0]}
                {parts.length > 1 && (
                  <span className="text-primary italic">what you're protecting.</span>
                )}
              </>
            )
          })()}
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl">
          {config.content.home.sections.find((s) => s.id === "solutions")?.body ||
            "Start with the part of your life you want to protect most."}
        </p>
      </div>

      <Button asChild variant="link" className="px-0 text-primary">
        <Link href="/solutions" className="gap-2">
          Explore all solutions
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

      {homeContent.solutions.cards.map((card, index) => (
  <Link
    key={card.number}
    href={card.link}
    className="group block bg-white border border-[#dedbd1] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div
      className={`h-32 ${
        index === 0
          ? "bg-[#dcebe4]"
          : index === 1
            ? "bg-[#e9eee8]"
            : index === 2
              ? "bg-[#e1ebe5]"
              : "bg-[#dfe9e3]"
      } relative overflow-hidden`}
    >
      <div
        className={`absolute ${
          index === 2
            ? "-left-12 -top-12"
            : index === 3
              ? "-right-10 -top-12"
              : index === 0
                ? "-right-8 -top-10"
                : "-right-10 -bottom-16"
        } w-40 h-40 rounded-full border-[18px] border-primary/10`}
      />

      <div className="absolute right-8 bottom-5 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        {index === 0 ? (
          <HeartPulse className="w-6 h-6 text-primary" />
        ) : index === 1 ? (
          <Users className="w-6 h-6 text-primary" />
        ) : index === 2 ? (
          <Shield className="w-6 h-6 text-primary" />
        ) : (
          <Target className="w-6 h-6 text-primary" />
        )}
      </div>

      <span className="absolute left-5 top-5 text-xs font-semibold tracking-widest text-primary/70">
        {card.number}
      </span>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-serif font-medium mb-3">
        {card.heading}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {card.description}
      </p>

      <div className="text-primary text-sm font-medium flex items-center gap-2">
        {card.title}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
))}

    </div>
  </div>
</section>
{/* Why work with Akhir */}
<section className="py-20 md:py-28 bg-white border-y border-border/50">
  <div className="container mx-auto max-w-6xl px-4">

    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-24 items-start">

      {/* Main positioning */}
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-5">
          {config.content.home.sections.find((s) => s.id === "why-akhir")?.eyebrow ||
            "Why Akhir"}
        </p>

        <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
          {(() => {
            const section = config.content.home.sections.find((s) => s.id === "why-akhir")
            const heading = section?.heading || "Takaful should feel like a conversation."
            const parts = heading.split("conversation.")
            return (
              <>
                {parts[0]}
                {parts.length > 1 && (
                  <span className="text-primary italic">conversation.</span>
                )}
              </>
            )
          })()}
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
          {config.content.home.sections.find((s) => s.id === "why-akhir")?.body ||
            "The traditional approach can feel like a transaction — a product, a price, a signature. Akhir takes a different approach."}
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
          Start with your situation. Ask the uncomfortable questions.
          Understand what you're protecting and why. Only then do we
          look at the options that make sense for you.
        </p>

        <Button asChild variant="link" className="px-0 text-primary">
          <Link href="/about" className="gap-2">
            Read Akhir's story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Principles */}
      <div className="space-y-0 border-t border-border">

        {homeContent.whyAkhir.principles.map((principle, index) => (
  <div
    key={principle.title}
    className="py-7 border-b border-border group"
  >
    <div className="flex gap-5">
      <span className="text-sm font-semibold text-primary pt-1">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <h3 className="text-xl font-serif font-medium mb-2">
          {principle.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {principle.description}
        </p>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  </div>
</section>


{/* The 6-step process */}
<section className="py-20 md:py-28 bg-[#f7f5ef]">
  <div className="container mx-auto max-w-6xl px-4">

    <div className="max-w-2xl mb-14">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-5">
        {config.content.home.sections.find((s) => s.id === "process")?.eyebrow ||
          "How it works"}
      </p>

      <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-5">
        {(() => {
          const section = config.content.home.sections.find((s) => s.id === "process")
          const heading = section?.heading || "From your first question to ongoing support."
          const parts = heading.split("ongoing support.")
          return (
            <>
              {parts[0]}
              {parts.length > 1 && (
                <span className="text-primary italic">ongoing support.</span>
              )}
            </>
          )
        })()}
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed">
        {config.content.home.sections.find((s) => s.id === "process")?.body ||
          "No complicated process. No pressure to decide on the spot. Just a clear path from understanding your needs to putting the right protection in place."}
      </p>
    </div>

    {/* Desktop process */}
<div className="hidden md:block">
  <div className="relative">
    {/* Connecting line */}
    <div className="absolute top-5 left-5 right-5 h-px bg-border" />

    <div className="grid grid-cols-6 gap-5 relative">
      {homeContent.process.steps.map((step) => (
        <div key={step.number}>
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm mb-6 relative z-10">
            {step.number}
          </div>

          <h3 className="font-serif text-lg mb-2">
            {step.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Mobile process */}
<div className="md:hidden space-y-7">
  {homeContent.process.steps.map((step) => (
    <div key={step.number} className="flex gap-5">
      <div className="w-9 h-9 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
        {step.number}
      </div>

      <div>
        <h3 className="font-serif text-xl mb-2">
          {step.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>

</div>
</section>

{/* CTA */}
<section className="py-20 md:py-32 bg-secondary/50">
  <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
    <h2 className="text-3xl md:text-5xl font-serif text-balance">
      {homeContent.cta.heading}
    </h2>

    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      {homeContent.cta.body}
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
      <Button
        asChild
        size="lg"
        className="rounded-full gap-2 px-8 h-14 text-base shadow-lg hover:shadow-xl transition-shadow"
      >
        <a href={contactLinks.calendly}>
          {homeContent.cta.primaryCta}
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full gap-2 px-8 h-14 text-base bg-white"
      >
        <a href={contactLinks.whatsapp}>
          <MessageCircle className="w-5 h-5" />
          {homeContent.cta.secondaryCta}
        </a>
      </Button>
    </div>
  </div>
</section>
</div>
)
}