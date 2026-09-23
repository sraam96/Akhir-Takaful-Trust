import { ArrowLeft, Target, FileSearch, LineChart } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function SolutionProtectionPlanning() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Solutions
        </Link>
        
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Protection Planning Review
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-balance leading-tight">
            Are you paying for the right coverage?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Life changes. You get married, have children, buy a house, or change jobs. If your Takaful policies haven't been reviewed in years, you might be under-protected or overpaying.
          </p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium max-w-none prose-a:text-primary mb-16">
          <h3>The "Set and Forget" Trap</h3>
          <p>
            Many clients I meet bought a policy 5 or 10 years ago and have never looked at it since. They often don't know exactly what they are covered for, or worse, they believe they are fully protected when they only have a basic policy.
          </p>
          
          <p>
            A Protection Review is a systematic audit of your current portfolio across all providers.
          </p>

          <div className="my-10 space-y-6 not-prose">
            <div className="flex gap-4 p-6 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <FileSearch className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-medium mb-2">1. The Audit</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">We gather all your existing policies from any company. I help you summarize exactly what you have: total death benefit, total critical illness cover, and medical card limits.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-medium mb-2">2. The Gap Analysis</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">We calculate what you actually need today based on your current income, debts, and dependents. We compare this to your current coverage to find any dangerous gaps.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <LineChart className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-medium mb-2">3. The Optimization</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">If there are gaps, we look at the most cost-effective way to fill them. If you are overpaying for outdated plans, we look at restructuring to save you money without losing protection.</p>
              </div>
            </div>
          </div>

          <h3>When should you request a review?</h3>
          <ul>
            <li>You recently got married or had a child.</li>
            <li>You took on a large new debt (like a mortgage).</li>
            <li>Your income has significantly increased.</li>
            <li>You haven't looked at your policies in more than 3 years.</li>
          </ul>
        </div>

        <div className="bg-foreground text-background p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif">Request a complimentary portfolio review</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Bring your policy documents. I'll translate the jargon into a clear summary, and offer an honest opinion on your current standing.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-4">
            <a href="#calendly-placeholder">Book a Review Session</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
