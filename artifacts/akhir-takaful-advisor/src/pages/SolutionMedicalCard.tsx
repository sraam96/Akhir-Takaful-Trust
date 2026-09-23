import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function SolutionMedicalCard() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Solutions
        </Link>
        
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Medical Card
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-balance leading-tight">
            Private healthcare access, when time is critical.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A medical card ensures you receive prompt treatment at private facilities without depleting your savings. It's the foundation of financial protection.
          </p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium max-w-none prose-a:text-primary mb-16">
          <h3>The Problem It Solves</h3>
          <p>
            Malaysia has an excellent public healthcare system, but for elective surgeries and specialist treatments, waiting lists can be long. When you or a loved one is in pain, waiting is the hardest part. A medical card transfers the financial risk of private hospital bills to the Takaful operator.
          </p>

          <h3>Who is this for?</h3>
          <ul>
            <li>Individuals without comprehensive employer medical coverage.</li>
            <li>Parents wanting immediate private care access for their children.</li>
            <li>Professionals looking to lock in their insurability while healthy.</li>
          </ul>

          <h3>What to understand before applying</h3>
          <p>
            Not all medical cards are the same. We need to look closely at:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 not-prose my-8">
            <div className="bg-secondary/50 p-6 rounded-xl space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Annual Limits
              </h4>
              <p className="text-sm text-muted-foreground">The maximum claimable amount per year. With medical inflation, high limits are crucial.</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-xl space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Deductibles
              </h4>
              <p className="text-sm text-muted-foreground">An initial amount you agree to pay before the card takes over, which can lower your contributions.</p>
            </div>
          </div>

          <h3>Common Misconceptions</h3>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl not-prose space-y-4">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-900">"My company covers me, so I don't need one."</h4>
                <p className="text-sm text-amber-800 mt-1">
                  Company coverage ends when you leave, retire, or are terminated (even due to the illness itself). Buying a personal card later when you are older or already ill is expensive or impossible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-foreground text-background p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif">Let's review your healthcare needs</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            We'll look at your current coverage and budget to find a sensible medical card plan without over-insuring.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-4">
            <a href="#calendly-placeholder">Discuss Medical Cards</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
