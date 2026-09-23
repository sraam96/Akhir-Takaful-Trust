import { Shield, Users, HeartPulse, Target, ArrowRight, MessageCircle } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ImagePlaceholder"
import { MissingLaunchInputs } from "@/components/MissingLaunchInputs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <MissingLaunchInputs />

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Independent Takaful Advisory
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
              Understand your protection. <span className="text-primary italic">Without the pressure.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
              I help Malaysians navigate Takaful choices with clarity and honesty. No aggressive sales—just a calm conversation about what you actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full gap-2 text-base px-8 h-14">
                <a href="#whatsapp-placeholder">
                  <MessageCircle className="w-5 h-5" />
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full gap-2 text-base px-8 h-14 bg-white/50 backdrop-blur-sm">
                <Link href="/how-it-works">
                  See how it works
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-none relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-6 transform scale-105" />
            <ImagePlaceholder className="aspect-[4/5] w-full rounded-3xl shadow-xl relative z-10 bg-white" label="Akhir Portrait" />
          </div>
        </div>
      </section>

      {/* Real-world awareness concerns */}
      <section className="bg-white py-20 md:py-32 border-y border-border/50">
        <div className="container mx-auto max-w-4xl text-center space-y-12 px-4">
          <h2 className="text-3xl md:text-4xl font-serif">Protection shouldn't be confusing.</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground font-serif text-xl">1</div>
              <h3 className="font-semibold text-lg">Too much jargon</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Policies are filled with terms that are hard to understand. I translate them into plain English and Bahasa.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground font-serif text-xl">2</div>
              <h3 className="font-semibold text-lg">Hidden terms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We uncover what's actually covered and what isn't, so there are no surprises during a claim.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground font-serif text-xl">3</div>
              <h3 className="font-semibold text-lg">Sales pressure</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Take your time. A rushed decision is rarely the right one for long-term family protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four solution pathways */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Clear pathways to peace of mind</h2>
              <p className="text-muted-foreground text-lg">Structured advisory for the four pillars of financial protection.</p>
            </div>
            <Button asChild variant="link" className="px-0">
              <Link href="/solutions" className="gap-2">
                View all solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/solutions/medical-card" className="group block bg-white border border-border p-6 rounded-2xl transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Medical Card</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">Private healthcare access without devastating your savings. Understand limits and co-takaful.</p>
              <div className="text-primary text-sm font-medium flex items-center gap-2">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/solutions/hibah-family-protection" className="group block bg-white border border-border p-6 rounded-2xl transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Hibah Protection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">Ensure your family inherits wealth, not debts. Fast-track financial support bypassing Faraid complexities.</p>
              <div className="text-primary text-sm font-medium flex items-center gap-2">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/solutions/critical-illness" className="group block bg-white border border-border p-6 rounded-2xl transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Critical Illness</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">Income replacement during recovery. Because a medical card pays the hospital, but this pays your bills.</p>
              <div className="text-primary text-sm font-medium flex items-center gap-2">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/solutions/protection-planning" className="group block bg-white border border-border p-6 rounded-2xl transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Protection Review</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">Already have coverage? Let's review if it still matches your current life stage and commitments.</p>
              <div className="text-primary text-sm font-medium flex items-center gap-2">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Akhir & Six step process */}
      <section className="bg-foreground text-background py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif text-white">Why work with me?</h2>
              <p className="text-white/70 text-lg leading-relaxed text-balance">
                The traditional approach to Takaful often feels like a transaction. My approach is a partnership. I want to build a long-term relationship where you feel completely comfortable asking questions.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-primary mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-lg">Honest assessment</h4>
                    <p className="text-white/60 text-sm mt-1">If your current plan is good, I will tell you to keep it.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-primary mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-lg">Education first</h4>
                    <p className="text-white/60 text-sm mt-1">We don't talk products until we understand principles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-primary mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-lg">Long-term support</h4>
                    <p className="text-white/60 text-sm mt-1">I am your direct line when it's time to make a claim.</p>
                  </div>
                </div>
              </div>
              <Button asChild variant="outline" className="text-foreground border-white/20 hover:bg-white/10 hover:text-white bg-transparent">
                <Link href="/about">Read my full story</Link>
              </Button>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10">
              <h3 className="text-2xl font-serif text-white mb-8">The 6-Step Process</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-white/10 before:to-transparent">
                {[
                  "Initial Conversation",
                  "Needs Assessment",
                  "Options Presentation",
                  "Your Decision (No pressure)",
                  "Application & Approval",
                  "Ongoing Support"
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-foreground bg-primary text-primary-foreground font-bold text-xs shrink-0 md:order-1 md:group-odd:-ml-4 md:group-even:-mr-4 z-10 ml-0 mr-4">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-white/5 border border-white/10 p-4 rounded-xl text-sm font-medium text-white/90">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="py-20 md:py-32 border-b border-border/50">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Client Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-border shadow-sm text-left flex flex-col justify-between">
                <p className="text-muted-foreground italic mb-6">"[Placeholder for genuine client review. Awaiting verified testimonials detailing clear communication, absence of pressure, and support during claims.]"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-serif text-sm">C</div>
                  <div>
                    <p className="font-medium text-sm">Client Name</p>
                    <p className="text-xs text-muted-foreground">Kuala Lumpur</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-medium">Do I have to pay for a consultation?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                No, initial consultations and reviews are complimentary. My goal is to help you understand your situation first. Any fees or commissions are built into the Takaful products themselves, and only apply if you decide to proceed with an application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-medium">I already have company insurance, do I need this?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Company insurance is excellent, but it is tied to your employment. If you change jobs, retire, or are unable to work due to illness, you lose that coverage precisely when you might need it most. We can look at how to supplement your company plan affordably.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-medium">Are there any guaranteed returns?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Takaful is primarily about protection. While some plans have cash value components or investment links, there are no guaranteed returns. It's important to view Takaful as a safety net for risks you cannot afford to take, rather than a primary wealth-building tool.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-8 text-center">
            <Button asChild variant="link" className="text-primary">
              <Link href="/resources">Read all FAQs <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-balance">Ready for a clearer picture of your protection?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a short, casual chat. No preparation needed, and absolutely no expectation to buy anything.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full gap-2 px-8 h-14 text-base shadow-lg hover:shadow-xl transition-shadow">
              <a href="#calendly-placeholder">
                Schedule a Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full gap-2 px-8 h-14 text-base bg-white">
              <a href="#whatsapp-placeholder">
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
