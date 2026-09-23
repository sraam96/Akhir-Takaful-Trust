import { HeartPulse, Users, Shield, Target, ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function Solutions() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-balance">Structured Protection Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Understanding what coverage you need shouldn't require a finance degree. I break down Takaful into four clear pillars.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20 space-y-12">
        <SolutionCard
          href="/solutions/medical-card"
          icon={<HeartPulse className="w-8 h-8" />}
          title="Medical Card"
          description="Private healthcare access to ensure you get the right treatment quickly, without draining your life savings."
          points={[
            "Hospitalization & surgical coverage",
            "Understanding limits and co-takaful",
            "Outpatient cancer and kidney treatments"
          ]}
        />

        <SolutionCard
          href="/solutions/hibah-family-protection"
          icon={<Users className="w-8 h-8" />}
          title="Hibah & Family Protection"
          description="A direct gift of cash to your loved ones if you pass away. It bypasses the lengthy Faraid and estate distribution process."
          points={[
            "Immediate liquidity for dependents",
            "Clearing outstanding debts",
            "Replacing lost future income"
          ]}
        />

        <SolutionCard
          href="/solutions/critical-illness"
          icon={<Shield className="w-8 h-8" />}
          title="Critical Illness"
          description="A lump-sum payout if you are diagnosed with a major illness. A medical card pays the hospital; this pays you."
          points={[
            "Income replacement during recovery",
            "Alternative treatment funding",
            "Lifestyle adjustment costs"
          ]}
        />

        <SolutionCard
          href="/solutions/protection-planning"
          icon={<Target className="w-8 h-8" />}
          title="Protection Planning Review"
          description="A comprehensive audit of your existing policies to check for gaps, overlaps, or outdated coverage."
          points={[
            "Consolidating fragmented policies",
            "Adjusting for major life events (marriage, kids)",
            "Cost-efficiency check"
          ]}
        />
      </div>

      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif">Not sure where to start?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            That's completely normal. Let's have a 15-minute chat to understand your current stage in life and identify your most pressing priority.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full mt-4">
            <a href="#calendly-placeholder">Book a Free Consultation</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

function SolutionCard({ href, icon, title, description, points }: { href: string, icon: React.ReactNode, title: string, description: string, points: string[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white border border-border p-8 rounded-3xl transition-shadow hover:shadow-lg">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-serif font-medium">{title}</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
        <ul className="space-y-2 pt-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-48 flex items-center md:justify-end mt-4 md:mt-0 border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 md:pl-8">
        <Button asChild variant="ghost" className="group w-full md:w-auto justify-between md:justify-center text-primary hover:text-primary">
          <Link href={href}>
            Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
