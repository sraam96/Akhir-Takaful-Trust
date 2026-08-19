import { ArrowLeft, CheckCircle2, Scale } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"

export default function SolutionHibah() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Solutions
        </Link>
        
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Hibah & Family Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-balance leading-tight">
            Protect your family's future, instantly.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hibah is a gift of love. It ensures your dependents receive financial support immediately, bypassing the complexities of estate freezing.
          </p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium max-w-none prose-a:text-primary mb-16">
          <h3>The Malaysian Context: Why Hibah?</h3>
          <p>
            When a Muslim passes away in Malaysia, all bank accounts, properties, and assets are frozen pending Faraid distribution. This legal process can take months or even years. During this time, your spouse and children still have to pay the mortgage, buy groceries, and fund education. 
          </p>
          <p>
            A Takaful policy with a <strong>Hibah (Gift)</strong> nomination pays out directly to the nominee. It is absolute, cannot be contested by other heirs under Faraid, and provides immediate liquidity.
          </p>

          <h3>Who needs this most?</h3>
          <ul>
            <li><strong>Breadwinners:</strong> If your family relies on your income to survive.</li>
            <li><strong>Business Owners:</strong> To ensure your family isn't burdened by business debts.</li>
            <li><strong>Parents of Young Children:</strong> To secure their education fund.</li>
            <li><strong>Those with Joint Home Loans:</strong> To clear the mortgage so your family keeps the house.</li>
          </ul>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl not-prose my-10 space-y-4">
            <h4 className="font-serif text-xl flex items-center gap-3">
              <Scale className="w-6 h-6 text-primary" /> Faraid vs. Hibah
            </h4>
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="font-medium mb-1">Estate (Faraid)</p>
                <p className="text-sm text-muted-foreground">Frozen upon death. Subject to debts first. Distributed according to fixed Islamic inheritance shares.</p>
              </div>
              <div>
                <p className="font-medium mb-1">Takaful Hibah</p>
                <p className="text-sm text-muted-foreground">Liquid cash. Paid directly to the nominee within weeks. Not subject to deceased's debts or Faraid claims.</p>
              </div>
            </div>
          </div>

          <h3>How much Hibah do you need?</h3>
          <p>
            A common rule of thumb is calculating 5 to 10 years of your annual expenses, plus all outstanding debts (especially home financing). However, the real number depends on your unique family setup. We don't guess; we calculate.
          </p>

          <p className="text-sm text-muted-foreground italic border-l-2 border-border pl-4">
            Note: Hibah in Takaful is a contractual nomination. This page provides general educational information and does not constitute formal legal or Shariah advice regarding estate planning.
          </p>
        </div>

        <div className="bg-foreground text-background p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif">Calculate your family's safety net</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Book a session to map out your commitments and calculate the exact Hibah coverage your family would need to maintain their lifestyle.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-4">
            <a href="#calendly-placeholder">Discuss Income Replacement</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
