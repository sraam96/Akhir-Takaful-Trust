import { ArrowLeft, Brain, BriefcaseMedical } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function SolutionCriticalIllness() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Solutions
        </Link>
        
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Critical Illness
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-balance leading-tight">
            Surviving is expensive. Protect your income while you recover.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The biggest financial risk of a severe illness isn't just the hospital bill—it's the sudden loss of your ability to earn a living.
          </p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium max-w-none prose-a:text-primary mb-16">
          <h3>Medical Card vs. Critical Illness Plan</h3>
          <p>
            Many people confuse these two. Let's make it clear:
          </p>
          <ul>
            <li>A <strong>Medical Card</strong> pays the hospital. It covers your surgery, room, and medication.</li>
            <li>A <strong>Critical Illness Plan</strong> pays YOU. It provides a lump sum of cash directly to your bank account upon diagnosis.</li>
          </ul>
          
          <p>
            If you suffer a stroke or discover cancer, you might need 6 to 12 months off work. Your medical card handles the treatment, but how will you pay your mortgage, car loan, and kids' school fees while you aren't earning? That's what Critical Illness coverage is for.
          </p>

          <div className="bg-secondary/50 p-8 rounded-2xl not-prose my-10">
            <h4 className="font-serif text-xl mb-4">What does the lump sum cover?</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <BriefcaseMedical className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">Living expenses during unpaid leave</span>
              </div>
              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <Brain className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">Alternative & experimental treatments</span>
              </div>
              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <BriefcaseMedical className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">Home modifications (e.g., ramps, special beds)</span>
              </div>
              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <Brain className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">Paying off immediate debts to reduce stress</span>
              </div>
            </div>
          </div>

          <h3>Early vs. Advanced Stage Coverage</h3>
          <p>
            Traditional plans only pay out when a disease reaches an advanced or critical stage. Modern plans offer "Early Stage" coverage, providing a payout upon early detection (like early-stage carcinoma), allowing you to seek aggressive treatment immediately without financial worry.
          </p>
        </div>

        <div className="bg-foreground text-background p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif">How much coverage is enough?</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            We recommend aiming for 3 to 5 years of your annual income. Let's run the numbers and see what makes sense for your budget.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-4">
            <a href="#calendly-placeholder">Plan Your Recovery Fund</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
